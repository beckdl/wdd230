const url = "https://beckdl.github.io/wdd230/chamber/json/data.json";

// async function getProphetData() {
//     const response = await fetch(url);
//     const data = await response.json();
//     console.table(data.prophets);  // note that we reference the prophet array of the data object given the structure of the json file
// }
  
// getProphetData();

async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    displayBusinesses(data.businesses);
}
  
getBusinessData();


const displayBusinesses = (businesses) => {
    const cards = document.querySelector('div.business'); // select the output container element
  
    businesses.forEach((business) => {
        // Create elements to add to the div.cards element
        let card = document.createElement('section');
        let h2 = document.createElement('h2');
        let pAddress = document.createElement('p');
        let pPhone = document.createElement('p');
        let portrait = document.createElement('img');
  
        // Build the h2 content out to show the prophet's full name - finish the template string
        h2.textContent = `${business.name}`;
        pAddress.textContent = `${business.address}`;
        pPhone.textContent = `${business.phone}`;

        // Build the image portrait by setting all the relevant attribute
        portrait.setAttribute('src', business.image);
        portrait.setAttribute('alt', `Picture of ${business.name}`);
        portrait.setAttribute('loading', 'lazy');
  
        // Append the section(card) with the created elements
        card.appendChild(h2);
        card.appendChild(pAddress);
        card.appendChild(pPhone);
        card.appendChild(portrait);
  
        cards.appendChild(card);
    }) // end of forEach loop
} // end of function expression