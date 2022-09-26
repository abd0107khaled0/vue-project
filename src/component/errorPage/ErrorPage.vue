<template>
  <div class="error-pagee">
    hello with error
    <img src="@/assets/logo.png" alt="" />
    <button @click="goback()" class="btn btn-secondary">Go Back</button>
  </div>
</template>

<script>
export default {
  name: "ErrorPage",
  methods: {
    goback: function () {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>
