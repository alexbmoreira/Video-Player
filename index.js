const video = document.getElementById("video");
const play = document.getElementById("play");
const stop = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

// Event listeners
video.addEventListener("click", toggleVideoStatus);
video.addEventListener("pause", updateIcon);
video.addEventListener("play", updateIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click", toggleVideoStatus);

stop.addEventListener("click", stopVideo);

progress.addEventListener("change", setVideoProgress);

//Play and Pause
function toggleVideoStatus()
{
    return true;
}

function updateIcon()
{
    return true;
}

function updateProgress()
{
    return true;
}

function setVideoProgress()
{
    return true;
}

function stopVideo()
{
    return true;
}