
const dailyUIButtons = document.querySelectorAll('.daily_ui_button');
const main = document.querySelector('main');



const dailyUIButtonClicked = (e) => {
    console.log("clicked");
    
    // Disable all buttons

    dailyUIButtons.forEach((element)=>{
        element.setAttribute('disabled', 'true')
    })

    // Explode the clicked event image
        // position should be the same as the current position

    
    const targetImage = e.currentTarget.querySelector('img');
    const targetClone = targetImage.cloneNode();
    const node = document.createElement('DIV');
    node.classList.add('popup_image');

    const closeButton = document.createElement('Button'); 
    const text = document.createTextNode('X');

    closeButton.appendChild(text);

    node.append(closeButton);
    node.append(targetClone);

    console.log(node);
    main.append(node);


    // add event listener to
        // remove the exploded image
        // enable buttons
    closeButton.addEventListener('click', (e)=>{
        node.remove();
        dailyUIButtons.forEach((element)=>{
            element.removeAttribute('disabled')
        })
    });

    node.addEventListener('click', (e)=>{
        const checkClick = e.currentTarget.querySelector('img')

        if(checkClick.contains(e.target)){
            console.log('clicked inside');
        }
        else{
            console.log('clicked outside');
            node.remove()
            dailyUIButtons.forEach((element)=>{
                element.removeAttribute('disabled')
            })
        }
    })
}


dailyUIButtons.forEach(element => {
    element.addEventListener('click', dailyUIButtonClicked);
});
