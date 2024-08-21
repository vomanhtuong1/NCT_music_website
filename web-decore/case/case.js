export const htmlMusic = document.querySelector('.playMusicBar')

export var myMusicBar = [
    `
    <link rel="stylesheet" href="/web-content/musicUI/playMusicenu.css">
    <div class="div-container-all">
        <div class="div-container">
            <div class="container-item-1">
                <img src="/web-decore/list-bai-hat/bai-hat-10.jpg" alt="">
            </div>
            <div class="container-item-2">
                <h3>Ten bai hat</h3>
                <h4>Ten ca si</h4>
            </div>
            <div class="container-item-3">
                <i class="fa-regular fa-heart"></i>
                <i class="fa-solid fa-ellipsis"></i>
            </div>
        </div>
        <div class="div-container-mid">
            <div class="container-item-mid">
                <div class="container-item-mid-icon">
                    <i class="fa-solid fa-shuffle iconrandom"></i>
                    <i id="iconprev" class="fa-solid fa-backward-step"></i>
                    <div class="player_btn">
                        <i class="playM fa-regular fa-circle-play"></i>
                        <i class="pauseM fa-solid fa-circle-pause"></i>
                    </div>
                    <i id="iconnext" class="fa-solid fa-forward-step"></i>
                    <i class="fa-solid fa-repeat iconrepeat"></i>
                </div>
            </div>
            <input class="progress" type="range" value="0" step="1" min="0" max="100">
        </div>
        <div class="div-container-3">
            <div class="container-item-icon">
                <i class="fa-solid fa-microphone"></i>
                <i class="fa-regular fa-window-maximize"></i>
                <i class="fa-solid fa-volume-high"></i>
                <input id="id" class="id" type="range" value="5" step="1" min="0" max="100">
            </div>
        </div>
    </div>`
]


htmlMusic.innerHTML = myMusicBar.join('')
