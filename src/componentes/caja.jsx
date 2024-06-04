import React from 'react'
import ReactDOM from 'react'
import caja from '../estilos/caja.css'


function Caja(){
    return(
        <>
        <header>
                <div className='contenedor-Head'>
                <nav>
                    <ul>
                        <li className='Titulo'><h1>A</h1></li>
                    </ul>
                    <ul>
                        <li><a href="#"> EXAMPLE</a></li>
                        <li><a href="#">EXAMPLE</a></li>
                        <li><a href="#">EXAMPLE</a></li>
                    </ul>
                    <p className='puntos'><strong>Puntos:</strong></p>
                </nav>
                </div>
                <div className='Carrusel'>
                    <img src={require('../imagenes/gta.jpg')} alt="1" />
                    <img src={require('../imagenes/Multiversus.jpg')}  alt="2" />
                    <img src={require('../imagenes/GK.jpg')}  alt="3" />
                </div>
        </header>
        <body className='BodyA'>
        <main className="games">
      <h2>
        <center>
          Todos los <span>Juegos</span>
        </center>
      </h2>
      <div className="productos">
        <div className="producto1">
          <img src={require("../imagenes/CyberPunk2077.jpg")} alt="" />
          <div className="producto-txt">
            <h3>CyberPunk 2077</h3>
            <div className="precio">
              <p> <strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
        <div className="producto1">
          <img src={require("../imagenes/assasin.jpg")} alt="" />
          <div className="producto-txt">
            <h3>Assasin Creed</h3>
            <div className="precio">
                <p><strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
        <div className="producto1">
          <img src={require("../imagenes/GK.jpg")} alt="" />
          <div className="producto-txt">
            <h3>Gotham Knight</h3>
            <div className="precio">
            <p><strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
        <div className="producto1">
          <img src={require("../imagenes/God.jpg")} alt="" />
          <div className="producto-txt">
            <h3>God of War</h3>
            <div className="precio">
            <p><strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
        <div className="producto1">
          <img src={require("../imagenes/gta.jpg")} alt="" />
          <div className="producto-txt">
            <h3>Grand Thief Auto VI</h3>
            <div className="precio">
            <p><strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
        <div className="producto1">
          <img src={require("../imagenes/MK1.jpg")} alt="" />
          <div className="producto-txt">
            <h3>Mortal Kombat 1</h3>
            <div className="precio">
            <p><strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
        <div className="producto1">
          <img src={require("../imagenes/Multiversus.jpg")} alt="" />
          <div className="producto-txt">
            <h3>Multiversus</h3>
            <div className="precio">
            <p><strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
        <div className="producto1">
          <img src={require("../imagenes/Poppy.jpg")} alt="" />
          <div className="producto-txt">
            <h3>Poppy Play Time</h3>
            <div className="precio">
            <p><strong>Puntos:</strong> 1000</p>
              <a href="#" className="enlace">comprar</a>
            </div>
          </div>
        </div>
      </div>
    </main>
  
        </body>
        <footer>
        <div className="footeeer">
                <div className="box">
                    <figure>
                        <a href="#">
                        
                         </a>
                    </figure>
                </div>
                <div className="box">
                    <h2>Sobre nosotros</h2>
                    <p>Somos un grupo de estudiantes programadores, que quiere seguir avanzando en este ambito para mejorar :</p>
                </div>
                <div className="box">
                    <div className="redes">
                         <a href="https://www.facebook.com/home.php"  className="fa-brands fa-facebook"></a>
                         <a href="https://twitter.com/?lang=es" className="fa-brands fa-twitter"></a>
                         <a href="discordapp.com/users/393954987857936394" class="fa-brands fa-discord"></a>
                         <a href="https://www.instagram.com" className="fa-brands fa-instagram"></a>
                    </div>
                </div>
            </div>  
            <div className="box2">
            <small>© 2023 <b>###</b> - Todos los derechos Reservados</small>

            </div>
        </footer>
        </>
    )
}

export default Caja