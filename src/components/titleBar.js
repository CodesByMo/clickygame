
import React from "react";
import "./style.css";
import Logo from './images/logo.png';


function TitleBar(props) {

    return (
        <div className="container-fluid">
            <div className="titleBar">
                <div className="row">
                    <div className="col-4">
                        <div className="gameTitle">
                            <p><img src={Logo} className="logoImage" alt="Naruto"></img> Memory Game</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="status">
                            <p>{props.message}</p>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="scoreStats">
                            <p>Score : {props.score} | Top Score : {props.topScore}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TitleBar;

