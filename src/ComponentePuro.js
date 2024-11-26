import React from "react";


function Recipe({ drinkers }){
    return(
        <ol>
            <li>Boil {drinkers} cups of water </li>
            <li>Add {drinkers} spoons of tean and {0.5 * drinkers} spoons to spicy</li>
            <li>Add {0.5 * drinkers} cups of milk to Boil and sugar to taste</li>
        </ol>
    )
}

export default function Receita(){
    return(
        <section>
        <h1>Spiced Chai Recive</h1>
        <h2>For two</h2>
        <Recipe drinkers={2}></Recipe>
        <h2>For a gathering </h2>
        <Recipe drinkers={4}></Recipe>

    </section>
    )
}