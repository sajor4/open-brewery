class DBService {

    static getBreweries(pageNumber) {

        const url = 'https://api.openbrewerydb.org/v1/breweries';

        return fetch(url).then(resp => resp.json())

    }
}