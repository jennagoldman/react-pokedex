import request from 'superagent';

const URL = 'https://alchemy-pokedex.herokuapp.com/api/pokedex?';

export async function getPokemon() {
    let queryString = window.location.hash.slice(1);

    const url = `${URL}${queryString}`;

    const response = await request.get(url);
    const data = response.body;

    if(data.Response === 'False') {
        return {
            Search: [],
            totalResults: 0
        }
    }
    console.log(data);
    return data;
}


// const pokemonAPIData = await request.get('https://alchemy-pokedex.herokuapp.com/api/pokedex?perPage=165');
//     this.setState({ data: pokemonAPIData.body.results });
//     console.log(this.state.data);




