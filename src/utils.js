import React from "react";

export function getImageUrl(person, size='s'){
    return(
        'https://imgur.com/'+
        person.imageID +
        size +
        '.jpg'
    );
}