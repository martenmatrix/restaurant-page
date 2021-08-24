const createPage = (function () {
    
    function homepage() {
        const contentDiv = document.querySelector('#content');

        const about = document.createElement('about');
        about.id = 'about';
        contentDiv.appendChild(about);

    
        const leftPart = document.createElement('div');
        leftPart.classList.add('left-part');
        about.appendChild(leftPart);

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


        const rightPart = document.createElement('div');
        rightPart.classList.add('right-part');
        about.appendChild(rightPart);

        const image = document.createElement('img');
        image.src = './img/pizza-horizontal.jpg';
        image.type = 'img/jpg';
        rightPart.appendChild(image);

        about.appendChild(leftPart);
        about.appendChild(rightPart);
    };

    return {homepage};
})();

export default createPage;