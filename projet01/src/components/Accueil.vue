<template>
<div>

  <div class="Entete">
    <h4>Portfolio</h4>
  </div>

  <div id="placement">
    <div class="gauche">
      <div>
      </div>

    </div>

    <div id="section1" class="centre">
      <div class="accueilA3">
        <div class="textA3">
          <h1>Lena Bataillard</h1>
          <p>Passionné par le web et les nouvelles technologies, je suis actuellement en DUT MMI à Montbéliard où j’étudie le design, la communication et la programmation. Vous pourrez découvrir sur cette page une partie de mon travail.</p>

          <div class="container">
          <button type="submit" class="outline green-white"><a href="static/img/Acc/CV.pdf" download rel="noopener noreferrer" target="_blank"> Télécharger CV
          </a></button>
            </div>
                  </div>





      <img src="static/img/Groupe17.png" alt="Lena">
      </div>

     <div class="scroll-down svg" id="home-scroll-down">
        <svg id="117badda-98d7-4da8-b633-d9bd2d982a33" data-name="Camada 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 52">
          <title>Prancheta 8</title>
          <g style="opacity:0.7000000000000001">
            <rect x="2.08" y="2" width="33.84" height="48" rx="16.92" ry="16.92" style="fill:none;stroke:#FEA443;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.172131147332232px"/>
            <line class="scroller" x1="19" y1="12.23" x2="19" y2="17.48" style="fill:none;stroke:#FEA443;stroke-linecap:round;stroke-linejoin:round;stroke-width:3.172131147332232px"/>
          </g>
        </svg><i class="icon icon-arrow-down"></i>
      </div>


      <div id="section2"  class="accueilA">
        <div class="textA">
          <h2> Mes création </h2>
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



      <div id="section3" class="accueilA">
      <div class="textA">
    <h2> Mes Compétences </h2>
        <div class="Lignes">
      <img src="static/img/PG/Ligne.png" alt="Ligne">
    </div>
        </div>

    </div>

      <div class="competences">

      <div class="Video">
        <div class="texV">
          <h3>Audiovisuel</h3>
          <p>Lors de ma formation actuelle j’ai eu l'occasion d'apprendre les bases de l’audiovisuel et du motion design.
          </p>
        </div>

        <div class="After">
          <img src="static/img/Competence/af.png" alt="Lena">
        </div>

        <div class="Davici">
          <img src="static/img/Competence/da.png" alt="Lena">
        </div>

        <div class="pr">
          <img src="static/img/Competence/pr.png" alt="Lena">
        </div>
      </div>


      <div class="Video2">


        <div class="After">
          <img src="static/img/Competence/xd.png" alt="Lena">
        </div>

        <div class="Davici">
          <img src="static/img/Competence/ph.png" alt="Lena">
        </div>

        <div class="pr">
          <img src="static/img/Competence/in.png" alt="Lena">
        </div>

        <div class="xd">
          <img src="static/img/Competence/ill.png" alt="Lena">
        </div>

        <div class="texV2">
          <h3>Design</h3>
          <p>J'ai pu m'essayer à la création d’identité visuelle en réalisant plusieurs projet.</p>
        </div>
      </div>


      <div class="Video">
        <div class="texV">
          <h3>Développement</h3>
          <p>Enfin, j'ai appris les bases de la programation en utilisant des langage comme HTML, CSS et JavaScript.</p>
        </div>

        <div class="After">
          <img src="static/img/Competence/html.png" alt="Lena">
        </div>

        <div class="Davici">
          <img src="static/img/Competence/css.png" alt="Lena">
        </div>

        <div class="pr">
          <img src="static/img/Competence/js.png" alt="Lena">
        </div>
      </div>
      </div>


      <div id="section4"  class="accueilA">
        <div class="textA">
          <h2> Mon Cursus </h2>
          <div class="Lignes">
            <img src="static/img/PG/Ligne.png" alt="Ligne">
          </div>
        </div>
      </div>

      <div class="Cursus">
        <div class="content-holder">
          <span>
			<ul class="word-slider">
				<li>2017 - 2020 </li>
        <li class="change">Baccalauréat Scientifique</li>

        <li>&nbsp      </li>
        <li>&nbsp      </li>

				<li>2020 - 2022</li>
        <li class="change">DUT des Métiers du Multimédia et de l'Internet</li>
			</ul>
		</span>
        </div>
      </div>


      </div>



      <div class="droite">
<div></div>
  </div>

  </div>



</div>
</template>

<script>
export default {
  name: "Accueil",
}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800;900&family=Poppins:wght@300;400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Abril+Fatface&display=swap');

