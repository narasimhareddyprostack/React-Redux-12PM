import React from "react";

class Movie extends React.Component{
movie_Name="KGF3";

render(){
  return <div>
            <h3>Movie Component</h3>
            <h3>Movie Name:{this.movie_Name}</h3>
         </div>
  }

}
export default Movie;