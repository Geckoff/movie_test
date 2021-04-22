# Implementation description

Here are some details about how I approached the project.

One of the first things I did was a transition of the codebase to Typescript. TS was just a few npm packages away, so I installed them, renamed the original files and added types to them - it was pretty quick process.

I identified what kind of data the app works with. And it seems to me that we have 2 types of entities - movies with short set of data that are rendered in the grid and movies with full set of data that are rendered on the single movie page. Based on that analysis I created 2 types of view models.

Main reducer has 3 sets of data - array of the movies from the main page, array of full data movies, object that stores arrays of the movies that were loaded as a result of the search. Once any kind of data is loaded to the app, it is cached in the store and that way we don't need to do extra service calls when we go the page we already visited. The approach can be improved though. We could limit the length of the cached array in the store and implement them as queues if we know the amount of loaded data is huge and we have memory concerns. Or cache expiration could be implemented.

I was thinking about refactoring caching of search and movies on the main page to more normalized way when we would have a single array where we store all short movie models regardless of where they came from, but unfortunately didn't have time for that. If the movie that is loaded is already cached it wouldn't be added to that single cache array. Array for the movies on the main page and search movies object in this case would store only ids of the movies. That way we'll avoid data duplication. At this point it's the biggest improvements I'm envisioning for the current implementation.

To handle loading indicator I created a separate reducer. One another thing I had in my mind is to use some library (was thinking about redux-actions) to handle redux functionality, but didn’t have time to implement that.

For the components I was trying to split them to have a component for each functional unit. I added base components for button and text input even though it was not necessary since this is a small test app, but that what I would do in the real world project.

One of the challenges I came across is "Back To Results" button on the single movie page. I had to implement a mechanism so it would know if the user came from search page, main page, or the page was loaded directly.

There is one thing that I noticed with how the server works that was a little bit confusing for me. When the search endpoint returns an empty array and no results found, the response code is 404, even though the input the user sent is valid and the empty array seems to be an expected result. I think 200 range will work better here. I was trying to process response in “catch” block initially, but then I made a small (and the only one) update to the server – commented out sending 404 response in the router for the empty array.

One of the things that I’ve never come across is to replace broken images with placeholders. It was easy to google the solution and it is straightforward, but it definitely was something that I learned from the project.

Styling seemed straightforward to me. The only thing I would have done if I had more time is refinement of the movie grid. Posters of the movies are of a different height and it creates a little bit of inconsistency. I think more advanced css techniques could help to resolve the problem (maybe css grid). If not, a little bit of JS would solve this challenge.

---

# Movie Web Code Test

This code test will evaluate your abilities to develop a React+Redux application, using web technologies such as JavaScript, HTML5, and CSS3.

For this test you will be adding functionality to an app for viewing movies. You will utilize an existing local API server for movie search and the [OMDb API](http://www.omdbapi.com/) for detailed movie information.

---

## Getting Started

### Pre-Requisites

-   A text editor or IDE, such as WebStorm, VIM, Atom, or VS Code
-   Node v8.11.1 or higher
-   Git installed locally

### Development Setup

Install the API server & the client app:

1. Install dependencies from the root:
    > `npm install`

Start client app and API server:

1. From the root:

    > `npm start`

2. Verify server running: http://localhost:3001/movies/all

3. Test the site in a browser by going to http://localhost:3000

Or you can start the server and client individually

1. Run the API server from the root directory
    > `npm run start:server`
2. Run the client from the root directory
    > `npm run start:client`

---

## Next Steps

In the [stories/](stories/) folder there are several stories to complete. Each folder contains a README describing the task and any other information you might need. Please complete them in order.

**Note 1:** You aren't expected to finish the list of stories
**Note 2:** Feel free to use outside resources, eg Google, api documentation, etc.
