import React, { Component } from 'react';

export default class Search extends Component {

    componentDidMount() {
        this.updateControls();

        window.addEventListener('hashchange', () => {
            this.updateControls();
        });
    }

    state = { searchInput: '' };

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

    this.setState({ searchInput: searchParams.get('pokemon') || '' });
    }
    handleSubmit = event => {
        const form = document.getElementById('search-form');
        event.preventDefault();
        const formData = new FormData(form);

        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        searchParams.set('pokemon', formData.get('search'));
        searchParams.set('page', 1);

        window.location.hash = searchParams.toString();
    };

    render() {
        return (
            <section className="search-container">
                <form id="search-form" onSubmit={this.handleSubmit}>
                    <input 
                        type="text"
                        name="search"
                        onChange={e => this.setState({ searchInput: e.target.value })}
                        value={this.state.searchInput} 
                    />
                    <button>Search</button>
                </form>
            </section>
        )
    }
}
