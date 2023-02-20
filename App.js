import React from 'react';
import ReactDOM from'react-dom/client';

const heading = React.createElement(
    "h1",
    { id: "title" },
    "Namastey All!!"
  );
  const heading2 = React.createElement(
    "h2",
    { id: "title" },
    "How are you doing?"
  );
  const container = React.createElement(
    "div",
    { id: "container", style: { background: "beige" } },
    [heading, heading2]
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));

  root.render(container);