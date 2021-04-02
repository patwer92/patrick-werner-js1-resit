const url = "https://official-joke-api.appspot.com/random_ten";
const header = document.querySelector("h1");
const card = document.querySelector(".card");
const loader = document.querySelector(".loader");
const resultsContainer = document.querySelector(".container");


async function runApiCall() {
    try {
        const response = await fetch(url);
        
        const results = await response.json();

        

        resultsContainer.innerHTML = "";

        for (let i = 0; i < results.length; i++ ) {


            const jokeType = `${results[i].type}`;
            const jokeSetup = `${results[i].setup}`;
            const jokePunchline = `${results[i].punchline}`;


            if (i === 5) {
                break;
            }

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

        document.title = `${results[2].setup}`;

    } catch (error) {
        console.log(error);
        loader.style.display= "none";
        header.innerHTML = "";
        header.classList.add("error");
        
    }
}
card.innerHTML = "";

setTimeout(runApiCall, 1000);