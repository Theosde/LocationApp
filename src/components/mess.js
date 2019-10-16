import React from 'react';
import Header from "./header";
import Footer from "./footer";
import "../css/message.css";




function Message() {



  return (
  <div>
    <Header/>
    <div className="body-bg-message">

      <div className="column-one">

        <div className="contact-line" onClick={()=>{

        }}>

          <h4>Appartement 1</h4>
          <h5>Rue Voltaire, Paris</h5>
        </div>

        {/* <div className="contact-line">
          <h4>Appartement 2</h4>
          <h5>Rue de la paix, Paris</h5>
        </div> */}
      </div>

      <div className="column-two">

          <div className="loc-short-message">
            <h4>Mathieu Garnero</h4>
            <p>Bonjour, je me permet de vous contacter pour vous de ...</p>
          </div>
          <div className="loc-short-message">
            <h4>Nassim sahili</h4>
            <p>Le versement de ce mois ci est bien fait à ce jour .</p>
          </div>
          <div className="loc-short-message">
            <h4>Marion Laureta</h4>
            <p>J'ai un amis qui voudrais rejoindre de la collocation ...</p>
          </div>

      </div>

      <div className="column-free" id="chat">
        <div className="mess-zone">
          <div className="ancien-message">
            <div className="message-box">Bonjour, pourriez vous me transmettre la quittance du mois dernier, merci.</div>
          </div>
          <div className="nouveau-message">
            <div className="message-box-me">Bonjour, Ui je vous le met à disposition sur le site en telechargement d'ici ce soir, si vous avez d'autres demande je reste joignable sur ce reseaux</div>
          </div>
          <div className="ancien-message">
            <div className="message-box">Merci bien ! Bonne journée à vous.</div>
          </div>
          <div className="nouveau-message">
            <div className="message-box-me">Bonjour, Ui je vous le met à disposition sur le site en telechargement d'ici ce soir, si vous avez d'autres demande je reste joignable sur ce reseaux</div>
          </div>
          <div className="ancien-message">
            <div className="message-box">Merci bien ! Bonne journée à vous.</div>
          </div>
          <div className="nouveau-message">
            <div className="message-box-me">Bonjour, Ui je vous le met à disposition sur le site en telechargement d'ici ce soir, si vous avez d'autres demande je reste joignable sur ce reseaux</div>
          </div>
          <div className="ancien-message">
            <div className="message-box">Merci bien ! Bonne journée à vous.</div>
          </div>
          <div className="nouveau-message">
            <div className="message-box-me">Bonjour, Ui je vous le met à disposition sur le site en telechargement d'ici ce soir, si vous avez d'autres demande je reste joignable sur ce reseaux</div>
          </div>
          <div className="ancien-message">
            <div className="message-box">Merci bien ! Bonne journée à vous.</div>
          </div>
        </div>

        <div className="send-mess">
          <textarea className="type-zone" type="textarea"></textarea>
          <div className="send-mess-btn">Envoyer</div>
        </div>
      </div>
    </div>
    <Footer/>

  </div>

  );

}

export default Message;
