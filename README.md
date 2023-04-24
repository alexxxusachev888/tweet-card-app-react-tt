
# User Cards Project

This project is a web application that displays user cards according to the given design. Each card shows the user's avatar, name, number of tweets, and followers. The application allows users to follow or unfollow other users, and the number of followers is updated accordingly. It also implements pagination, displaying up to 3 cards per page, with a "Load More" button to load additional cards.

## Technologies

- React.js library.
- Create React App: A CLI tool for creating new React applications with a default project structure and configuration.
- React Router: A collection of navigational components for managing routing in React applications.
- useState and useEffect: React hooks for managing component state and side effects.
- mockapi.io: A web service for creating mock APIs and generating fake data.
- Styled-components: A CSS-in-JS library that enables to write CSS styles in JavaScript components.
- localStorage: Web storage API for persisting user choices across sessions.


## Features

- When you click the Follow button, the text changes to "Following" and the button color changes. Your follow is added to the total follower count (e.g., from 100,500 to 100,501).
- The final state of the user's action is saved upon refreshing the page. If you click the button and refresh the page, the button stays in the "Following" state with the corresponding color, and the follower count does not reset to its original value.
- When you click the button again, the text and color revert to their initial states, and the follower count decreases by 1 (e.g., back to 100,500).
- In the code, the number 100,500 should be written as a single value (100500), but displayed with a comma in the UI (100,500).
- A personal backend is created for development using the UI service mockapi.io. The "users" resource is created and the user object is described as per the given specifications.
- User objects have the following fields: id, user, tweets, followers, and avatar. Avatars are represented by separate URLs in the "avatar" property.
- There should be at least 12 users with different values in the database. Pagination is implemented, displaying 3 cards per page, with the rest loaded by clicking "Load More."

## Authors

- [@alexxxusachev888](https://github.com/alexxxusachev888)

