<template lang="pug">
  .talk.card
    .card-image
      iframe(:src="embedUrl", frameborder="0", allowfullscreen)
    .card-content
      a(:href="this.talk.url")
        h2.title.is-6 {{ this.talk.title }} 
          span ({{ this.talk.duration }})
      small
        a(:href="this.talk.speaker.url") {{ this.talk.speaker.name }}
        |  @ 
        a(:href="this.talk.venue.url") {{ this.talk.venue.name }}
        | , {{ this.talk.date }}
      p {{ shortSummary }}
      .tags
        span.tag.is-light(v-for="tag in this.talk.tags") {{ tag }}
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
    },
    shortSummary () {
      return this.talk.summary.substring(0, 140) + (this.talk.summary.length > 141 ? '...' : '')
    }
  }
}
</script>

<style scoped lang="scss">
.card-content {
  padding-top: 0.5rem;

  .title {
    span {
      font-weight: normal;
      font-size: 0.8em;
    }
  }

  small {
    font-size: smaller;
  }

  p {
    padding-top: 0.5rem;
    font-size: 0.9rem;
  }

  .tags {
    margin-top: 1rem;
    max-width: 250px;
  }
}
</style>