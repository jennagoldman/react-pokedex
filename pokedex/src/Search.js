import React, { Component } from 'react';

export default class Search extends Component {
    render() {
        return (
            <section className="search-container">
                <form id="search-form">
                    <input type="text" />
                    <button>Search</button>
                </form>
            </section>
        )
    }
}