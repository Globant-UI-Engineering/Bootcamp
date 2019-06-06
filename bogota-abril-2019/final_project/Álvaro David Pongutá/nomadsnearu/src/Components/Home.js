import React from 'react';
import '../App.scss';

class Home extends React.Component {

    render () {
        return (
            <section role="presentation">
                <article>
                  <div className="App-row-elements">
                      <h2 className="home">¿Quiénes somos?</h2>
                  </div>
                  <div className="App-row-elements center">
                      <img role="img" className="image-left" src="https://image.freepik.com/vector-gratis/personajes-personas-su-ilustracion-redes-sociales_53876-58967.jpg" alt="Grupo de personas"/>
                      <p>Somos una empresa dedicada a ofrecer un servicio de ayuda para la participación a eventos grupales de todo tipo como informales, aprendizaje, deportivos, 
                        turísticos, etc. Unimos redes de personas a través de intereses en común, enfrentamos
                        cualquier barrera y le permitimos a las personas vivir las experiencias que desean.
                      </p>
                  </div>
                  <div className="App-row-elements">
                      <h3>¡Únete a esta comunidad!</h3>
                  </div>
                </article>
                <article className="App-column-elements">
                    <div className="center-tools">
                      <h2 className="subtitle-home">Herramientas Utilizadas</h2>
                      <div className="App-row-elements">
                          <img role="img" className="images-services" src="https://cdn-images-1.medium.com/max/1200/0*CPTNvq87xG-sUGdx.png" alt="Firebase"/>
                          <img role="img" className="images-services" src="https://sg.com.mx/sites/default/files/styles/480x319/public/2018-09/react.png?itok=uDH8iO9y" alt="React"/>
                          <img role="img" className="images-services" src="https://d3dh6of9cnaq4t.cloudfront.net/Pictures/480xAny/1/9/2/7192_googlelogo3x2_689926.png" alt="Google API"/>
                      </div>
                    </div>
                </article>
            </section>
        );
    }
  }

  export default Home;