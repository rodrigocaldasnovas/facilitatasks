<template>
  <div class="login">
    <div class="area-brand">
      <img alt="FacilitaTasks" src="../../assets/logo.png">
    </div>
    <div class="area-form">
      <div class="card-form">
        <form @submit.prevent="submit()">
          <my-label class="colorDark bold medium mb-30">Entre com seus dados de acesso.</my-label>
          <my-label class="semi-bold colorDarker small mb-5 mt-5">Nome de usuário ou e-mail:</my-label>
          <input type="text" class="mb-15" v-model="username" required>
          <my-label class="semi-bold colorDarker small mb-5 mt-5">Senha:</my-label>
          <input type="password" class="mb-15" v-model="password" required>
          <button class="responsive primary">Entrar</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import MyLabel from '../../components/MyLabel.vue'
import { mapState, mapActions } from 'vuex'
export default {
  data: function () {
    return {
      user: {
        logged: false,
        firstname: 'Eduardo Pereira',
        lastname: 'da Costa',
        username: 'eduardo',
        role: 'Front-End Developer',
        email: 'eduardo@appfacilita.com.br',
        password: '123456',
        office: 'Front-end Developer'
      },
      username: '',
      password: ''
    }
  },
  components: { MyLabel },
  name: 'Login',
  computed: {
    ...mapState(['auth'])
  },
  mounted () {
    this.$root.$emit('Spinner::hide')
  },
  methods: {
    ...mapActions(['ActionSetToken', 'ActionSetUser']),
    submit () {
      if ((this.user.email === this.username) || (this.user.username === this.username)) {
        if (this.user.password === this.password) {
          this.ActionSetUser(this.user)
          this.ActionSetToken('token-fake-jshdjshdjsdhsjdhsjdhsjdhsjdhsdsjdhsj')
          this.$router.push({ name: 'Dashboard' })
          return true
        }
      }
      alert('Error na autenticação!')
    }
  }
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
