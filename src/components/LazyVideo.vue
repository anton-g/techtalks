<template lang="pug">
  .lazy-video(:class="{ 'lazy': !loaded }")
    .placeholder(@click="loadVideo", v-if="!loaded")
      .play-button
      img(:src="thumbnailUrl")
    iframe(:src="embedUrl", v-if="loaded", frameborder="0", allowfullscreen)
</template>

<script>
export default {
  name: 'lazyvideo',
  props: [
    'url'
  ],
  data () {
    return {
      'loaded': false
    }
  },
  methods: {
    loadVideo () {
      this.loaded = true
    }
  },
  computed: {
    embedUrl () {
      const url = new URL(this.url)
      const id = url.searchParams.get('v')
      return `https://www.youtube.com/embed/${id}?rel=0&amp;showinfo=0&autoplay=1`
    },
    thumbnailUrl () {
      const url = new URL(this.url)
      const id = url.searchParams.get('v')
      return `http://img.youtube.com/vi/${id}/hqdefault.jpg`
    }
  }
}
</script>

<style lang="scss">
.lazy-video {
  position: relative;
  overflow: hidden;
  cursor: pointer;
  background-color: #000;

  &.lazy {
    padding-top: 52%;    
  }

  img {
    position: absolute;
    top: -16.84%;
  }

  .play-button {
    width: 90px;
    height: 60px;
    background-color: #333;
    box-shadow: 0 0 30px rgba(0,0,0,0.6);
    z-index: 1;
    opacity: 0.8;
    border-radius: 6px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);

    &:before {
      content: '';
      border-style: solid;
      border-width: 15px 0 15px 26px;
      border-color: transparent transparent transparent #fff;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate3d(-50%, -50%, 0);
    }
  }
}
</style>
