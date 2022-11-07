<template>
  <div class="main">
    <div class="main__header">
        <h1>К<span class = "orange__sine">о</span>нвертер величин</h1>
        <h2>Unit С<span class = "orange__sine">o</span>nverter</h2>
    </div>
    <div class="wrap__conteiner">
        <div class="main__category">
            <h3>Все категории измерения</h3>
               <ul class="category__wrapper">
                <li><router-link to="/weight">Вес, масса</router-link></li>
                <li><a href="#"></a>Площадь</li>
                <li><a href="#"></a>Скорость</li>
                <li><a href="#"></a>Температура</li>
                <li><a href="#"></a>Давление</li>
                <li><a href="#"></a>Объём, вместимость</li>
               </ul>
        </div>
        <div class="main__category-information">
        </div>
    </div>
</div>
</template>
<style scoped>

.main__header {
  height: 142px;
  background: linear-gradient(180deg, #FFFFFF 0%, rgba(255, 184, 46, 0.7) 100%);
  mix-blend-mode: normal;
  box-shadow: 0px 7px 4px rgba(0, 0, 0, 0.25);
  display:flex;
  justify-content: center;
  align-items:center; 
  flex-direction: column;
  flex-wrap: wrap;
}
.main__header h1 {
  font-size: 4.5rem;
  margin:0;
}
.main__header h2 {
  font-size: 2.5rem;
  font-weight: 100;
  margin: 0;
}
.orange__sine {
  color: #FF8D27;
}
.main__conteiner {
  margin: 25px 0 25px 0;
  height: 684px;
  background: linear-gradient(180deg, rgba(239, 233, 222, 0.3) 0%, rgba(244, 160, 85, 0.24) 100%);
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
  background: linear-gradient(180deg, rgba(239, 233, 222, 0.3) 0%, rgba(244, 160, 85, 0.24) 100%);
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
  background: linear-gradient(180deg, rgba(239, 233, 222, 0.3) 0%, rgba(244, 160, 85, 0.24) 100%);
  box-shadow: 8px 8px 10px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  align-self: stretch;
  height: 70vh;
}
</style>
<script setup>

</script>