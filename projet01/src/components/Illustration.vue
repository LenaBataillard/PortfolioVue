<template>
  <div>

    <div class="Entete">
      <h1>Illustration</h1>
    </div>

    <div id="placement">
      <div class="gauche">
        <div>
        </div>

      </div>


      <div class="centre">

        <div class="Dedut">
          <div class="textD">
            <h2> Le contexte </h2>
            <div class="Lignes">
              <img src="static/img/PG/Ligne.png" alt="Ligne">
            </div>
            <p>Ce projet est le premier projet que j'ai réalisé sur Adobe Illustrator lors de mon cours d'infographie du DUT MMI de Montbéliard.</p>
          </div>
        </div>


        <div class="accueil2">
          <img src="static/img/Ill/1.png" alt="1">
          <div class="text2">
            <h2> Le Projet </h2>
            <div class="Lignes">
              <img src="static/img/PG/Ligne.png" alt="Ligne">
            </div>
            <p>Lors de ce projet, nous devions représenter trois bâtiments emblématiques de la ville de Montbéliard et proposer une animation du paysage.</p>
          </div>

        </div>

        <div class="Dedut">
          <div class="textD">
            <h2> Mon rôle </h2>
            <div class="Lignes">
              <img src="static/img/PG/Ligne.png" alt="Ligne">
            </div>
            <p>Ce projet est le premier projet que j'ai réalisé sur Adobe Illustrator lors de mon cours d'infographie du DUT MMI de Montbéliard.</p>
            <video controls>
              <source src="static/Video/2.mp4" type="video/mp4">
            </video>
          </div>
        </div>

        <div class="accueilP4">
          <div class="textP4">
            <h2> Outils utilisés  </h2>
            <div class="Lignes">
              <img src="static/img/PG/Ligne.png" alt="Ligne">
            </div>
          </div>
        </div>
        <div class="Video">
          <div class="After">
            <img src="static/img/Competence/xd.png" alt="Lena">
          </div>

          <div class="Davici">
            <img src="static/img/Competence/ill.png" alt="Lena">
          </div>

        </div>





        <div class="accueilP4">
          <div class="textP4">
            <h2> Autres Projets </h2>
            <div class="Lignes">
              <img src="static/img/PG/Ligne.png" alt="Ligne">
            </div>
          </div>
        </div>



        <input type="radio" id="s-1" name="slider-control" checked="checked">
        <input type="radio" id="s-2" name="slider-control">
        <input type="radio" id="s-3" name="slider-control">
        <input type="radio" id="s-4" name="slider-control">

        <div class="js-slider">
          <figure class="js-slider_item img-1">
            <div class="js-slider_img">
              <router-link to="/Bug" alt="Presentation"><img class="c-img-h-full" src="static/img/Test/B.png" alt=""></router-link>
            </div>
            <figcaption class="wo-caption">
              <h3 class="wo-h3">
                <br class="view-sm mb-s">Maquette pour le site de la convention BUG Days de Belfort</h3>
              <ul class="wo-credit">
              </ul>
            </figcaption>
          </figure>

          <figure class="js-slider_item img-2">
            <div class="js-slider_img">
              <router-link to="/CSV" alt="Presentation"><img class="c-img-h-full" src="static/img/Test/C.png" alt=""></router-link></div>
            <figcaption class="wo-caption">
              <h3 class="wo-h3">Site pour l'association CSV</h3>
              <ul class="wo-credit">
              </ul>
            </figcaption>
          </figure>

          <figure class="js-slider_item img-3">
            <div class="js-slider_img">
              <router-link to="/Illustration" alt="Presentation"><img class="c-img-h-full" src="static/img/Test/I.png" alt=""></router-link></div>
            <figcaption class="wo-caption">
              <h3 class="wo-h3">Illustration animée de la ville de Montbéliard</h3>
              <ul class="wo-credit">
              </ul>
            </figcaption>
          </figure>

          <figure class="js-slider_item img-4">
            <div class="js-slider_img">
              <router-link to="/Palais" alt="Presentation"><img class="c-img-h-full" src="static/img/Test/P.png" alt=""></router-link></div>
            <figcaption class="wo-caption">
              <h3 class="wo-h3">Maquette pour un site traitant du Palais Guell</h3>
              <ul class="wo-credit">
              </ul>
            </figcaption>
          </figure>

          <div class="js-slider_nav">
            <label class="js-slider_nav_item s-nav-1 prev" for="s-4"></label>
            <label class="js-slider_nav_item s-nav-1 next" for="s-2"></label>
            <label class="js-slider_nav_item s-nav-2 prev" for="s-1"></label>
            <label class="js-slider_nav_item s-nav-2 next" for="s-3"></label>
            <label class="js-slider_nav_item s-nav-3 prev" for="s-2"></label>
            <label class="js-slider_nav_item s-nav-3 next" for="s-4"></label>
            <label class="js-slider_nav_item s-nav-4 prev" for="s-3"></label>
            <label class="js-slider_nav_item s-nav-4 next" for="s-1"></label>
          </div>

          <div class="js-slider_indicator">
            <div class="js-slider-indi indi-1"></div>
            <div class="js-slider-indi indi-2"></div>
            <div class="js-slider-indi indi-3"></div>
            <div class="js-slider-indi indi-4"></div>

          </div>
        </div>

      </div>

      <div class="droite">
        <div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: "Illustration"
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Poppins:wght@300;400&display=swap');

