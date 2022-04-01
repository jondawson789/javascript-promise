const url = "http://numbersapi.com/";
const favNumbers = [7, 2 ,5];

async function getCard() {
    let fact = await axios.get(`${url}${favNumbers}?json`);
    
    console.log(fact); 
}

getCard(); 


let fourFacts = []; 

for (let i = 0; i < 4; i++) {
    fourFacts.push(axios.get(`${url}7?json`));
}

Promise.all(fourFacts)
.then(arr => (arr.forEach(data => {body = document.querySelector('body');
newFact = document.createElement('p')
newFact.innerText = data.data.text;
body.appendChild(newFact); 
console.log(data);
}
)))
.catch(err => console.log(err));

async function facts() {
    let facts = await Promise.all(fourFacts)
    facts.forEach(data => {body = document.querySelector('body');
    newFact = document.createElement('p')
    newFact.innerText = data.data.text;
    body.appendChild(newFact); 
    console.log(data);
    })
}