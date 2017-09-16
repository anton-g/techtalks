<template lang="pug">
  .talk.card
    .card-image
      iframe(:src="embedUrl", frameborder="0", allowfullscreen)
    .card-content
      a(:href="this.talk.url")
        h2.title.is-6 {{ this.talk.title }} ({{ this.talk.duration }})
      p.subtitle.is-6
        a(:href="this.talk.speaker.url") {{ this.talk.speaker.name }}
        |  @ 
        a(:href="this.talk.venue.url") {{ this.talk.venue.name }}
        | , {{ this.talk.date }}
      p {{ this.talk.summary }}
</template>

<script>
export default {
  name: 'techtalk',
  props: [
    'talk'
  ],
  computed: {
    embedUrl () {
      const url = new URL(this.talk.url)
      const id = url.searchParams.get('v')
      return `https://www.youtube.com/embed/${id}?rel=0&amp;showinfo=0`
    }
  }
}
</script>

<style>

</style>