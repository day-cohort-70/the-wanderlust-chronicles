/*
    Photos, description, weather, location, date
*/

import { TravelCardBody } from "./TravelBody.js"
import { TravelCardFooter } from "./TravelFooter.js"
import { TravelCardHeader } from "./TravelHeader.js"

export const TravelCard = (entireEntryObject) => {
    const headerHTML = TravelCardHeader(entireEntryObject.location)
    const bodyHTML = TravelCardBody(entireEntryObject.location, entireEntryObject.description, entireEntryObject.weather, entireEntryObject.id)
    const footerHTML = TravelCardFooter(entireEntryObject.date)

    const entireCardHTML = `
    <section class="card">
        ${headerHTML}
        ${bodyHTML}
        ${footerHTML}
    </section>
    `

    return entireCardHTML
}
