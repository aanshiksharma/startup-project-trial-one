


let finalRating = document.getElementById('numeric-rating');

let sidebar = document.getElementsByClassName('sidebar');
function toggleNavbar() {
    if (sidebar[0].style.display !== 'none') {
        sidebar[0].style.display = 'none';
    } else {
        sidebar[0].style.display = 'block';
    }
}

window.addEventListener("click", (element) => {
    if (element !== sidebar) {
        if (sidebar[0].style.display !== 'none') {
            sidebar[0].style.display = 'none';
        }
    }
});











