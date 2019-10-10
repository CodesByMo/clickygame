import React, { Component } from "react";
import ImageDiv from "../imagesDiv/imagesDiv";
import pic1 from "../images/pic1.png"
import pic2 from "../images/pic2.png"
import pic3 from "../images/pic3.png"
import pic4 from "../images/pic4.png"
import pic5 from "../images/pic5.png"
import pic6 from "../images/pic6.png"
import pic7 from "../images/pic7.png"
import pic8 from "../images/pic8.png"
import pic9 from "../images/pic9.png"
import pic10 from "../images/pic10.png"
import pic11 from "../images/pic11.png"
import pic12 from "../images/pic12.png"



class GuessesBox extends Component {
    state = {
        images: [{ src: pic1, isClicked: false, id: 1 }, { src: pic2, isClicked: false, id: 2 }, { src: pic3, isClicked: false, id: 3 }, { src: pic4, isClicked: false, id: 4 }, { src: pic5, isClicked: false, id: 5 }, { src: pic6, isClicked: false, id: 6 }, { src: pic7, isClicked: false, id: 7 }, { src: pic8, isClicked: false, id: 18 }, { src: pic9, isClicked: false, id: 9 }, { src: pic10, isClicked: false, id: 10 }, { src: pic11, isClicked: false, id: 11 }, { src: pic12, isClicked: false, id: 12 }]
    }
    shuffleBoard = () => {
        let newArray = this.state.images;

        for (var i = newArray.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = newArray[i];
            newArray[i] = newArray[j];
            newArray[j] = temp;
        }
        console.log(newArray);
    }

    onImageClick = (value2Check) => {
        let newState = this.state.images;
        for (let i = 0; i < newState.length; i++) {
            if (newState[i].id === value2Check) {

                if (newState[i].isClicked === true) {
                    this.props.resetScore();
                }
                else {
                    this.props.addScore();

                }
                newState[i].isClicked = true;
            }

        }
        this.setState({
            images: newState
        })



        this.shuffleBoard();
    }


    componentDidMount() {
        this.shuffleBoard();
    }
    render() {
        return (
            <div className="container-fluid">
                <div className="gameContent">
                    {this.state.images.map((image) => <ImageDiv imageSrc={image.src} onClick={() => this.onImageClick(image.id)} />)}
                </div>
            </div>

        )
    }
}

export default GuessesBox;