<template>
  <h1>TodoList</h1>
  <TodoList />
</template>

<script>
import TodoList from "@/components/TodoList.vue";
export default {
  name: 'App',
  components: {
    TodoList
  }
}
</script>


<style>
#app{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 600px;
  width: 800px;
}

h1:before{
  content: "<";
}
h1:after{
  content: ">";
}
</style>