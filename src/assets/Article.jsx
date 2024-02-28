import React from 'react';

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