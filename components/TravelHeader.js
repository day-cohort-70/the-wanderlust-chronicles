/*
    This component will display an H1 with the .location property of each
    entry interpolated inside of it
*/
export const TravelCardHeader = (locationString) => {
    // Generate an HTML string with .location property
    const header = `<h1 class="card__header">${locationString}</h1>`
    return header
}