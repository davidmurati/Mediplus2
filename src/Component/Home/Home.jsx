import React, { useEffect } from "react";
import "./Home.css";
import logo1 from './logo1.jpg';
import logo from './logomed.jpg';
import img3 from './img3.jpg';
import img4 from './img4.jpg';
import img5 from './img5.jpg';

const Home = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    // Validar las credenciales del usuario aquí
    
      window.location.href = '/Login';
  };

  
  return (

    <form onSubmit={handleSubmit}>
    <div>

      
      <div className="logo-container">
        <img src={logo} className="App-logo" alt="logo" />
        
        </div>
        
        <main>
        
        <div className="card3">
        <h1>Mediplus</h1>
        <h4>Bienvenido a la app de salud Mediplus, estamos para ayudarlo</h4>
        </div>

        <section id="Nosotros">
        <div className="card">
            
            <h3>{"Nosotros"}</h3>
            <img src={logo1} className="App-logo2" alt="logo"/>
            <div className="card2">
            <h3>{"Quienes somos "}</h3>
            <p>{"Somos una empresa de servicios médicos a domicilio y online comprometida con el bienestar y la comodidad de nuestros pacientes. Nuestro equipo está conformado por profesionales de la salud altamente cualificados y dedicados, que trabajan de manera colaborativa para brindar una atención integral y personalizada."}</p>
            </div>
            <div className="card2">
            <h3>{"Misión"}</h3>
            <p>{"Nuestra misión es proporcionar servicios médicos integrales y de alta calidad a nuestros pacientes en la comodidad de su hogar, utilizando tecnología de vanguardia para ofrecer atención médica online. Nos esforzamos por brindar diagnósticos precisos, tratamientos efectivos y un enfoque cálido y humano, adaptándonos a las necesidades individuales de cada paciente. Nuestro objetivo es mejorar la calidad de vida de las personas, promoviendo la salud y el bienestar en la comunidad a la que servimos."}</p>
            </div>
            <div className="card2">
            <h3>{"Visión"}</h3>
            <p>{"Ser reconocidos como líderes en brindar servicios médicos de calidad, accesibles y confiables, tanto a nivel presencial como online, siendo la primera opción para las personas que requieren atención médica personalizada en la comodidad de su hogar."}</p>
            </div>

            
          </div>
          </section>

          <section id="Serv">

          <div className="card">

          <h3>{"Servicios"}</h3>

          <div className="card4">
          <img src={img5} className="App-logo1" alt="logo"/>
          <img src={img3} className="App-logo1" alt="logo"/>
          <img src={img4} className="App-logo1" alt="logo"/>
          </div>

          <div className="container">
        
              <div className="card4">
              
              <div className="link">
              <a  href="/Servicio"> Atención en casa </a>
              <h4>{"Comunicate con nuestro personal para realizar consultas, curas y más en la comodidad de tu hogar"}</h4>
              </div>
              </div>

              <div className="card4">
              
              <div className="link">
              <a  href="/Servicio"> Atención online </a>
              <h4>{"Comunicate con nuestro personal via plataformas digitales para realizar tus consultas médicas"}</h4>
              </div>
              </div>
              


              <div className="card4">

              <div className="link">
              <a  href="/Servicio"> Fisioterapia </a>
              <h4>{"Haz terapias con nuestro personal capacitado para recuperarte de tus lesiones"}</h4>
              </div> 
              </div>

            </div>

            </div>
          
        </section>

    
      </main>
      
      </div>
    
    </form>
  );
};

export default Home;
