---
meta:
  title: API
  description: API 文档
  keywords: api, vuetify
---

<script setup>
  const name = shallowRef('')
</script>

# {{ name }} API

<PageFeatures />

<ApiBacklinks :name="name" />

<PromotedEntry />

<ApiSearch />

<ApiView v-on:update:name="name = $event" />
