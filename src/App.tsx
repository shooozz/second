import React, { useEffect, useState } from 'react';

function App() {
  useEffect(() => {
    fetch('https://api.airtable.com/v0/apprKEp9E3uOBnWVE/projects', {
      headers: {
        Authorization: 'Bearer patZfO3Gg5Mk6J8uh.0cdb6cdf7a370f8dfca688934bcb3507fd504f7fa6e5ddcd06fd15bbd555c3f8'
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }, []);
  return (
    <div>
      <h1>Hello Dima, this is the main branch</h1>
    </div>
  );
}

export default App;
