<template>
  <div class="container">
    <div>
      <img :src="c.image" />
      <h1 class="title">
        {{ c.title }}
      </h1>
      <div>
        {{ c.page.text }}
      </div>
      <div class="links">
        <NuxtLink to="/sub1/page1">Sub 1 - Page 1</NuxtLink>
        <NuxtLink to="/sub1/page2">Sub 1 - Page 2</NuxtLink>
      </div>
      <div class="links">
        <NuxtLink to="/sub2/page1">Sub 2 - Page 1</NuxtLink>
        <NuxtLink to="/sub2/page2">Sub 2 - Page 2</NuxtLink>
      </div>
      <div class="links">
        <NuxtLink to="/">Back to index</NuxtLink>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const c = await $content('sub2', params.slug).fetch()

    return {
      c,
    }
  },
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
