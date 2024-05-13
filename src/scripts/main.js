document.addEventListener("DOMContentLoaded", function() {
    const thumbnails = document.querySelectorAll('[data-bs-id]');

    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', function () {
            thumbnails.forEach(thumbnail => {
                thumbnail.classList.remove('trailers_video_wrapper_thumbnails_thumbnail--is-active');
            });

            this.classList.add('trailers_video_wrapper_thumbnails_thumbnail--is-active');

            const videoId = this.getAttribute('data-bs-id');

            const videoElement = document.querySelector('.trailers_video_wrapper_main_video video');
            videoElement.src = `./dist/videos/${videoId}.mp4`;
        });
    });

    carousel();
});

function carousel() {
    const carouselImages = document.querySelectorAll('.gallery_carousel_items_item');
    const btnPrev = document.querySelector('.gallery_carousel_prev');
    const btnNext = document.querySelector('.gallery_carousel_next');
    let currentImage = 0;

    btnNext.addEventListener('click', () => {
        carouselImages[currentImage].classList.remove('gallery_carousel_items_item--is-active');
        if (currentImage === carouselImages.length - 1) {
            currentImage = 0;
        } else {
            currentImage++;
        }
        console.log(currentImage)
        carouselImages[currentImage].classList.add('gallery_carousel_items_item--is-active');
    })

    btnPrev.addEventListener('click', () => {
        carouselImages[currentImage].classList.remove('gallery_carousel_items_item--is-active');
        if (currentImage === 0) {
            currentImage = carouselImages.length - 1;
        } else {
            currentImage--;
        }
        console.log(currentImage)
        carouselImages[currentImage].classList.add('gallery_carousel_items_item--is-active');
    })
}

