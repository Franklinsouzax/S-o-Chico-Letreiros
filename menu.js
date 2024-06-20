function toggleMenu() {
    const links = document.getElementById('links');
    if (links.style.display === 'none') {
        links.style.display = 'flex';
    } else {
        links.style.display = 'none';
    }
}