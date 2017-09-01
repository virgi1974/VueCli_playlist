<template>
  <div id="heroes">
    <p>this is the data being passed from parent component to child component</p>
    <small>{{heroes}}</small>
    <ul>
      <li v-for="heroe in heroes" v-on:click="heroe.show = !heroe.show">
        <h2>
          {{heroe.name}}
        </h2>
        <h3 v-if="heroe.show">{{heroe.power}}</h3>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  // así le pasamos datos de un compoente paren o root a este componente
  // como usamos --< v-for=heroe in heroes --> será "heroes"
  // props: ['heroes'],
  // ------------------------------
  //  this other way we could add validation to the passed to a component
  props: {
    heroes: {
      type: Array, // we check the type of data recived
      required: true, // it must be present
    }
  },
  // ------------------------------
  data () {
    return {
    // vamos a pasar mediante props la lista de heroes a este compoenente, para que pueda ser reutilizado en otros componentes ej:otras páginas usan una lista algo distinta
    //   heroes: [
    //     {name: 'Superman', power: 'strength', show: false},
    //     {name: 'Batman', power: 'swift', show: false},
    //     {name: 'Spiderman', power: 'sense of humor', show: false},
    //     {name: 'Elektra', power: 'martial arts', show: false},
    //     {name: 'Daredevil', power: 'sixth sense', show: false},
    //     {name: 'Thor', power: 'hummer', show: false}
    //   ]
    }
  }
}
</script>

<style scoped>

  #heroes {
    width: 100%;
    max-width: 1200px;
    max-width: 1200px;
    margin: 40px auto;
    padding: 0 20px;
    box-sizing: border-box;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    padding: 0;
  }

  li {
    margin: 10px;
    flex-grow: 1;
    flex-basis: 300px;
    text-align: center;
    padding: 30px;
    border: 1px solid #222;
    border-radius: 25px;
  }

  h3 {
    color: lightblue;
  }

</style>
