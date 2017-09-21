<template lang="pug">
  #app
    navbar(:tags="tags", @updateTagFilter="updateTagFilter")
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
      'and': true
    }
  },
  created () {
    const params = new URLSearchParams(window.location.search)
    this.showUtil = params.get('util') !== null
  },
  methods: {
    updateTagFilter (tags) {
      this.selectedTags = tags
    }
  },
  computed: {
    talks () {
      return this.selectedTags.length > 0 ? talkData.filter(talk => this.selectedTags.every(tag => talk.tags.indexOf(tag) > -1)) : talkData
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
