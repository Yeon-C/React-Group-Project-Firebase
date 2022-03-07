import React, { useState, useEffect } from "react";
import TweetList from "./TweetList";
import Form from "./Form";
import "./css/TwitterPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { dbService } from "./firebase";
import { useParams } from "react-router-dom";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import SidebarLeft from "./SidebarLeft";
import SidebarRight from "./SidebarRight";

const TwitterPage = () => {
  let { user } = useParams();
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    dbService.collection("tweets").onSnapshot((snapshot) => {
      const tweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTweets(tweetArray);
    });
  }, []);

  return (
    <div>
      <div className="container columns">
        <div className="row ">
          <div className="col-12 col-sm-12 col-md-1 col-l-3 col-xl-3 column column-left">
            <a href="/">
              <FontAwesomeIcon icon={faTwitter} className="twitter-icon" />
            </a>
            <SidebarLeft tweetObj={user} />
          </div>
          <div className="col-12 col-sm-12 col-md-11 col-l-6 col-xl-6 column">
            <div className="card tweet-container">
              <Form tweetObj={user} />
              <div>
                {tweets.map((tweet) => (
                  <TweetList key={tweet.id} tweetObj={tweet} />
                ))}
              </div>
            </div>
          </div>
          <div className="col-12 col-sm-12 col-md-12 col-l-3 col-xl-3 column column-right">
            <SidebarRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwitterPage;
