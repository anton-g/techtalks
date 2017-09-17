<template lang="pug">
  nav.navbar.is-dark(role="navigation")
    .navbar-brand
      a.navbar-item(href="")
        h1 TechTalks
    .navbar-item
      .tags
        a.tag(v-for="tag in tags", @click="toggleTagFilter(tag)", :class="{ 'is-primary': isSelected(tag) }") {{ tag }}
</template>

<script>
export default {
  name: 'navbar',
  props: [
    'tags'
  ],
  data () {
    return {
      'selectedTags': []
    }
  },
  methods: {
    toggleTagFilter (tag) {
      const idx = this.selectedTags.indexOf(tag)
      if (idx === -1) {
        this.selectedTags.push(tag)
      } else {
        this.selectedTags.splice(idx, 1)
      }

      this.$emit('updateTagFilter', this.selectedTags)
    },
    isSelected (tag) {
      return this.selectedTags.indexOf(tag) > -1
    }
  }
}
</script>

<style scoped lang="scss">
.tags {
  max-width: 900px;
}
</style>
