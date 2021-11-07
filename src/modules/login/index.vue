<template>
  <div class="login">
    <div class="area-brand">
      <img alt="FacilitaTasks" src="../../assets/logo.png">
    </div>
    <div class="area-form">
      <div class="card-form">
        <a3>Entre com seus dados de acesso.</a3>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login'
}
</script>

<style lang="stylus">
@media screen and (min-width: 1248px)
  .login
    display: grid
    grid-template-columns 624px auto
    grid-template-rows auto
    grid-template-areas "AB AL"
    height: 100vh
  .card-form
    width: 435px
@media screen and (max-width: 1248px) and (min-width: 740px)
  .login
    display: grid
    grid-template-columns 350px auto
    grid-template-rows auto
    grid-template-areas "AB AL"
    height: 100vh
  .card-form
    width: calc(100vw - 350px)
@media screen and (max-width: 740px)
  .login
    display: grid
    grid-template-columns auto
    grid-template-rows 220px auto
    grid-template-areas "AB" "AL"
    height: 100vh
  .card-form
    width: 100vw
.area-brand
  background-color: var(--featured)
  grid-area: AB
  display: flex
  align-items: center
  justify-content: center
.area-form
  grid-area: AL
  display: flex
  align-items: center
  justify-content: center
.card-form
  padding: 35px
</style>
