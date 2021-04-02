const url = "https://official-joke-api.appspot.com/random_joke";
const header = document.querySelector("h2");
const setupContainer = document.querySelector(".setup")
const punchlineContainer = document.querySelector(".punchline");

async function runApiCall() {

    try {

        // fetching API call
        const response = await fetch(url);

        const data = await response.json();

        // assigning the data properties to variables for increased readability
        jokeType = data.type;
        setup = data.setup;
        punchline = data.punchline;

        // changing h2 element to show joke type
        header.innerHTML = `${jokeType} Joke`;

        // adding the setup property to setupContainer
        setupContainer.innerHTML = `${setup}`;

        // adding the punchline property to punchlineContainer
        punchlineContainer.innerHTML = `${punchline}`;

        // changing the title metatag to show setup value
        document.title = `${setup}`;

    // checking for errors
    } catch  (error) {
        console.log(error);
        header.classList.add("error");
        header.style.textTransform = "none";
        header.innerHTML = "Something went wrong when calling API. ";
    }
}

// runs the API call
runApiCall();