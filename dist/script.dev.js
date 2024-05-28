"use strict";

/*function to toggle the navs*/
function toggle_nav() {
  var nav = document.getElementById('nav');
  var navBtn = document.getElementById('nav-btn');

  if (nav.style.display === 'flex') {
    nav.style.display = 'none'; // Hide the navigation

    navBtn.innerHTML = '<i class="fa fa-bars"></i>'; // Change toggle button to bars icon
  } else {
    nav.style.display = 'flex'; // Display the navigation

    nav.style.visibility = 'visible'; // make nav visible that i hidden

    navBtn.innerHTML = '<i class="fa fa-times"></i>';
  }
}
/*..............TYPEWRITTER FUNCTION IN HOME...........*/


document.addEventListener("DOMContentLoaded", function () {
  var text = " A proffessional WEB ENGINEER"; // CHANGE THE TITLE HERE

  var index = 0;
  var animatedText = document.getElementById("animated-text");
  var delayBetweenLetters = 100; // Adjust the delay between letters here (in milliseconds)

  var displayDuration = 4000; // Duration to display the full text (in milliseconds)

  function animateText() {
    if (index < text.length) {
      animatedText.textContent += text[index];
      index++;
      setTimeout(animateText, delayBetweenLetters);
    } else {
      setTimeout(resetAnimation, displayDuration);
    }
  }

  function resetAnimation() {
    animatedText.textContent = "";
    index = 0;
    setTimeout(animateText, 0);
  }

  animateText();
});
/*---function to hide and display intoduction*/

function toggleIntro() {
  var intro = document.getElementById('intro');
  var intro_btn = document.getElementById('intro-btn');

  if (intro.style.display === 'none' || intro.style.display === '') {
    intro.style.display = 'block';
    intro_btn.innerHTML = '&times'; //CHANGING THE intor button text to time or x
  } else {
    intro.style.display = 'none';
    intro_btn.innerHTML = 'Read-intro';
  }
}
//# sourceMappingURL=script.dev.js.map
