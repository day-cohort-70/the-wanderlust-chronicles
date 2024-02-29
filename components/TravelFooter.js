/*
    This component will display an div with the .date property of each
    entry interpolated inside of it
*/
export const TravelCardFooter = (dateString) => {
    const footer = `<div class="card__footer">${dateString}</div>`
    return footer
}