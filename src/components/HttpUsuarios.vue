<template>
  <section class="src-components-http-usuarios">
    <div class="jumbotron">
      <button class="btn btn-success my-3 mr-3" @click="getPostXHR()">
        Pedir XHR
      </button>
      <button class="btn btn-dark my-3 mr-3" @click="getPostFetch()">
        Pedir Fetch
      </button>
      <button class="btn btn-warning my-3 mr-3" @click="getPostAxios()">
        Pedir Axios
      </button>
      <button class="btn btn-danger my-3" @click="posts = []">Borrar</button>
      <div class="table-responsive">
        <table class="table table-dark">
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Telefono</th>
          </tr>
          <tr v-for="(post, index) in posts" :key="index">
            <td>{{ index + 1 }}</td>
            <td>{{ post.nombre }}</td>
            <td>{{ post.email }}</td>
            <td>{{ post.numeroTelefono }}</td>
          </tr>
        </table>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "src-components-http-usuarios",
  props: [],
  mounted() {},
  data() {
    return {
      url: "https://62842c2aa48bd3c40b6bd976.mockapi.io/Usuarios",
      posts: [],
    };
  },
  methods: {
    wrapperXHRpromise() {
      return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open("get", this.url);
        xhr.addEventListener("load", () => {
          if (xhr.status == 200) {
            let respuesta = JSON.parse(xhr.response);
            resolve(respuesta);
          }
          xhr.addEventListener("error", (e) => {
            let error = {
              title: "Error xhr cb(status)",
              status: e,
            };
            reject(error);
          });
        });
        xhr.send();
      });
    },

    async getPostXHR() {
      try {
        let respuesta = await this.wrapperXHRpromise();
        this.posts = respuesta;
      } catch (error) {
        console.error("Error XHRPromise", error);
      }
    },
    async getPostFetch() {
      try {
        let response = await fetch(this.url);
        let respuesta = await response.json();
        this.posts = respuesta;
      } catch (error) {
        console.error("Error Fetch", error);
      }
    },
    async getPostAxios() {
      try {
        this.axios(this.url).then(({ data }) => {
          this.posts = data;
        });
      } catch (error) {
        console.error("Error Axios", error);
      }
    },
  },
  computed: {},
};
</script>

<style scoped lang="css">
.jumbotron {
  background-color: #03045e;
  color: white;
  border-radius: 10px;
}
</style>
