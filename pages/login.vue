<template>
  <section
    class="fullscreen"
    :style="{backgroundImage: 'url(\'resources/images/photos/' + backgroundNumber + '.jpeg\')'}"
  >
    <header class="header m-4">
      <a href="javascript: void(0);" class="logo">
        <img src="resources/images/logo-inverse.png" alt="Clean UI Admin Template">
      </a>
      <div class="styleControls">
        <!-- <a-button
          class="mt-3 mt-xl-0"
          @click="setFullscreen"
        >Set {{fullscreen ? 'Windowed' : 'Fullscreen'}}</a-button> -->
        <a-button class="ml-3 mt-3 mt-xl-0" @click="changeBackground">Change Background</a-button>
      </div>
    </header>
    <div class="content">
      <div class="promo">
        <h1 class="mb-3 text-white">Welcome to ARMS, NIMHANS</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry&#39;s standard dummy text ever since the 1500s.
        </p>
      </div>
      <div class="form">
        <p class="formTitle">Please log in</p>
        <a-form-model
          ref="login"
          :model="login"
          :rules="rules">

          <a-form-model-item ref="username" prop="username"> 
            <a-input
              v-model="login.username"
              placeholder="Username"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25);" />
            </a-input>
          </a-form-model-item>

          <a-form-model-item has-feedback ref="password" prop="password">
            <a-input 
              v-model="login.password" 
              type="password" 
              autocomplete="off"
              placeholder="Password"
            >
              <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25);">
                <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25);" />
              </a-icon>
            </a-input>
          </a-form-model-item>
        
          <a-form-model-item>
            <a-checkbox
            >Remember me</a-checkbox>
            <a
              class="pull-right text-primary"
              style="line-height: 39px;"
              href="javascript: void(0);"
            >Forgot password?</a>
          </a-form-model-item>

          <div class="form-actions">
            <a-button type="primary" htmlType="submit" class="login-form-button" :disabled="login.username === '' || login.password === ''" @click="signIn">Sign in</a-button>
            <span class="ml-3 register-link">
              <nuxt-link
                to="/register"
                class="text-primary utils__link--underlined mr-1"
              >Register</nuxt-link> if you don&#39;t have account
            </span>
          </div>

        </a-form-model>
      </div>
    </div>
  </section>
</template>

<script>
import Swal from 'sweetalert2'
export default {
  layout: 'login',
  data() {
    return {
      form: this.$form.createForm(this),
      backgroundNumber: 1,
      confirmDirty: false,

      login: {
        username: '',
        password: ''
      },
      rules: {
        username: [{ required: true, message: 'Please input your username!', trigger: 'blur' }],
        password: [{ required: true, message: 'Please input your Password!', trigger: 'blur' }]

      }
    }
  },
  methods: {
    async signIn () {
			await this.$auth.loginWith("local", {
				data: {
					identifier: this.login.username,
					password: this.login.password,
					rememberMe: true
				}
			})
				.then(data => {
					this.$router.push('/admin');
				})
				.catch(err => {
					Swal.fire({
						title: 'Login Failed!',
						text: err.response.data.data[0].messages[0].message,
						type: 'error'
					});
					this.resetLogin();
				});
		},
    changeBackground() {
      if (this.backgroundNumber === 5) {
        this.backgroundNumber = 1
      } else {
        this.backgroundNumber += 1
      }
    },
    setFullscreen() {
      this.fullscreen = !this.fullscreen
    },
  },
}
</script>


