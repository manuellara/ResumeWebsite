<template>
  <v-container fill-height fluid id="app">
    <v-row align="center" justify="center">
      <v-col align="center">

        <v-flex xs10 sm10 md8>
          <v-card class="elevation-12">
            <v-window v-model="step">

              <!-- window 1 - sign in -->
              <v-window-item :value="1">
                <v-row>

                  <v-flex md8 py-12>
                    <v-card-text>
                      <h1 class="text-center display-2 black--text">
                        Log-In
                      </h1>
                      <div class="text-center" >
                        <v-btn 
                          v-for="(x, i) in loginButtons" :key="i"
                          class="mx-2 my-4" 
                          fab 
                          outlined 
                          @click="signIn(x.provider)">
                          <v-icon>
                            {{ x.icon }}
                          </v-icon>
                        </v-btn>
                      </div>
                      <h4 class="text-center mlt-4">
                        Log-In using Google, Twitter, Github, or other credentials
                      </h4>
                      <v-flex xs6 sm6 md6>
                        <v-form disabled>
                          <v-text-field
                            v-for="(item, i) in account" :key="i" 
                            :id="item.id" 
                            :label="item.label" 
                            :name="item.name" 
                            :prepend-icon="item.icon" 
                            :type="item.type" 
                            :color="item.color"/>
                        </v-form>
                      </v-flex>
                      <h3 class="text-center mt-3">
                        Forgot your password?
                      </h3>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn disabled rounded color="black white--text">
                        Sign-In
                      </v-btn>
                    </div>
                  </v-flex>

                  <!-- sidebar -->
                  <v-flex md4 class="black" py-12>
                    <v-card-text class="white--text">
                      <h1 class="text-center display-1">
                        Hello, All
                      </h1>
                      <h5 class="text-center">
                        Welcome to Manuel Lara's personal webiste
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step++">
                        Register
                      </v-btn>
                    </div>
                  </v-flex>
                    
                </v-row>
              </v-window-item>

              <!-- window 2 - sign up -->
              <v-window-item :value="2">
                <v-row class="fill-height">

                  <v-flex md4 class="black" py-12>
                    <v-card-text class="white--text">
                      <h1 class="text-center display-1">
                        Back to Log-In screen
                      </h1>
                      <h5 class="text-center">
                        Log-In with your new creds!
                      </h5>
                    </v-card-text>
                    <div class="text-center">
                      <v-btn rounded outlined dark @click="step--">
                        Sign-In
                      </v-btn>
                    </div>
                  </v-flex>

                  <!-- sidebar -->
                  <v-flex md8 py-12>
                    <v-card-text>
                      <h1 class="text-center display-2">
                        Register
                      </h1>
                      <h4 class="center-text pt-4">
                        Create credentials
                      </h4>
                      <v-flex xs6 sm6 md6>
                        <v-form disabled>
                          <v-text-field
                            v-for="(item, i) in createAccount" :key="i" 
                            :id="item.id" 
                            :label="item.label" 
                            :name="item.name" 
                            :prepend-icon="item.icon" 
                            :type="item.type" 
                            :color="item.color"/>
                        </v-form>
                      </v-flex>
                    </v-card-text>
                    <div class="text-center mt-3">
                      <v-btn disabled rounded color="black white--text">
                        Submit
                      </v-btn>
                    </div>
                  </v-flex>

                </v-row>
              </v-window-item>

            </v-window>
          </v-card>
        </v-flex>

      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    account: [
      { label: 'E-mail', name: 'E-mail', icon: 'mdi-email', type: 'text', color: 'black' },
      { id: 'Password', label: 'Password', name: 'Password', icon: 'mdi-form-textbox-password', type: 'password', color: 'black' },
    ],
    createAccount: [
      { label: 'E-mail', id: "registerEmail", icon: 'mdi-email', type: 'text', color: 'black' },
      { label: 'Password', id: "registerPassword", icon: 'mdi-form-textbox-password', type: 'password', color: 'black' },
    ],
    loginButtons:[
      { icon: 'fab fa-google', provider: 'google' },
      { icon: 'fab fa-twitter', provider: 'twitter' },
      { icon: 'fab fa-github', provider: 'github' },
    ],
  }),
  watch: {
    registerEmail(e){
      console.log(e)
    }
  },
  props: {
    source: String
  },
  methods: {
    // Google sign-in dispatcher
    signIn(provider) {
      this.$store.dispatch("signIn", provider);
    },
  }
};
</script>

<style scoped>
#app {
  background: rgb(0,0,0);
  background: linear-gradient(145deg, rgba(0,0,0,1) 0%, rgba(255,255,255,0) 100%);
}
</style>
