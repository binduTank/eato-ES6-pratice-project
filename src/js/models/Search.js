import axios from 'axios';

export default class Search {
    constructor(query) {
        this.query = query;
    }

    async getResults() {

        const proxy = 'https://cors-anywhere.herokuapp.com/';
        const key = '123015bf840fc1e6d6249a7dcef05870';
        try {
            const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
            this.result = res.data.recipes;
            console.log(this.result);
        } catch(error) {
            alert(error);
        }
    
    }
}