html{
  font-size: 62.5%;

}

body{
  margin: 0;
  padding: 0;
  width: 100vw;
  overflow-x: hidden;
  background-color: white;
}

#placement{
  overflow-x: hidden;
}

/*placement des colonnes en vue ordinateur*/
.gauche{
  width:10vw;
  height: auto;
  padding: 0.5em;
  margin: 0;


}
.centre{
  width: 80vw;
  height: auto;
  padding: 0.5em;
  margin: 0;
}
.droite{
  width:10vw;
  height: auto;
  padding: 0.5em;
  margin: 0;
}



/*style colonne gauche*/
.gauche>div{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  height:7vh
}
.gauche>div>img{
  width: 80%;
  height: auto;
  max-width: 100px;
}


/*style colonne centre*/
h1{
  color: white;
  font-family: "Playfair Display",serif;
  font-weight: lighter;
  font-size: 105px;
  margin: 0;
  text-align:center;
}
h2{
  color: #42373A;
  font-family:"Playfair Display",serif;
  font-weight: lighter;
  font-size: 70px;
  margin: 0;
}
p{
  font-size: 20px;
  font-family: Poppins,serif;
  color:#42373A;
}
.accueil img {
  display: block;
  margin-top: auto;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: auto;
  height: max-content;
  width: 35vw;
  max-width: 600px;
  padding: 0;

}

.accueil2 img {
  display: block;
  margin-top: auto;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: auto;
  height: max-content;
  width: 35vw;
  max-width: 600px;
  padding: 0;

}

.accueilP4 img {
  display: block;
  margin-top: auto;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: auto;
  height: max-content;
  width: 35vw;
  max-width: 600px;
  padding: 0;

}

.Lignes img {
  display: block;
  margin-top: 20px;
  margin-right: 0;
  margin-left: 0;
  margin-bottom: 20px;
  height: max-content;
  width: 35vw;
  max-width: 600px;
  padding: 0;

}


.Dedut{
  margin-top: 50px;
}

video{
  display: block;
  margin: 0 auto;
  width: 70%;
  padding-bottom: 60px;
}

.accueilP4{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  height: 40vh;

}

.accueil2{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  height: 55vh;

}
.textP4{
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5vw;
}


.text2{
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 5vw;
}

/*mise en place du responsive pour menu ordi et portable*/
@media (max-width: 800px){
  .centre{
    width: 100vw;
  }
  .gauche,.droite {
    width: 0;
    height: 0;
    display: none;
  }
  .textP4, .textD, img, video{
    padding: 0 10vw;
  }

  .text2, .textD, img, video, .textP4{
    width: auto;
    padding: 0 10vw;
  }

  .text2{
    margin-left: 0;
  }
}
@media (min-width: 800px){
  #placement > div{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
  }

}

