const preloaderRemove = () => {
    const preloader = document.querySelector('.preloader');
    preloader.classList.add('preloader-finish');
}

window.addEventListener('load', preloaderRemove);