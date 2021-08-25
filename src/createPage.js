import imageOfRestaurant from './img/pizza-horizontal.jpg';

const createPage = (function () {

    //create empty spaces
    const contentDiv = document.querySelector('#content');

    const about = document.createElement('about');
    about.id = 'about';
    contentDiv.appendChild(about);

    const leftPart = document.createElement('div');
    leftPart.classList.add('left-part');
    about.appendChild(leftPart);

    const rightPart = document.createElement('div');
    rightPart.classList.add('right-part');
    about.appendChild(rightPart);

    const image = document.createElement('img');
    image.src = imageOfRestaurant;
    image.type = 'img/jpg';
    rightPart.appendChild(image);

    //create menu
    const menu = document.createElement('ul');
    menu.id = 'menu';
    const menuSections = ['Home', 'About', 'Menu'];

    menuSections.forEach(section => {
        const sectionToCreate = document.createElement('li');
        sectionToCreate.textContent = section;
        menu.appendChild(sectionToCreate);
    });
    leftPart.appendChild(menu);
    
    function homepage() {

        const header = document.createElement('h1');
        header.textContent = "Marten's Pizza Restaurant";
        leftPart.appendChild(header);

        const paragraph = document.createElement('p');
        paragraph.classList.add('description');
        paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus voluptates numquam est aperiam expedita molestias, ipsam eaque itaque fugit aliquid! Sed similique deserunt expedita ea repellendus corporis. Veritatis, quaerat.';
        leftPart.appendChild(paragraph);

        const button = document.createElement('button');
        button.textContent = 'Book now';
        leftPart.appendChild(button);

        about.appendChild(leftPart);
        about.appendChild(rightPart);
    };

    return {homepage};
})();

export default createPage;