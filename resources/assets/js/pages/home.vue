<template>
  <div>
    <v-parallax
      dark
      src="https://cdn.vuetifyjs.com/images/parallax/material.jpg"
    >
      <v-layout
        align-center
        column
        justify-center
      >
        <h1 class="font-weight-thin mb-3" style="font-size: 4.6em">WeStore</h1>
        <div style="min-height: 100px">
        <vue-typer
          :text='["Cumpara cu spor!","Cauta rapid produse!","Simplu si eficient!","Adauga in wishlist!","Nu pierde reducerile zilnice!"]'
          :repeat='Infinity'
          :shuffle='false'
          initial-action='typing'
          :pre-type-delay='70'
          :type-delay='70'
          :pre-erase-delay='1500'
          :erase-delay='200'
          erase-style='backspace'
          :erase-on-complete='true'
          caret-animation='smooth'
          class="subheading"
        ></vue-typer>
        </div>
      </v-layout>
      <v-layout
        align-center
        column
        justify-end
        class="my-3 mx-1"
      >
        <div>
        <span>
          <img src="https://i.imgur.com/36TRHS4.png" style="width: 40px;height: 40px"/>
        </span>
          <span>
          <img src="https://i.imgur.com/7z4kRPa.png?1" style="width: 40px;height: 40px; background-color: transparent"/>
        </span>
        </div>
      </v-layout>

    </v-parallax>
    <v-container fluid fill-height>
      <v-slide-y-transition mode="out-in">
        <v-container grid-list-sm>
          <!--<v-carousel hide-delimiters>
            <v-carousel-item
              v-for="(item,i) in items"
              :key="i"
              :src="item.src"
              class="align-center justify-center text-xs-center"
            >
              <span><h1 class="font-weight-thin mb-3">{{item.title}}</h1></span>
            </v-carousel-item>

          </v-carousel>-->
          <v-layout row wrap>
            <v-flex v-for="i in 20" :key="i" xs12 sm6 md4 lg4 xl3>
              <v-card elevation-10 hover class="mx-1 my-1" style="border-radius: 1.5rem">
                <v-card-media :src="`https://randomuser.me/api/portraits/women/${i + 20}.jpg`" height="300px"></v-card-media>
                <v-btn fab dark class="left"  small color="error" style="margin-top: -290px">
                  <strong>15%</strong>
                </v-btn>
                <v-card-text>
                  <p class="text-xs-center"><span style="font-size: medium">Accesorii pentru femei</span> <v-spacer></v-spacer><span>100 ron </span><span style="text-decoration: line-through; color: red">200 ron</span></p>
                </v-card-text>
                <v-divider></v-divider>
                <v-list-tile @click="">
                  <v-list-tile-action>
                    <v-icon color="info">store</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title style="font-size: medium"><strong>bmall.ro</strong></v-list-tile-title>
                  </v-list-tile-content>
                  <v-spacer></v-spacer>

                  <v-divider vertical></v-divider>
                  <v-btn small icon>
                    <v-icon color="error">favorite</v-icon>
                  </v-btn>
                  <v-divider vertical></v-divider>
                  <v-btn  small icon style="margin-right: -0.75em">
                    <v-icon color="indigo">remove_red_eye</v-icon>
                  </v-btn>
                </v-list-tile>


              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-slide-y-transition>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Home',
  metaInfo () {
    return { title: this.$t('home') }
  },
  data () {
    return {
      items: [
        {
          title: "Bun venit pe WeStore",
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          title: "Bun venit pe WeStore",
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          title: "Bun venit pe WeStore",
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          title: "Bun venit pe WeStore",
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
}
</script>
<style type="text/css">
.vue-typer .custom.char {
  color: #ffffff;
  font-size: x-large;
}
</style>
