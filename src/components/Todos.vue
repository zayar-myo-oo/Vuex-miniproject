<template>
  <div>
    <h2 class="text-center">All Todo Lists</h2>
  <div class="container">
    <b-input-group class="mt-3">
      <template #append>
        <b-button @click="addText(newTodo)">Add</b-button>
      </template>
      <b-form-input v-model="newTodo.title"></b-form-input>
    </b-input-group>
     <select name="" id="">
      <option value="50">50</option>
      <option value="100">100</option>
      <option value="150">150</option>
      <option value="200">200</option>
     </select>
  <div class="row">
    <div class="col-md-4 my-4" v-for="todo in myTodos" :key="todo.id" >
 <b-card bg-variant="primary" text-variant="white" class="">
  <b-card-text class="d-flex justify-content-between">
  <span>{{ todo.title }}</span>
  <b-icon-trash class="trash" @click="deleteTodo(todo.id)" variant="danger"></b-icon-trash>
</b-card-text>
  
    
  
 </b-card>
 </div>
 </div>
 </div>
 </div>
</template>

<script>
import{mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      newTodo: {
        title:""
      }
    }
  },
  methods: {
    ...mapActions(['getTodos','addTodo','deleteTodo']),
    addText(newTodo) {
      
      this.addTodo(newTodo);
      newTodo.title = "";
    }
  },
  computed:mapGetters(['myTodos']),
  mounted() {
    this.getTodos();
  }
  
}
</script>

<style>
.trash{
  cursor:pointer;
}
</style>
  
<!-- 
  တန်ဖိုးယူနည်းနှစ်ခု 

1.this.$store.getters.myTodos;
2.  ...mapGetters([
    'myTodos'
  ]) 
-->

