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
          :isRequired="true"></input-custom>
        <input-custom
          label="Last name"
          :isRequired="true"></input-custom>
        <input-custom
          label="Last name"
          :isRequired="true"></input-custom>
      </div>
    </div>
  </div>
</template>

<script>
import InputCustom from '../components/InputCustom.vue';

export default {
  components: {
    InputCustom
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

.form {
  display: flex;
  flex-flow: row wrap;

  .input-custom {
    flex: 1 0 400px;
  }
}

</style>
