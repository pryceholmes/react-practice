import React from "react"
import ReactDOM from "react-dom/client"

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

 */

function CustomComponent() {
    return (
        <div>
            <h2>Reasons why i am excited to be learning React</h2>
            <ul>
                <li>So I can contribute to my capstone project</li>
                <li>So I can be a good team member</li>
                <li>So I can learn about front end development</li>
            </ul>
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<CustomComponent />)
