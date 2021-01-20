<template>
      <v-tabs
        color="blue-grey darken-3"
        right
      >
        <v-tab>欢迎</v-tab>
        <v-tab>逛一逛</v-tab>
        <v-tab>小玩意</v-tab>
        <v-tab>关于</v-tab>

        <v-tab-item>
          <welcome />
        </v-tab-item>

        <v-tab-item>
          <photos />
        </v-tab-item>

        <v-tab-item>
          <toys />
        </v-tab-item>

        <v-tab-item>
          <homepage />
        </v-tab-item>
      </v-tabs>
</template>


<script>
import homepage from './homepage.vue'
import photos from './photos.vue'
import toys from './toys.vue'
import welcome from './welcome.vue'
export default {
  components: { welcome, toys, photos, homepage },
}
</script>

<style scoped>

</style>