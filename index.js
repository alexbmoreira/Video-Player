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
    video.currentTime = 0;
    video.pause();
    updateIcon(true);
}

function updateProgress()
{
    progress.value = (video.currentTime / video.duration) * 100;

    timestamp.innerText = convertTime(video.currentTime);
}

function convertTime(time)
{
    var min = 0;
    var sec = 0;

    min = Math.floor(time / 60);
    if (min < 10)
    {
        min = "0" + String(min);
    }

    sec = Math.floor(time % 60);
    if (sec < 10)
    {
        sec = "0" + String(sec);
    }

    return min + ":" + sec;
}

function setVideoProgress()
{
    video.currentTime = +progress.value / 100 * video.duration;
}
