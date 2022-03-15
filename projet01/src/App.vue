<template>
  <div id="app">

      <header>


          <nav class="menu_ordi">
            <ul>
<!--              <li><router-link to="#section1" alt="Presentation">Présentation</router-link></li>-->
<!--              <li><router-link to="/Section2" alt="Sa-vie-en-dehors-du-basket">Créations</router-link></li>-->
<!--              <li><router-link to="/filmographie" alt="filmographie">Compétences</router-link></li>-->
<!--              <li><router-link to="/formulaire" alt="formulaire">Contact</router-link></li>-->
              <li><router-link to="/" alt="Accueil">Accueil</router-link></li>
              <li><router-link to="/Palais" alt="Palais">Palais Guell</router-link></li>
              <li><router-link to="/Bug" alt="Bug">Bug Days</router-link></li>
              <li><router-link to="/Illustration" alt="Illustration">Illustration</router-link></li>
              <li><router-link to="/CSV" alt="CSV">CSV</router-link></li>
            </ul>
          </nav>

        <div class="nav-toggle" onclick="document.documentElement.classList.toggle('menu-open')">
          <div class="nav-toggle-bar"></div>
        </div>
        <nav class="menu">
          <ul>
            <li><router-link to="/" alt="Accueil">Accueil</router-link></li>
            <li><router-link to="/Palais" alt="Palais">Palais Guell</router-link></li>
            <li><router-link to="/Bug" alt="Bug">Bug Days</router-link></li>
            <li><router-link to="/Illustration" alt="Illustration">Illustration</router-link></li>
            <li><router-link to="/CSV" alt="CSV">CSV</router-link></li>

          </ul>

        </nav>

      </header>

      <router-view/>

    <footer>

      <div class="Footer">


        <div class="Lien">
          <h5>Autres pages</h5>
      <router-link to="/" alt="Accueil">Accueil</router-link>
      <router-link to="/Palais" alt="Palais Guell">Palais Guell</router-link>
      <router-link to="/Bug" alt="Bug">Bug Days</router-link>
      <router-link to="/CSV" alt="CSV">CSV</router-link>
          <router-link to="/Illustration" alt="Illustration">Illustration</router-link>
      </div>

        <div class="Linkedin">
        <a href="https://www.linkedin.com/in/lena-bataillard-1285581b9/"> <img src="static/img/Footer/linkedin.png"></a>
          </div>

        <div class="Mail">
      <a href="mailto:lena.bataillard3@gmail.com"> <img src="static/img/Footer/email.png"></a>
        </div>

      </div>

    </footer>

    </div>

</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap');

/*style sur menu*/
nav.menu_ordi ul{
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  align-items: center;
  list-style-type: none;
  margin: 0 0 0 0;
  padding: 0;
  height: 10vh;
  background-color: #42373A;
}

nav a:hover{
  color: #FEA443;
}


nav a:hover{
  color: #FEA443;
}
.menu_ordi ul::after{
  content: "";
  display: block;
  /*width: 10vw;*/
  height: 0.1vh;
  background-color: #42373A;
}
.menu_ordi>ul li{
  margin-left: 3em;
  font-family: "Playfair Display",serif;
  font-size: 1.5em;
  color: #42373A; /**/
}


.menu_ordi>ul li:last-of-type{
  margin-right: 3em;
}

@media (max-width: 880px) {
  nav.menu_ordi {
    display: none;
  }

  .nav-toggle-bar {
    width: 30px;
  }

  .nav-toggle {
    right: 4rem;
  }
}

@media (min-width: 1500px){
  .menu_ordi>ul li{
    margin-left: 5em;
  }
  .menu_ordi>ul li:last-of-type{
    margin-right: 5em;
  }
}

@media (min-width: 1300px) {
  .menu_ordi {
    font-size: 1.5em;
  }
}

@media (min-width: 880px) {
  nav.menu, div.nav-toggle {
    display: none;
  }
}

.nav-toggle{
  width: 2rem;
  height: 2rem;
  position: absolute;
  top: 2rem;
  right: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;
}

