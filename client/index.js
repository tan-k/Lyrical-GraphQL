import './style/style.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import ApolloClient from 'apollo-client'; // not tied to any client
import { ApolloProvider } from 'react-apollo';


import App from './components/App';
import SongList from './components/SongList';
import SongCreate from './components/SongCreate';
import SongDetail from './components/SongDetail';

/**
 * takes everysingle piece of data and runs it through this function
 * the stuff that's returned from the function is used to identify
 * - all id's in the application must be unique if you use this dataIdFromObject
 * - you must request all ids  of every pieces of query and mutation
 */

const client = new ApolloClient({
  dataIdFromObject: o => o.id 
});

const Root = () => {
  return (
    <ApolloProvider client={client}>
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute component={SongList} />
        </Route>
        <Route path="songs/new" component={SongCreate} />
        <Route path="songs/:id" component={SongDetail} />
      </Router>
    </ApolloProvider>
  );
};

ReactDOM.render(
  <Root />,
  document.querySelector('#root')
);
