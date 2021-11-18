Create React App
Create React App here (Links to an external site.), is a tool created by Facebook (the creators of React), to allow you to start developing a React application FAST, without having to configure every little thing, thereby fixing one of the cons to React development. This is the tool we'll be using to create our React applications.

run npx create-react-app react-fundamentals in the folder where you want to create your React fundamentals stuff we'll be learning in the next week +.
(npx is essentially the same thing as npm, but reaches out to the cloud to run the create-react-app CLI [command line interface])
next cd react-fundamentals and then open it in your VS code. If you have installed it, you can run code . to open it in VS code.
So what just happened? The terminal went through a long process and created a bunch of folders and files. The "create-react-app" CLI is used to build the scaffold of a react application using a boilerplate that someone else has built. This shortens the setup and configuration phase of building a front-end web application. Remember that there are A LOT of underlying technologies and packages that are automatically installed and configured, and scripts to run and build your application. Knowledge of these processes is crucial for a JavaScript developer, so when you leave the program you should challenge yourself to manually set up a React application.

Understanding the Starting Structure
Check out the different files in your new React application. This is what it will look like every time! Here's an overview of the important files and folders, and what they do:

package.json: this file is critical in basically all JS projects, not just React projects. This contains information about the project itself, such as author, version, scripts that it can run, and perhaps most importantly versions of packages you're using in the project. This is where packages like react are recorded with their version information, so that anyone else who wants to run your app can have the same configuration you have, so that it will work!
node_modules: this folder is where all of the packages you specified in your package.json get installed to when you run npm install. Generally speaking, you never want to modify anything in  as these are third party packages.
.gitignore: this file is a list of all the things to ignore from git. Generally speaking, node_modules and files with sensitive info go in here.
public: this folder houses the public things, so basically what is sent when our apps get deployed, since most things read from index.html.
src: This folder is where all of the JavaScript and CSS files you'll create will go.
index.js: this is the file that starts off React, by grabbing the div from index.html, and starting our React stuff off. We generally don't touch much in index.js.
App.js: the main file of our React application that we'll start developing in.
App.css: the main CSS file for our React application.

What is React Router Dom?
react-router-dom is a package that we installed from NPM, which you can see here (Links to an external site.). This package serves one main purpose, and that is enabling us to provide routing within our application in React. If you think back to gold badge and how we routed things, it was by using anchor tags in HTML. However, with react applications, we want to stray away from the use of anchor tags since they reload the entire page. Considering we're using React to make a single page application, when we want to route to a new "page", it's actually not going to reroute our whole web page, but instead just change the content - or in our case - show us a different component. So the package in which we can achieve this through is react-router-dom!

In summary, react-router-dom, allows us to navigate to different sections of our single page application, without causing the page to redirect or refresh.

How We Are Using React Router Dom
As with most things in coding, there are several ways to set up react-router-dom, but all of them share the same pieces. In our application we're using a few of these pieces to do our routing. So we'll start with looking in our App.js file.

First, let's look at our import:
    import {
        BrowserRouter as Router
    } from 'react-router-dom';

Notice we're importing the specific part of the package BrowserRouter but we're calling it Router. This is a common rename of the import, because developers are lazy and would rather type Router later, instead of BrowserRouter. Note that this is how you can change the name of specific imports.

Then, let's look at how we use our Router in the code:

    return (
    <div className="App">
      <Header />
      <Router>
        <Sidebar />
      </Router>
      <Footer />
    </div>
  );

So, in our return, we first are calling our Header component, which is not inside of the Router. Basically this means that the Header component will not be affected by any route changes at all. Same thing with footer, they will show up regardless of what route we are at! The only thing that changes is the main content of our page, which is controlled by <sidebar />!

In order for react-router-dom to work, everything that is part of the package has to be wrapped in a Router. That's basically how it knows that we are using react-router-dom. Without this Router, usually declared in App.js or even index.js, our routing won't work. So don't forget this step when using the package in the future!

React Router in Sidebar
Above we saw how to set up the initial Router. Now, let's look at what we've already done in Sidebar to understand how to use the other pieces of this package.

Let's look at our imports first:
    import {
        Route,
        Link,
        Switch
    } from 'react-router-dom';

Notice that we are importing three things from react-router-dom. These are the last three things we'll be using from the package in this application! We didn't rename any of these imports like we did with BrowserRouter since they are already short!

Next, let's look at how we set up our routing. We need some way to tell react-router-dom what needs to be shown at each route. So when I go to /functionalcomponent at the end of my url, what will be shown? react-router-dom has no idea until I tell it what to do! We do that using <Route />s.

Let's look at the code we already have in sidebar:
    <div className='sidebar-route'>
        <Switch>
                <Route exact path='/home' element={<Home/>}/>
                <Route exact path='/resources' element={<Resources/>}/>
                <Route exact path='/' element={<Home/>}/>
            </Switch>
    </div>

