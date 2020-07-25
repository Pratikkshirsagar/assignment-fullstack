import React from 'react';

function Home(props) {
  const { name, courses } = props.userdata.data;
  const subject = courses.subject;

  return (
    <div>
      <h1>{name}</h1>
      <h2>{courses.title}</h2>
      <ul>
        {subject.map((sub, index) => (
          <li key={index}>{sub.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
