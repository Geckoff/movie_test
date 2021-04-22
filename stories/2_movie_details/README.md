# Story 2: View Movie Details

As a user, I would like to click on a movie from the list view and see more information about it.

When the user clicks on a movie they will navigate to a new route for that movie. The details data for the movie needs to be loaded from the OMDb API. The URL to fetch the data is:

```
http://www.omdbapi.com/?i=[imdbId]&apikey=c32d368e
```

**Note:**  
`imdbId` is an attribute stored in the movie list data.  
`apikey` parameter is required when fetching data.  
Store details data in the redux store.

### Acceptance Criteria
  1. Update the homepage movies list such that clicking a movie title or poster will take the client to a movie detail page.
      - Add a hover color to the title - #99E7D0
  2. The movie details view should be served from the route `http://localhost:3000/{id}`.

  ```
  For example:
    http://localhost:3000/5
    http://localhost:3000/710
    http://localhost:3000/9095
  ```

  3. The view shows the same header as the homepage
  4. The view shows the poster, title, year, and IMDB rating (out of 10)
  5. The view shows rated, run time, genre, and release date
  6. The view shows the plot, directors, writers, actors, and IMDB ID
  7. There is a "Back To Results" button that takes the user back to homepage
      - The button should be implemented with HTML/CSS
      - Add a hover color to the button - #78C3AD
      - Use the button designs for reference:
        - [Button](button.png)  
        - [Button - Hover](button_hover.png)  


### Designs
[Movie Details](movie_details.png)

***Your code does not have to be pixel perfect.***
