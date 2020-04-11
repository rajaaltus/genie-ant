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
        
      </div>
      <div class="form">
        <p class="formTitle">Please register</p>
        <a-form-model 
          ref="register"
          :model="register"
          :rules="rules"
          class="login-form"
        >
          <a-form-model-item  prop="userType">
            <a-select v-model="register.userType" placeholder="please select your zone">
              <a-select-option value="shanghai">
                Faculty / Staff
              </a-select-option>
              <a-select-option value="beijing">
                Student
              </a-select-option>
            </a-select>
          </a-form-model-item>

          <a-form-model-item ref="email" prop="email">
            <a-input
             v-model="register.email"
              placeholder="Email Address"
              @blur="() => {$refs.email.onFieldBlur()}"
            >
            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-model-item>

          <a-form-model-item  has-feedback prop="password">
            <a-input
              v-model="register.password"
              placeholder="Password"
              autocomplete="off"
              type="password"
            >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-model-item>
         
          <a-form-model-item ref="employee_id" prop="employee_id">
            <a-input
              v-model="register.employee_id"
              placeholder="Login Id / Employee Id"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-model-item>

          <a-form-model-item>
            <a-select 
              showSearch
              placeholder="Select your Department"
              optionFilterProp="children"
              :filterOption="filterOption"
            >
            <a-select-option v-for="d in departments" :key="d.id">{{d.name}}</a-select-option>
            </a-select>
          </a-form-model-item>
          
          <div class="form-actions">
            <a-button type="primary" htmlType="submit" class="login-form-button" @click="onSubmit">Register</a-button>
            <span class="ml-3 register-link">
              <nuxt-link
                to="/login"
                class="text-primary utils__link--underlined mr-1"
              >Login</nuxt-link> if you have account
            </span>
          </div>
        </a-form-model>
      </div>
    </div>
    <footer class="footer">
      <ul class="footerNav">
        <li>
          <a href="javascript: void(0);">Terms of Use</a>
        </li>
        <li>
          <a href="javascript: void(0);">Compliance</a>
        </li>
        <li>
          <a href="javascript: void(0);">Confidential Information</a>
        </li>
        <li>
          <a href="javascript: void(0);">Support</a>
        </li>
        <li>
          <a href="javascript: void(0);">Contacts</a>
        </li>
      </ul>
    </footer>
  </section>
</template>

<script>
import { mapState } from 'vuex'
import Swal from 'sweetalert2'
export default {
  layout: 'register',
  auth: false,
  data() {
    return {
      form: this.$form.createForm(this),
      backgroundNumber: 1,
      confirmDirty: false,
      
      register: {
        userType: '',
        email: '',
        password: '',
        employee_id: '',
        department: null
      },
      
      rules: {
        userType: [{ required: true, message: 'Please select your designation', trigger: 'blur' }],
        email: [{ required: true, type: 'email', message: 'Enter valid email', trigger: 'change' }],
        password: [{ required: true, message: 'Please enter your password', trigger: 'blur' }],
        employee_id: [{ required: true, message: 'Please enter your employee id', trigger: 'blur' }],
        department: [{ required: true, message: 'Please select your department', trigger: 'change' }],
      }
    }
  },
  
  computed: {
    ...mapState({
      departments: state => state.user.departments.result
    })
  },
  async fetch({store}) {
     await store.dispatch('user/getAllDepartment');
  },
  methods: {
    onSubmit() {
      this.$refs.registerForm.validate(valid => {
        if (valid) {
          Swal.fire('submit!');
        } else {
          console.log('error submit!!');
          Swal.fire("Validate first");
        }
      });
    },
    resetForm() {
      this.$refs.registerForm.resetFields();
    },
    changeBackground() {
      if (this.backgroundNumber === 5) {
        this.backgroundNumber = 1
      } else {
        this.backgroundNumber += 1
      }
    },
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFieldsAndScroll((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text.toLowerCase().indexOf(input.toLowerCase()) >= 0
      );
    },
    handleConfirmBlur(e) {
      const value = e.target.value;
      this.confirmDirty = this.confirmDirty || !!value;
    },
    compareToFirstPassword(rule, value, callback) {
      const form = this.form;
      if (value && value !== form.getFieldValue('password')) {
        callback('Two passwords that you enter is inconsistent!');
      } else {
        callback();
      }
    },
    validateToNextPassword(rule, value, callback) {
      const form = this.form;
      if (value && this.confirmDirty) {
        form.validateFields(['confirm'], { force: true });
      }
      callback();
    },
    
  },
}
</script>

