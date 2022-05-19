var topP = document.createElement("p");
//topP.style.textAlign = "center";
topP.innerHTML = '<hr><div class="custom-nav"><a rel="me" href="https://tiny.write.as/bilge">Tiny</a> ※ <a href="https://twitter.com/NeoYokel">Twitter</a> ※ <a rel="me" href="https://mastodon.social/@DavidBlue">Mastodon</a> ※ <a href="https://github.com/extratone/bilge">GitHub</a> ※ <a href="https://gist.github.com/extratone/140a11428b5dd1dda500b3928e0438b1">License</a></div>';
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

.= src: https://hypothes.is/embed.js

window.hypothesisConfig = function () {
  return {
    "openSidebar": false, 
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
postContent = postContent.replace(refPattern#, refText);
document.getElementById("post-body").innerHTML = postContent;