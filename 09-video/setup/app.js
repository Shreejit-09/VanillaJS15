// MDN
// The DOMContentLoaded event fires when the initial HTML document has been completely loaded and parsed, without waiting for stylesheets, images, and subframes to finish loading.
// The load event is fired when the whole page has loaded, including all dependent resources such as stylesheets and images.
const videoContainer = document.querySelector(".video-container");
const btn = document.querySelector(".switch-btn");

btn.addEventListener('click' , function(){
    if (!btn.classList.contains("slide")){
        btn.classList.add("slide");
        videoContainer.pause();
    }
    else{
        btn.classList.remove("slide");
        videoContainer.play();
    }
});
const preLoader= document.querySelector(".preloader");
window.addEventListener("load" , function(){
    preLoader.classList.add("hide-preloader");
});