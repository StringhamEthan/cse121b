/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templeElements = document.getElementById('temples');
let templeList = [];
/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        let newArticle = document.createElement('article');
        let newH3 = document.createElement('h3');
        newH3.textContent = temple.templeName;
        let newImg = document.createElement('img');
        newImg.src = temple.imageUrl;
        newImg.alt = temple.location;
        newArticle.appendChild(newH3);
        newArticle.appendChild(newImg);
        templeElements.appendChild(newArticle);
    });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    templeList = await response.json();
    displayTemples(templeList);
}

/* reset Function */
const reset = () => {
    while(templeElements.firstChild) {
        templeElements.removeChild(templeElements.lastChild);
    }
}

/* sortBy Function */
const sortBy = (temples) => {
    reset();
    var filter = document.getElementById('sortBy').value;
    var newTemples = [];
    switch(filter){
        case "utah":
            temples.forEach(temple => {
                if (temple.location.includes("Utah")){
                    newTemples.push(temple);
                }
            })
            break;
        case "notutah":
            temples.forEach(temple => {
                if (!temple.location.includes("Utah")){
                    newTemples.push(temple);
                }
            })
            break;
        case "older":
            var testDate = new Date(1950,0,1);
            temples.forEach(temple => {
                if (new Date(temple.dedicated) < testDate){
                    newTemples.push(temple);
                }
            })
            break;
        case "all":
            newTemples = temples;
            break;
    }
    displayTemples(newTemples);
}
getTemples()
/* Event Listener */
document.querySelector("#sortBy").addEventListener("change", () => { sortBy(templeList)});