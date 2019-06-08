import React from 'react';

class Welcome extends React.Component {
    render() {
        return (
            <>
                <h1 className="blue">Bienvenid@ a Bobba</h1>
                <p>
                    <img alt="Te damos la bienvenida" src="/web-gallery/images/welcome_frank.png" />
                </p>
                <p>
                    Estás a punto de entrar a un lugar increíble, donde compartirás nuevas experiencias mientras
                    conocerás nuevas personas de todas partes. Veas donde lo veas... ¡La diversión nunca acaba!
                </p>
            </>
        );
    }
}

export default Welcome;