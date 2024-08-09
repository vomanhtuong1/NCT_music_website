const myarray = [
    {
        name: 'LOVE SAND',
        singer:'ANH TRAI "SAY HI", HIEU THU HAI, Ali Hoàng Dương, Vũ Thịnh',
        src:  '/web-decore/moi-phat-hanh/moi-phat-1.jpg'
    },
    {
        name: 'CATCH ME IF YOU CAN',
        singer:'ANH TRAI "SAY HI", Quang Hùng MasterD, Negav, Công Dương, Nicky',
        src:  '/web-decore/moi-phat-hanh/moi-phat-2.jpg'
    },
    {
        name: 'Dìu Em Lên Mây',
        singer:'Only C, Nguyễn Phúc Thiện',
        src: '/web-decore/moi-phat-hanh/moi-phat-3.jpg'
    },
    {
        name: '"HÍT" DRAMA',
        singer:'ANH TRAI "SAY HI", Isaac, WEAN, Anh Tú, Đỗ Phú Quý',
        src: '/web-decore/moi-phat-hanh/moi-phat-4.jpg'
    },
    {
        name: 'THI SĨ',
        singer:'ANH TRAI "SAY HI", Đức Phúc, ERIK, Phạm Anh Duy, Tage',
        src: '/web-decore/moi-phat-hanh/moi-phat-5.jpg'
    },
    {
        name: 'I SWAY',
        singer:'(G) I-DLE',
        src: '/web-decore/moi-phat-hanh/moi-phat-6.webp'
    },
    {
        name: 'Lặng (EP)',
        singer:'Shiki',
        src: '/web-decore/moi-phat-hanh/moi-phat-7.webp'
    },
    {
        name: 'Supernatural',
        singer:'NewJeans',
        src: '/web-decore/moi-phat-hanh/moi-phat-8.webp'
    },
    {
        name: 'BẬT NÓ LÊN',
        singer:'SOOBIN',
        src: '/web-decore/moi-phat-hanh/moi-phat-9.webp'
    },
    {
        name: 'TWS 2nd Mini Album "SUMMER BEAT!',
        singer:'TWS',
        src: '/web-decore/moi-phat-hanh/moi-phat-10.webp'
    }
]


for (const scr of myarray){
    const listalbum1 = document.querySelector(".list-album-content-ul-4");
    const li = document.createElement("li");
    const divbox = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");
    const divbg = document.createElement("div");
    const spanicon = document.createElement("span");
    const spanbg = document.createElement("span");
    const icon = document.createElement("i");
    const h4 = document.createElement("h4");
    const h4_1 = document.createElement("h4");


    divbox.className = 'box-left-album';
    a.className = 'box-absolute';
    divbg.className = 'bg-action-info';
    img.className = 'avatar';
    h4.className = 'list-album-content-ul-h4';
    h4_1.className = 'list-album-content-ul-h4_1';
    icon.className = 'myicon fa-regular fa-circle-play fa-2x';

    img.src = scr.src
    img.title = scr.name
    h4.textContent = scr.name
    h4.title = scr.name
    h4_1.textContent = scr.singer
    h4_1.title = scr.singer

    spanicon.appendChild(icon);
    divbg.appendChild(spanicon);
    spanbg.appendChild(img);
    a.appendChild(spanbg);
    a.appendChild(divbg);
    divbox.appendChild(a);
    li.appendChild(divbox);
    li.appendChild(h4);
    li.appendChild(h4_1);
    listalbum1.appendChild(li);
}