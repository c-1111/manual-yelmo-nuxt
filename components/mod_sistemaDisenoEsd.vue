<template>
    <div class="notion_renderer_holder pb-24">
      <NotionRenderer :blockMap="data" prism />
    </div>
  </template>
    
  
  <script setup lang="ts">
  const { $notion } = useNuxtApp()
  const { data } = await useAsyncData("notion", () => $notion.getPageBlocks("511829fd163d4dcbb4909c2b91a199dd"))
  </script>
  
  
  <style scoped>
*{
    
}

  @import "vue3-notion/dist/style.css"; 
  @import "prismjs/themes/prism.css";
  @import "katex/dist/katex.min.css";
  img {
    max-width: 100%;
  }
  </style>