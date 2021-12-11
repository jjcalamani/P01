const menuBtn = document.querySelector('.navbar');
document.querySelector('#bars-icon').onclick = () => {
    menuBtn.classList.toggle('active');
    document.querySelector('.bars-icon').classList.toggle('active');
}
const searchForm = document.querySelector('.search-form');
document.querySelector('#search-icon').onclick = () => {
    searchForm.classList.toggle('active');
    menuBtn.classList.remove('active');
    document.querySelector('.search-icon').classList.toggle('active');
    document.querySelector('.bars-icon').classList.remove('active');
}
document.querySelector('#times-icon').onclick = () => {
    searchForm.classList.remove('active');
    document.querySelector('.search-icon').classList.remove('active');
}


