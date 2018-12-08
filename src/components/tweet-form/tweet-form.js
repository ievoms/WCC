import React from "react";
import Modal from "@material-ui/core/Modal";
import styles from "./tweet-form.module.scss";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { addTweet } from "../../actions";

class TweetForm extends React.Component {
  state = {
    title: "",
    description: "",
    imageUrl: ""
  };

  handleSave = () => {
    const { title, description, imageUrl } = this.state;
    if (!title || !description || !imageUrl) {
      return;
    }
    this.saveTweet(title, description, imageUrl);
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value
    });
  };

  saveTweet = (title, description, imageUrl) => {
    const tweet = {
      title,
      description,
      imageUrl
    };
    addTweet(tweet).then(() => this.setState(this.props.onClose));
  };

  render() {
    const { isOpen, onClose } = this.props;
    return (
      <Modal open={isOpen} onClose={onClose}>
        <div className={styles.modal}>
          <TextField
            className={styles.input}
            label="title"
            variant="outlined"
            onChange={this.handleChange("title")}
            value={this.state.title}
            required
          />
          <TextField
            className={styles.input}
            label="Description"
            multiline
            variant="outlined"
            onChange={this.handleChange("description")}
            value={this.state.description}
            required
          />
          <TextField
            className={styles.input}
            label="Image url"
            variant="outlined"
            onChange={this.handleChange("imageUrl")}
            value={this.state.imageUrl}
            required
          />
          <div className={styles.acton}>
            <Button
              onClick={onClose}
              className={styles.button}
              variant="outlined"
            >
              Cancel
            </Button>
            <Button
              className={styles.button}
              variant="outlined"
              color="primary"
              onClick={this.handleSave}
            >
              Save
            </Button>
          </div>
        </div>
      </Modal>
    );
  }
}

export default TweetForm;
