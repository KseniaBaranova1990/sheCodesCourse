import React from "react";

const styles = {
  fontSize: "2rem",
  color: "red",
};

class Student extends React.Component {
  render() {
    return (
      <li style={styles}>
        The name is {this.props.name} and the average grade is{" "}
        {this.props.grade}
      </li>
    );
  }
}

export default Student;
