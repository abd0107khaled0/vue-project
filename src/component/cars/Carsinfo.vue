<template>
  <div class="carsinfo justify-content-evenly row">
    <div class="col-8">
      <div>
        <img
          v-if="
            mainamage.length < 1
              ? (mainamage = require('@/assets/' +
                  getCarInfo.name +
                  '/' +
                  getCarInfo.img))
              : mainamage
          "
          :src="mainamage"
          alt=""
          class="rounded mx-auto d-block mainimage"
        />
      </div>
    </div>
    <div class="hustify-content-center row alimg">
      <img
        v-for="(eachImage, x) in getCarInfo.images"
        :key="x"
        :src="require('@/assets/' + getCarInfo.name + '/' + eachImage)"
        @click="
          mainamage = require('@/assets/' + getCarInfo.name + '/' + eachImage)
        "
        alt=""
        class="rounded max-auto d-block thimage"
      />
    </div>
    <div class="col-4">
      <h2>{{ getCarInfo.inform }}</h2>
      <p>{{ getCarInfo.year }}</p>
    </div>
  </div>
</template>

<script>
import getCarsJson from "@/json/cars.json";
export default {
  name: "Carsinfo-m",
  data() {
    return {
      myCarsDetails: getCarsJson,
      carName: this.$route.params.carName,
      carFailed: this.$route.params.carFailed,
      mainamage: "",
    };
  },
  computed: {
    getCarInfo() {
      let carData = "";
      for (let i = 0; i < this.myCarsDetails.length; i++) {
        if (this.myCarsDetails[i].filedNubmer == this.carFailed) {
          carData = this.myCarsDetails[i];
          break;
        }
      }
      return carData;
    },
  },
};
</script>
<style lang="scss" scoped>
.mainimage {
  width: 650px;
  height: 450px;
  border: 10px solid #eee;
}
img {
  width: 100%;
}
.alimg {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 40px 0;
  .thimage {
    width: 200px;
    height: 150px;
    border: 10px solid #eee;
    padding: 0;
    margin: 10px;
  }
}
</style>
