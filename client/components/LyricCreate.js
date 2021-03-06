import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import query from '../queries/fetchSong';

class LyricCreate extends Component {
  constructor(props) {
    super(props);
    this.state = { content: '' };
  }

  onSubmit(event) {
    event.preventDefault();

    this.props.mutate({
      variables: {
        content:  this.state.content,
        songId: this.props.songId
      }
    })

    this.setState({ content: ''})
  }

  render () {
    return (
      <form onSubmit={this.onSubmit.bind(this)}>
        <label>Add a lyric</label>
        <input 
          value={this.state.content}
          onChange={event => this.setState({content: event.target.value})}
        />
      </form>
    );
  }
}

const mutation = gql`
mutation AddLyric($songId:ID!, $content: String) {
  addLyricToSong(songId: $songId, content: $content) {
    id
    lyrics {
      id
      content
      likes
    }
  }
}
`;
export default graphql(mutation)(LyricCreate);