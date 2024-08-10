const choose_sign_up = document.querySelector('.up')
console.log(choose_sign_up);

choose_sign_up.onclick = function () {
    const sign_up = document.getElementById('sign_up')
    const container_all = document.getElementById('container-all')
    sign_up.style.display = 'block'
    container_all.style.filter = 'brightness(50%)'
    const form_sign_up = document.querySelector('#form_sign_up')
    const choose_x = document.querySelector('.myicon_sign_up')
    const choose_btn_sign_up = document.querySelector('.btn_sign_up')
    choose_x.onclick = function closeForm_sign_up() {
        form_sign_up.style.display = 'none'
        container_all.style.filter = 'none'
        location.reload()
    }
}

