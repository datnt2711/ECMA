import Home from './page/home';

const router = () => {
    document.querySelector('#main-content').innerHTML = Home.render();

}
window.addEventListener('DOMContentLoaded',router);