const url = "https://official-joke-api.appspot.com/random_ten";
const header = document.querySelector("h1");
const card = document.querySelector(".card");
const loader = document.querySelector(".loader");
const resultsContainer = document.querySelector(".container");


async function runApiCall() {
    try {

        // fetching API call
        const response = await fetch(url);
        
        const results = await response.json();

        
        // removes the html (loader) in resultsContainer
        resultsContainer.innerHTML = "";

        // looping through the results from API
        for (let i = 0; i < results.length; i++ ) {

            // assigning variables to all the API properties
            const jokeType = `${results[i].type}`;
            const jokeSetup = `${results[i].setup}`;
            const jokePunchline = `${results[i].punchline}`;

            // when index hits 5 = break the loop
            if (i === 5) {
                break;
            }

            // adding html with type, setup and punchline properties
            resultsContainer.innerHTML += `<div class="col-sm-6 col-md-4 col-lg-3">
                                                <div class="card">
                                                    <div class="joke-detail">
                                                        <h4 class="type">${jokeType}</h4>
                                                        <div class="setup">${jokeSetup}</div>
                                                        <div class="punchline">${jokePunchline}</div>
                                                    </div>
                                                </div>
                                            </div>` 
        }

        // changing title metatag to be value of 3rd result of setup property 
        document.title = `${results[2].setup}`;
    
    // catch and display error message
    } catch (error) {
        console.log(error);
        loader.style.display= "none";
        header.innerHTML = "";
        header.classList.add("error");
        
    }
}
// removes card template when loading API
card.innerHTML = "";

// waits 1 second before running API call
setTimeout(runApiCall, 1000);