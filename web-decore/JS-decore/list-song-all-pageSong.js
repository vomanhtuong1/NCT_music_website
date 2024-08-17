import { myarray_bai_hat_all } from "./array-song-pageSong.js";

const listSong = document.querySelector('.list-song')


function printListsong() {
    const htmls = myarray_bai_hat_all.map((song, index) => {
        return `
        <li>
            <div class="box-content-music-list">
                <div class="info-song">
                    <a><img class="avatar-list-bai-hat" 
                            src="${song.nguon}"
                            title="${song.name}"></a>
                    <div class="name_sing_under">
                        <h3><a title="${song.name}">${song.name}</a></h3>
                        <h4><a title="${song.singer}">${song.singer}</a></h4>
                    </div>
            </div>
            <div class="list-mask">
                <span class="icon-tag-hd" title="High Quality (Chất Lượng Cao)">HQ</span>
            </div>
                <div class="list-icon">
                    <span>
                        <a><i class="myheart fa-solid fa-heart-circle-plus"></i></a>
                    </span>
                    <span>
                        <a key="${index}" class="iconplayer">
                            <i id="player" class="fa-solid fa-play"></i>
                            <i id="pauser" class="fa-solid fa-pause"></i>

                        </a>
                    </span>
                    <span>
                        <a><i class="copy-icon fa-regular fa-copy"></i></a>
                    </span>
                </div>
            </div>
        </li>
    `
    })
    listSong.innerHTML = htmls.join('')
}
printListsong()
const audioj = document.querySelector('#audio')
var isPlaying = false
const aespa = document.querySelectorAll('.iconplayer')
const start = document.querySelectorAll('#player')
const stop = document.querySelectorAll('#pause')
const maxp = myarray_bai_hat_all.map((songs, index) => {
    aespa[index].onclick = function () {
        audioj.src = songs.path
        if (isPlaying) {
            audioj.pause()

            isPlaying = false
        } else {
            audioj.play()
            isPlaying = true
        }
    }
}
)




