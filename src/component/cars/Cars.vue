<template>
  <div class="justify-content-evenly row">
    <div class="col-4 each-car" v-for="(eachcars, i) in carsInfo" :key="i">
      <img
        :src="require('@/assets/' + eachcars.name + '/' + eachcars.img)"
        alt=""
        class="rounded d-block mx-auto"
      />
      <h4 class="text-center">
        {{ eachcars.name }} || {{ eachcars.username }}
      </h4>
      <div>
        <div class="float-start">
          <button type="button" class="btn btn-light">
            {{ eachcars.price }}
          </button>
        </div>
        <div class="float-end">
          <router-link
            :to="{
              name: 'Carsinfo',
              params: {
                carName: eachcars.name,
                carFailed: eachcars.filedNubmer,
              },
            }"
            ><button type="button" class="btn btn-primary">
              More Details
            </button></router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Cars-m",
  data() {
    return {
      carsInfo: this.$attrs.carsData,
    };
  },
  methods: {
    // getImage(name, img) {
    // let image = require.context("@/assets/");
    // return "@/assets/" + name + "/" + img;
    // },
  },
};
</script>
<style lang="scss" scoped>
.each-car {
  padding: 10px;
  margin-bottom: 110px;
  border: 10px solid #eee;
  .rounded {
    width: 100%;
    height: 100%;
    margin-bottom: 10px;
  }
  h4 {
    padding: 10px 0;
  }
}
</style>
