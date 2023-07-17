const urlSummary = "https://beckdl.github.io/wdd230/bountifulFoods/json/coast.json";

async function getSummaryData() {
  const response = await fetch(urlSummary);
  const data = await response.json();
  console.table(data.data);
  displayBusiness(data.data);
}

getSummaryData();

const displayBusiness = (data) => {
  const spotlight = document.getElementById('summary');

  // Filter businesses with member_status of "gold"

  // Shuffle the goldBusinesses array randomly
  

  // Display the first three gold businesses
  data.forEach((num) => {
    let summary = document.createElement('p');

    summary.textContent = `${num.quote}`;
    

    spotlight.appendChild(summary);
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