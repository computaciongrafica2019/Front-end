<template>
  <div class="register">
    <div class="register__content">
      <div class="title--simple" style="margin-top: 30px;">
        Register now
      </div>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. In ipsum eius corrupti, ipsa, tempora provident excepturi, quod totam nobis a quisquam laboriosam architecto est!

      <div class="form">
        <input-custom
          label="Name"
          v-model="userData.Nombres"
          :isRequired="true"></input-custom>
        <input-custom
          label="Last name"
          v-model="userData.Apellidos"
          :isRequired="true"></input-custom>
        <input-custom
          label="User name"
          v-model="userData.NombreUsuario"
          :isRequired="true"></input-custom>
        <input-custom
          label="Username"
          v-model="userData.Telefono"
          :isRequired="true"></input-custom>
        <input-custom
          label="Email"
          v-model="userData.CorreoElectronico"
          type="email"
          :isRequired="true"></input-custom>
        <input-custom
          label="Password"
          v-model="userData.Contraseña"
          type="password"
          :isRequired="true"></input-custom>

        <!-- <range-custom
          :minVal="200"
          :maxVal="500"
          v-model="test2"
          label="Altura"
          ></range-custom>
        <select-custom
          label="prueba"
          v-model="test"
          :options="options"></select-custom> -->
      </div>
      
      <div class="button"
        @click="createUser">Register</div>
    </div>
  </div>
</template>

<script>
import InputCustom from '../components/InputCustom.vue';
import RangeCustom from '../components/RangeCustom.vue';
import SelectCustom from '../components/SelectCustom.vue';
import API from '../http_common';

export default {
  data() {
    return {
      userData: {
        "CorreoElectronico": "hsmarta@unal.edu.co",
        "NombreUsuario": "artinezss",
        "Contraseña": "1234",
        "Nombres": "Heyner",
        "Apellidos": "Martinez",
        "Telefono": 32423
      },
      options: [
        {label: 'a', value: 1, bgColor: 'coral'},
        {label: 'b', value: 2},
        {label: 'c', value: 3},
        {label: 'd', value: 4},
      ]
    }
  },
  components: {
    InputCustom,
    RangeCustom,
    SelectCustom
  },
  methods: {
    async createUser() {
      const res = await API.post(
        'Cliente/Create', this.userData
      );

      console.log(res);
    }
  }
}
</script>

<style lang="scss" scoped>

.register {
  background: #2A2A2A;
  min-height: 100vh; 
  padding: 8%;
  position: relative;

  &::after {
    content: '';
    @include squared(100%);
    background: url('../assets/reference/fachada_home.jpg');
    filter: blur(3px) grayscale(70%);
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;    
  }

  &::before {
    content: '';
    @include squared(100%);
    position: absolute;
    top: 0;
    left: 0;    
    background: rgba(20, 20, 20, 0.8);
    z-index: 2;
  }
}

.register__content {
  font-size: 18px; 
  z-index: 3;
  color: white;
  position: relative; 
  font-weight: normal;
}

</style>
