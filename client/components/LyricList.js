import React, { Component } from 'react';
import gql from 'graphql-tag';
import { graphql } from 'react-apollo';


class LyricList extends Component {
  onLike(id, likes) {
    console.log(id);
    // how you call a mutation
    this.props.mutate({ 
      variables: { id },
      optimisticResponse: {
        __typename: 'Mutation',
        likeLyric: {
          id: id,
          __typename: 'LyricType',
          likes: likes + 1  // this is the optimisitic part of the response
        }
      } 
    });

  }

  renderLyrics() {
    return this.props.lyrics.map(({ id, content, likes }) => {
      return (
        <li key={id} className="collection-item">
          {content}
          <div className="vote-box">
            {likes}
            <i className="material-icons"
            onClick={() => this.onLike(id, likes)}
            >thumb_up</i>
          </div>
        </li>
      )
    })
  }

  render () {
    console.log(this.props)
    return (
      <ul className="collection">
        {this.renderLyrics()}
      </ul>

    );
  }
}

const mutation = gql`
mutation LikeLyrics($id: ID!) {
  likeLyric(id: $id) {
    id
    likes
  }
}`;

export default graphql(mutation)(LyricList);