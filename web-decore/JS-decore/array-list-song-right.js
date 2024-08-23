const myarray_list_song_right = [
    {
        scr: '/web-decore/list-song-right/list-song-right-1.jpg',
        name: 'Ngày Đẹp Trời Để Nói Chia Tay',
        singer: 'Lou Hoàng'
    },
    {
        scr: null,
        name: 'CATCH ME IF YOU CAN',
        singer: 'ANH TRAI "SAY HI" Quang Hùng MasterD, Negav, Công Dương, Nicky(Monstar)'
    },
    {
        scr: null,
        name: 'Anh Thôi Nhân Nhượng',
        singer: 'Kiều Chi'
    },
    {
        scr: null,
        name: 'Cẩm Tú Cầu',
        singer: 'KayO, Huỳnh Văn'
    },
    {
        scr: null,
        name: 'Khóa Biệt Ly',
        singer: 'The Mask Singer, Voi Bản Đôn'
    },
    {
        scr: null,
        name: 'LOVE SAND',
        singer: 'ANH TRAI "SAY HI" HIEUTHUHAI, JSOL, Ali Hoàng Dương, Vũ Thịnh(The Wings)'
    },
    {
        scr: null,
        name: 'Yên Bình Có Quá Đắt',
        singer: 'Khiem'
    },
    {
        scr: null,
        name: 'Rồi Em Sẽ Gặp Một Chàng Trai Khác',
        singer: 'The Mask Singer, Hippohappy'
    },
    {
        scr: null,
        name: 'Cô Phòng',
        singer: 'Hồ Quang Hiếu, Huỳnh Văn'
    },
    {
        scr: null,
        name: 'Ai Mà Biết Được',
        singer: 'SOOBIN, tlinh'
    }
]

const myarray_list_song_right2 = [
    {
        scr: '/web-decore/list-song-right/list-song-right-2.jpg',
        name: 'Please Please Please',
        singer: 'Sabrina Carpenter'
    },
    {
        scr: null,
        name: 'BIRDS OF A FEATHER',
        singer: 'Billie Eilish'
    },
    {
        scr: null,
        name: 'Good Luck, Babe!',
        singer: 'Chappell Roan'
    },
    {
        scr: null,
        name: 'A Bar SOng (Tipsy)',
        singer: 'Shaboozey'
    },
    {
        scr: null,
        name: 'Beautiful Things',
        singer: 'Benson Boone'
    },
    {
        scr: null,
        name: 'Too Sweet',
        singer: 'Hozier'
    },
    {
        scr: null,
        name: 'Million Dollar Baby',
        singer: 'Tomy Richman'
    },
    {
        scr: null,
        name: 'Not Like Us',
        singer: 'Kendrick Lamar'
    },
    {
        scr: null,
        name: 'I Had Some Help',
        singer: 'Post Malone, Morgan Wallien'
    },
    {
        scr: null,
        name: 'Espresso',
        singer: 'Sabrina Capenter'
    }
]

const myarray_list_song_right3 = [
    {
        scr: '/web-decore/list-song-right/list-song-right-3.jpg',
        name: 'FOREVER',
        singer: 'BABYMONSTER'
    },
    {
        scr: null,
        name: 'Rockstar',
        singer: 'LISA'
    },
    {
        scr: null,
        name: 'Magnetic',
        singer: 'ILLIT'
    },
    {
        scr: null,
        name: 'LIKE THAT',
        singer: 'BABYMONSTER'
    },
    {
        scr: null,
        name: 'SHEESH',
        singer: 'BABYMONSTER'
    },
    {
        scr: null,
        name: 'SPOT!',
        singer: 'ZICO (Block B), JENNIE (BlACKPINK)'
    },
    {
        scr: null,
        name: 'Supernova',
        singer: 'aespa'
    },
    {
        scr: null,
        name: 'ABCD',
        singer: 'NAYEON (TWICE)'
    },
    {
        scr: null,
        name: 'WOKE UP',
        singer: 'XG'
    },
    {
        scr: null,
        name: 'Love You With All My Heart (Queen of Tears OST)',
        singer: 'Crush'
    }
]

let index1 = 0


document.addEventListener("DOMContentLoaded", function () {
    const btn_right_1 = document.querySelector(".btn-location-bxh-1")
    const btn_right_2 = document.querySelector(".btn-location-bxh-2")
    const btn_right_3 = document.querySelector(".btn-location-bxh-3")

    let value = myarray_list_song_right; // Giá trị ban đầu là 0 (button với class="name")
    btn_right_1.style.backgroundColor = 'rgba(255, 0, 0, 0.692)';
    btn_right_1.style.color = 'white';

    const clearb = document.querySelector('.list-song-right')
    function handleClick(newValue) {
        value = newValue;
        clearb.innerHTML = '';
        myfuntion(newValue);
    }

    document.querySelector(".btn-location-bxh-1").addEventListener("click", function () {
        btn_right_1.style.backgroundColor = 'rgba(255, 0, 0, 0.692)';
        btn_right_2.style.color = 'black';
        btn_right_3.style.color = 'black';
        btn_right_1.style.color = 'white';
        btn_right_2.style.backgroundColor = 'rgba(208, 208, 211, 0.637)'
        btn_right_3.style.backgroundColor = 'rgba(208, 208, 211, 0.637)'
        handleClick(myarray_list_song_right);

    });

    document.querySelector(".btn-location-bxh-2").addEventListener("click", function () {
        handleClick(myarray_list_song_right2);
        btn_right_2.style.color = 'white';
        btn_right_1.style.color = 'black';
        btn_right_3.style.color = 'black';
        btn_right_2.style.backgroundColor = 'rgba(255, 0, 0, 0.692)';
        btn_right_1.style.backgroundColor = 'rgba(208, 208, 211, 0.637)'
        btn_right_3.style.backgroundColor = 'rgba(208, 208, 211, 0.637)'
    });

    document.querySelector(".btn-location-bxh-3").addEventListener("click", function () {
        handleClick(myarray_list_song_right3);
        btn_right_3.style.color = 'white';
        btn_right_1.style.color = 'black';
        btn_right_2.style.color = 'black';
        btn_right_1.style.backgroundColor = 'rgba(208, 208, 211, 0.637)'
        btn_right_2.style.backgroundColor = 'rgba(208, 208, 211, 0.637)'
        btn_right_3.style.backgroundColor = 'rgba(255, 0, 0, 0.692)';

    });

    myfuntion(value)
});


function myfuntion(value) {
    for (const my of value) {
        if (index1 > 9) {
            index1 = 0
        }
        index1 = index1 + 1
        const li_right = document.createElement('li')
        const img = document.createElement('img')
        const h3 = document.createElement('h3')
        const h4 = document.createElement('h4')
        const span = document.createElement('span')
        const div_if_data = document.createElement('div')
        const div_span = document.createElement('div')



        const ul = document.querySelector('.list-song-right')
        div_if_data.className = 'info-data'
        div_span.className = 'color-span'

        if (my.scr === null) {
        }
        else {
            div_span.style = 'position: absolute; bottom:0; left:0;'
            img.src = my.scr
            li_right.appendChild(img)
        }
        span.textContent = index1
        h3.textContent = my.name
        h4.textContent = my.singer

        div_span.appendChild(span)
        li_right.appendChild(div_span)
        li_right.appendChild(div_if_data)
        div_if_data.appendChild(h3)
        div_if_data.appendChild(h4)
        ul.appendChild(li_right)


    }
}

