import React, { Component } from 'react';

export default class Search extends Component {

    componentDidMount() {
        this.updateControls();

        window.addEventListener('hashchange', () => {
            this.updateControls();
        });
    }

    state = { 
        searchInput: '',
        typeInput: ''
 };

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        this.setState({ 
            searchInput: searchParams.get('pokemon') || '',
            typeInput: searchParams.get('type') || ''
    });
    }


    handleSubmit = event => {
        event.preventDefault();

        const form = document.getElementById('search-form');
        const formData = new FormData(form);

        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        searchParams.set('pokemon', formData.get('search'));
        searchParams.set('type', formData.get('type'));
        searchParams.set('page', 1)

        if (searchParams.get('type') === 'all') {
            searchParams.delete('type');
        }

        window.location.hash = searchParams.toString();
    };

    render() {
        return (
            <section className="searchContainer">
                <form id="searchForm" onSubmit={this.handleSubmit}>
                    <select name="type" onChange={e => this.setState({ typeInput: e.target.value })}>
                        <option value="all">All types</option> 
                        <option value="bug">Bug</option> 
                        <option value="dark">Dark</option>
                        <option value="dragon">Dragon</option>
                        <option value="electric">Electric</option>
                        <option value="fairy">Fairy</option>
                        <option value="fighting">Fighting</option>
                        <option value="fire">Fire</option>
                        <option value="flying">Flying</option>
                        <option value="ghost">Ghost</option>
                        <option value="grass">Grass</option>
                        <option value="ground">Ground</option>
                        <option value="ice">Ice</option>
                        <option value="normal">Normal</option>
                        <option value="poison">Poison</option>
                        <option value="psychic">Psychic</option>
                        <option value="rock">Rock</option>
                        <option value="steel">Steel</option> 
                        <option value="water">Water</option> 
                    </select>
                    <input type="text" name="search" placeholder="Enter Pokemon Name" onChange={e => this.setState({ searchInput: e.target.value })} value={this.state.searchInput} />
                    <button>Search</button>
                </form>
            </section>
        )
    }
}
