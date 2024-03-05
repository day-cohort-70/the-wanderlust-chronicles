/*
    1. Define what data needs to be in each component
    2. Import TravelCard into main
    3. For every travel diary entry, generate a new instance of the card
    4. Import the header, body and footer into card component
    5. Use document.getElementbyId("#adventures") and update the inner HTML of it
*/
import { entries } from "../data.js"
import { TravelCard } from "./components/TravelCard.js"
import { travelPhotos } from "../data.js"


let thisDestinationsHTML = ""

for (const entry of entries) {
    thisDestinationsHTML += TravelCard(entry)
}

document.getElementById("adventures").innerHTML = thisDestinationsHTML



document.addEventListener(
    "click",
    (clickEvent) => {
        if (clickEvent.target.dataset.type === "travelButton") {
            let thisEntrysPhotos = `<h1>Photos for ${clickEvent.target.dataset.destination}</h1>`

            for (const photoObject of travelPhotos) {
                if (parseInt(clickEvent.target.id) === photoObject.entryId) {
                    thisEntrysPhotos += `<img class="travel__photo" src="./images/${photoObject.filename}" alt="My fun photo of destination" />`
                }
            }

            document.getElementById("photos").innerHTML = thisEntrysPhotos
        }
    }
)
