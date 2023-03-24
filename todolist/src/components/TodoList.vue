<template>
  <div id="search-box">
    <button type="submit">search</button>
    <input type="text" id="search" name="search" placeholder="Input keywords...">
  </div>
  <div id="list-box">
    <ul>
      <li>
        <label for="checker">
          <input type="checkbox" class="checker">
          <span>This is a task</span>
        </label>
      </li>
    </ul>
  </div>
  <div id="create-box">
    <button type="submit">create</button>
    <input type="text" id="create" name="create" placeholder="Creata an item...">
  </div>
</template>

<script>
export default {
  name: "TodoList"
}
</script>

<style scoped>
ul{
  margin: 20px 20px 20px 0;
  padding: 0;
  list-style: none;
}
.checker{
  margin-right: 10px;
}
</style>