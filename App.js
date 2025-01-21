const heading=React.createElement("div",{id:"heading"},[
    React.createElement("div",{id:"child"},[
        React.createElement("h1",{},"h1tagg"),
        React.createElement("h2",{},"h2tag"),
    ]),
    React.createElement("div",{id:"child1"},[
        React.createElement("h1",{},"h1tag"),
        React.createElement("h2",{},"h2tag"),
    ]),
]);

 






const root=ReactDOM.createRoot(document.getElementById("root")).render(heading)