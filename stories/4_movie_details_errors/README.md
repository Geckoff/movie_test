# Story 4: Movie Details Errors

As a user, I should not have the application "blow up" if I visit a route that does not exist or there is an error retrieving movie details.

Attempting to navigate to a movie details page that does not exist or issues retrieving details should show messaging that an error has occurred.

```
For example:
  http://localhost:3000/abc
  http://localhost:3000/123nope
```

**Note**  
The movie "Leaving Las Vegas" has an invalid `imdbId` and should fail movie details request.  

```
Notice the bad imdbId here:
http://localhost:3001/movies/451
```

### Acceptance Criteria
1. The view shows the same header as the homepage
2. The view shows an error message
    - "Oops, something went wrong!"
3. An error image is displayed under the error message
    - [Exclamation](exclamation.svg)
4. There is a "Back To Results" button that takes the user back to homepage
    - The button should be implemented with HTML/CSS
    - Add a hover color to the button - #78C3AD
    - Use the button designs for reference:
      - [Button](../2_movie_details/button.png)  
      - [Button - Hover](../2_movie_details/button_hover.png)  

### Designs
[Movie Details Error](movie_details_error.png)  

***Your code does not have to be pixel perfect***
