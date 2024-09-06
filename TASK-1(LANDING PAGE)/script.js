document.querySelectorAll('.hover-word').forEach(word => {
    word.addEventListener('mouseenter', function() {
        const imageId = this.getAttribute('data-image');
        document.querySelectorAll('.image-gallery img').forEach(img => {
            img.classList.remove('active');
        });
        document.getElementById(imageId).classList.add('active');
    });
});