html{
  font-size: 62.5%;
  scroll-behavior: smooth;
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

h4{
  color: white;
  font-family: "Playfair Display",serif;
  font-weight: lighter;
  font-size: 105px;
  margin: 0;
  text-align:center;
}

h1{
  color: #42373A;
  font-family: "Playfair Display",serif;
  font-weight: lighter;
  font-size: 90px;
  margin: 0;
}
h2{
  color: #42373A;
  font-family:"Playfair Display",serif;
  font-weight: lighter;
  font-size: 6em;
  margin: 0;
}
p{
  font-size: 2em;
  font-family: Poppins,serif;
  color:#42373A;
}
.accueilA img {
  display: block;
  margin: auto 0 auto 0;
  height: max-content;
  width: 35vw;
  max-width: 600px;
  padding: 0;

}



.accueilA2 img {
  display: block;
  margin: auto 0 auto 0;
  height: max-content;
  width: 35vw;
  max-width: 600px;
  padding: 0;

}

.accueilA3 img {
  display: block;
  margin: auto 0 auto 0;
  height: max-content;
  width: 25vw;
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

.accueilA{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  height: 50vh;


}



.accueilA2{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  height: 55vh;
}

.accueilA3{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  margin: 0;
  height: 70vh;
}

.textA{
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5vw;
}



.textA2{
  width: 50vw;
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5vw;
}

.textA3{
  width: 50vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-right: 5vw;
}

/*mise en place du responsive pour menu ordi et portable*/
@media (max-width: 720px){
  .centre{
    width: 100vw;
  }
  .gauche,.droite {
    width: 0;
    height: 0;
    display: none;
  }
  .textA, .textA3{
    width: auto;
    padding: 0 10vw;
  }
}
@media (min-width: 720px){
  #placement > div{
    display: inline-block;
    vertical-align: top;
    box-sizing: border-box;
  }
}

/*responsive*/
@media (max-width: 1100px){
  h4{
    font-size: 80px;
  }
  h1{
    font-size: 90px;
  }
  h2{
    font-size: 50px;
  }
  p{
    font-size: 15px;
  }
}


@media (max-width: 800px){
  h4{
    font-size: 30px;
  }

  h1{
    font-size: 40px;
  }
  h2{
    font-size: 30px;
  }
  p{
    font-size: 11px;
  }
  .accueilA{
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    height: 50vh;
  }

  .accueilA>img{
    margin: 0 auto;
  }



  .accueilA2{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;


  }
  .accueilA2>img{
    margin: 0 auto;
  }

  .accueilA3{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    align-items: center;
    height: 50vh;


  }
  .accueilA3>img{
    margin: 0 auto;
    padding: 10px;

  }
}



@media (max-width: 700px){

  .accueilA{
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: space-evenly;
    height: 40vh;
  }

  .accueilA>img{
    margin: 0 auto;
  }

}


@media only screen and (max-width: 1100px) {
  .accueilA3>img{
    width: 165px;

  }
}

@media only screen and (max-width: 900px) {
  .accueilA3>img{
    padding: 40px;
    width: 200px;
  }

  .accueilA3{
    padding-top: 100px;
  }
}

@media only screen and (max-width: 400px) {
  .accueilA3>img{
    padding: 40px;
    width: 165px;
  }

  .accueilA3{
    padding-top: 100px;
  }
}

@media only screen and (max-width: 1920px) {
  .Entete{
    width: 100%;
    z-index: initial;
    height: auto;
    background-size: 100% auto;
    background-image: url("../../static/img/Entete/Acc.png");
  }
}




@media only screen and (max-width: 800px) {
  .Entete{
    width: 100%;
    z-index: initial;
    height: 7vh;
    background-size: 100% auto;
    background-image: url("../../static/img/Entete/Acc.png");
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




/*competences*/

.competences{
  margin-bottom: 100px;
}

.Video2 h3{
  text-align: right;
}


.Video{
  display: grid;
  border-left: #FEA443;
  border-left-style: double ;
  justify-items: center;
  align-items: center;
  padding: 8vw;
  grid-template-columns: 2fr 1fr 1fr 1fr;
}

.Video2{
  display: grid;
  border-right: #FEA443;
  border-right-style: double ;
  justify-items: center;
  align-items: center;
  padding: 5vw;
  grid-template-columns:  1fr 1fr 1fr 1fr 1fr;
}


.After{
  height: 0px;
  width: 70px;
}

.pr{
  height: 0px;
  width: 70px;
}

.Davici{
  height: 0px;
  width: 70px;
}

.xd{
  height: 0px;
  width: 70px;
}


.Video p{
  font-family: Poppins, sans-serif;
  font-size: 15px;
}

.Video2 p{
  font-family: Poppins, sans-serif;
  font-size: 15px;
  text-align: right;
}



.Video img:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.Video>img{
  height: 20%;
  width: 20%;
  padding: 50px;
  background-color: green;
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}


.Video2 img:hover {
  transform: scale(1.5); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
}

.Video2>img{
  height: 20%;
  width: 20%;
  padding: 50px;
  background-color: green;
  transition: transform .2s; /* Animation */
  margin: 0 auto;
}


.Video2>img{
  height: 20%;
  width: 20%;
}


.texV{
  height: 60px;
  width: 100%;
  justify-content: left;
}

.texV2{
  height: 60px;
  width: 100%;
  justify-content: right;
  margin-left: 30px;
}


@media only screen and (max-width: 2000px) {

  .Video img{
    width: 100px;
  }

  .Video2 img{
    width: 100px;
  }
  .texV p{
    font-size: 15px;
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
  }

  .Video2 img{
    width: 40px;
  }
  .texV{
    display: none
  }

  .texV2{
    display: none
  }

  .Video{
    display: grid;
    grid-template-columns:  1fr 1fr 1fr;
    border-left-style: none ;

  }

  .Video2{
    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr;
    border-right-style: none ;

  }
}

@media only screen and (max-width: 1200px) {

  .Video2 p{
    font-size:12px ;
  }

  .Video p{
    font-size:12px ;
  }


}




/*boutton*/

.container {
  width: 80%;
  padding-top: 40px;
}

button {
  cursor: pointer;
  outline: none;
}

.outline {
  position: relative;
  background: transparent;
  color: #FEA443;
  font-size: 14px;
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
   color: white;
   background: #FEA443;
   border-color: white;
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








.Cursus {
  width: 100%;
  height:150px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  padding-left: 25px;
  padding-bottom: 250px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  border-top: 1px solid rgba(255, 255, 255, 0.5);
}

.Cursus .content-holder:before {
  margin-top: -10px;
  margin-right: 10px;
  color: rgb(142, 101, 4);
}

.Cursus .content-holder:after {
  margin-top: -10px;
  margin-left: 10px;
  color: rgb(142, 101, 4);
}

.Cursus ul {
  line-height: 42px;
  margin-top: 0;
}

.Cursus span {
  display: inline;
}

.Cursus ul.word-slider {
  list-style: none;
  margin-left: -30px;
}

.Cursus .content-holder {
  height: 80px;
  overflow: hidden;
}

.Cursus li {
  font-size: 40px;
  font-weight: bold ;
  color: #FEA443;
  font-family: "Playfair Display",serif;
}

.Cursus .change {
  font-size: 30px;
  color: #000;
  font-family: "Playfair Display",serif;
}

.Cursus ul.word-slider {
  animation: change 15s infinite;
}

@keyframes change {
  0% {
    margin-top: -5px;
  }

  25% {
    margin-top: -85px;
  }

  50% {
    margin-top: -175px;
  }

  100% {
    margin-top: -5px;
  }
}


@media only screen and (max-width: 900px) {
  .Cursus li {
    font-size: 30px;
    font-weight: bold ;
    color: #FEA443;
    font-family: "Playfair Display",serif;
  }

  .Cursus .change {
    font-size: 20px;
    color: #000;
    font-family: "Playfair Display",serif;
  }


}

@media only screen and (max-width: 600px) {
  .Cursus li {
    font-size: 20px;
    font-weight: bold ;
    color: #FEA443;
    font-family: "Playfair Display",serif;
  }

  .Cursus .change {
    font-size: 10px;
    color: #000;
    font-family: "Playfair Display",serif;
  }


}




svg {
  vertical-align: middle;
  width: 40px;
}

.scroll-down {
  position: absolute;
  left: 50%;
  margin-left: -20px;
  width: 40px;
  height: 40px;
  bottom: 35px;
  padding-left: 7px;
  cursor: pointer;
  z-index: 2;
  color: #c7c4b8;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.scroll-down.svg svg {
  width: 30px;
  opacity: 1;
  -webkit-transition: opacity .5s;
  -moz-transition: opacity .5s;
  -ms-transition: opacity .5s;
  -o-transition: opacity .5s;
  transition: opacity .5s;
}



.scroll-down.svg .stroke {
  stroke: #ADA99D;
}



.scroll-down.svg .scroller {
  fill: #ADA99D;
  -webkit-animation: updown 1s infinite;
  -moz-animation: updown 1s infinite;
  -o-animation: updown 1s infinite;
  animation: updown 1s infinite;
}

@-webkit-keyframes updown {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px)
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
}
@-moz-keyframes updown {
  0% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px)
  }
  100% {
    -moz-transform: translate(0, 0);
    transform: translate(0, 0)
  }
}
@-o-keyframes updown {
  0% {
    -o-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px)
  }
  100% {
    -o-transform: translate(0, 0);
    transform: translate(0, 0)
  }
}
@keyframes updown {
  0% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
  50% {
    -webkit-transform: translate(0, 10px);
    transform: translate(0, 10px)
  }
  100% {
    -webkit-transform: translate(0, 0);
    transform: translate(0, 0)
  }
}


@media only screen and (max-width: 900px) {
  .svg {
    display: none;
  }




}
</style>
