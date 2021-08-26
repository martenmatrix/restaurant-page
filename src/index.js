import './style.css';
import createHomepage from './createPage';

//Load homepage on page load
createHomepage.homepage();

const menuButtons = document.querySelectorAll('#menu li');

menuButtons.forEach(button => button.addEventListener('click', displayPage))

function displayPage(e) {
    //remove underline from previous page and undline current page
    menuButtons.forEach(button => button.classList.remove('underline'));
    e.target.classList.add('underline');

    //clear previous page
    createHomepage.deleteLeftPart();

    //load page requested by user
    let requestedPage = e.target.textContent;

    if (requestedPage === 'Home') {
        createHomepage.homepage();
    } else if (requestedPage === 'Contact') {
        createHomepage.contact();
    } else if (requestedPage === 'Menu') {
        createHomepage.foodMenu();
    };
};