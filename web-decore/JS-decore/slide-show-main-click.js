document.getElementById('next0').onclick = function() {
    let leghtimgs = document.querySelectorAll('#mydiv')
    document.getElementById('gallery').appendChild(leghtimgs[0])
}

document.getElementById('prev0').onclick = function() {
    let leghtimgs = document.querySelectorAll('#mydiv')
    document.getElementById('gallery').prepend(leghtimgs[leghtimgs.length - 1])
}