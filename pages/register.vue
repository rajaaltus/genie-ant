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
        <a-form class="login-form" :form="form">
          <a-form-item>
            <a-select default-value="1">
              <a-select-option value="1">
                Faculty / Staff
              </a-select-option>
              <a-select-option value="2">
                Student
              </a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item v-bind="formItemLayout">
            <a-input
              placeholder="Email Address"
              v-decorator="[
                'email',
                {
                  rules: [{
                      type: 'email',
                      message: 'The input is not valid E-mail!',
                    },
                    {
                      required: true,
                      message: 'Please input your E-mail!',
                    },
                  ],
                },
              ]"
            >
            <a-icon slot="prefix" type="mail" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout" has-feedback>
            <a-input
              placeholder="Password"
              v-decorator="[
                'password',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                    {
                      validator: validateToNextPassword,
                    },
                  ],
                },
              ]"
              type="password"
            >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-item>
          <a-form-item v-bind="formItemLayout"  has-feedback>
            <a-input
              placeholder="Confirm Password"
              v-decorator="[
                'confirm',
                {
                  rules: [
                    {
                      required: true,
                      message: 'Please confirm your password!',
                    },
                    {
                      validator: compareToFirstPassword,
                    },
                  ],
                },
              ]"
              type="password"
              @blur="handleConfirmBlur"
            >
            <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-item>
 
          <a-form-item>

            <a-input
              placeholder="Login Id / Employee Id"
              v-decorator="['username', {rules: [{ required: true, message: 'Please input your username!' }]}]"
            >
              <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25);"/>
            </a-input>
          </a-form-item>
          <a-form-item>
            <a-select 
              showSearch
              placeholder="Select your Department"
              optionFilterProp="children"
              :filterOption="filterOption"
              
            >
            <a-select-option v-for="d in departments" :key="d.id">{{d.name}}</a-select-option>
            </a-select>
          </a-form-item>
          <a-form-item>
            <a-checkbox
              v-decorator="['remember', { valuePropName: 'checked', initialValue: true,}]"
            >Remember me</a-checkbox>
            <a
              class="pull-right text-primary"
              style="line-height: 39px;"
              href="javascript: void(0);"
            >Forgot password?</a>
          </a-form-item>
          <div class="form-actions">
            <a-button type="primary" htmlType="submit" class="login-form-button">Register</a-button>
            <span class="ml-3 register-link">
              <nuxt-link
                to="/login"
                class="text-primary utils__link--underlined mr-1"
              >Login</nuxt-link> if you have account
            </span>
          </div>
        </a-form>
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
export default {
  layout: 'register',
  data: function () {
    return {
      form: this.$form.createForm(this),
      backgroundNumber: 1,
      confirmDirty: false,
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'register' });
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

