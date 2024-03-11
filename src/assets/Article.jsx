import React from 'react';

// el componente Article tendra la estructura HTML requerida y definiremos las props que aceptara como
// parametros para la imagen el nombre y la edad
const Article = (props) => {
    return (
        <div>
            <article className="person">
                <img src={props.image} alt=""/>
                <div>
                    <h4>{props.name}</h4>
                    <p>{props.age}</p>
                </div>
            </article>

        </div>
    );
};

export default Article;