import React, { Component } from "react";

/**
Initialize state to save the following data:
* top text
* bottom text
* random image (initialize with "http://i.imgflip.com/1bij.jpg"))
*/
export default class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      };
      //bind the handle method in the constructor
      this.handleChange = this.handleChange.bind(this)
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        //console log the first element to see the ID, name, url of the meme property
        console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  /**
   * API that provides a bunch of meme images. Use componentDidMount to fetch
   * make an API call to "https://api.imgflip.com/get_memes" and save the data that comes back (`response.data.memes`) to a new state property called `allMemeImgs`.
   * Also, the data that comes back is an array)
   */
  
    handleChange(event) {
        console.log("Working!!!")
    }    
    
    

//Create 2 input fields inside the return: one for topText/one for bottomText (these are controlled forms so make sure to add all attributes you'll need)
//Create the onChange handler method: should update the state on every change of the input box
    
    
  render() {
    return (
      <div>
        <h1>Generator Section</h1>;
            <form className="meme-form">
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.topText}
                    // onChange={ }
                />
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={this.state.bottomText}
                    // onChange={ }
                />
            
          <button></button>
        </form>
      </div>

      //stub out a form to wrap everything in the output boxes
    );
  }
}
