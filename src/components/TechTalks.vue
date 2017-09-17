<template lang='pug'>
  .talks
    .columns.is-multiline.is-centered.is-mobile
      .column.is-narrow(v-for="talk in talks")
        tech-talk(:talk="talk")
</template>

<script>
import TechTalk from '@/components/TechTalk'

export default {
  name: 'techtalks',
  components: {
    TechTalk
  },
  props: [
    'talks'
  ]
}
</script>

<style scoped>
.column {
  max-width: 324px;
}
</style>
