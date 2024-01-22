<template>
  <div class="col-lg-6 col-md-7">
    <div class="card shadow-lg bg-gradient-secondary border-0 mb-0">
      <div class="card-body px-lg-5 py-lg-5">
        <!-- <div class="d-flex mb-4 justify-content-center">
          <button
            @click="facebook_login_trigger"
            type="button"
            class="btn btn-facebook btn-icon"
          >
            <span class="btn-inner--icon"
              ><em class="fab fa-facebook"></em
            ></span>
            <span class="btn-inner--text">Facebook</span>
          </button>
          <button
            id="google_login"
            type="button"
            class="btn btn-google-plus btn-icon"
          >
            <span class="btn-inner--icon"><em class="fab fa-google"></em></span>
            <span class="btn-inner--text">Google</span>
          </button>
        </div> -->
        <form ref="form" role="form">
          <div class="row">
            <div class="form-group mb-3 col-12">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="ni ni-single-02"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Username"
                  v-model="post_data.username"
                  type="text"
                  required
                />
              </div>
            </div>

            <div class="form-group mb-3 col-12">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><i class="ni ni-email-83"></i
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Email"
                  v-model="post_data.email"
                  type="email"
                />
              </div>
            </div>

            <div class="form-group col-12">
              <div
                class="input-group input-group-merge input-group-alternative"
              >
                <div class="input-group-prepend">
                  <span class="input-group-text"
                    ><em class="ni ni-lock-circle-open"></em
                  ></span>
                </div>
                <input
                  class="form-control"
                  placeholder="Password"
                  v-model="post_data.password"
                  type="password"
                  required
                />
              </div>
            </div>
          </div>

          <div class="text-center">
            <button-cta
              label="Register"
              :isBusy="isLoading"
              class="btn btn-lg btn-block btn-default mb-2"
              @click="register"
              :disabled="!isFormValid"
            ></button-cta>
          </div>
        </form>
      </div>
    </div>
    <div class="row mt-3">
      <div class="col-6">
        <router-link class="text-dark" to="/forgot_password">
          <small>Forgot password?</small></router-link
        >
      </div>
      <div class="col-6 text-right">
        <router-link class="text-dark" to="/login"
          ><small>Already have an account? Sign in</small></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import ButtonCta from "@/components/Button/ButtonCta";

export default {
  name: "Register",
  components: {
  
    ButtonCta
  },
  data() {
    return {
      post_data: {
        username: "",
        email: "",
        password: ""
      },
      isLoading: false,
      errors: {}
    };
  },
  computed: {
    isFormValid() {
      const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return (
        this.post_data.username.length > 0  &&
        this.post_data.email &&
        this.post_data.password > 4  &&
        emailRegex.test(this.post_data.email)
      );
    }
  },
  methods: {
    async register() {
      if (this.post_data.username && this.post_data.email && this.post_data.password) {
        this.isLoading = true;
        await this.$store.dispatch("register", this.post_data);
        this.isLoading = false;
      }
    }
  }
};
</script>

<style></style>
