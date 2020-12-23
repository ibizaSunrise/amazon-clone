# Amazon "Clone" using ReactJS 

## 1. Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
This is the Welcome screen of React.

![Screenshot_1](https://user-images.githubusercontent.com/66250856/102889491-0dd97580-445b-11eb-9f83-37d07251c42d.png)

 We need to clean up our React project. Delete (optional) three files from the src folder from the React App. Those three files are
App.test.js
logo.svg
setupTests.js
We are deleting these files because these are not relevant to us in any project.

![Screenshot_2](https://user-images.githubusercontent.com/66250856/102889495-0f0aa280-445b-11eb-8646-ad82a882c6c2.png)

Go to App.js and remove the following line from code:

import logo from './logo.svg';

Also remove everything under the first <div> element from your App.js file. You’re code should look like the following:
  
![Screenshot_3](https://user-images.githubusercontent.com/66250856/102891201-14b5b780-445e-11eb-9742-64d574ab31d4.png)

Now let’s cleanup the CSS files a bit.
Go to App.css and remove all the contents of your file.

Now go to index.css and add this piece of code on the top:

![Screenshot_4](https://user-images.githubusercontent.com/66250856/102891206-15e6e480-445e-11eb-959b-5e52486b3439.png)

This will get rid of the margin and padding of the page.


## 2. Setting up the React Router

A very important thing to consider in a React app is the navigation (moving from one page to another) of the users. Since React is a single page application, it doesn’t support multiple routes by default.
But the node packages come to our save. There’s a package named react-router-dom which allows us to create routes for our React project. Setting up is one time, and then whenever you add a new page, you just need to inform the Router.

Open your terminal and enter the following command to install react-router-dom:

npm install react-router-dom

Let’s start setting up the React Router. First of all, we need to import the dependencies. Import them using the following code at the top of App.js. Use the below code in your App.js.

![Screenshot_5](https://user-images.githubusercontent.com/66250856/102984311-b3e5b800-450d-11eb-92a8-76dcbb25b501.png)

Our motive is to have Home component to be rendered on the default route that is “/”.
To use the Home component, we need to import it, so we imported it at the top.
We need to wrap the entire app into the Router component, so that every component is a part of Router and has access to the Router.
The switch specifies that the components beneath it are to be rendered only under certain routes. 
The Route component is used under the Switch component. The Route component specifies the rules of the Routes and components to render at specific route. For example in this case we have the Home component render at “/” route. We will be adding more routes to this.

## 3. Creating the Navbar

We are going to use a package for icons, and we need Material Icons to use them. So open your terminal and write the following command:

npm install @material-ui/core @material-ui/icons

Once you installed the dependencies, you can use it to display SVG icons which are provided by Material UI. Material UI is a very popular UI library for React which has a lot of prebuilt components just as icons which makes life easier.
Now let’s make a new component called Header.js and let’s make a new file and call it Header.css just as we did with the home component. In each component, we will follow the same steps
We have to initialize the component boiler plate using “rfce” and follow the BEM convention and include the CSS file and update the class names.
We have the component ready. Before we actually start designing it, we need to include it in Router so that we can actually display it. In App.js where you mentioned Route for “/” route, let’s include the Header component in it too. Your updated route should look like this:

![Screenshot_6](https://user-images.githubusercontent.com/66250856/102985213-19867400-450f-11eb-8c5d-6272197066f4.png)

Let’s get back to Header.js and start setting up the layout of our classic Amazon Navbar. The Hrader component should look like this:

![Screenshot_7](https://user-images.githubusercontent.com/66250856/102986018-6880d900-4510-11eb-95d6-8e31e8fcf6d0.png)



