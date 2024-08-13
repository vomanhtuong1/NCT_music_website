const myarray_bai_hat = [
    {
        name: 'Klaxon',
        singer: '(G)I-DLE',
        nguon: '/web-decore/list-bai-hat/bai-hat-1.jpg'
    },
    {
        name: 'Hot Mess',
        singer: 'aespa',
        nguon: '/web-decore/list-bai-hat/bai-hat-2.jpg'
    },
    {
        name: 'FOREVER',
        singer: 'RARYMONSTER',
        nguon: '/web-decore/list-bai-hat/bai-hat-3.jpg'
    },
    {
        name: 'Nước Hoa',
        singer: 'Kay Trần, Cường Seven, Kiên Ứng, SOOBIN',
        nguon: '/web-decore/list-bai-hat/bai-hat-4.jpg'
    },
    {
        name: 'Rockstar',
        singer: 'LISA',
        nguon: '/web-decore/list-bai-hat/bai-hat-5.jpg'
    },
    {
        name: 'FRIENDSHIP',
        singer: 'Đen',
        nguon: '/web-decore/list-bai-hat/bai-hat-6.jpg'
    },
    {
        name: 'Đường Vào Tim Em',
        singer: 'Kay Trần',
        nguon: '/web-decore/list-bai-hat/bai-hat-7.jpg'
    },
    {
        name: 'We Will Never Change',
        singer: 'TOMORROW X TOGETHER',
        nguon: '/web-decore/list-bai-hat/bai-hat-8.jpg'
    },
    {
        name: 'Cơn Mưa Rào Đầu Tiên',
        singer: 'Chillies',
        nguon: '/web-decore/list-bai-hat/bai-hat-9.jpg'
    },
    {
        name: 'Hóa Ca - Call Me By Fire',
        singer: 'Anh Trai Vượt Ngàn Chông Gai 2024',
        nguon: '/web-decore/list-bai-hat/bai-hat-10.jpg'
    },
    {
        name: 'Ai Mà Biết Được',
        singer: 'SOOBIN',
        nguon: '/web-decore/list-bai-hat/bai-hat-11.jpg'
    },
    {
        name: 'Supernova',
        singer: 'aespa',
        nguon: '/web-decore/list-bai-hat/bai-hat-12.jpg'
    }
]


for (const my of myarray_bai_hat) {
    const listalbum6 = document.querySelector(".list-album-content-ul-6");
    const li6 = document.createElement("li");
    const divbox6 = document.createElement("div");
    const div_info6 = document.createElement("div");
    const div_box_song6 = document.createElement("div");
    /*const a6 = document.createElement("a");*/
    /*const a6 = document.createElement("a");*/

    const a6 = document.createElement("a");
    const a36 = document.createElement("a");
    const a46 = document.createElement("a");
    const aicon6 = document.createElement("a");
    const aicon2_6 = document.createElement("a");


    const img6 = document.createElement("img");
    const h36 = document.createElement("h3");
    const h46 = document.createElement("h4");

    /*const a6 = document.createElement("a");*/
    const div_name_sing6 = document.createElement("div");
    /*const a6 = document.createElement("a");*/

    const divicon6 = document.createElement("div");
    const spanicon6 = document.createElement("span");
    const spanicon2_6 = document.createElement("span");
    const icon6 = document.createElement("i");
    const icon2_6 = document.createElement("i");


    divbox6.className = 'box-content-music-list-home';
    div_info6.className = 'info-song';
    div_box_song6.className = 'box-song-action';
    div_name_sing6.className = 'name_sing_under';
    divicon6.className = 'container-icon';
    /*h43.className = 'list-album-content-ul-h4';
    a3.className = 'box-absolute';
    divbg3.className = 'bg-action-info';
    */
    img6.className = 'avatar-list-bai-hat';
    icon2_6.className = 'fa-solid fa-play';
    icon6.className = 'myheart fa-solid fa-heart-circle-plus';

    img6.src = my.nguon
    img6.title = my.name
    a36.textContent = my.name
    a36.title = my.name
    a46.textContent = my.singer
    a46.title = my.singer


    div_box_song6.appendChild(a6)
    div_box_song6.appendChild(a6)
    div_name_sing6.appendChild(h36);
    h46.appendChild(a46)
    div_name_sing6.appendChild(h46)
    h36.appendChild(a36)
    a6.appendChild(img6);
    div_info6.appendChild(a6);
    div_info6.appendChild(div_name_sing6);
    divbox6.appendChild(div_info6);
    divbox6.appendChild(div_box_song6);
    li6.appendChild(divbox6);
    aicon6.appendChild(icon6)
    aicon2_6.appendChild(icon2_6)
    spanicon6.appendChild(aicon6)
    spanicon2_6.appendChild(aicon2_6)
    divicon6.appendChild(spanicon6)
    divicon6.appendChild(spanicon2_6)
    li6.appendChild(divicon6)
    listalbum6.appendChild(li6);

}



















/*for (const my of tamtrang){
    const listalbum3 = document.querySelector(".list-album-content-ul-3");
    const li = document.createElement("li");
    const divbox = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");
    const divbg = document.createElement("div");
    const spanicon = document.createElement("span");
    const spanbg = document.createElement("span");
    const icon = document.createElement("i");

    divbox.className = 'box-left-album';
    a.className = 'box-absolute';
    divbg.className = 'bg-action-info';
    img.className = 'avatar';
    icon.className = 'myicon fa-regular fa-circle-play fa-2x';

    img.src = my.nguon
    img.title = my.name
    spanicon.appendChild(icon);
    divbg.appendChild(spanicon);
    spanbg.appendChild(img);
    a.appendChild(spanbg);
    a.appendChild(divbg);
    divbox.appendChild(a);
    li.appendChild(divbox);
    listalbum3.appendChild(li);

}*/

