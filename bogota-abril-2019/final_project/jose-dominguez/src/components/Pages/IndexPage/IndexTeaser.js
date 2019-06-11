import React from 'react';
import { Link } from 'react-router-dom';

class IndexTeaser extends React.Component {
    render() {
        return (
            <section className="news_preview">
                <img alt="Bienvenido a Bobba" src="/web-gallery/images/habbos.gif" />
                <div>
                    <h2>
                        ¡Haz amigos y únete a la diversión!
                    </h2>
                    <p>
                        Estás a punto de entrar a un lugar increíble, donde compartirás nuevas experiencias mientras
                        conocerás
                        nuevas personas de todas partes. Veas donde lo veas... ¡La diversión nunca acaba!
                    </p>
                    <Link to="/register">
                        <button>
                            ¡Regístrate!
                        </button>
                    </Link>
                </div>
            </section>
        );
    }
}

export default IndexTeaser;