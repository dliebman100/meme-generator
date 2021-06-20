# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Steps toward creating the components
**Confirm that index.js** is running the ```App``` component successfully. 

Then do your imports: 

```import React from "react";```

```import ReactDOM from "react-dom";```


1) Used the [API Meme Generator](https://api.imgflip.com/get_memes)

2) Header.js is just a component that displays things so make it a functional component

3) Move onto the generator section:  
 - The component needs to be a class w/constructor and super
 - Initialize the top text data and the bottom text along with a random image
 - Use componentDidMount() method to make img API call and .then promise to receive the .JSON data

 - Save the data that comes back to a variable of the new state property. ```const memes = this.state.response.data``` to a new state property called ```allMemeImgs``` 

 - Since the data is an array, we can console.log the data of the first element to see the ID, name, and URL of the meme properties
 
 - Then create 2 input fields inside the return along with an onChange handler method: should update the state on every change of the input box

