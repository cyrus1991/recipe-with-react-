import React from "react";

import { Link } from 'react-router-dom'

const Recipes = props => (
  <div className="container">
    <div className="row">
            {props.recipes.map(recipe => {
                return (
                /* because I used map react wants to know each item which I get back from 
                        the map method specifically so for that we have to give each item  a 
                        soecefic key so I used Math.random() which I could also use thier names or 
                        anythin which is unique! */
        
                <div key = {Math.random() }className="col-md-4" style ={{marginBottom: "2rem"}} >
                        <div className="recipes__box">
                                <img
                                        className="recipe__box-img"
                                        src ={recipe.image_url}
                                        alt ={recipe.title} />
                                 <div className="recipe__text">
                                        <h4 className="recipes__title">
                                            {recipe.title.length <  20  ? `${recipe.title}` : `${recipe.title.substring(0, 25)}...` }
                                        </h4>
                                        <p className="recipes__subtitle">Publisher: <span>
                                        {recipe.publisher}
                                        </span></p>
                                 </div>
                                 <button className="recipe_buttons">
                                        <Link to={{
                                                pathname : `/recipe/${recipe.recipe_id}`,
                                                state: {recipe : recipe.title}
                                }} >View Recipe</Link>
                                </button>
                        </div>
                </div>
                );
            })}
  
     </div>
    
  </div>
);

export default Recipes;

