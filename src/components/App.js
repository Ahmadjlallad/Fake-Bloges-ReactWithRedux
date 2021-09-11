import React from "react";
import PostList from "./PostList";
import { Container } from "react-bootstrap";
function App() {
  return (
    <Container>
      <PostList />
    </Container>
  );
}
export default App;
// * load data from server in redux
/*
NOTE: 
FIXME Very important
// 1- ComponentDidMount()
// 2- call action creator in componentDidMount()
// 3- Action run a code to make an API call
// 4- Action creator will return an Action that Action will return a promise
// 5- dispatch the action to the store and send it to all reducers 
// 6- and because we generated some new state oject redux / react-redux cause our app to re-render
 */
