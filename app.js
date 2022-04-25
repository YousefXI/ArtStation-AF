
window.onscroll = function() {scrollFunction()};

function scrollFunction(){
  if (document.body.scrollTop > 1080 || document.documentElement.scrollTop > 1080) {
    document.getElementsByClassName("about_container").style.opacity = 1
  }
}