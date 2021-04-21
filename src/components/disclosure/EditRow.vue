<template>
  <div class="row-content">
    <x-logo :project-logo="item.logos['64']"></x-logo>
  </div>
</template>

<script>
import XLogo from '@/components/Disclosure/XLogo.vue';
import XName from '@/components/Disclosure/XName.vue';
import XTitle from '@/components/Disclosure/XTitle.vue';
import XPrice from '@/components/Disclosure/XPrice.vue';
import XChange from '@/components/Disclosure/XChange.vue';
import XDate from '@/components/Disclosure/XDate.vue';

export default {
  name : 'editRow',
  components : {XLogo, XName, XTitle, XPrice, XChange, XDate}
}
</script>

<style>

</style>
