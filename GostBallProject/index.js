const bodyElement = document.querySelector('body');

//add event listner to the body element for detect the mouse movement
bodyElement.addEventListener('mousemove', (event) => {
    //console.log(event.offsetX, event.offsetY);
    //get position of the mouse value and save
    const Xposition = event.offsetX;
    const Yposition = event.offsetY;

    //create a new element
    const newElement = document.createElement('span')

    //append the new element to the body
    bodyElement.appendChild(newElement);

    //add style to the new element
    newElement.style.left = `${Xposition}px`;
    newElement.style.top = `${Yposition}px`;

    //remove element after 1 second
    setTimeout(() => {
        newElement.remove();
    }, 1000)

    //set diffrent size of high and width icons
    const size = Math.random() * 100;
    newElement.style.width = `${size}px`;
    newElement.style.height = `${size}px`;


    
    console.log(newElement)
})