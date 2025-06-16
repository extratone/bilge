let script = document.createElement("script");
script.type = "text/javascript";
script.defer = true;
script.src = "https://tinylytics.app/embed/es7bhjhkDCy3YXWaMChz.js";
document.body.appendChild(script);

// "This code creates a new <p> element with the div "custom-nav" and it's content. The following code looks for a element with the wrapper id and adds the new <p> element. If the element with the wrapper id is not present, then the <p> element is added after the post-body element. There is then code which sets a hypothesis config which sets the sidebar to stay closed and sets custom colors. The last part of the code looks into the post-body element, finds any footnote reference and then changes them into a clickable link."

//topP.style.textAlign = "center";

var topP = document.createElement("p");
topP.innerHTML = `<hr><div class="custom-nav"><a rel="me" href="https://_tiny.write.as/bilge/${location.pathname}">Tiny</a> ※ <a href="https://davidblue.wtf/sms">SMS</a> ※ <a rel="me" href="https://mastodon.social/@DavidBlue">Mastodon</a> ※ <a href="https://github.com/extratone/bilge">GitHub</a> ※ <a href="https://write.as/bilge/archive">Archive</a></div>`;
var cont = document.getElementById("wrapper");
if (cont !== null) {
	// Add to blog index and tag pages
	cont.appendChild(topP);
} else {
	// Add to individual blog post page
	cont = document.getElementById("post-body");
	cont.insertAdjacentHTML("afterend", topP.outerHTML);
}

// src: https://platform.twitter.com/widgets.js

src: https://hypothes.is/embed.js

window.hypothesisConfig = function () {
  return {
    "openSidebar": true, 
    "theme": "clean",
    branding: {
      appBackgroundColor: '#e6f7ff',
      ctaBackgroundColor: '#da2573',
      ctaTextColor: '#00006b',
      selectionFontFamily: 'Georgia, serif'
    }
  };
};

// Footnote hyperlinks in the body.
var notePattern = /\[\^(\d+)\]/g;
var noteText = "<a name=\"fn$1\"></a><sup><a class=\"footnote\" href=\"#fnref$1\">$1</a></sup>";

// Footnote references at the bottom.
var refPattern = /\[(\d+)\](.*)/g;
var refText = "<a name=\"fnref$1\"></a><sup><a class=\"footnote-ref\" href=\"#fn$1\">$1</a></sup><span class=\"footnote-ref-text\">$2</span>";

var postContent = document.getElementById("post-body").innerHTML;
postContent = postContent.replace(notePattern, noteText);
postContent = postContent.replace(refPattern, refText);
document.getElementById("post-body").innerHTML = postContent;