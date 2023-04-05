<template>
  <main>
    <TodoList />
  </main>
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
  position: relative;
  width: 100%;
  height: 100%;
}
main{
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  height: 620px;
  width: 400px;

  background-color: #ffffff;
  border: #ffffff 20px solid;
  border-radius: 20px;
}
</style>