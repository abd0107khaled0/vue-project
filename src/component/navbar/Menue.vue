<template>
  <div>
    <ul class="nav">
      <router-link
        tag="li"
        :to="{ name: 'Home', params: { pageTitle: 'MAin' } }"
        exact=""
      >
        <a>Home</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'Category', params: { pageTitle: 'Category' } }"
      >
        <a>Category</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'AboutView', params: { pageTitle: 'AboutView' } }"
      >
        <a>About</a>
      </router-link>
      <router-link
        tag="li"
        :to="{ name: 'Contact', params: { pageTitle: 'Contact' } }"
      >
        <a>Contact</a>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Menue-m",
};
</script>
<style lang="scss" scoped>
ul.nav {
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  overflow: hidden;
  li {
    list-style: none;
    display: inline-block;
    margin: 0 10px;
    border-bottom: 3px solid #fff;
    a {
      padding: 10px;
      display: block;
      text-decoration: none;
      font-weight: bold;
      color: #000;
    }
  }
  li:hover {
    border-bottom: 3px solid #3f51b5;
  }
}
.router-link-exact-active {
  border-bottom: 3px solid #3f51b5;
  a {
    color: #3f51b5;
  }
}
</style>
