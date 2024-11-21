document.addEventListener("DOMContentLoaded", function () {
  const parent = React.createElement(
    "div",
    { id: "parent" },
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", { id: "h1tag" }, "I'm an h1 tag"),
      React.createElement("h1", { id: "h2tag" }, "I'm an h2 tag"),
    ])
  );
  const heading = React.createElement(
    "h1",
    { id: "heading" },
    "Hello World from Reacts"
  );
  console.log(parent);
  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(parent);
});
