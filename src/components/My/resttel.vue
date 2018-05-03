<template>
    <div>
        <header class="header">
        <ul>
            <router-link :to="{ path: '/ID' }" tag='li'>&lt;</router-link>
            <li>重置手机支付密码</li>
            <li></li>
        </ul>
        </header>
    </div>
</template>
<style scoped>
    .header {
  width: 100%;
  height: 0.98rem;
  line-height: 0.98rem;
  background: #fff;
  border-bottom: 1px solid #e7e7e7;
}
.header ul {
  display: flex;
}
.header li {
  flex: 1;
  text-align: center;
  font-size: 0.28rem;
  color: #2f2f2f;
}
.header li:nth-child(1) {
  text-align: left;
  margin-left: 0.3rem;
}   
</style>
