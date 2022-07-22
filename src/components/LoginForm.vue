<template>
  <div>
    <div :style="{ width: '35%' }">
      <ValidationObserver v-slot="{ invalid }">
        <form name="login" @submit.prevent="validate">
          <h3>Login</h3>
          <br />
          <div class="form-group">
            <label>Name</label><br />
            <ValidationProvider rules="nameRequired" v-slot="{ errors }">
              <input
                type="text"
                v-model="credentials.userName"
                class="form-control"
              />
              <p :style="{ color: 'red' }">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="form-group">
            <label>Password</label><br />
            <ValidationProvider rules="passwordRequired" v-slot="{ errors }">
              <input
                type="password"
                v-model="credentials.password"
                class="form-control"
              />
              <p :style="{ color: 'red' }">{{ errors[0] }}</p>
            </ValidationProvider>
          </div>
          <div class="form-group ">
            <button
              type="submit"
              class="btn btn-primary btn-md btn-block"
              :disabled="invalid"
            >
              Submit
            </button>
          </div>
        </form>
        <p v-if="!invalid">{{ message }}</p>
      </ValidationObserver>
      <!-- <Home loginData ='loginDetails'/> -->
    </div>
  </div>
</template>
<script>
import { extend } from "vee-validate";
import { required } from "vee-validate/dist/rules";
extend("nameRequired", {
  ...required,
  message: "User Name is required",
});
extend("passwordRequired", {
  ...required,
  message: "Password is required",
});
// import Home from './Home.vue'
export default {
  name: "form-cmp",
  components:{
      //  Home
  },
  data: function() {
    return {
      credentials: { userName: "", password: "" },
      message: "",
      // loginDetails:[]
    };
  },
  methods: {
    validate() {
      this.message = "Form submitted successfully";
      this.loginDetails.push(this.credentials),
      // <Home loginData ='loginDetails'/>
      this.$router.push({path: '/navbar'});
    },
  },
};
</script>