/*responsive*/
@media (max-width: 1100px){
  h1{
    font-size: 80px;
  }
  h2{
    font-size: 50px;
  }
  p{
    font-size: 15px;
  }
}


@media (max-width: 800px){
  h1{
    font-size: 30px;
  }
  h2{
    font-size: 30px;
  }
  p{
    font-size: 11px;
  }

  .textP4{
    margin-left: 0;
  }

  video{
    margin: 0 auto;
    width: 70%;
  }


  .accueilP4{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    height: 30vh;
  }


  .accueilP4>img{
    margin: 0 auto;
  }

  .accueil2{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    height: 40vh;


  }
  .accueil2>img{
    margin: 0 auto;
    align-items: center;

  }


}











@media only screen and (max-width: 1920px) {
  .Entete{
    width: 100%;
    z-index: initial;
    height: auto;
    background-size: 100% auto;
    background-image: url("../../static/img/Entete/Ill.png");
  }
}

@media only screen and (max-width: 800px) {
  .Entete{
    width: 100%;
    z-index: initial;
    height: 7vh;
    background-size: 100% auto;
    background-image: url("../../static/img/Entete/Ill.png");
  }
}



.Video{
  display: grid;
  justify-items: center;
  align-items: center;
  padding: 8vw;
  grid-template-columns: 1fr 1fr;
  border-left: none
;
}

.After{
  height: 60px;
  width: 30px;
}

.pr{
  height: 60px;
  width: 30px;
}

.Davici{
  height: 60px;
  width: 30px;
}

.cs{
  height: 60px;
  width: 30px;
}

.j{
  height: 60px;
  width: 30px;
}

.ht{
  height: 60px;
  width: 30px;
}



.Video p{
  font-family: Poppins, sans-serif;
  font-size: 15px;
}

.Video>img{
  height: 20%;
  width: 20%;
}



@media only screen and (max-width: 2000px) {

  .Video img{
    width: 100px;
  }

  .Video2 img{
    width: 100px;
  }

}

@media only screen and (max-width: 900px) {

  .Video img{
    width: 60px;
  }

  .Video2 img{
    width: 60px;
  }
  .texV p{
    font-size: 11px;
  }

  .texV2 p{
    font-size: 11px;
  }


}

@media only screen and (max-width: 700px) {

  .Video img{
    width: 40px;
    padding: 0 0;
  }

  .Video{
    display: grid;
    grid-template-columns: 1fr 1fr;

  }

}


/*Slider*/

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
li {
  list-style: none;
}
input[type="radio"] {
  display: none;
}
.js-slider {
  position: relative;
  width: 80%;
  height: 100vh;
  margin: 0 auto;
}
.js-slider_item {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  padding: 1rem 3rem;
  opacity: 0;
  visibility: hidden;
  transform-origin: right center;
  transform: translate3d(0%, 0%, 0) rotateY(30deg) scaleX(0.95);
  transition: all 1s ease,transform 1s cubic-bezier(0.43, 0.28, 0.51, 1);
}
#s-1:checked ~ .js-slider .js-slider_item.img-1,
#s-2:checked ~ .js-slider .js-slider_item.img-2,
#s-3:checked ~ .js-slider .js-slider_item.img-3,
#s-4:checked ~ .js-slider .js-slider_item.img-4
{
  opacity: 1;
  visibility: visible;
  transform-origin: left center;
  transform: translate3d(0, 0, 0) rotateY(0deg) scaleX(1);
}
.js-slider_img {
  width: 100%;
  height: 60%;
  position: relative;
  overflow: hidden;
}
.c-img-w-full {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 70%;
  height: auto;
  transform: translate3d(-50%, -50%, 0);
}
.c-img-h-full {
  position: absolute;
  top: 50%;
  left: 50%;
  width: auto;
  height: 100%;
  transform: translate3d(-50%, -50%, 0);
}
figcaption {
  display: block;
}
.wo-h3 {
  margin-top: 8rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #FEA443;
  text-align: center;
}

