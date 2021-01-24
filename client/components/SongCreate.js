import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';
import { Link, hashHistory } from 'react-router';
import fetchSongsQuery from '../queries/fetchSongs';

// Will show the form for creating a new song 

class SongCreate extends Component {
  constructor(props) {
    super(props); // default stuff
    this.state = {title: ''};

  }

  onSubmit(event) {
    event.preventDefault(); //why event.preventDefault? 
    console.log(this.props);
    this.props.mutate({
      variables: {
        title: this.state.title
      },
      refetchQueries: [{ query: fetchSongsQuery }]
    }).then(() => hashHistory.push('/'));

  }

  render () {
    return (
      <div>
        <Link to="/">Back</Link>
        <h3>Create a New Song</h3>
        <form onSubmit={this.onSubmit.bind(this)}>
          <label>Song Title:</label>
          <input 
            onChange={event => this.setState({title: event.target.value})}
            value={this.state.title}
          />
        </form>
      </div>
    );
  }
}

const mutation = gql`
mutation AddSong($title: String) {
  addSong(title: $title) {
    title
  }
}
`;

export default graphql(mutation)(SongCreate);

