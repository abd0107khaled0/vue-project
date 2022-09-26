<template>
  <div class="home row">
    <div class="col-2">
      <Sildebar :carsData="mycars" />
    </div>
    <div class="col-10">
      <Cars :carsData="mycars" />
      {{ c() }}
    </div>
  </div>
</template>

<script>
import Sildebar from "@/component/sidebar/Sildebar.vue";
import Cars from "@/component/cars/Cars.vue";
import getCarsJson from "@/json/cars.json";
export default {
  name: "HomeView",
  data() {
    return {
      mycars: getCarsJson,
    };
  },
  components: {
    Sildebar,
    Cars,
  },
  methods: {
    c() {
      console.log(this.mycars[0].year);
    },
  },
};
</script>
