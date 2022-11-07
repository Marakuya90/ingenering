<template>
  <div class="main">
    <div class="main__header">
        <h1>Тепл<span class="orange__sine">о</span>техника</h1>
    </div>
    <div class="main__conteiner"></div>
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
</style>
<script setup></script>