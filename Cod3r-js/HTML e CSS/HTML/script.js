document.querySelector('.menu-icon').addEventListener('click', function () {
	this.classList.toggle('active');
	document.querySelector('.sidebar').classList.toggle('open');
});

document.querySelector('.close-btn').addEventListener('click', function () {
	document.querySelector('.menu-icon').classList.remove('active');
	document.querySelector('.sidebar').classList.remove('open');
});

// Close menu when clicking outside of it
document.addEventListener('click', function (event) {
    if (!event.target.closest('.sidebar') && !event.target.closest('.menu-icon')) {
        document.querySelector('.menu-icon').classList.remove('active');
        document.querySelector('.sidebar').classList.remove('open');
    }
});

// Toggle submenu items
const subMenuItems = document.querySelectorAll('.sub-menu');
subMenuItems.forEach(function (subMenu) {
    subMenu.addEventListener('click', function () {
        this.classList.toggle('open');
    });
});