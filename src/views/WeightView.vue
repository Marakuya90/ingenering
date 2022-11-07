<template>
  <div class="main">
    <div class="main__header">
      <h1>Вес, масса</h1>
      <h2>Unit С<span class="orange__sine">o</span>nverter</h2>
    </div>
    <div class="wrap__conteiner">
      <div class="main__category">
        <h3>Все категории измерения</h3>
        <ul class="category__wrapper">
          <router-link to="/weight">Вес, масса</router-link>
        </ul>
      </div>
      <div class="main__convert">
        <nav>
          <ul>
            <router-link class="link__convert-nav" to="/"
              >Главная страница</router-link
            >
            <div class="arrow"></div>
            <router-link class="link__convert-nav" to="/converter"
              >Конвертер величин</router-link
            >
            <div class="arrow"></div>
            <router-link class="link__convert-nav" to="/weight"
              >Вес, масса</router-link
            >
          </ul>
        </nav>
        <h3>Мгновенный перевод единиц весса и массы</h3>
        <div class="form__convert">
          <form action="">
            <div class="wrap">
              <label class="label__convert" v-for="unit in units" :key="unit"
                >{{ unit.fullName
                }}<input class="input__convert" type="text" value=""
              /></label>
            </div>
            <div>
              <button type="reset" class="btn2" id="btn__clear">
                Очистить
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.main__header {
  height: 142px;
  background: linear-gradient(180deg, #ffffff 0%, rgba(255, 184, 46, 0.7) 100%);
  mix-blend-mode: normal;
  box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
}
.main__header h1 {
  font-size: 4.5rem;
  margin: 0;
}
.main__header h2 {
  font-size: 2.5rem;
  font-weight: 100;
  margin: 0;
}
.orange__sine {
  color: #ff8d27;
}
.main__conteiner {
  margin: 25px 0 25px 0;
  height: 684px;
  background: linear-gradient(
    180deg,
    rgba(239, 233, 222, 0.3) 0%,
    rgba(244, 160, 85, 0.24) 100%
  );
  box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.wrap__conteiner {
  margin: 25px 0 25px 0;
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
}
.main__category {
  background: linear-gradient(
    180deg,
    rgba(239, 233, 222, 0.3) 0%,
    rgba(244, 160, 85, 0.24) 100%
  );
  box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  height: 70vh;
  align-self: stretch;
}
.main__category h3 {
  font-size: 0.778rem;
  text-align: center;
}
.category__wrapper {
  list-style-type: none;
  line-height: 2;
}
.category__wrapper li:hover {
  text-decoration: underline;
}
.main__category-information {
  background: linear-gradient(
    180deg,
    rgba(239, 233, 222, 0.3) 0%,
    rgba(244, 160, 85, 0.24) 100%
  );
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-self: stretch;
  height: 70vh;
}
.form__convert {
  padding: 5px;
  background: linear-gradient(
    180deg,
    rgba(239, 233, 222, 0.3) 0%,
    rgba(244, 160, 85, 0.24) 100%
  );
  box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
}
.wrap {
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: end;
  gap: 5px 2px;
}
.main__convert ul {
  list-style-type: none;
  display: flex;
  justify-content: flex-start;
  gap: 5px;
  align-items: center;
}
.arrow {
  display: inline-flex;
  width: 5px;
  height: 5px;
  border-top: 1px solid gray;
  border-right: 1px solid gray;
  transform: rotate(45deg);
}
.link__convert-nav:hover {
  text-decoration: underline;
}
.main__convert h3 {
  text-align: center;
}
.input__convert {
  background: #ffffff;
  border: none;
  box-shadow: inset 3px 3px 8px rgba(111, 108, 108, 0.188);
  min-width: 30px;
  height: 20px;
}
.btn2 {
  background: #fefefe;
  box-shadow: 6px 6px 7px rgba(181, 181, 210, 0.75),
    -3px -3px 10px rgba(255, 255, 255, 0.84);
  border-radius: 6px;
  font-size: 0.778rem;
  font-weight: 600;
  border: 2px solid #ffffff;
  width: 150px;
  height: 35px;
  margin: 10px 10px;
}
.btn2:hover {
  background: linear-gradient(
    99.63deg,
    #fbfbfd 5.33%,
    rgba(220, 220, 236, 0.45) 96.67%
  );
  border: none;
}
.btn2:active {
  background: linear-gradient(
    99.63deg,
    #fbfbfd 5.33%,
    rgba(220, 220, 236, 0.45) 96.67%
  );
  box-shadow: inset 6px 6px 5px #ffffff, inset -2px -1px 10px #c3c3e7;
  border-radius: 6px;
}
</style>
<script setup>
import { onMounted, ref } from "vue";

let units = ref();

async function getUnit() {
  const host = process.env.VUE_APP_URL;
  let response = await fetch(host + "units");
  units.value = await response.json();
  let unitsWeight = units.value.filter((item) => {
    return item.unitType == "MASS";
  });
  units.value = unitsWeight;
  console.log(units.value);
}

onMounted(getUnit);
</script>
