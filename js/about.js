const aboutContainer = document.querySelector(".about");

// creates new html inside aboutContainer (parent element of paragraphs) 
function reverseParagraphs() {
    aboutContainer.innerHTML = `<p>This is paragraph 2.</p>
                                <p>This is the first paragraph.</p>`;
}

// reverseParagraphs function executes after 3 seconds
setTimeout(reverseParagraphs, 3000);


