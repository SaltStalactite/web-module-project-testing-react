import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import Episode from './../Episode';

const testEpisode = {
    id: 1,
    name: "",
    image: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png",
    season: 1,
    number: 1,
    summary: "This is sample summary text",
    runtime: 1
}

test("renders without error", () => {
    render(<Episode episode={testEpisode} />)
});

test("renders the summary test passed as prop", () => {
    render(<Episode episode={testEpisode} />)

    const summaryText = screen.queryByText(/this is sample summary text/i)

    expect(summaryText).toBeInTheDocument()
    expect(summaryText).toBeTruthy()
    expect(summaryText).toBeDefined()
});

test("renders default image when image is not defined", () => { });
