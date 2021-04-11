import React from "react";
import Student from "./Student.js";

class School extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ date: new Date() });
    }, 1000);
  }
  render() {
    return (
      <>
        <h2 id="time">It is {this.state.date.toLocaleTimeString()}. </h2>
        <ul>
          {this.props.school.map((student) => (
            <Student
              name={student.name}
              grade={student.grade}
              key={student.id}
            />
          ))}
        </ul>
      </>
    );
  }
}

export default School;
