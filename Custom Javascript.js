var topP = document.createElement("p");
//topP.style.textAlign = "center";
topP.innerHTML = '<hr><div class="custom-nav"><a rel="me" href="https://mastodon.social/@DavidBlue">Mastodon</a> ※ <a href="https://twitter.com/NeoYokel">Twitter</a> ※ <a href="https://discord.gg/4hdQcVd">Discord</a> ※ <a href="https://github.com/extratone/bilge">GitHub</a> ※ <a href="https://gist.github.com/extratone/140a11428b5dd1dda500b3928e0438b1">License</a></div>';
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

// src: https://hypothes.is/embed.js

window.hypothesisConfig = function () {
  return {
    "openSidebar": true, 
    "theme": "clean",
    branding: {
      appBackgroundColor: '#f7ff85',
      ctaBackgroundColor: 'rgba(3, 11, 16, 1)',
      ctaTextColor: '#00006b',
      selectionFontFamily: 'Georgia, serif'
    }
  };
};