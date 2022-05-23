<template>
  <section class="src-components-tabla">
    <!-- Tabla -->
    <table class="table">
      <thead class="thead-dark">
        <tr>
          <th scope="col">Nombre</th>
          <th scope="col">Edad</th>
          <th scope="col">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="(data, index) in this.dataTabla2"
          :key="index"
          class="table-light"
        >
          <td>{{ data.nombre }}</td>
          <td>{{ data.edad }}</td>
          <td>{{ data.email }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script lang="js">

  export default  {
    name: 'src-components-tabla',
    props: ["data"],
    mounted () {

    },
    data () {
      return {
        dataTabla2: this.data
      }
    },
    methods: {

    },
    computed: {

    }
}
</script>

<style scoped lang="css"></style>
