<template>
  <div>
  </div>
</template>


<script setup>
onMounted(async () => {

  const films = await FilmModel.findAll();
  const film = await FilmModel.findOne(1);
  const newFilm = new FilmModel(film)

  console.log(films); // list of entity FilmModel
  console.log(film); // 
  console.log(newFilm);

});
</script>


<style>
</style>