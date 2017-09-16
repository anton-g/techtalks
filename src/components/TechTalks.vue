<template lang='pug'>
  .talks
    .columns
      .column(v-for="talk in talks")
        tech-talk(:talk="talk")
      .column
      .column
      .column
</template>

<script>
import TechTalk from '@/components/TechTalk'

import talks from '@/data/talks'

export default {
  name: 'techtalks',
  components: {
    TechTalk
  },
  computed: {
    talks () {
      return talks
    }
  }
}
</script>

<style scoped>
</style>
