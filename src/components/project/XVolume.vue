<template>
  <div class="volume-content">
    <span>{{ volume }}</span>
  </div>
</template>

<script>
export default {
  name: 'x-volume',
  props: {
    projectVolume: {
      type: Number,
      required: 0,
    },
  },
};
</script>
