const jokeL = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn')



const config = { headers: {
     'Accept': 'application/json'
        }
    }

 generateJoke();   

 jokeBtn.addEventListener('click', generateJoke)


 function generateJoke() {
    fetch('https://icanhazdadjoke.com',config)
    .then((res)=> res.json())
    .then((data) => {
        jokeL.innerHTML = data.joke
    })
 }