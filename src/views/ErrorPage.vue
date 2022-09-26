<template>
  <div class="error-page">
    <ErrorPagee />
  </div>
</template>

<script>
import ErrorPagee from "@/component/errorPage/ErrorPage.vue";
export default {
  name: "ErrorPage",
  components: { ErrorPagee },
};
</script>

<style lang="scss" scoped>
.error-page {
  padding: 80px;
  background-color: aquamarine;
  font-size: 30px;
  color: #000;
}
</style>
