<template>
  <div></div>
</template>


<script setup>
onMounted(async () => {
  const films = await FilmModel.findAll();
  const film = await FilmModel.findOne(1);
  const newFilm = new FilmModel(film);
  newFilm.save();

  console.log(films); // list of FilmModel
  console.log(film); // FilmModel
  console.log(newFilm); // FilmModel

  let aboba = new FilmModel({
    rent_film_id: 1,
    createdAt: "2023-01-22T20:00:21.161Z",
    descr: "Фильм о крутом человеке, который ещё и паук",
    image_url: null,
    name: "Человек паук 5",
    price: 1000,
    rent_end_dt: null,
    rent_start_dt: null,
    session_times: null,
    status: 0,
    updatedAt: "2023-01-22T20:00:21.161Z",
    year: "2016",
  });
});
</script>


<style>
</style>