<template lang="pug">
  nav.navbar.is-dark(role="navigation")
    .wrapper
      .navbar-brand
        a.navbar-item(href="")
          h1 TechTalks
      .navbar-item
        .field
          .control
            input.input(placeholder="Filter speaker", v-model="speakerFilter", @input="updateSpeakerFilter")
      .navbar-item
        .field
          .control
            input.input(placeholder="Filter venue", v-model="venueFilter", @input="updateVenueFilter")
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
      'selectedTags': [],
      'speakerFilter': '',
      'venueFilter': ''
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
    },
    updateSpeakerFilter () {
      this.$emit('updateSpeakerFilter', this.speakerFilter)
    },
    updateVenueFilter () {
      this.$emit('updateVenueFilter', this.venueFilter)
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
    display: block;
}
.tags {
  display: inline-block;
}

@media screen and (min-width: 680px) {
  .wrapper {
    display: flex;
    align-items: stretch;
  }
}
</style>
