document.addEventListener('DOMContentLoaded', function() {
    
    const searchInput = document.getElementById('search-input');
    const hotelContainer = document.querySelector('.hotel-container');
    const hotels = document.querySelectorAll('.hotel');

    // Function to filter hotels based on the search input
    searchInput.addEventListener('input', function() {
        const query = searchInput.value.toLowerCase();

        hotels.forEach(function(hotel) {
            const hotelName = hotel.querySelector('h2').textContent.toLowerCase(); 
            if (hotelName.includes(query)) {
                hotel.style.display = 'block';
            } else {
                hotel.style.display = 'none'; 
            }
        });
    });
});


      