<template>
  <section>
    <h1>A propos de nous</h1>
    <div>
      <h2>Contactez nous</h2>
      <p>Adresse : {{ address }}</p>
      <p>Téléphone : {{ phone }}</p>
      <p>Email : {{ email }}</p>
      <p>Horaires :</p>
      <ul>
        <li>L-V: 06:00 à 16:00</li>
        <li>Samedi: 07:00 à 14:00</li>
        <li>Dimanche: 07:00 à 12:00</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      address: "18 avenue du Beurre, Paris, France",
      email: "hello@cafewithavue.bakery",
      phone: "01 88 88 88 88",
    };
  },
};

</script>

<style scoped>
h2{
  font-size:1.2em;
  color:rgba(0, 8, 255, 0.744);
}
</style>