import React from 'react';
import Article from "./Article.jsx";
import data from "../data.js";
const Frame = () => {
    return (
        <div>
            <main>
                <section className="container">
                    <h3>Hoy hay {data.length} cumpleaños</h3>
                    {data.map(persona => (
                        // Por cada objeto en data, creamos un componente Article con los datos correspondientes
                        <Article
                            key={persona.id} // Es importante proporcionar una clave única para cada componente en un bucle
                            name={persona.name}
                            age={persona.age}
                            image={persona.image}
                        />
                    ))}
                </section>
            </main>
        </div>
    );
};

export default Frame;