const list_title_hot_right =[
    {
        name:'R&B/HIPHOP/RAP',
        nguon:'/web-decore/chu-de-hot-right/chu-de-hot-1.jpg'
    },
    {
        name:'DJ',
        nguon:'/web-decore/chu-de-hot-right/chu-de-hot-2.jpg'
    },
    {
        name:'LOFI',
        nguon:'/web-decore/chu-de-hot-right/3.jpg'
    },
    {
        name:'CÀ PHÊ',
        nguon:'/web-decore/chu-de-hot-right/4.jpg'
    },
    {
        name:'NHẠC ÂU MỸ',
        nguon:'/web-decore/chu-de-hot-right/5.jpg'
    }
]

for (const my of list_title_hot_right){
    const listtitle = document.querySelector('.list-title-hot-right')
    const li = document.createElement('li')
    const a = document.createElement('a')
    const img = document.createElement('img')

    img.className = 'background-list-title-hot'
    img.src = my.nguon
    img.title = my.name

    a.appendChild(img)
    li.appendChild(a)
    listtitle.appendChild(li)
}