.nav-toggle-bar,
.nav-toggle-bar::after,
.nav-toggle-bar::before{
  content: "";
  background-color: white;
  width: 100%;
  height: 2px;
  position: absolute;
  left: 0;
  transition: all .4s ease-in-out;
}
.nav-toggle-bar::after{
  top: -10px;
}

.menu-open .nav-toggle-bar{
  transform: rotate(135deg);
  background-color:white;
}

.menu-open .nav-toggle-bar::before,
.menu-open .nav-toggle-bar::after{
  transform: rotate(90deg);
  background-color: white;
  top: 0;
}

.nav-toggle-bar::before{
  top: 10px;

}

/* Menu */



.menu{
  background-color: #42373A;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translateX(100vw);
  transition: all .4s;
  z-index: 2;
}

.menu-open .menu{
  transform: translateX(0);
}

/* Bug IOS*/

.menu-open,
.menu-open body{
  overflow: hidden;
}

.menu ul{
  list-style: none;
  margin: 0;
  font-size: 2.5rem;
  font-family: "Playfair Display", serif;
  padding: 0 1rem;
  text-align: center;

}

.menu li {
  margin-bottom: 3rem;
  transform: translateX(3rem);
  opacity: 0;
  transition: all .3s ease;
  color: white;
}

.menu li:not(:last-of-type) {
  margin-bottom: 10vh;
}

.menu-open .menu li{
  transform: translateX(0);
  opacity: 1;
}



.menu-open .menu li:nth-child(n+1){ transition-delay: .3s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .35s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .4s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .45s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .5s;}
.menu-open .menu li:nth-child(n+1){ transition-delay: .55s;}

@media (max-width: 880px){
  .nav-toggle-bar,
  .nav-toggle-bar::after,
  .nav-toggle-bar::before{
    width: 30px;
  }
}


/*footer*/


nav a, #nav-footer a{
  list-style-type: none;
  text-decoration: none;
  color: white;
  font-family: "Playfair Display",serif;
  font-size: 25px;
  margin: 20px;

}
footer a{
  display: flex;
  flex-direction: column;
  color: #F1F1F1;
  text-decoration: none;
  font-family:"Playfair Display",serif;
}
p{
  color: black;
  font-family: "Playfair Display",serif;
}
h1,h2,h3,h4{
  font-family: "Playfair Display",serif;
  margin-bottom: 20px;
}

h4{
  color:#F1F1F1;
  font-size:30px;
}

h5{
  font-size: 30px;
  color: #FEA443;
  padding-bottom:10px;
}
footer{
  padding: 5vw;
  background-color: #42373A;
  position: relative;
}
footer p{
  color: #F1F1F1;
  width: 70vw;
}
footer img{
  position: absolute;
  width: 5%;

}
@media (max-width: 600px){
  nav a, #nav-footer a, footer p, footer a{
    font-size: 10px;
  }
  h1{
    font-size: 2em;
  }
  h2{
    font-size: 1.5em;
  }
  h3{
    font-size: 1em
  }
  p{
    font-size: 0.5em;
  }


}

@media (max-width: 800px){

  footer a {
    font-size: 8px;
  }
}

@media (max-width: 1000px) {
  nav a {
    font-size: 15px;
  }

  h5{
    font-size: 15px;
    color: #FEA443;

  }
}

@media (min-width: 1600px){
  nav a, #nav-footer a, footer p, footer a{
    font-size: 1.5em;
  }
  h1{
    font-size: 3em;
  }
  h2{
    font-size: 2.5em;
  }
  h3{
    font-size: 2em
  }
  p{
    font-size: 1.5em;
  }


  }



.Footer{
  display: grid;
  align-items: center;
  justify-items: center;
  padding: 5vw;
  padding-top: 0;
  grid-template-columns:2fr 2fr 1fr 1fr;
}

.Lien{
  height: 60px;
}

.LienOP{
  height: 60px;
}


.Linkedin{
  height: 60px;
  width: 30px;
}

.Mail{
  height: 60px;
  width: 30px;
}

</style>
