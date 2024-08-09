const vutru =[
    {
        name:'Remix Việt Không Thể Thiếu',
        nguon:'/web-decore/list-album-vu-tru-am-nhac/vu-tru-1.jpg'
    },
    {
        name:'V-SOUND 2010S',
        nguon:'/web-decore/list-album-vu-tru-am-nhac/vu-tru-2.jpg'
    },
    {
        name:'Nhạc Việt Live',
        nguon:'/web-decore/list-album-vu-tru-am-nhac/vu-tru-3.webp'
    },
    {
        name:'Jazz Việt',
        nguon:'/web-decore/list-album-vu-tru-am-nhac/vu-tru-4.webp'
    },
    {
        name:'Nam Nghệ Sĩ Việt',
        nguon:'/web-decore/list-album-vu-tru-am-nhac/vu-tru-5.webp'
    }
]

const quocte =[
    {
        name:'K-Pop Summer Songs',
        nguon:'/web-decore/list-album-quoc-te-noi-bat/quoc-te-1.webp'
    },
    {
        name:'Pop Now',
        nguon:'/web-decore/list-album-quoc-te-noi-bat/quoc-te-2.webp'
    },
    {
        name:'Nhạc Trung HOT Nhất',
        nguon:'/web-decore/list-album-quoc-te-noi-bat/quoc-te-3.webp'
    },
    {
        name:'Nhạc Phim Âu Mỹ',
        nguon:'/web-decore/list-album-quoc-te-noi-bat/quoc-te-4.webp'
    },
    {
        name:'Nhạc Cổ Phong Trung Quốc Hay Nhất',
        nguon:'/web-decore/list-album-quoc-te-noi-bat/quoc-te-5.webp'
    }
]

const tamtrang =[
    {
        name:'Cảm Xúc Khi Yêu',
        nguon:'/web-decore/list-album-tam-trang-hom-nay/tam-trang-1.jpg'
    },
    {
        name:'Chill Giữa Đêm',
        nguon:'/web-decore/list-album-tam-trang-hom-nay/tam-trang-2.webp'
    },
    {
        name:'Nhạc Phim Việt Nam',
        nguon:'/web-decore/list-album-tam-trang-hom-nay/tam-trang-3.webp'
    },
    {
        name:'Lofi Chill Cho Ngày Mưa',
        nguon:'/web-decore/list-album-tam-trang-hom-nay/tam-trang-4.webp'
    },
    {
        name:'La Cà Cà Phê',
        nguon:'/web-decore/list-album-tam-trang-hom-nay/tam-trang-5.webp'
    }
]



for (const my of vutru){
    const listalbum1 = document.querySelector(".list-album-content-ul-1");
    const li = document.createElement("li");
    const divbox = document.createElement("div");
    const img = document.createElement("img");
    const a = document.createElement("a");
    const divbg = document.createElement("div");
    const spanicon = document.createElement("span");
    const spanbg = document.createElement("span");
    const icon = document.createElement("i");
    const h4 = document.createElement("h4");


    divbox.className = 'box-left-album';
    a.className = 'box-absolute';
    divbg.className = 'bg-action-info';
    h4.className = 'list-album-content-ul-h4';
    img.className = 'avatar';
    icon.className = 'myicon fa-regular fa-circle-play fa-2x';

    img.src = my.nguon
    img.title = my.name
    h4.textContent = my.name
    h4.title = my.name
    spanicon.appendChild(icon);
    divbg.appendChild(spanicon);
    spanbg.appendChild(img);
    a.appendChild(spanbg);
    a.appendChild(divbg);
    divbox.appendChild(a);
    li.appendChild(divbox);
    li.appendChild(h4);
    listalbum1.appendChild(li);

}

for (const my of quocte){
    const listalbum2 = document.querySelector(".list-album-content-ul-2");
    const li2 = document.createElement("li");
    const divbox2 = document.createElement("div");
    const img2 = document.createElement("img");
    const a2 = document.createElement("a");
    const divbg2 = document.createElement("div");
    const spanicon2 = document.createElement("span");
    const spanbg2 = document.createElement("span");
    const icon2 = document.createElement("i");
    const h42 = document.createElement("h4");


    divbox2.className = 'box-left-album';
    a2.className = 'box-absolute';
    divbg2.className = 'bg-action-info';
    h42.className = 'list-album-content-ul-h4';
    img2.className = 'avatar';
    icon2.className = 'myicon fa-regular fa-circle-play fa-2x';

    img2.src = my.nguon
    img2.title = my.name
    h42.textContent = my.name
    h42.title = my.name

    spanicon2.appendChild(icon2);
    divbg2.appendChild(spanicon2);
    spanbg2.appendChild(img2);
    a2.appendChild(spanbg2);
    a2.appendChild(divbg2);
    divbox2.appendChild(a2);
    li2.appendChild(divbox2);
    li2.appendChild(h42);
    listalbum2.appendChild(li2);

}

for (const my of tamtrang){
    const listalbum3 = document.querySelector(".list-album-content-ul-3");
    const li3 = document.createElement("li");
    const divbox3 = document.createElement("div");
    const img3 = document.createElement("img");
    const a3 = document.createElement("a");
    const divbg3 = document.createElement("div");
    const spanicon3 = document.createElement("span");
    const spanbg3 = document.createElement("span");
    const icon3 = document.createElement("i");
    const h43 = document.createElement("h4");


    divbox3.className = 'box-left-album';
    h43.className = 'list-album-content-ul-h4';
    a3.className = 'box-absolute';
    divbg3.className = 'bg-action-info';
    img3.className = 'avatar';
    icon3.className = 'myicon fa-regular fa-circle-play fa-2x';

    img3.src = my.nguon
    img3.title = my.name
    h43.textContent = my.name
    h43.title = my.name

    spanicon3.appendChild(icon3);
    divbg3.appendChild(spanicon3);
    spanbg3.appendChild(img3);
    a3.appendChild(spanbg3);
    a3.appendChild(divbg3);
    divbox3.appendChild(a3);
    li3.appendChild(divbox3);
    li3.appendChild(h43);
    listalbum3.appendChild(li3);

}























document.addEventListener("DOMContentLoaded", function() {
    const listalbum8 = document.querySelector(".list-album-content-ul-8");
    const imageFolder = "/web-decore/list-album-top-100";
    const imageCount = 5; // Số lượng ảnh bạn muốn hiển thị
    

    for (let i = 1; i <= imageCount; i++) {
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
        /*icon.className = 'myicon fa-regular fa-circle-play fa-2x';*/

        img.src = `${imageFolder}/top -100-${i}.webp`; // Thay đổi tên ảnh tùy theo cấu trúc file của bạn
        img.alt = `Image ${i}`;
        /*spanicon.appendChild(icon);*/
        divbg.appendChild(spanicon);
        spanbg.appendChild(img);
        a.appendChild(spanbg);
        a.appendChild(divbg);
        divbox.appendChild(a);
        li.appendChild(divbox);
        listalbum8.appendChild(li);
        
    }
    
});