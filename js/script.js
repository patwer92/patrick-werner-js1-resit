const url = "https://official-joke-api.appspot.com/random_joke";
const header = document.querySelector("h2");
const setupContainer = document.querySelector(".setup")
const punchlineContainer = document.querySelector(".punchline");

async function runApiCall() {

    try {
        const response = await fetch(url);

        const data = await response.json();

        jokeType = data.type;
        setup = data.setup;
        punchline = data.punchline;

        // changing h2 element to show joke type
        header.innerHTML = `${jokeType} Joke`;

        // adding the setup property to setupContainer
        setupContainer.innerHTML = `${setup}`;

        // adding the punchline property to punchlineContainer
        punchlineContainer.innerHTML = `${punchline}`;

        // adding the title to show setup value
        document.title = `${setup}`;

    } catch  (error) {
        console.log(error);
        header.classList.add("error");
        header.style.textTransform = "none";
        header.innerHTML = "Something went wrong when calling API. ";
    }
}

runApiCall();