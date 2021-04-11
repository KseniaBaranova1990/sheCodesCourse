import React from "react";
import Tweet from "./Tweet";

const Tweets = (props) => {
  return (
    <section>
      <Tweet name={props.me} age={props.age} />
    </section>
  );
};

export default Tweets;
