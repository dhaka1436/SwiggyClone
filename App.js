

const heading = React.createElement(
    
    "div",
    {id:"parent",},
    
    React.createElement(
        
        "div",
        {id:"child",},

        [
            React.createElement(
            
                "h1",
                {},
                
                "Hello from Nested Element"
            ),
            React.createElement(
            
                "h1",
                {},
                
                "Hello from Nested Element"
            )
        ]
    )
)
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);