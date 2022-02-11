const video = document.querySelector('.videoPlay');
const btnRefresh = document.querySelector('.button-refresh')
const btnMute = document.querySelector('.button-mute')
const content = document.querySelector('.content')
const title = document.querySelector('.titler-wrapper')

function toggleRefresh() {
    const method = video.paused ? 'play' : 'pause';
    video[method]();
}
function updatebtnPlay() {
    const btnPlay = video.paused ? '<i class="bx bx-play"></i>' : '<i class="bx bx-pause"></i>';
    btnRefresh.innerHTML = btnPlay;
}
function toggleMute() {
    if (video.muted) {
        video.muted = false
        btnMute.innerHTML = '<i class="bx bx-volume-full"></i>'

    } else {
        video.muted = true
        btnMute.innerHTML = '<i class="bx bx-volume-mute"></i>'

    }
}

video.addEventListener('play', updatebtnPlay)
video.addEventListener('pause', updatebtnPlay)
btnRefresh.addEventListener('click', toggleRefresh)
btnMute.addEventListener('click', toggleMute)

const icon = document.querySelector('.icon');
const search = document.querySelector('.search');
icon.onclick = function () {
    search.classList.toggle('active')
}

$(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
        $('.navmenu').addClass('doinav');
    }
    else {
        $('.navmenu').removeClass('doinav');
    }
});