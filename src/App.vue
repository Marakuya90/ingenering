<template>
  <div class="wrapper">
    <!--Header-->
    <header>
      <div class="navbar">
        <img class="logo" src="@/assets/logo.png" alt="Logo" />
        <input type="checkbox" id="menu__checkbox" />
        <nav class="navbar__wrap">
          <label for="menu__checkbox" class="toggle__bnt" data-open="MENU"
          data-close="CLOSE"
            onclick
          ></label>
          <ul class="nav__links">
            <router-link to="/">Главная страница</router-link>
            <router-link to="/converter">Конвертер величин</router-link>
          </ul>
        </nav>
        <button class="func__btn btn1" type="button">Вход</button>
      </div>
    </header>
    <router-view />
    <footer>
      <p>2022г</p>
    </footer>
  </div>
</template>

<style scoped>
#app {
  font-family: "Montserrat";
}
.wrapper {
  font-size: 1.5rem;
  max-width: 1500px;
  height: 100vh;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
header {
  height: 10vh;
  background: #202124;
}
.navbar {
  height: inherit;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px 0 15px;
  gap: 20px;
}
.logo {
  width: 50px;
  height: 50px;
}
#menu__checkbox {
  display: none;
}
.nav__links {
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  gap: 170px;
  padding: 0;
}
.nav__links li {
  display: inline-block;
  color: #ffffff;
}
a {
  text-decoration: none;
  color: black;
}
.nav__links li a {
  display: inline-block;
  color: #ffffff;
  opacity: 0.5;
}
.btn1 {
  padding: 0;
  border: none;
  font: inherit;
  color: #ffffff;
  opacity: 0.6;
  background-color: transparent;
  cursor: pointer;
}
.btn1:hover,
.nav__links li a:hover {
  opacity: 1;
}
footer {
  background:  #202124;
  height: 70px;
  color:#ffffff94;
  font-weight: 400;
  font-size: .778rem;
  text-align: center;
}
</style>

<script setup>
</script>

