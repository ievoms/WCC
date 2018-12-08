import React from "react";
import Card from "../card";
import styles from "./tweet-list.module.scss";
import { tweetsRef } from "../../config/firebase";

class TweetList extends React.Component {
  state = {
    tweets: null
  };

  componentDidMount() {
    tweetsRef.on("value", snapshot => {
      const tweets = snapshot.val();
      this.setState({ tweets });
    });
  }

  renderTweets = () => {
    const { tweets } = this.state;
    return tweets
      ? Object.keys(tweets).map(id => (
          <Card
            key={id}
            imageSrc={tweets[id].imageUrl}
            description={tweets[id].description}
            title={tweets[id].title}
          />
        ))
      : null;
  };
  render() {
    return <div className={styles.cardGrid}>{this.renderTweets()}</div>;
  }
}
export default TweetList;
