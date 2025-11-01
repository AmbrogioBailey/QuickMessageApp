const submitButton = document.getElementById('submit')
const changeBkg = document.getElementById('background')

const inputValue = document.getElementById('name')
const messageInput = document.getElementById('message')


submitButton.addEventListener('click', function(){
    document.getElementById('background').innerHTML = `
    <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHp3OTdub29wOXpqc2IzbmUxbGl6aWkxOGd5OTNoMTkzdmNrZXdvNCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/11ASZtb7vdJagM/giphy.webp">
    `
    
    changeBkg.classList.add('black-background')

    setTimeout(function() {
        document.getElementById('background').innerHTML = `
        <img src="https://www.shutterstock.com/shutterstock/videos/3459123403/thumb/1.jpg?ip=x480">
        <button type="button" id="continue" class="fixed-btn">Display Message</button>
        `

        const continueButton = document.getElementById('continue')

        continueButton.addEventListener('click', function(){
            const changeBack = document.getElementById('background')
            changeBack.classList.add('backgroundtwo')
            
            const background = document.getElementById('background');


            background.textContent = "";

            
            const fromP = document.createElement('p');
            fromP.className = 'white';
            const fromSpan = document.createElement('span');
            fromSpan.className = 'visual';
            fromSpan.textContent = inputValue.value; // Safe, no HTML parsing
            fromP.textContent = 'From: ';
            fromP.appendChild(fromSpan);

            const messageP = document.createElement('p');
            messageP.className = 'white';
            const messageSpan = document.createElement('span');
            messageSpan.className = 'visual-two';
            messageSpan.textContent = messageInput.value; // Safe, no HTML parsing
            messageP.textContent = 'Message: ';
            messageP.appendChild(messageSpan);

            
            background.appendChild(fromP);
            background.appendChild(messageP);


            
        
        })
        

    },9500)

    
})




// after the continue button is clicked
// make a message appear including the person's 
// name entered and also the message that they typed in 
// update how the message looks once displayed at the end