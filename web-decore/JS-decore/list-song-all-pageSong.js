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
                        <a><i class="fa-solid fa-play"></i></a>
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