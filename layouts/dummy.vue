<a-menu theme="dark" :defaultSelectedKeys="['1']" mode="inline">
        <a-divider dashed />
         <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="user" /><span>User Name</span></span>
          <a-menu-item key="3">User Profile</a-menu-item>
          <a-menu-item key="4">Settings</a-menu-item>
          <a-menu-item key="5">Logout</a-menu-item>
        </a-sub-menu>
        <a-divider dashed />
        <a-menu-item key="1">
          <a-icon type="pie-chart" />
          <span>Dashboard</span>
        </a-menu-item>
        <a-sub-menu key="sub2">
          <span slot="title"><a-icon type="pic-left" /><span>Departments</span></span>
          <a-menu-item key="6">About</a-menu-item>
          <a-menu-item key="7">Patient Care Activities</a-menu-item>
          <a-menu-item key="8">HRD</a-menu-item>
          <a-menu-item key="9">Faculty / Staff</a-menu-item>
        </a-sub-menu>
        <a-sub-menu key="sub3">
          <span slot="title"><a-icon type="star" /><span>Activities &amp; Resources</span></span>
          <a-menu-item key="10">Faculty / Staff</a-menu-item>
          <a-menu-item key="11">Students</a-menu-item>
        </a-sub-menu>
        <a-menu-item key="sub4">
          <a-icon type="check" />
          <span>Approval Status</span>
        </a-menu-item>
        <a-menu-item key="sub5">
          <a-icon type="desktop" />
          <span>Reports</span>
        </a-menu-item>
      </a-menu>