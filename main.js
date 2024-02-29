/*
    1. Define what data needs to be in each component
    2. Import TravelCard into main
    3. For every travel diary entry, generate a new instance of the card
    4. Import the header, body and footer into card component
    5. Use document.getElementbyId("#adventures") and update the inner HTML of it
*/
import { travelDiaryEntries, travelPhotos } from "../data.js"
import { TravelCard } from "./components/TravelCard.js"


let thisDestinationsHTML = ""

for (const entry of travelDiaryEntries) {
    thisDestinationsHTML += TravelCard(entry)
}



document.getElementById("adventures").innerHTML = thisDestinationsHTML

