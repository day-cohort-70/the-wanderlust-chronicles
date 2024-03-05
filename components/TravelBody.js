/*
    This component will display the related photos for the destination
    and then the .description, and then the .weather
*/
export const TravelCardBody = (location, descriptionString, weatherString, travelId) => {
    return `
        <div class="card__body">
            <button data-destination="${location}" data-type="travelButton" id="${travelId}">Show Photos</button>
            <div>${descriptionString}</div>
            <div>${weatherString}</div>
        </div>
    `
}
