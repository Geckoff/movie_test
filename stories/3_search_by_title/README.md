# Story 3: Searching For Movies By Title

As a user, I would like to be able to search for movies by title and see only those results.

When a user searches:
1. The URL will change to include the search term in a "q" parameter
    - For example: Searching for 'time' will navigate to `http://localhost:3000/?q=time`
2. The movie search endpoint will be queried for new results
3. The new results will be stored in the redux store
4. The list of results will display only the search results

The search results data for the movie needs to be loaded from the local server API. The URL to fetch the data is `http://localhost:3001/movies/search?s=[term]`, where `term` can be any search query.


### Acceptance Criteria
  1. A text input is added to the header
      - The placeholder should be "Search movies by title"
      - Hitting "Enter" performs a search query
  2. Searching causes the user to navigate to the homepage with the term in a "q" parameter
  3. The page then loads data from the search endpoint and displays only that movies list
  4. There is a heading above the movies list that shows the number of results and the search term

### Designs
[Search By Title](search_by_title.png)

***Your code does not have to be pixel perfect***
