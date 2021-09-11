import React, { Component } from "react";
import { connect } from "react-redux";
import { Container, Card, Row } from "react-bootstrap";
import { fetchPostAndUsers } from "../actions";
import UserHeader from "./UserHeader";
export class PostList extends Component {
  componentDidMount() {
    this.props.fetchPostAndUsers();
  }
  renderList = () => {
    return this.props.posts.map((post) => {
      return (
        <Card key={post.id} /*style={{ width: "18rem" }}*/>
          <Row>
            <Card.Body>
              {/* <Image src="https://placekitten.com/300/300" roundedCircle /> */}

              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                fill="currentColor"
                className="bi bi-person-circle"
                viewBox="0 0 16 16"
              >
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path
                  fillRule="evenodd"
                  d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                />
              </svg>
              <Card.Title>{post.title}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Card Subtitle
              </Card.Subtitle>
              <Card.Text>{post.body}</Card.Text>
              <Card.Text href="#">
                <UserHeader userId={post.userId} />{" "}
              </Card.Text>
            </Card.Body>
          </Row>
        </Card>
      );
    });
  };
  render() {
    return <Container>{this.renderList()}</Container>;
  }
}

const mapStateToProps = (state) => ({ posts: state.post });

const mapDispatchToProps = { fetchPostAndUsers };
export default connect(mapStateToProps, mapDispatchToProps)(PostList);
