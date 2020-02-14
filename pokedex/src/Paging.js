import React, { Component } from 'react';

export default class SearchOptions extends Component {
    constructor() {
        super();
        this.state = { page: 1 };
    }

    componentDidMount() {
        this.updateControls();

        window.addEventListener('hashchange', () => {
            this.updateControls();
        });
    }

    updatePage(increment) {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        searchParams.set('page', this.state.page + increment);

        window.location.hash = searchParams.toString();
    }

    updateControls() {
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);
        let pageToUse = this.state.page;

        const parsedPage = Number(searchParams.get('page'));
        if (isNaN(parsedPage)) {
            pageToUse = 1;
        } else {
            pageToUse = parsedPage;
        }

        this.setState({ page: pageToUse });
    }


    render() {
        // const { page } = this.state;

        const perPage = 20;
        const { totalResults } = this.props;
        const queryString = window.location.hash.slice(1);
        const searchParams = new URLSearchParams(queryString);

        const parsedPage = parseInt(searchParams.get('page'));

        let pageToUse;
        if (isNaN(parsedPage)) {
            pageToUse = 1;
        } else {
            pageToUse = parsedPage;
        }

        if (!totalResults) {
            return <p>No results match your search criteria; try another search.</p>
        }

        const lastPage = Math.ceil(totalResults / perPage);

        return (
            <div id="paging-container">
                <button id="previous" onClick={() => this.updatePage(-1)} disabled={pageToUse === 1 ? true : ''}>
                    Prev
                </button>
                <span id="paging-span">Page {pageToUse} of {lastPage}</span>
                <button id="next" onClick={() => this.updatePage(1)} disabled={pageToUse === lastPage ? 'true' : ''}>
                    Next
                </button>
            </div>
        )
    }
}