h3{
  font-size: 25px;
  font-family: "Playfair Display",serif;
}

.view-sm {
  display: none;
}
.js-slider_nav {
  position: absolute;
  left: 0;
  top: 50%;
  width: 100%;
  transform: translate3d(0, -50%, 0);
}
.js-slider_nav_item.prev {
  left: 0;
}
.js-slider_nav_item.next {
  right: 0;
  transform: rotateY(180deg);
}
.js-slider_nav_item {
  position: absolute;
  display: none;
  width: 4rem;
  height: 4rem;
  border: 1px solid #FEA443;
  border-radius: 50%;
  cursor: pointer;
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
}
.js-slider_nav_item:before {
  content: "";
  display: block;
  position: absolute;
  left: 1rem;
  top: 55%;
  width: 1rem;
  height: 1px;
  background-color: #FEA443;
  transform-origin: left bottom;
  transform: translate3d(0, -50%, 0) rotate(-45deg);
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
}
.js-slider_nav_item:hover {
  transform: translate3d(-30%, 0, 0);
}
.js-slider_nav_item.next:hover {
  transform: rotateY(180deg) translate3d(-30%, 0, 0);
}
.js-slider_nav_item:hover:before {
  transform: translate3d(0, -50%, 0) rotate(-30deg);
}
.js-slider_nav_item:after {
  content: "";
  position: absolute;
  top: 55%;
  left: 50%;
  width: 2rem;
  height: 1px;
  background-color: #FEA443;
  transform: translate3d(-50%, -50%, 0);
}
#s-1:checked ~ .js-slider .js-slider_nav .s-nav-1,
#s-2:checked ~ .js-slider .js-slider_nav .s-nav-2,
#s-3:checked ~ .js-slider .js-slider_nav .s-nav-3,
#s-4:checked ~ .js-slider .js-slider_nav .s-nav-4 {

  display: block;
}
.js-slider_indicator {
  position: absolute;
  left: 0;
  top: 63%;
  width: 100%;
  text-align: center;
}
.js-slider-indi {
  position: relative;
  display: inline-block;
  padding: 2rem;
  cursor: pointer;
}
.js-slider-indi:after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1rem;
  height: 1rem;
  border-radius: 1rem;
  background:#FEA443;
  transform: translate3d(-50%, -50%, 0);
}
.js-slider-indi:hover:after {
  transform: translate3d(-50%, -50%, 0) scale(1.5);
  transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
}
#s-1:checked ~ .js-slider .js-slider_indicator .indi-1:after,
#s-2:checked ~ .js-slider .js-slider_indicator .indi-2:after,
#s-3:checked ~ .js-slider .js-slider_indicator .indi-3:after,
#s-4:checked ~ .js-slider .js-slider_indicator .indi-4:after {
  transform: translate3d(-50%, -50%, 0) scale(2.5);
}



h4{
  font-family: "Playfair Display",serif;
  font-size: 60px;
}

button {
  cursor: pointer;
  outline: none;
}


.outline {
  position: relative;
  background: transparent;
  color: #FEA443;
  font-size: 10px;
  border-color: #FEA443;
  border-style: solid;
  border-width: 2px;
  border-radius: 55px;
  padding: 15px 40px;
  text-transform: uppercase;
  transition: all 0.2s linear;
}

a {
  text-decoration: none;
  color: #FEA443;
}

a:hover{
  color: white;
}

.outline:hover {
  color: #FEA443;
  background: #FEA443;
  border-color: #FEA443;
  transition: all 0.2s linear;
}

.outline:active {
  border-radius: 22px;
}


@media only screen and (max-width: 800px) {
  .outline {
    font-size: 10px;
    padding: 12px 30px;
  }

}


@media only screen and (max-width: 1000px) {

  h4{
    font-size: 30px;
  }

}

@media only screen and (max-width: 1000px) {
  h4{
    font-size: 20px;
  }
}

</style>
