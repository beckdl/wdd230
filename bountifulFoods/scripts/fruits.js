const urlFood ="https://beckdl.github.io/wdd230/bountifulFoods/json/fruit.json";

async function apiFetch() {
    try {
        const response = await fetch(urlFood);
        if (response.ok) {
            const data = await response.json();
            console.log(data); // this is for testing the call
            displayResults1(data.fruits);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
  
apiFetch();

const displayResults = (fruits) => {
    const options = document.getElementById('fruits');

    fruits.forEach((num) => {
        // Create elements to add to the div.cards element
        let option = document.createElement('option');
        
  
        // Build the h2 content out to show the prophet's full name - finish the template string
        option.textContent = `${num.name}`;

        // Build the image portrait by setting all the relevant attribute
        option.setAttribute('value', num.name);
  
        // Append the section(card) with the created elements
        options.appendChild(option);
        
    })
};

