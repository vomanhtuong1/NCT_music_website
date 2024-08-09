function moveImage() {
    let leghtimg = document.querySelectorAll('#mydiv')
  setTimeout(() => {
    document.getElementById('gallery').appendChild(leghtimg[0])


  }, 1500); // Thời gian chuyển ảnh (ms)
}
setInterval(moveImage, 3000);


