import { travelPhotos } from "../data.js"

/*
    This component will display the related photos for the destination
    and then the .description, and then the .weather
*/
export const TravelCardBody = (descriptionString, weatherString, travelId) => {

    let thisEntrysPhotos = ""

    for (const photoObject of travelPhotos) {
        if (travelId === photoObject.entryId) {
            thisEntrysPhotos += `<img class="travel__photo" src="./images/${photoObject.filename}" alt="My fun photo of destination" />`
        }
    }

    return `
        <div class="card__body">
            ${thisEntrysPhotos}
            <div>${descriptionString}</div>
            <div>${weatherString}</div>
        </div>
    `
}
