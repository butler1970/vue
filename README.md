# Introduction
This vue application was initialized using Docker and the following command line instructions.
```
mkdir vue && cd "$_" && docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:lts-alpine sh -c "yarn global add @vue/cli && vue create ."
```
This vue application was containerized using the following reference.  [vue-with-docker-initialize-develop-and-build](https://medium.com/@jwdobken/vue-with-docker-initialize-develop-and-build-51fad21ad5e6).  Note that the instructions use the image 'node:11.1-alpine' however that version of node is not sufficient to run the latest version of vue.js.  Therefore, this application's creation deviated from those instructions by using image 'node:lts-alpine' instead.
## Setup
- Clone repository into working directory.
- In working directory execute the following command.
```
docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:lts-alpine sh -c "yarn install"
```
## Startup
To launch this application use the following command line instruction in the working directory.
```
docker compose up
```

## Proxy forwarding using ngrok
- Enable SSL configuration vue.config.js
```
ngrok http --host-header=rewrite https://localhost
```

# References
- [Vue Router](https://router.vuejs.org/)
- [Vuetify](https://vuetifyjs.com/en/)
- [Vuetify Navigation Drawer Examples](https://codingbeautydev.com/blog/vuetify-navigation-drawer/)
- [Vue 3 & Vue Router Tutorial](https://www.vuemastery.com/blog/vue-router-a-tutorial-for-vue-3/)