Let's look at a Route ina bit more depth.
    <Route exact path='/home'><Home /></Route>

This is how we can set up an official Route. Let's first start with exact - what does it mean? exact limits the path that can match this route to only the words shown (remember that a 'path' is just the url you see in the browser - the path can either refer to the entire url 'http://localhost:3001/home' or just the part of the url after the base portion, '/home', in this case). So above, /home will take us to the Home component, but /home/3 will not. Without exact on the Route, /home/3, would also take us to the home component.

Next, is . This is just saying that the path where this component should be shown is !

One more important thing, notice how the component is declared between the open and closing Route tags. Ensure that there are no excess spaces in between the Routes as well, as this could cause it to break. Each Route has to have only one child component. So if you wanted multiple components in one route, you'd have to wrap them all in a div!

state Overview
State is an important, and fun, concept in React.  State is information that a component stores and keeps track of which may change over time.  State data (which can be primitive data types, like strings, numbers, boolean, etc. or complex data types like functions, arrays, objects) is usually representational data which the user will see.  This makes sense, as React is a UI-focused library.  Here are some important concepts related to state to be aware of before we build out our component and explore state together:

State data is local to the component it's stored in.  This means that if I define a state variable that stores a string for user input in one functional component, it's only available in that component.  Props (which we'll look at soon) allow us to break this rule somewhat, but by default, state data is only in the component in which it has been defined.
State data is usually representational (data that the user will see), but it doesn't have to be.
Along with props, change the state data of a component 're-fires' that component.  This means that if I change a state variable from storing 'Rob' to storing 'Becky', the entire component will be 're-painted' to the screen.  This is much of the reason why rule #2 is true--changing state updates the component to the screen, so state data tends to be representational.
State used to be a cumbersome object to work with in React, but as of version 16.8.0, it's been simplified quite a bit.  Hooray!

useState
useState() is a new hook that's part of the React API.  It has a very simple syntax to use, so let's explore that below!

const [//1stateVariable, //2SetStateVariable] = useState(<initial value here>);

As you can see above, useState uses array de-structuring to provide two things to the developer.  The first thing provided is the state variable, with whatever name you've provided.  This state variable will have a value equal to the initial value provided to useState, but because state variables can change over the life of a component, the value doesn't have to be constant.  Secondly, you get access to a function, which by convention is called 'set<state variable name here>'.  This function is the only way you should ever change a state variable.  This function not only changes the value of the state variable, but also signals to React that this component needs to be 're-fired' because of the variable change.

Before we build our own component showcasing state, it's important to mention a few last points:  useState is a hook built into React.  We'll explore hooks later in this book, but for now, it's important to know that useState is an example of a larger React concept.  Finally, whenever you declare state variables and call useState, you need to do so at the 'top level' of your component.  Don't bury useState within functions or properties.  The best place to put useState is at the very top of your component.  Whew!  Let's explore useState with code!

useEffect Overview
Effects are basically an abbreviation for component 'side effects'.  Effects are, for lack of a better term, actions that occur when there is a state change. 

For instance, if a user clicks on a button to submit a character to search for in an API, an effect will handle the fetch call to make that API request happen, based upon the state change of a variable tied to that button.  Or, perhaps, you want to change the background color of your webpage every 10th time the user types into an input field.  This would also be managed by an effect--as the state variable controlling the string to that input field changes, an effect is going to determine when to update the background color of your site. 

This may be too fuzzy to understand completely but remember again that effects are, at their core, actions that occur when there's a state change.

Let's talk about the useEffect API as our starting point for understanding them better:

useEffect(callback function, [dependency 2, ...]);

useEffect (() => {
    console.log('hello!');
}, [sampleStateVariable])

Ok, so what would this do?!  Notice that our useEffect is basically just two parts: first, we have a callback function (in this case an arrow function) that console.logs 'hello!'.  Second, we have a variable in array brackets.  Even though this looks alien, the way it works is pretty simple--whenever there's a change to 'sampleStateVariable', the callback function which console.logs runs a single time.  That's it!

Before we build out a new component and start to play with effects ourselves, let's highlight a few big ideas for effects:

useEffect is, like state, just a Hook.  We are 'hook'-ing into changes to our component with a useEffect call
Every useEffect call runs the function we pass it when there's a state change (there are some exceptions to this)
You can write a conditional in your callback function or use the array dependency to handle when the effect runs
They can return a cleanup function to avoid memory leaks.
The component we're going to build will help these ideas come to light.  Let's go build!
So, effectively, for every 1 time the sampleStateVariable changes, we console.log('hello!') to the console.  Not too bad!

<FunctionalComponent string="Color Toggle" function={toggleColor} />
                <FunctionalComponent string="Background Color Toggle" function={toggleBackgroundColor} />
                <FunctionalComponent string="Border Radius Toggle" function={toggleBorderRadius} />
                <FunctionalComponent string="Border Style Toggle" function={toggleBorderStyle} />