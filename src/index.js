import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'materialize-css/dist/css/materialize.css';
//import 'bootstrap-css';
import * as serviceWorker from './serviceWorker';
import Card from './Card';

var nome = "Isa Mary";
var cor = "Azul";
var comida = "Macarrão";
var foto = "https://scontent.fcgh9-1.fna.fbcdn.net/v/t1.0-9/16114653_1336509989748809_5227134757346454096_n.jpg?_nc_cat=111&_nc_sid=dd9801&_nc_ohc=VpvjmQ2dLPIAX-bQyOW&_nc_ht=scontent.fcgh9-1.fna&oh=ea9708d7dcb9a9d5d646d0175a322b64&oe=5EC719A0";
var github = "https://github.com/isamary10";

ReactDOM.render(
  <div>
      <nav>
        <div  className="container">
          <ul>
            <li><a href="#">Página principal</a></li>
          </ul>
        </div>
      </nav>
      <div className="container">
        
        <h2>Olá mundo!</h2>
        
        <div className="row">
          <div className="col s4">
            <div class="card">
              <div class="card-image">
                <img src={foto}  />
                <span class="card-title">{nome}</span>
              </div>
              <div class="card-content">
                <p><b>cor favorita:</b>{cor}</p>
                <p><b>comida favorita:</b> {comida}  </p>
              </div>
              <div class="card-action">
                <a href={github} target="_blank">Ver github</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
