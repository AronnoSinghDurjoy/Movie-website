document.addEventListener('DOMContentLoaded', function () {
    // Fetch movie/series data from the server using AJAX and dynamically generate thumbnails
    fetch('movies.json')
        .then(response => response.json())
        .then(data => {
            const moviesSection = document.getElementById('movies');
            data.forEach(movie => {
                const movieElement = document.createElement('div');
                movieElement.classList.add('movie-thumbnail');
                movieElement.innerHTML = `
                    <img src="${movie.poster}" alt="${movie.title}">
                    <h3>${movie.title}</h3>
                    <p>${movie.description}</p>
                    <!-- Add more details or links -->
                `;
                moviesSection.appendChild(movieElement);
            });
        })
        .catch(error => console.error('Error fetching movies:', error));
});

document.addEventListener('DOMContentLoaded', function () {
    const userBtn = document.getElementById('userBtn');
    const adminBtn = document.getElementById('adminBtn');
    const userLogin = document.getElementById('userLogin');
    const adminLogin = document.getElementById('adminLogin');

    function activateUserPanel() {
        userBtn.classList.add('active');
        adminBtn.classList.remove('active');
        userLogin.classList.add('active');
        adminLogin.classList.remove('active');
    }

    function activateAdminPanel() {
        adminBtn.classList.add('active');
        userBtn.classList.remove('active');
        adminLogin.classList.add('active');
        userLogin.classList.remove('active');
    }

    userBtn.addEventListener('click', activateUserPanel);
    adminBtn.addEventListener('click', activateAdminPanel);

    // Initially activate the user panel
    activateUserPanel();
});