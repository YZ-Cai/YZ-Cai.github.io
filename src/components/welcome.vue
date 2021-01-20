<template>
  <v-carousel
    cycle
    height="100%"
    hide-delimiters
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(item, i) in items"
      :key="i"
    >
      <v-card light height="100%">
          <v-img 
            :src="item.url"
            :lazy-src="require('../assets/welcome/loading.jpg')"
          >
            <template v-slot:placeholder>
              <v-row
                class="fill-height ma-0"
                align="center"
                justify="center"
              >
                <v-progress-circular
                  indeterminate
                  color="white"
                  size="64"
                ></v-progress-circular>
              </v-row>
            </template>
          </v-img>
          <v-card-title 
          class="ml-4"
          v-text="item.title"
        />
        <v-card-subtitle 
          class="ml-4"
          v-text="item.subtitle"
        />
      </v-card>
    </v-carousel-item>
  </v-carousel>
</template>



<script>
export default {
  data: () => ({
    items: [
      {url:require('../assets/welcome/003.jpg'), title:"杭州·西湖", subtitle:"2019年9月"},
      {url:require('../assets/welcome/002.jpg'), title:"上海·复旦", subtitle:"2020年11月"},
      {url:require('../assets/welcome/001.jpg'), title:"广东·汕头", subtitle:"2018年2月"},
    ]
  }),
}
</script>

<style scoped>

</style>