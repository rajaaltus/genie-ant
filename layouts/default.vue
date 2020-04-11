<template>
  <a-layout id="components-layout-demo-side" style="min-height: 100vh">
    <a-layout-sider collapsible v-model="collapsed">
      <div class="logo" />
      <a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-divider dashed />
          <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User Name</span></span>
          <a-menu-item key="3"><nuxt-link to="/admin/user-profile"> User Profile</nuxt-link></a-menu-item>
          <a-menu-item key="4"><nuxt-link to="/admin/settings">Settings</nuxt-link></a-menu-item>
          <a-menu-item key="5">
               <a-button type="link" @click="$auth.logout()">Logout</a-button>
          </a-menu-item>
        </a-sub-menu>
        <a-divider dashed />
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span><nuxt-link to="/admin">Dashboard</nuxt-link></span>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="pic-left" /><span>Departments</span></span>
          <a-menu-item key="6"><nuxt-link to="/admin/departments">About</nuxt-link></a-menu-item>
          <a-menu-item key="7"><nuxt-link to="/admin/departments/patient-care">Patient Care Activities</nuxt-link></a-menu-item>
          <a-menu-item key="8"><nuxt-link to="/admin/departments/hrd">HRD</nuxt-link></a-menu-item>
          <a-menu-item key="9"><nuxt-link to="/admin/departments/faculty">Faculty / Staff</nuxt-link></a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="star" /><span>Activities &amp; Resources</span></span>
          <a-menu-item key="10"><nuxt-link to="/admin/activities/faculties">Faculty / Staff</nuxt-link></a-menu-item>
          <a-menu-item key="11"><nuxt-link to="/admin/activities/students">Students</nuxt-link></a-menu-item>
        </a-sub-menu>
        <a-menu-item key="sub4">
          <a-icon type="check" />
          <span><nuxt-link to="/admin/approvals">Approval Status</nuxt-link></span>
        </a-menu-item>
        <a-menu-item key="sub5">
          <a-icon type="desktop" />
          <span><nuxt-link to="/admin/reports">Reports</nuxt-link></span>
        </a-menu-item>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header style="background: #fff; padding: 0" />
      <a-layout-content style="margin: 0 16px">
        <div :style="{ padding: '24px', background: '#fff', minHeight: '360px' }" class="mt-4">
          <nuxt />
        </div>
      </a-layout-content>
      <a-layout-footer style="text-align: center">
        Ant Design ©2018 Created by Ant UED
      </a-layout-footer>
    </a-layout>
  </a-layout>
</template>
<script>
export default {
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>

<style>
#components-layout-demo-side .logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
