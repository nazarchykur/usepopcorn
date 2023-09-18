import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import StarRating from "./StarRating";

// function Test() {
//   const [movieRating, setMovieRating] = useState(0);
//   return (
//     <div>
//       <StarRating
//         maxRating={10}
//         color="purple"
//         size={36}
//         onSetRating={setMovieRating}
//       />
//       <p>This movie has a rating of {movieRating}</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={"5"} />
    <StarRating maxRating={10} color="blue" size={36} />
    <StarRating
      messages={["Terrible", "Bad", "Okay", "Good", "Great"]}
      defaultRating={3}
    />
    <StarRating maxRating={10} color="green" size={24} />
    <Test /> */}
  </React.StrictMode>
);
