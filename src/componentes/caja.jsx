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
                <small>&copy 2023 <b>###</b> - Todos los derechos Reservados</small>
            </div>
        </footer>
        </>
    )
}

export default Caja