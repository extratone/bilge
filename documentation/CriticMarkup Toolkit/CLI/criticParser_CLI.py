#!/usr/bin/env python

import codecs
import sys
import os
import re
import argparse
import subprocess

# Input is quoted UNIX type file path.

# Output is HTML formated text using ins, del, and aside tags

# File is written to the same directory as the source unless specified with the -o flag

# -m2     Uses the markdown2 module

# -o <file_path>    Writes file to specified path. Must include file name
# 
# -b Opens the output HTML file in the defualt browser

  

add_pattern = r'''(?s)\{\+\+(?P<value>.*?)\+\+[ \t]*(\[(?P<meta>.*?)\])?[ \t]*\}'''

del_pattern = r'''(?s)\{\-\-(?P<value>.*?)\-\-[ \t]*(\[(?P<meta>.*?)\])?[ \t]*\}'''

comm_pattern = r'''(?s)\{\>\>(?P<value>.*?)\<\<\}'''

gen_comm_pattern = r'''(?s)\{[ \t]*\[(?P<meta>.*?)\][ \t]*\}'''

subs_pattern = r'''(?s)\{\~\~(?P<original>(?:[^\~\>]|(?:\~(?!\>)))+)\~\>(?P<new>(?:[^\~\~]|(?:\~(?!\~\})))+)\~\~\}'''

mark_pattern = r'''(?s)\{\=\=(?P<value>.*?)\=\=\}\{\>\>(?P<comment>.*?)\<\<\}'''


# Considered for future standalone highlight without comment
# mark_pattern = r'''(?s)\{\{(?P<value>.*?)\}\}'''


def deletionProcess(group_object):
	replaceString = ''
	if group_object.group('value') == '\n\n':
		replaceString = "<del>&nbsp;</del>"
	else:
		replaceString = '<del>' + group_object.group('value').replace("\n\n", "&nbsp;") + '</del>'
	return replaceString



def subsProcess(group_object):
	delString = '<del>' + group_object.group('original') + '</del>'
	insString  = '<ins>' + group_object.group('new') + '</ins>'
	newString = delString + insString
	return newString


# Converts Addition markup to HTML
def additionProcess(group_object):
	replaceString = ''
	
	# Is there a new paragraph followed by new text
	if group_object.group('value').startswith('\n\n') and group_object.group('value') != "\n\n":
		replaceString = "\n\n<ins class='critic' break>&nbsp;</ins>\n\n"
		replaceString = replaceString + '<ins>' + group_object.group('value').replace("\n", " ")
		replaceString = replaceString +  '</ins>'
		
	
	# Is the addition just a single new paragraph
	elif group_object.group('value') == "\n\n":
		replaceString = "\n\n<ins class='critic break'>&nbsp;" + '</ins>\n\n'
	
	# Is it added text followed by a new paragraph?
	elif group_object.group('value').endswith('\n\n') and group_object.group('value') != "\n\n":
		replaceString = '<ins>' + group_object.group('value').replace("\n", " ") + '</ins>'
		replaceString = replaceString + "\n\n<ins class='critic break'>&nbsp;</ins>\n\n"
		
	else:
		replaceString = '<ins>' + group_object.group('value').replace("\n", " ") + '</ins>'
		

	return replaceString

def highlightProcess(group_object):
	replaceString = '<span class="critic comment">' + group_object.group('value').replace("\n", " ") + '</span>'
	return replaceString
	

def markProcess(group_object):
	replaceString = '<mark>' + group_object.group('value') + '</mark><span class="critic comment">' + group_object.group('comment').replace("\n", " ") + '</span>'
	return replaceString



