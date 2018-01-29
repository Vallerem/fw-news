# Future Workshops news

Web-app that displays a view with a list of news and let's you see the details of each one of them.

## [Live demo](https://fw-news.herokuapp.com/)

## **Front end**

Built with and amazing JavaScript called [React](https://reactjs.org/). React let's you handle fairly easily the state and behaviour of the UI in your application on any environment.

In this case I've used create-react-app. A template provided by Facebook that comes with a nice configuration of babel, webpack, jest, eslint end so on. On the other hand, _React router_ handles the routing logic of the app, a pretty useful library I would say.

### Aditional Libraries:

* **Reactstrap**: A library to use Bootstrap 4 dedicated components
* **Redux**: A bit of overkill for and app with this size and complexity but _Redux_ let's you centralize your app state and offers many advantages. Components don't rely anymore on the props that are being passed to them and can access data through the connect HOC and retrieve the data from the global state of the app.
* **Axios**: A pretty popular library to handle API calls.
* **prop-types**: _prop-types_ makes your app less prone to errors. It checks the props that components should receive and warns you when something's wrong.
* **Jest** + **Enzyme**: A popular combo for TDD. _Jest_ made by Facebook and _Enzyme_ by Airbnb are a solid option for unit testing React apps.

Besides these libraries I've used a couple more for responsive design, JWT decoding, Sass implementation, string validation etc...

## **Back end**

Built in with Node and Express.js. Serves the static files and has the API endpoints. It it also the responsible for the JWT generation and verification. Many libraries are basic for the Express environment such as _body-parser_ to receive the data in POST/PUT requests or _nodemon_ to refresh the server on every change.

## **Deploy**

Deployed on Heroku. The 'server.js` file acts as the server entry point. and serves the static html with the bundled js and css. It also provides the API that provides the news data and handles the log in behaviour.

P.D: The live demo may take a while to start or render images as Heroku needs to wake up the server from its slumber :P.
