# Lyrical-GraphQL
Starter project from a GraphQL course on Udemy.com


# Overview: 
## Useful Libraries:
* `{graphql} from 'react-apollo'`: take a query/mutation and sandwich it with a component
* `gql from 'graphql-tag'`: allows you to write graphql queries/mutations 

## Other Notes
* **optimistic response** - is provided with Apollo to prevent the delay that occurs when you "LIKE" something for example. It will accept a response you anticipate and display it to the user. If the response is different than the expected, Apollo will update the response accordingly.
* **Query Variables**  - 
* `dataIdFromObject` was useful for refreshing data whenever a component is created. When a component is updated, Apollo will update all places where that component is being used.
  * assumes we are using unique ids across all ids 
    * this is fine for MongoDB 

```
const client = new ApolloClient({
  dataIdFromObject: o => o.id 
});
```

