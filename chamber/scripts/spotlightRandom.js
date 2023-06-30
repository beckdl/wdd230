const url2 = "https://beckdl.github.io/wdd230/chamber/json/data.json";

async function getBusinessData() {
  const response = await fetch(url2);
  const data = await response.json();
  console.table(data.businesses);
  displayBusiness(data.businesses);
}

getBusinessData();

const displayBusiness = (businesses) => {
  const spotlight = document.querySelector('.spotlight');

  // Filter businesses with member_status of "gold"
  const goldBusinesses = businesses.filter(businesses => businesses.memLevel === "Gold");

  // Shuffle the goldBusinesses array randomly
  const shuffledGoldBusinesses = shuffleArray(goldBusinesses);

  // Display the first three gold businesses
  const goldBusinessesToDisplay = shuffledGoldBusinesses.slice(0, 3);
  goldBusinessesToDisplay.forEach((business) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let locationH3 = document.createElement("h3");
    let contactH3 = document.createElement("h3");

    h2.textContent = `${business.name}`;
    locationH3.textContent = `${business.address}`;
    locationH3.classList.add('full-address');
    contactH3.textContent = `${business.phone}`;

    card.style.textAlign = "center";

    portrait.setAttribute('src', business.image);
    portrait.setAttribute('alt', `Business Banner of ${business.name}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('height', '200');

    card.appendChild(h2);
    card.appendChild(portrait);
    card.appendChild(locationH3);
    card.appendChild(contactH3);

    spotlight.appendChild(card);
  });
};

// Helper function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}