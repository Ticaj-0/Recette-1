document.addEventListener('DOMContentLoaded', function() {
    const stars = document.querySelectorAll('.star');
    const savedRating = localStorage.getItem('rating');

    if (savedRating) {
        updateStars(savedRating);
    }

    stars.forEach(star => {
        star.addEventListener('click', () => {
            const value = star.getAttribute('data-value');
            const currentRating = localStorage.getItem('rating');

            // If the clicked star is already the rating, reset the rating
            if (currentRating === value) {
                localStorage.removeItem('rating');
                updateStars(0);
            } else {
                localStorage.setItem('rating', value);
                updateStars(value);
            }
        });

        star.addEventListener('mouseover', () => {
            const value = star.getAttribute('data-value');
            updateStars(value);
        });

        star.addEventListener('mouseout', () => {
            const value = localStorage.getItem('rating') || 0;
            updateStars(value);
        });
    });

    function updateStars(value) {
        stars.forEach(s => s.classList.remove('filled'));
        for (let i = 0; i < value; i++) {
            stars[i].classList.add('filled');
        }
    }
});

document.getElementById('show-popup-button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'block';
});

document.querySelector('.close-button').addEventListener('click', function() {
    document.getElementById('popup').style.display = 'none';
});

window.addEventListener('click', function(event) {
    if (event.target == document.getElementById('popup')) {
        document.getElementById('popup').style.display = 'none';
    }
});