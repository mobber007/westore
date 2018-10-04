<template>
  <div v-if="product">
    <v-layout row wrap>
      <v-flex xs12 sm12 md8 lg8 xl8 d-flex>
        <v-card flat>
          <v-carousel flat reverse-transition="fade"
                      transition="fade"
                      style="min-height: 75vh"
                      hide-delimiters light>
            <v-carousel-item
              v-for="(image,index) in product.images"
              :key="index"
              :src="image.url"
              contain
            >
            </v-carousel-item>
          </v-carousel>
        </v-card>
      </v-flex>
      <v-flex xs12 sm12 md4 lg4 xl4 d-flex>
        <v-card elevation-10>
          <v-img :src="product.affiliate_logo" contain height="150"/>
          <v-btn v-if="product.discounted" fab dark class="left" small color="error" style="margin-top: -145px">
            <strong>{{ product.discounted }}%</strong>
          </v-btn>
          <v-card-text>
            <p class="text-xs-center"><span style="font-size: medium">{{ product.title }}</span> <v-spacer/><span>{{ product.price }} ron </span><span v-if="product.discounted" style="text-decoration: line-through; color: red">{{ product.old_price }} ron</span></p>

            <v-expansion-panel v-model="description_panel" expand>
              <v-expansion-panel-content>
                <div slot="header">Descriere</div>
                <v-card>
                  <v-card-text>{{ product.description }}</v-card-text>
                </v-card>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-card elevation-5 >
      <v-divider/>
      <v-list-tile>
        <v-btn icon style="margin-left: -0.75em" @click="redirectTo(product.event_url)" >
          <v-icon color="info">store</v-icon>
        </v-btn>
        <v-list-tile-content style="margin-left: -0.75em" @click="redirectTo(product.event_url)">
          <div style="font-size: medium"><strong>{{ product.affiliate }}</strong></div>
        </v-list-tile-content>
        <v-spacer/>
        <v-divider vertical/>
        <v-btn v-if="!$store.state.auth.user" icon @click="$store.state.navi.loginSheet = true">
          <v-icon color="error">favorite</v-icon>
        </v-btn>
        <div v-else>
          <favorite :favorited="product.favorited" :product="product"/>
        </div>
        <v-divider vertical/>
        <v-btn icon style="margin-right: -0.75em">
          <v-icon color="indigo">photo_camera</v-icon>
        </v-btn>
      </v-list-tile>
    </v-card>
    <v-container fill-height grid-list-sm>
        <v-layout row wrap>
          <v-flex xs12 class="my-5">
            <div class="text-xs-center">
              <h2 style="font-size: 2em">Produse similare</h2>
            </div>
          </v-flex>
          <v-flex v-for="(product, index) in product.similars" :key="index" xs12 sm6 md4 lg4 xl3>
            <product :product="product" :index="index"/>
          </v-flex>
        </v-layout>
    </v-container>
  </div>
</template>

<script>
import Product from '../../components/Product'
import Favorite from '../../components/Favorite'
import { mapGetters } from 'vuex'
import Lightbox from 'vue-simple-lightbox'
export default {
  name: 'ProductSingle',
  components: {
    Lightbox, Product, Favorite
  },
  data () {
    return {
      description_panel: [true]
    }
  },
  computed: mapGetters({
    product: 'product/product'
  }),
  methods: {
    async redirectTo (url) {
      this.redirecting = true
      console.log('Redirecting')
      window.open(url)
      this.redirecting = false
      console.log('Redirected')
    }
  },
  metaInfo () {
    return { title: this.product.title }
  }
}
</script>
