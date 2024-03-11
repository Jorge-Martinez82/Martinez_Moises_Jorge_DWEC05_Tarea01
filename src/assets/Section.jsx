// importo React, el componente Article y el archivo data
import React from 'react';
import Article from "./Article.jsx";
import data from "../data.js";
const Section = () => {
    return (
        <div>
            <main>
                <section className="container">
                    {/*el numero de cumpleaños sera la longitud de data*/}
                    <h3>Hoy hay {data.length} cumpleaños</h3>
                    {data.map(persona => (
                        // por cada objeto en data creamos un componente Article pasandole como props los datos correspondientes
                        <Article
                            key={persona.id} //  le pasamos el id como clave unica para cada componente que creemos
                            // le pasamos las propiedades que definimos en Article
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
export default Section; // exportamos el componente