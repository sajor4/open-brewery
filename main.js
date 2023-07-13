DBService.getBreweries()
    .then(breweries => console.log(breweries))


function render(breweries) {

    for (brewery of breweries) {
        console.log(breweries.name)
    }

}


function previous(){
    pageNumber--;
    DBService.getBreweries()
    .then(breweries => console.log(breweries))
}

function next(){
    pageNumber++;
    DBService.getBreweries()
    .then(breweries => console.log(breweries))
}