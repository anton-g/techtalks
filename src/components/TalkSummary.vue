<template lang="pug">
  div
    p {{ transformedSummary }}
    a(v-if="this.isLong", @click="toggleSummary") {{ this.expanded ? 'Show less' : 'Show more' }}
</template>

<script>
export default {
  name: 'talksummary',
  props: [
    'summary',
    'length'
  ],
  data () {
    return {
      expanded: false
    }
  },
  computed: {
    transformedSummary () {
      if (this.expanded) {
        return this.summary
      }
      return this.summary.substring(0, this.length).trim() + (this.isLong ? '...' : '')
    },
    isLong () {
      return this.summary.length > this.length + 1
    }
  },
  methods: {
    toggleSummary () {
      this.expanded = !this.expanded
    }
  }
}
</script>

<style scoped lang="scss">
p {
  font-size: 0.9rem;
  white-space: pre-wrap;
}

a {
  font-size: smaller;
}
</style>
