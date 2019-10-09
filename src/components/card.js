import React from 'react';
import "../css/card.css";
import "../css/add.css";





function Card() {



  return (
    <div className="body-bg">

      <div className="addcard">

      </div>

        <div className="card">
          <div><img className="img" src="/images/annonce-img.jpg"></img></div>
          <div className="title">
            <div>LYON</div>
            <div>-</div>
            <div>A LOUER</div>
          </div>
          <div className="type">
            <div>T3</div>
            <div>Meublé</div>
            <div>72m2</div>
          </div>
          <div className="price">
            <div>450 euros / mois </div>
            <div>hors charge</div>
          </div>
        </div>

        <div className="card">
          <div><img className="img" src="/images/pic-2.jpg"></img></div>
          <div className="title">
            <div>CASSIS</div>
            <div>-</div>
            <div>OCCUPE</div>
          </div>
          <div className="type">
            <div>VILLA</div>
            <div>Meublé</div>
            <div>110m2</div>
          </div>
          <div className="price">
            <div>1250 euros / mois </div>
            <div>hors charge</div>
          </div>
        </div>

        <div className="card">
          <div><img className="img" src="/images/annonce-img.jpg"></img></div>
          <div className="title">
            <div>LYON</div>
            <div>-</div>
            <div>A LOUER</div>
          </div>
          <div className="type">
            <div>T3</div>
            <div>Meublé</div>
            <div>72m2</div>
          </div>
          <div className="price">
            <div>450 euros / mois </div>
            <div>hors charge</div>
          </div>
        </div>

    </div>

  );
}

export default Card;
