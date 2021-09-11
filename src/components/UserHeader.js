import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchUser } from "./../actions";
// const findUser = (users) => {
//   return users.find((user) => user.id === 1);
// };
// export const UserHeader = ({ userId, fetchUser, users }) => {

//   useEffect(() => {
//     fetchUser(userId);
//     // return () => {
//     //     if(userId === )
//     // }
//     console.log(findUser(users));
//   }, [userId]);
//   // useEffect(() => {})

//   return <div>{}</div>;
// };
// const newIds = new Set();
class UserHeader extends React.Component {
  /*
  componentDidMount() {
    // if (newIds.has(this.props.userId)) return;
    this.props.fetchUser(this.props.userId);
    newIds.add(this.props.userId);
  }
  */
  render() {
    if (!this.props.users) return null;
    else return <span>{this.props.users.name}</span>;
  }
}
// * ownProps that is passed to the component
const mapStateToProps = (state, ownProps) => {
  return { users: state.user.find((user) => user.id === ownProps.userId) };
};

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(UserHeader);
