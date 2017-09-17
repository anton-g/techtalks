<template lang="pug">
  .new-talk-util
    h2.title New talk utility
    .field
      label.label URL
      .control
        input.input(type="text", v-model.trim="url")
    .field
      label.label Title
      .control
        input.input(type="text", v-model.trim="title")
    .field
      label.label Duration
      .control
        input.input(type="text", v-model.trim="duration")
    .field
      label.label Summary
      .control
        textarea.textarea(v-model.trim="summary")
    .field
      label.label Speaker
      .control
        input.input(type="text", v-model.trim="speaker")
    .field
      label.label Speaker URL
      .control
        input.input(type="text", v-model.trim="speakerUrl")
    .field
      label.label Venue
      .control
        input.input(type="text", v-model.trim="venue")
    .field
      label.label Venue URL
      .control
        input.input(type="text", v-model.trim="venueUrl")
    .field
      label.label Tags
      .control
        input.input(type="text", v-model.trim="tags")
    .field
      label.label Output
      .control
        textarea.textarea(disabled, rows="20") {{ talk }}
</template>

<script>
export default {
  name: 'newtalkutil',
  data () {
    return {
      'url': '',
      'title': '',
      'duration': '',
      'summary': '',
      'speaker': '',
      'speakerUrl': '',
      'venue': '',
      'venueUrl': '',
      'tags': ''
    }
  },
  computed: {
    talk () {
      return {
        'title': this.title,
        'summary': this.summary,
        'venue': {
          'name': this.venue,
          'url': this.venueUrl
        },
        'speaker': {
          'name': this.speaker,
          'url': this.speakerUrl
        },
        'duration': this.duration,
        'url': this.url,
        'tags': this.tags.split(';').map(t => t.trim()).filter(t => t.length > 0)
      }
    }
  }
}
</script>

<style lang="scss">

</style>
