<template>
  <div class="volume-content">
    <span>{{ projectVolumeConverted }}</span>
  </div>
</template>

<script>
import convert from "@crossangle/decimal-standards"
export default {
  name: 'x-volume',
  props: {
    projectVolume: {
      type: Number,
      required: true,
    },
  },
  computed : {
    projectVolumeConverted(){
      return convert(this.projectVolume)
    }
  }
};
</script>
<style lang="scss" scoped>
.volume-content {
  width: 100px;
  max-width: 100px;
  font-size: 11px;
  color: #303d55;
  font-weight: normal;
  display: flex;
  justify-content: center;
  align-items: center;

}
</style>
