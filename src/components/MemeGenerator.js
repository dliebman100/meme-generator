import React, { Component } from "react";

/**
Initialize state to save the following data:
* top text
* bottom text
* random image (initialize with "http://i.imgflip.com/1bij.jpg"))
*/
class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      topText: "",
      bottomText: "",
      randomImg: "http://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
    };
    //bind the handle method in the constructor
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    fetch("https://api.imgflip.com/get_memes")
      .then((response) => response.json())
      .then((response) => {
        const { memes } = response.data;
        //console log the first element to see the ID, name, url of the meme property to check if it's correctly firing
        // console.log(memes[0]);
        this.setState({ allMemeImgs: memes });
      });
  }

  /**
   * API that provides a bunch of meme images. Use componentDidMount to fetch
   * make an API call to "https://api.imgflip.com/get_memes" and save the data that comes back (`response.data.memes`) to a new state property called `allMemeImgs`.
   * Also, the data that comes back is an array)
   */

  handleChange(event) {
    // console.log("Working!!!");
    //pull the name and value properties from event.target so you can get the state that you're supposed to update (topText and bottomText)
    const { name, value } = event.target;
    //you can write a console.log or put something in the render to check if it's working
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    //get a random int(index in the array)
    const randomNum = Math.floor(Math.random() * this.state.allMemeImgs.length);
    const randMemeImg = this.state.allMemeImgs[randomNum].url;
    //get the meme from that index
    //set 'randomImg' prop to the .url to the random item grabbed
    this.setState({ randomImg: randMemeImg });
  }
  //Create 2 input fields inside the return: one for topText/one for bottomText (these are controlled forms so make sure to add all attributes you'll need)
  //Create the onChange handler method: should update the state on every change of the input box

  render() {
    return (
      <div>
        {/* <h1>Generator Section</h1>; */}
        <form className="meme-form" onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="topText"
            placeholder="Top Text"
            value={this.state.topText}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="bottomText"
            placeholder="Bottom Text"
            value={this.state.bottomText}
            onChange={this.handleChange}
          />

          <button>GENERATE!</button>
        </form>
        <div className="meme">
          <img src={this.state.randomImg} alt="" />
          <h2 className="top">{this.state.topText}</h2>
          <h2 className="bottom">{this.state.bottomText}</h2>
        </div>
      </div>

      //stub out a form to wrap everything in the output boxes
    );
  }
}
/**
 * Create a method that, when the "Gen" button is clicked, chooses one of the
 * memes from our `allMemeImgs` array at random and makes it so that is the
 * meme image that shows up in the bottom portion of our meme generator site
 */
export default MemeGenerator;
