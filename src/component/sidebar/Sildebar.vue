<template>
  <div>
    <ul class="sildbar-nav">
      <router-link
        tag="li"
        :to="{ name: 'EachCar', params: { carType: eachCar.carName } }"
        v-for="(eachCar, i) in carTypes"
        :key="i"
      >
        <a>
          {{ eachCar.carName }}
        </a>
      </router-link>
    </ul>
  </div>
</template>

<script>
import carTypes from "@/json/carType.json";
export default {
  name: "Sildebar-m",
  data() {
    return {
      carTypes: carTypes,
    };
  },
};
</script>

<style lang="scss" scoped>
.sildbar-nav {
  li {
    list-style: none;
    width: 100%;
    border-bottom: 2px solid #fff;
    background-color: #4c4f60;
    a {
      padding: 10px;
      display: block;
      text-decoration: none;
      color: #fff;
      font-weight: 700;
    }
  }
}
</style>
