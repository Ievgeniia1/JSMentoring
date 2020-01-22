const superagent = require('superagent');

let baseUrl = "https://swapi.co";
let endpoint = "/api/planets/";


function _requestForPageNum(pageNum) {
    return superagent.get(`${baseUrl}${endpoint}?page=${pageNum}`);
}

//get all results from bodies from all pages to one array
async function getAllBodiesFromPages() {
    let pageNum = 1;
    let allResults = [];
    let response;
    do {
        response = await _requestForPageNum(pageNum);
        allResults.push(response.body.results);
        pageNum++;
    }
    while (response.body.next);
    return  allResults.flat();
}


//get all values for needed property to array propValues[]
async function getPropertyValues(prop){
    let propValues=[];
    let bodies = await getAllBodiesFromPages();
    for (let i=0;i<bodies.length;i++){
       propValues.push(bodies[i][prop])
    }
    return await propValues;
}


//Print number of planets
async function printNumber() {
    let n = await getAllBodiesFromPages();
    console.log("Total number of planets: "+n.length)
}


//Print names of planets
async function printPlanetNames() {
    let names = await getPropertyValues("name");
    console.log("All planet names: "+names.toString())
}

printNumber();
printPlanetNames();

