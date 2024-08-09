document.getElementById('next').onclick = function() {
    let leghtimg = document.querySelectorAll('#slide-footer')
    document.getElementById('footer-a-section-one-slide-bar-all').appendChild(leghtimg[0])
}

document.getElementById('prev').onclick = function() {
    let leghtimg = document.querySelectorAll('#slide-footer')
    document.getElementById('footer-a-section-one-slide-bar-all').prepend(leghtimg[leghtimg.length - 1])
}



