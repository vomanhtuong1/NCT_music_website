const prevBtn = document.getElementById('#prev');
const nextBtn = document.getElementById('#next');
let index = 1

function moveImage() {
    let leghtimg = document.querySelectorAll('#slide-footer')
  setTimeout(() => {
    document.getElementById('footer-a-section-one-slide-bar-all').appendChild(leghtimg[0])


  }, 1500); // Thời gian chuyển ảnh (ms)
}
setInterval(moveImage, 3000);


