// Suppose we have structure like : 
{/* <div id = "parent">
    <div id ="child1">
        <h1>Welcome1</h1>
        <h2>Welcome2</h2>
    </div>
    <div id="child2">
        <h1>Javascript</h1>
        <h2>React</h2>
    </div>

</div> */}


const div = React.createElement(
    "div",
    {id: "parent"}, 
   [ 
    React.createElement("div", {id: "child1"}, [React.createElement("h1",{},"Welcome1"), React.createElement("h2",{},"Welcome2")]  ),
    React.createElement("div", {id: "child2"}, [React.createElement("h1",{},"Javascript"), React.createElement("h2",{},"React")]  )
   ]
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(div);




// const heading = React.createElement(
//     "h1", 
//     {
//         id: "heading", 
//         xyz:"abc"
//     },
//     "Welcome to React Development!"
//  );
//  console.log(heading); //  object
// const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root);
// console.log(typeof(root)); //object
// root.render(heading); // render function taking heading object