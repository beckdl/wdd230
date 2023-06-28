
async function getBusinessData() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.businesses);
}
  
getBusinessData();


const values = Object.values(businesses)

const randomValue = values[parseInt(Math.random() * values.length)]

console.log(randomValue)