a = '''

<style>
	#wrapper {
		padding-top: 30px !important;
	}

	#criticnav {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		box-shadow: 0 1px 1px 1px #777;
		margin: 0;
		padding: 0;
		background-color: white;
		font-size: 12px;
	}

	#criticnav ul {
		list-style-type: none;
		width: 90%;
		margin: 0 auto;
		padding: 0;
	}

	#criticnav ul li {
		display: block;
		width: 33%;
		text-align: center;
		padding: 10px 0 5px!important;
		margin: 0 !important;
		line-height: 1em;
		float: left;
		border-left: 1px solid #ccc;
		text-transform: uppercase;
	}

	#criticnav ul li:before {
		content: none !important;
	}

	#criticnav ul li#edited-button {
		border-right: 1px solid #ccc;
	}

	#criticnav ul li.active {
		background-image: -webkit-linear-gradient(top, white, #cccccc)
	}

	.original del {
		
			text-decoration: none;
	}	

	.original ins,
	.original span.popover,
	.original ins.break {
		display: none;
	}

	.edited ins {
		
			text-decoration: none;
	}	

	.edited del,
	.edited span.popover,
	.edited ins.break {
		display: none;
	}

	.original mark,
	.edited mark {
		background-color: transparent;
	}

	.markup mark {
	    background-color: #fffd38;
	    text-decoration: none;
	}

	.markup del {
	    background-color: #f6a9a9;
	    text-decoration: none;
	}

	.markup ins {
	    background-color: #a9f6a9;
	    text-decoration: none;
	}

	.markup ins.break {
		display: block;
		line-height: 2px;
		padding: 0 !important;
		margin: 0 !important;
	}

	.markup ins.break span {
		line-height: 1.5em;
	}

	.markup .popover {
		background-color: #4444ff;
		color: #fff;
	}

	.markup .popover .critic.comment {
	    display: none;
	}

	.markup .popover:hover span.critic.comment {
	    display: block;
	    position: absolute;
	    width: 200px;
	    left: 30%;
	    font-size: 0.8em; 
	    color: #ccc;
	    background-color: #333;
	    z-index: 10;
	    padding: 0.5em 1em;
	    border-radius: 0.5em;
	}
}

</style>

<div id="criticnav">
	<ul>
		<li id="markup-button">Markup</li>
		<li id="original-button">Original</li>
		<li id="edited-button">Edited</li>
	</ul>

</div>

<script type="text/javascript">

	function critic() {

		$('#firstdiff').remove();
		$('#wrapper').addClass('markup');
		$('#markup-button').addClass('active');
		$('ins.break').unwrap();
		$('span.critic.comment').wrap('<span class="popover" />');
		$('span.critic.comment').before('&#8225;');

	}  

	function original() {
		$('#original-button').addClass('active');
		$('#edited-button').removeClass('active');
		$('#markup-button').removeClass('active');

		$('#wrapper').addClass('original');
		$('#wrapper').removeClass('edited');
		$('#wrapper').removeClass('markup');
	}

	function edited() {
		$('#original-button').removeClass('active');
		$('#edited-button').addClass('active');
		$('#markup-button').removeClass('active');

		$('#wrapper').removeClass('original');
		$('#wrapper').addClass('edited');
		$('#wrapper').removeClass('markup');
	} 

	function markup() {
		$('#original-button').removeClass('active');
		$('#edited-button').removeClass('active');
		$('#markup-button').addClass('active');

		$('#wrapper').removeClass('original');
		$('#wrapper').removeClass('edited');
		$('#wrapper').addClass('markup');
	}

	var o = document.getElementById("original-button");
	var e = document.getElementById("edited-button");
	var m = document.getElementById("markup-button");

	window.onload = critic;
	o.onclick = original;
	e.onclick = edited;
	m.onclick = markup;

</script>
'''

jq = '''<!DOCTYPE html>
<html>
<head><script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script>
<title>Critic Markup Output</title>'''

head = '''<!DOCTYPE html>
<html>
<head>
<title>Critic Markup Output</title>'''

bodybegin = '''</head><body><div id="wrapper">'''

headend = '''</div></body></html>'''


# Accept input from Marked.app

# h = sys.stdin.read()



parser = argparse.ArgumentParser(description='Convert Critic Markup to HTML')
parser.add_argument('source', help='The source file path, including file name')
parser.add_argument('-m2', help='Use the markdown2 python module. If left blank then markdown module is used', action='store_true')
parser.add_argument('-o','--output', help='Path to store the output file, including file name', metavar='out-file', type=argparse.FileType('wt'), required=False)
parser.add_argument('-css','--css', help='Path to a custom CSS file, including file name', metavar='in-file', type=argparse.FileType('rt'),required=False)
parser.add_argument('-b', '--browser', help='View the output file in the default browser after saving.', action='store_true')

args = parser.parse_args()
try:
	


	if args.source:
		inputFile = open(args.source, "r")
		inputText = inputFile.read()
		inputFile.close()
	else:
		log("No source file specified")
		print "No source file specified"
		sys.exit(1)
	
	h = inputText

	h = re.sub(del_pattern, deletionProcess, inputText, flags=re.DOTALL)

	h = re.sub(add_pattern, additionProcess, h, flags=re.DOTALL)

	h = re.sub(mark_pattern, markProcess, h, flags=re.DOTALL)

	# comment processing must come after highlights
	h = re.sub(comm_pattern, highlightProcess, h, flags=re.DOTALL)

	h = re.sub(subs_pattern, subsProcess, h, flags=re.DOTALL)

	if (args.m2):
		import markdown2
		h = markdown2.markdown(h, extras=['footnotes', 'fenced-code-blocks', 'cuddled-lists', 'code-friendly'])
		print '\nUsing the Markdown2 module for processing'
	else:
		import markdown
		h = markdown.markdown(h, extensions=['extra', 'codehilite', 'meta'])



	

	if (args.css):
		css_file = args.css
		cssText = css_file.read()
		css_file.close()
		h = head + cssText + bodybegin + h + headend
	else:
	 	h = jq + a + bodybegin + h + headend



	# If an output file is specified, write to it
	if args.output:
		filesource = args.output
		abs_path = os.path.abspath(filesource.name)
		output_file = abs_path
		print output_file
		#file = open(filename, 'wb')
		filesource.write(h)
		filesource.close()
		print "\nOutput file created:  ", abs_path
	else:
		path, filename = os.path.split(args.source)
		print "Converting >> " + args.source
		output_file = path+'/'+filename.split(os.extsep, 1)[0]+'_CriticParseOut.html'
		file = open(output_file, 'w')
		file.write(h.encode('utf-8'))
		file.close()
		print "\nOutput file created:  "+ output_file

	if (args.browser):
		try:
		    retcode = subprocess.call("open " + output_file, shell=True)
		    if retcode < 0:
		        print >>sys.stderr, "Child was terminated by signal", -retcode
		    else:
		        print >>sys.stderr, "Child returned", retcode
		except OSError, e:
		    print >>sys.stderr, "Execution failed:", e

except:
	print "Unexpected Error: ", sys.exc_info()[0]
	raise
