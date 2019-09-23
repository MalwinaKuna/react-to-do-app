import React from "react"
import ReactDOM from "react-dom"
import App from "./components/App"
import styles from "./style.css"


// function App (){
//     const date = new Date();
//     const hours = date.getHours();
//     let timeOfDay;
//     const styles = {color: "#FF8C00",
//     backgroundColor: "red",
//     fontSize: 24}
//     if(hours< 14) {
//         timeOfDay = "morning"
//     } else if (hours >= 14 && hours < 17) {
//         timeOfDay = "afternoon";
//         styles.color="white";
//     } else {
//         timeOfDay = "night";
//     }

//     return (
//         <h1 style={styles}>Good {timeOfDay}!</h1>
//     )

// }

ReactDOM.render(<App />, document.getElementById("root"));
