<template lang='pug'>
  .talks
    .columns.is-multiline
      .column.is-narrow(v-for="talk in talks")
        tech-talk(:talk="talk")
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
.column {
  max-width: 324px;
}
</style>
