import React from 'react'
import ReactDOM from 'react'
import caja from '../estilos/caja.css'

function Caja(){
    return(
        <>
        <header className='header'>
                      <div className="logo">
                      <img className="icon" src={require("../imagenes/iconos/computadora.png")} alt="" />
                      </div>
                    <nav className='links'> 
                      <ul>
                          <li><a href="#"> EXAMPLE</a></li>
                          <li><a href="#">EXAMPLE</a></li>
                          <li><a href="#">Consulta</a></li>
                      </ul>
                    </nav>
                    <a href="#" className='btn'><button>Usuario</button></a>
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
                    <h2>Sobre nosotros</h2>
                    <p>Somos un grupo de estudiantes programadores, que quiere seguir avanzando en este ambito para mejorar :</p>
                </div>
                <div className="box">
                    <div className="redes">
                    <a href=""><img className="icon" src={require("../imagenes/iconos/facebook.png")} alt="" /></a>
                    <a href=""> <img className="icon" src={require("../imagenes/iconos/X.png")} alt="" /></a>
                    <a href=""><img className="icon" src={require("../imagenes/iconos/youtube.png")} alt="" /></a>
                    <a href=""> <img className="icon" src={require("../imagenes/iconos/instagram.png")} alt="" /></a>
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