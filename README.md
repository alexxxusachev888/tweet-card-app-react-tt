
# User Cards Project

This project is a web application that displays user cards according to the given design. Each card shows the user's avatar, name, number of tweets, and followers. The application allows users to follow or unfollow other users, and the number of followers is updated accordingly. It also implements pagination, displaying up to 3 cards per page, with a "Load More" button to load additional cards.

## Technologies

- React.js library
- Create React App 
- React Router
- React Hooks (useState and useEffect)
- mockapi.io
- Styled-components
- localStorage


## Features

- When you click the Follow button, the text changes to "Following" and the button color changes. 
- The final state of the user's action is saved upon refreshing the page. If you click the button and refresh the page, the button stays in the "Following" state with the corresponding color, and the follower count does not reset to its original value.
- When you click the button again, the text and color revert to their initial states, and the follower count decreases by 1.
- A personal backend is created for development using the UI service mockapi.io. The "users" resource is created and the user object is described as per the given specifications.
- User objects have the following fields: id, user, tweets, followers, isFollowing and avatar. Avatars are represented by separate URLs in the "avatar" property.
- There are at least 12 users with different values in the database. Pagination is implemented, displaying 3 cards per page, with the rest loaded by clicking "Load More."

## Running the Project

- Clone or download the project repository.
- Install the required dependencies by running npm install or yarn install.
- Start the development server by running npm start or yarn start. The application will be available at http://localhost:3000.

Now you can interact with the user cards, follow and unfollow users, and see the updated follower counts. The application will also remember your choices upon refreshing the page.

## Authors

- [@alexxxusachev888](https://github.com/alexxxusachev888)

