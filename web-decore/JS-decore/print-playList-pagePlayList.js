import { myarray_playList } from "./array-playlist-pagePlaylist.js";

const playlist_print = document.querySelector('.list-album-content-ul-4')

function print_playList() {
    const htmls_playList = myarray_playList.map((playList, index) => {
        return `
           <li>
                <div class="box-left-album">
                    <a class="box-absolute">
                        <span>
                            <img class="avatar" src="${playList.src}" title="${playList.name}">
                        </span>
                        <div class="bg-action-info">
                            <span>
                                <i class="myicon fa-regular fa-circle-play fa-2x"></i>
                            </span>
                        </div>
                    </a>
                </div>
                <h4 class="list-album-content-ul-h4" title="${playList.name}">
                    ${playList.name}
                </h4>
                <h4 class="list-album-content-ul-h4_1" title="${playList.singer}">
                    ${playList.singer}
                </h4>
            </li> 
        `
    })
    playlist_print.innerHTML = htmls_playList.join('')
}
print_playList();