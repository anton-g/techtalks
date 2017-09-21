<template lang="pug">
  #app
    navbar(:tags="tags",
          @updateTagFilter="updateTagFilter",
          @updateVenueFilter="updateVenueFilter",
          @updateSpeakerFilter="updateSpeakerFilter")
    .container
      .section
        tech-talks(:talks="talks", v-if="!showUtil")
        new-talk-util(v-if="showUtil")
</template>

<script>
import TechTalks from '@/components/TechTalks'
import Navbar from '@/components/Navbar'
import NewTalkUtil from '@/components/NewTalkUtil'

import talkData from '@/data/talks'

export default {
  name: 'app',
  components: {
    TechTalks,
    Navbar,
    NewTalkUtil
  },
  data () {
    return {
      'selectedTags': [],
      'showUtil': false,
      'venue': '',
      'speaker': ''
    }
  },
  created () {
    const params = new URLSearchParams(window.location.search)
    this.showUtil = params.get('util') !== null
  },
  methods: {
    updateTagFilter (tags) {
      this.selectedTags = tags
    },
    updateVenueFilter (venue) {
      this.venue = venue
    },
    updateSpeakerFilter (speaker) {
      this.speaker = speaker
    }
  },
  computed: {
    talks () {
      return talkData
              .filter(t => this.selectedTags.length < 1 || this.selectedTags.every(tag => t.tags.indexOf(tag) > -1))
              .filter(t => this.venue.length < 1 || t.venue.name.toLowerCase().indexOf(this.venue.toLowerCase()) > -1)
              .filter(t => this.speaker.length < 1 || t.speaker.name.toLowerCase().indexOf(this.speaker.toLowerCase()) > -1)
    },
    tags () {
      const tags = talkData
                       .filter(t => t.tags !== undefined)
                       .filter(t => t.tags.length > 0)
      const flat = [].concat.apply([], tags.map(t => t.tags))
      return [...new Set(flat)]
    }
  }
}
</script>

<style>
</style>
