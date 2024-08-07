document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.getElementById('menuBtn');
    const dropMenu = document.getElementById('dropMenu');
    const menuIcon = document.getElementById('menuIcon');

    menuBtn.addEventListener('click', function () {
        dropMenu.classList.toggle('show');
        if (dropMenu.classList.contains('show')) {
            menuIcon.classList.remove('fa-bars');
            menuIcon.classList.add('fa-times');
        } else {
            menuIcon.classList.remove('fa-times');
            menuIcon.classList.add('fa-bars');
        }
    });
});
