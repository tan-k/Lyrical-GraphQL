import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import { Link } from 'react-router';
import query from '../queries/fetchSongs';

// class based becuase we want some helper methods inside 


class SongList extends Component {
  renderSongs () {
    return this.props.data.songs.map(song => {
      return (
        <li key={song.id} className="collection-item">
          {song.title}
        </li>
      );
    })
  }

  render() {
    if (this.props.data.loading) { return <div>Loading...</div>;}

    return (
      <div>
        <h2>Song List</h2>
        <ul className="collection">
          {this.renderSongs()}
        </ul>
        <Link
          to="/songs/new"
          className="btn-floating btn-large red right"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    ); 
  }
}


// bonding step 
export default graphql(query)(SongList);