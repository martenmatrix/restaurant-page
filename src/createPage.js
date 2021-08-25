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
    const menuSections = ['Home', 'Contact', 'Menu'];

    menuSections.forEach((section, index) => {
        const sectionToCreate = document.createElement('li');
        sectionToCreate.textContent = section;
        menu.appendChild(sectionToCreate);

        //underline first element because it is the first page
        if (index === 0) sectionToCreate.classList.add('underline');
    });
    leftPart.appendChild(menu);

    //create deletable section
    const deleteSection = document.createElement('div');
    deleteSection.id = 'delete';
    leftPart.appendChild(deleteSection);
    
    function homepage() {

        const header = document.createElement('h1');
        header.textContent = "Marten's Pizza Restaurant";
        deleteSection.appendChild(header);

        const paragraph = document.createElement('p');
        paragraph.classList.add('description');
        paragraph.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat ducimus voluptates numquam est aperiam expedita molestias, ipsam eaque itaque fugit aliquid! Sed similique deserunt expedita ea repellendus corporis. Veritatis, quaerat.';
        deleteSection.appendChild(paragraph);

        const button = document.createElement('button');
        button.textContent = 'Book now';
        deleteSection.appendChild(button);

        about.appendChild(leftPart);
        about.appendChild(rightPart);
    };

    function deleteLeftPart() {
        deleteSection.textContent = '';
    };

    function contact() {

    };

    function foodMenu() {

    };

    return {homepage, contact, foodMenu, deleteLeftPart};
})();

export default createPage;