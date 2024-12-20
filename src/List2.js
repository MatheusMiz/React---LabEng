import { useState } from "react";

let initialArtists = [
    {id: 0, name:'Marta Colvin Adrade'},
    {id: 1, name:'Lamidi Olonade Fakeye'},
    {id: 2, name:'Louise Nevelson'},
];

export default function List2(){
    const [artists, setArtists] = useState(
        initialArtists
    );

    return(
        <>
            <h1>Inspiring Sculptors:</h1>
            <ul>
                {artists.map(artist => (
                    <li key={artist.id}>
                        {artist.name}{''}
                        <button onClick={() => {
                            setArtists(artists.filter(a => a.id !== artist.id))
                        }}>Delete</button>
                        </li>

                ))}
            </ul>
        </>
    )
}