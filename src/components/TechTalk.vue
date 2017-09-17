<template lang="pug">
  .talk.card
    .card-image
      lazy-video(:url="this.talk.url")
    .card-content
      a(:href="this.talk.url")
        h2.title.is-6 {{ this.talk.title }} 
          span ({{ this.talk.duration }})
      small
        a(:href="this.talk.speaker.url") {{ this.talk.speaker.name }}
        |  @ 
        a(:href="this.talk.venue.url") {{ this.talk.venue.name }}
      talk-summary.summary(:summary="this.talk.summary", :length="150") }}
    .card-footer
      .card-footer-item
        .tags
          span.tag.is-dark(v-for="tag in this.talk.tags") {{ tag }}
</template>

<script>
import TalkSummary from '@/components/TalkSummary'
import LazyVideo from '@/components/LazyVideo'

export default {
  name: 'techtalk',
  components: {
    TalkSummary,
    LazyVideo
  },
  props: [
    'talk'
  ]
}
</script>

<style scoped lang="scss">
.card {
  display: flex;
  flex-direction: column;
  height: 100%;

  .card-content {
    padding-top: 0.5rem;
    padding-bottom: 0.2rem;

    .title {
      span {
        font-weight: normal;
        font-size: 0.8em;
      }
    }

    small {
      font-size: smaller;
    }

    .summary {
      padding-top: 0.5rem;
    }

    .tags {
      margin-top: 1rem;
      max-width: 250px;
    }
  }

  .card-footer {
    margin-top: auto;
    border-top: none;

    .card-footer-item {
      padding: 0.25rem 1.5rem 1rem;
      justify-content: flex-start;
    }
  }
}
</style>