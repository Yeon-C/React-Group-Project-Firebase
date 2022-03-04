import React, { useState } from "react";
import "./css/Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faImage,
  faChartBar,
  faFaceSmile,
  faCamera,
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import icon from "./css/images/icon-image.png";
import { dbService } from "./firebase";

const Form = ({ tweetObj }) => {
  const [tweet, setTweet] = useState("");
  const [characterCount, setCharacterCount] = useState(0);
  const [Limit, setLimit] = useState("");

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setTweet(value);
    setCharacterCount(event.target.value.length);
    if (event.target.value.length == 120) {
      setLimit("LIMIT REACHED");
    } else {
      setLimit(" ");
    }
  };

  const submitForm = async (event) => {
    event.preventDefault();
    if (tweet.length > 0) {
      await dbService.collection("tweets").add({
        text: tweet,
        createdAt: Date.now(),
        user: tweetObj,
      });
      setTweet("");
      setCharacterCount(0);
    } else {
      alert("Please enter something to tweet.");
    }
  };

  return (
    <div className="card tweet-box w-100">
      <div className="card-header">
        <h3>Home</h3>
      </div>
      <div className="card-body">
        <img className="image-icon-form" src={icon} alt="Icon"></img>
        <div className="form-line">
          <input
            className="tweet-box-input"
            placeholder="What's happening?"
            type="text"
            name="tweet"
            id="tweet"
            value={tweet}
            onChange={handleChange}
            maxLength={120}
          />
          <div>
            <div>{characterCount}/120</div> <h8 className="warning">{Limit}</h8>
          </div>

        </div>         
        <span className="icons">
          <FontAwesomeIcon icon={faImage} className="icon image" />
          <FontAwesomeIcon icon={faCamera} className="icon camera" />
          <FontAwesomeIcon icon={faChartBar} className="icon chart" />
          <FontAwesomeIcon icon={faFaceSmile} className="icon smile" />
          <FontAwesomeIcon icon={faCalendarDays} className="icon calendar" />
          <FontAwesomeIcon icon={faLocationDot} className="icon location" />
        </span>
        <input
          className="tweet-box-button"
          type="button"
          value="Tweet"
          onClick={submitForm}
        />
      </div>
    </div>
  );
};

export default Form;
