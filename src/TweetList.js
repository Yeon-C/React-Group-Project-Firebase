import React from "react";
import "./css/TweetList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faComment,
  faRetweet,
  faHeart,
  faUpload,
  faTrash,
  faEllipsis,
} from "@fortawesome/free-solid-svg-icons";
import icon from "./css/images/icon-image.png";
import { dbService } from "./firebase";

const TweetList = ({ tweetObj }, { tweetKey }) => {
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this tweet?");
    if (ok) {
      await dbService.doc(`tweets/${tweetObj.id}`).delete();
    }
  };

  return (
    <div key={tweetKey} className="card tweet-list w-100">
      <div className="card-body">
        <img className="image-icon-tweet-list" src={icon} alt="Icon"></img>
        <FontAwesomeIcon icon={faEllipsis} className="ellipses" />
        <div className="tweet-bar">
          <h5 className="card-title tweet-bar-item">{tweetObj.user}</h5>
          <h6 className="card-subtitle mb-2 text-muted tweet-bar-item">
            @{tweetObj.user}
          </h6>
        </div>
        <p className="card-text">{tweetObj.text}</p>
        <div className="tweet-list-icons">
          <FontAwesomeIcon
            icon={faComment}
            className="tweet-list-icon comment"
          />
          <FontAwesomeIcon
            icon={faRetweet}
            className="tweet-list-icon retweet"
          />
          <FontAwesomeIcon icon={faHeart} className="tweet-list-icon heart" />
          <FontAwesomeIcon icon={faUpload} className="tweet-list-icon upload" />
          <span onClick={onDeleteClick}>
            <FontAwesomeIcon
              icon={faTrash}
              className="tweet-list-icon delete"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default TweetList;
