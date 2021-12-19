const menu = document.querySelector('#menu-bars');
const navbar = document.querySelector('.navbar');

menu.onclick = () =>{
  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');
}
const searchForm = document.querySelector('.search-form');
document.querySelector('#search-icon').onclick = () => {
    searchForm.classList.toggle('active');
    navBar.classList.remove('active');
}

document.querySelector('#times-icon').onclick = () => {
    searchForm.classList.remove('active');
    document.querySelector('.search-icon').classList.remove('active');
}


