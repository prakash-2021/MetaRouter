const navLink_solution = document.getElementById('navLink_solution');
const dropdownMenu = document.getElementById("myDropdown")
dropdownMenu.style.display = "none"
navLink_solution.addEventListener('mouseover', function () {
    dropdownMenu.style.display = "block"
})

navLink_solution.addEventListener('mouseleave', function () {
    dropdownMenu.style.display = "none"
})

const dropdownMenuTwo = document.getElementById("myDropdownTwo")
const navLink_resource = document.getElementById('navLink_resource');
dropdownMenuTwo.style.display = "none"

navLink_resource.addEventListener('mouseover', function () {
    dropdownMenuTwo.style.display = "block"
})

navLink_resource.addEventListener('mouseleave', function () {
    dropdownMenuTwo.style.display = "none"
})





const tabFirst = document.getElementById('tabFirst');
const tabSecond = document.getElementById('tabSecond');
const tabOne = document.getElementById('tabOne');
const tabTWo = document.getElementById('tabTwo');

tabFirst.style.borderBottom = "2px solid blue"

tabTWo.style.display = "none"
tabFirst.addEventListener('click', function () {
    tabOne.style.display = "block"
    tabTWo.style.display = "none"
    tabFirst.style.borderBottom = "2px solid blue"
    tabSecond.style.borderBottom = "2px solid #d7d8e5"
})

tabSecond.addEventListener('click', function () {
    tabOne.style.display = "none"
    tabTWo.style.display = "block"
    tabSecond.style.borderBottom = "2px solid blue"
    tabFirst.style.borderBottom = "2px solid #d7d8e5"

})








let swiper = new Swiper(".mySwiper", {
    cssMode: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },
    loop: true,
    spaceBetween: 100,
    mousewheel: true,
    keyboard: true,
});






const hamIcon = document.getElementById('hamIcon');
const navList = document.getElementById('navList');

hamIcon.addEventListener('click', function () {

    if (navList.style.transform == 'translate(0%, 10%)'){
        navList.style.transform = 'translate(0%, -150%)'
        hamIcon.style.backgroundColor = "transparent";
    }

    else{
        navList.style.transform = 'translate(0%, 10%)'
        hamIcon.style.backgroundColor = "#7582f1"
    }
})
