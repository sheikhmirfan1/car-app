# React Router Workshop 

### Context 
- This workshop will make you practice react-router-dom, the library used to manage the routing in react. One route => One component


### Instructions 

#### I - Setup 
- The application has been installed using vite, you need to install the packages before running the project : npm .......
- You can now run the projet using npm run dev, the app will run on your port 5173.
- You can see that you have an hello world printed on the home page. Before starting working on the project you need to install a few packages.
- We will be using react-router-dom and axios for the bonus.
- Once the packages are installed we can start working.

#### II - Router
- To be able to use the library react-router-components and all the components in our app we need to wrap the first component call in our main.jsx by the BrowserRouter.
- Start by importing in the main.jsx the component BrowserRouter and wrap the App component inside.  [HINT](https://reactrouter.com/en/main/router-components/browser-router)
- Your App component will become now the router of your application, you can choose to rename it AppRouter.
- You will now define in our AppRouter, the routing of our application. Declare the component Routes and inside the Route component.
- Each route has an attribute the path and the element to display when visiting the path. [HINT](https://reactrouter.com/en/main/route/route)
- We will declare 3 routes : 
- /home, which will link to the Home component, a component that must display a welcome message.
- /contact, which will link to a Contact component, the component should display a form.
- /users, which will link to a Users component, that must display a list of users.
- Try to access those components by typing the url directly in your browser.

#### III - Navigation
- Now that all your routes redirect to the right components, we must create the navigation.
- Start by creating a NavBar component, this component will be responsible for the navigation of your app.
- In this component you must import the Link component coming from react-router-dom [HINT](https://reactrouter.com/en/main/components/link)
- Declare a return statement the different Links that must head to your components, use of the attribute 'to'.
- This NavBar component must be called in the AppRouter component before the declaration of the Routes, that will allow the component to be displayed wherever you go in the app !
- Try it out and if it works let's go for the next step !

#### IV - API call
- Create a new component Weather, this component should be accessible through the /weather path and should be also present in the NavBar.
- The weather component should be displaying the weather in Prague.
- For that you must use the openweatherapi [HINT](https://openweathermap.org/current)
- Don't forget to generate a key in the website to access the API.
- Create the state : data, loading and error. When you receive the response from the api using axios, store the response inside the state.
- Remember to always console.log the data step by step to be sure of what you are receiving from the api.
- Once the data arrives, display it in the return statement of the component.
- Bonus : We want to call the api when we click on the submit of a button. When clicking on the button we also want to pass the search value we are getting from an input to the api call. We will make dynamic the api call and receive data everytime from a different place following our input values. 
- https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key} replace the city name by your input value.


#### V - API call II
- The goal of this second apiCall will make you practice apiCalls and useEffect.
- You will retrieve information from an API and display a new quote every 5 seconds.
- In a new component that you will choose the name you will have to display a quote coming from the [API](https://ron-swanson-quotes.herokuapp.com/v2/quotes).
- Make sure that this component is accessible through the routing and the NavBar component.
- Setup the components with 3 states, data, error and loading and reproduce a simple API call schema as we did for the weather component.
- As you can see everytime we fetch the api we are receiving a different quote as response. 
- I want you to find a way to call the apiCall function every 5 seconds, inside the useEffect.


#### VI - useParams
- In the AppRouter, declare a route with the path /user/:userId and the element User (You should also create the User component that only return an h1 for now)
- Try this route manually by having in the your url /user/1 for example, if it works we can move forward.
- In the Users component, transform our array of strings by an array of ojects with the property id and name.
- Instead of just returning a list with the name inside, I want you to wrap this li inside a Link component.
- The to property of the Link should redirect to {/user/user.id} try it out 
- If everything is working we want to get the id from the url, for that we have to use the useParams. [HINT](https://reactrouter.com/en/main/hooks/use-params)
- I let you find the right syntax to call the useParams. Once you have it you can just dislay it in the return