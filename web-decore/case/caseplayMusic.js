import { myarray_bai_hat_all } from "../JS-decore/array-song-pageSong.js";
import { htmlMusic } from "./case.js";
import { printListsong } from "../JS-decore/list-song-all-pageSong.js";

const $ = document.querySelector.bind(document)
const playMenuMusic = $('.playMusicBar')
const playMusicBars_img = $('.container-item-1 img')
const audio = $('#audio')
const playMusicBars_h4 = $('.container-item-2 h4')
const playMusicBars_h3 = $('.container-item-2 h3')
const playbtn = $('.player_btn')
const pausebtn = $('.pauseM')
const progess = $('.progress')
const iconprev = $('#iconprev')
const iconnext = $('#iconnext')
const iconrandom = $('.iconrandom')
const iconrepeat = $('.iconrepeat')
const volume = $('#id')
audio.volume = 5 / 100
const divplaymusica = $('.div-container-all')
const selec = '.list-song li'
const select = '.list-song-right li'
const dowLoadBtn = $('.dowload')
const isNoneed = $('.playMusicBar')
console.log(dowLoadBtn)



const divPlay = $('.container-item-mid-icon')


export const app = {
    isNone: true,
    isRepeat: true,
    isRandom: false,
    isPlaying: false,
    myarray_bai_hat_alls: myarray_bai_hat_all,
    currentIndex: 0,
    define: function () {
        Object.defineProperty(this, 'currentSong', {
            get: function () {
                return this.myarray_bai_hat_alls[this.currentIndex]
            }
        })
    },

    dowLoad: function () {
        dowLoadBtn.addEventListener('click', () => {
            const link = document.createElement('a');
            const namedow = this.currentSong.name
            link.href = this.currentSong.path // Thay thế bằng đường dẫn đến file nhạc của bạn
            link.download = namedow; // Tên file khi tải về
            link.click();
        });
    },

    do: function () {
        document.addEventListener('DOMContentLoaded', () => {

            const listItems = document.querySelectorAll(selec);
            const iconxx = $('.iconx')
            // Ví dụ: Thêm sự kiện click cho từng thẻ li
            listItems.forEach((item, index) => {
                item.addEventListener('click', () => {
                    if (this.isNone) {
                        isNoneed.classList.add('playMusicBar-active')
                    }

                    this.currentIndex = index
                    this.loadcurrentSong()
                    audio.play()
                    for (var i = 0; i < listItems.length; i++) {
                        if (i !== index) {
                            listItems[i].classList.remove('playingMusic')
                        } else {
                            listItems[index].classList.add('playingMusic')
                        }
                    }
                    iconxx.onclick = function () {
                        isNoneed.classList.remove('playMusicBar-active')
                        this.isNone = true
                    }
                });
            })
        })
    },

    handelEvent: function () {
        const _this = this

        //xử lý khi click play
        playbtn.onclick = function () {
            if (_this.isPlaying) {
                audio.pause()
            } else {
                audio.play()
            }
        }
        //khi được play
        audio.onplay = function () {
            _this.isPlaying = true
            divPlay.classList.add('playing')
        }
        //khi được pause
        audio.onpause = function () {
            _this.isPlaying = false
            divPlay.classList.remove('playing')
        }
        //xử lý tiến đổ bài hát
        audio.ontimeupdate = function () {
            const progessPercent = Math.floor(audio.currentTime / audio.duration * 100)
            progess.value = progessPercent
        }

        //xử lý khi tăng giảm âm lượng
        volume.onchange = function (e) {
            audio.volume = e.target.value / 100
        }
        //xử lý khi tua time
        progess.onchange = function (e) {
            const seekTime = audio.duration * e.target.value / 100
            audio.currentTime = seekTime
        }
        //xử lý khi next
        iconnext.onclick = function () {
            if (_this.isRandom) {
                _this.ramdom()
            } else {
                _this.nextSong()
            }
            audio.play()
        }
        //xử lý khi prev
        iconprev.onclick = function () {
            if (_this.isRandom) {
                _this.ramdom()
            } else {
                _this.prevSong()
            }
            audio.play()
        }
        //Xử lý khi random
        iconrandom.onclick = function () {
            _this.isRandom = !_this.isRandom
            iconrandom.classList.toggle('active', _this.isRandom)
        }
        //xuử lý khi on repeat
        iconrepeat.onclick = function () {
            _this.isRepeat = !_this.isRepeat
            iconrepeat.classList.toggle('active', _this.isRepeat)
        }

        //xử lý khi audio end -> next
        audio.onended = function () {
            if (_this.isRepeat) {
                audio.play()
            } else {
                iconnext.click()
            }
        }
    },

    ramdom: function () {
        var newsong
        do {
            newsong = Math.floor(Math.random() * this.myarray_bai_hat_alls.length)
        }
        while (newsong === this.currentIndex)
        this.currentIndex = newsong
        this.loadcurrentSong()
        printListsong()
    },

    repeat: function () {

    },

    nextSong: function () {
        this.currentIndex++
        if (this.currentIndex >= this.myarray_bai_hat_alls.length) {
            this.currentIndex = 0
        }
        this.loadcurrentSong()
        printListsong()
    },

    prevSong: function () {
        this.currentIndex--
        if (this.currentIndex < 0) {
            this.currentIndex = this.myarray_bai_hat_alls.length - 1
        }
        this.loadcurrentSong()
        printListsong()

    },

    activeSong: function () {

    },

    loadcurrentSong: function () {
        playMusicBars_h4.textContent = this.currentSong.singer
        playMusicBars_h3.textContent = this.currentSong.name
        playMusicBars_img.src = this.currentSong.nguon
        audio.src = this.currentSong.path
    },


    start: function () {
        //định nghĩa các thuộc tính cho object
        this.define()
        //cập nhật thông tin bài hát đầu tiên
        this.loadcurrentSong()
        //xử lý sự kiện
        this.handelEvent()
        this.do()
        this.dowLoad()

    }
}

app.start()

