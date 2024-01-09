let ani_js = document.querySelectorAll('.ani');

// console.log(ani_js);

const aniInView = (e, i = 0) => {
    const eTop = e.getBoundingClientRect().top;

    return (
        eTop <= (window.innerHeight || document.documentElement.clientHeight) / i
    )
}

const aniOutOfView = (e) => {
    const eTop = e.getBoundingClientRect().top;

    return (
        eTop > window.innerHeight || document.documentElement.clientHeight
    )
}


window.addEventListener('scroll', () => {
    ani_js.forEach(element => {
        if (aniInView(element, i = 1.01)) {
            element.classList.add('ani_jss')
            element.classList.remove('ani_jsss')
        } else if (aniOutOfView(element)) {
            element.classList.remove('ani_jss')
            element.classList.add('ani_jsss')
        }
    });
})

let left_scroll_p = document.getElementById('left_scroll_p');
let right_scroll_p = document.getElementById('right_scroll_p');
let project_cards = document.getElementById('project_cards');

left_scroll_p.addEventListener('click', () => {
    project_cards.scrollLeft -= 355;
})
right_scroll_p.addEventListener('click', () => {
    project_cards.scrollLeft += 355;
})

let c_img = document.getElementsByClassName('c_img');
let c_title = document.getElementsByClassName('c_title');
let c_subtitle = document.getElementsByClassName('c_subtitle');
let change_d = document.getElementsByClassName('chnage_d');

const check = () => {
    change_d[0].style.background = "#fff";
    change_d[1].style.background = "#fff";
    change_d[2].style.background = "#fff";
}

change_d[0].addEventListener('click', () => {
    c_img[0].src = "img/client1.jpg";
    c_title[0].innerText = "Alexa Domian";
    c_subtitle[0].innerText = "SoftTech Owner";
    c_img[1].src = "img/client2.jpg";
    c_title[1].innerText = "Pitar Frodiz";
    c_subtitle[1].innerText = "RBCX Chairman";
    c_img[2].src = "img/client3.jfif";
    c_title[2].innerText = "Salven Jetar";
    c_subtitle[2].innerText = "Pixel Hub CEO";
    check();
    change_d[0].style.background = "#00635a";
});
change_d[1].addEventListener('click', () => {
    c_img[1].src = "img/client1.jpg";
    c_title[1].innerText = "Alexa Domian";
    c_subtitle[1].innerText = "SoftTech Owner";
    c_img[0].src = "img/client2.jpg";
    c_title[0].innerText = "Pitar Frodiz";
    c_subtitle[0].innerText = "RBCX Chairman";
    c_img[2].src = "img/client3.jfif";
    c_title[2].innerText = "Salven Jetar";
    c_subtitle[2].innerText = "Pixel Hub CEO";
    check();
    change_d[1].style.background = "#00635a";
});
change_d[2].addEventListener('click', () => {
    c_img[2].src = "img/client1.jpg";
    c_title[2].innerText = "Alexa Domian";
    c_subtitle[2].innerText = "SoftTech Owner";
    c_img[1].src = "img/client2.jpg";
    c_title[1].innerText = "Pitar Frodiz";
    c_subtitle[1].innerText = "RBCX Chairman";
    c_img[0].src = "img/client3.jfif";
    c_title[0].innerText = "Salven Jetar";
    c_subtitle[0].innerText = "Pixel Hub CEO";
    check();
    change_d[2].style.background = "#00635a";
});

let menu = document.getElementById('menu');
let menu_btn = document.getElementById('menu_btn');

menu_btn.addEventListener('click', () => {
    menu.classList.toggle('ul_active');
    menu_btn.classList.toggle('bi-x-diamond-fill');
})