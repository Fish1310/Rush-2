document.getElementById('priceRange').addEventListener('input', function() {
    document.getElementById('priceDisplay').textContent = `$${this.value}`;
    filterCars();
});

function filterCars() {
    let searchQuery = document.getElementById('searchBar').value.toLowerCase();
    let maxPrice = parseInt(document.getElementById('priceRange').value, 10);
    let selectedBrand = document.getElementById('brandFilter').value;
    let cars = document.querySelectorAll('.car');

    cars.forEach(car => {
        let carName = car.querySelector('h3').textContent.toLowerCase();
        let carBrand = car.getAttribute('data-brand');
        let carPrice = parseInt(car.querySelector('.price').textContent.replace('$', '').replace(',', ''));

        if ((carName.includes(searchQuery) || searchQuery === '') &&
            (selectedBrand === 'all' || carBrand === selectedBrand) &&
            (carPrice <= maxPrice)) {
            car.style.display = 'block';
        } else {
            car.style.display = 'none';
        }
    });
}

function toggleMenu() {
    const menu = document.getElementById('menu');
    menu.classList.toggle('hidden');
}

document.addEventListener('click', function(event) {
    const menu = document.getElementById('menu');
    const menuToggle = document.getElementById('menu-toggle');
    const isClickInside = menu.contains(event.target) || menuToggle.contains(event.target);

    if (!isClickInside && !menu.classList.contains('hidden')) {
        menu.classList.add('hidden');
    }
});
