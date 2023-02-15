# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm install`
### `npm start`
### `npm test`
### `npm run build`
### `npm run eject`


Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

- App.jsx Contain the main layout and the routes of the App, in the case we are only using ('/' and '/commonFollowers')   
- Home.jsx Is the place we show the list of user cards and the place to choise what Github users to compare the followers and show the common ones and send them to be listed on CommonFollowers component   
- CommonFollowers.jsx we fetch user's followers and make a new array of the commons only before we map into them for the display and keeping avatar and html_url of these users.

/* For the lack of time*/
- Styling is minimal
- we don't handle another errors ("no common users exist","no followers for this user" and others)
- We dont use all the data from the followers only the first 100, we can implement load more function after.