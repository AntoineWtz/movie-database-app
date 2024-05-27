# Movie Database App

An intuitive Movie Database application built with React, TypeScript, and Tailwind CSS, utilizing the TMDB API.

## Usage

1. Clone this repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file in the root directory and add your TMDB API credentials:
    ```
    REACT_APP_TMDB_API_KEY=your_tmdb_api_key
    ```
4. Run `npm start` to start the development server.
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Description

The Movie Database App allows users to search for movies, view details of currently playing and upcoming movies. It fetches data from the TMDB API and displays the results.

### Features

* Search for movies by title.
* View details of currently playing movies.
* View details of upcoming movies.
* Sort search results by various criteria.

## File Structure

* `src/components/MovieList.tsx`: Main component to display movies list.
* `src/components/Hero.tsx`: Component to display highlighted movies.
* `src/components/SearchBar.tsx`: Search bar component for user input.
* `src/components/SortOptions.tsx`: Component for sorting search results.
* `src/components/SearchResults.tsx`: Component to display the list of search results.
* `src/components/MovieDetail.tsx`: Component to display individual movie details.

## Technologies Used

* React
* TypeScript
* Tailwind CSS
* TMDB API

## Demo

[DemoLink](https://antoinewtz.github.io/movie-database-app/)
