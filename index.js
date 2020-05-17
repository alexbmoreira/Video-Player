const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Event listeners
video.addEventListener("click", toggleVideoStatus);
play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

video.addEventListener("timeupdate", updateProgress);
progress.addEventListener("change", setVideoProgress);

//Play and Pause
function toggleVideoStatus()
{
    if (video.paused)
    {
        video.play();
    }
    else
    {
        video.pause();
    }
    updateIcon(video.paused);
}

function updateIcon(paused)
{
    if (paused)
    {
        play.children[0].classList.replace("fa-pause", "fa-play");
    }
    else
    {
        play.children[0].classList.replace("fa-play", "fa-pause");
    }
}

function stopVideo()
{

}

function updateProgress()
{
    return true;
}

function setVideoProgress()
{
    return true;
}
