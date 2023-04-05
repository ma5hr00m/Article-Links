<template>
  <div id="create-box">
    <form @submit.prevent="addItem">
      <button id="create-button" type="submit">+</button>
      <input type="text" id="create-input" name="create" v-model="newItem" placeholder="创建新的代办事项">
    </form>
  </div>
  <div id="list-box">
    <ul>
      <li v-for="(item, index) in items" :key="index">
        <label :for="'checker-' + index">
          <input type="checkbox" class="checker" :id="'checker-' + index" v-model="checkedItems[index]" @change="updateStorage">
          <span class="item-text">{{ item }}</span>
        </label>
      </li>
    </ul>
  </div>
  <aside>
    <div id="statistic-box">
      <span class="finish statics">已完成 {{ checkedPercentage }}%</span>
      <span class="total statics">总数  {{ items.length }}</span>
    </div>
  </aside>
</template>


<script>
export default {
  name: "TodoList",
  data() {
    return {
      newItem: '',
      items: [],
      checkedItems: []
    }
  },
  mounted() {
    this.retrieveStorage();
  },
  computed: {
    checkedPercentage() {
      const numChecked = this.checkedItems.filter(item => item === true).length;
      const totalItems = this.checkedItems.length;
      return totalItems === 0 ? 0 : (numChecked / totalItems * 100).toFixed(2);
    }
  },
  methods: {
    addItem() {
      if ( this.newItem.trim() ) {
        this.items.push(this.newItem.trim());
        this.checkedItems.push(false);
        this.newItem = '';
        this.updateStorage();
      }
    },
    updateStorage() {
      localStorage.setItem('items', JSON.stringify(this.items));
      localStorage.setItem('checkedItems', JSON.stringify(this.checkedItems));
    },
    retrieveStorage() {
      if(localStorage.getItem('items') !== null) {
        this.items = JSON.parse(localStorage.getItem('items'));
      }
      if(localStorage.getItem('checkedItems') !== null) {
        this.checkedItems = JSON.parse(localStorage.getItem('checkedItems'));
      }
    }
  }
}
</script>


<style>
#create-box{
  position: absolute;
  left: 0;
  top: 0;
  height: 50px;
  width: 400px;
}
#list-box{
  position: absolute;
  left: 0;
  top: 50px;
  height: 500px;

  overflow: hidden scroll;
}
aside{
  position: absolute;
  left: 0;
  bottom: 0;
  width: 400px;
  height: 50px;
}

#create-button{
  position: absolute;
  left: 0;
  top: 0;
  width: 40px;
  height: 40px;
  border: 0;
  border-radius: 100%;
  background-color: #2668FF;

  text-align: center;
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
}

#create-input{
  position: absolute;
  left: 50px;
  top: 0;
  width: 340px;
  height: 40px;
  border: #dddddd 2px solid;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;

  font-size: 14px;
  font-weight: normal;
}
#create-input:focus{
  outline: none;
  border: #2668FF 2px solid;
}

ul{
  list-style: none;
  padding: 0;
}
li{
  height: fit-content;
  width: 400px;
  overflow: hidden;
  margin-bottom: 15px;
}
input[type="checkbox"] {
  width: 16px;
  height: 16px;
  margin: 0 20px 0 12px;
}
.item-text{
  text-align: center;

  line-height: 20px;
  font-family: Arial;
  font-weight: normal;
  font-size: 18px;
}
.finish{
  position: absolute;
  left: 0;
  bottom: 0;
}
.total{
  position: absolute;
  right: 0;
  bottom: 0;
}
.statics{
  display: flex;
  width: 180px;
  height: 50px;

  box-sizing: border-box;
  border-radius: 25px;
  box-shadow: 0 0 0 2px #ffffff, 0 0 0 4px #2668FF;

  justify-content: center;
  align-items: center;
  text-align: center;
  font-family: Arial;
  font-size: 14px;
  font-weight: bold;
  color: #ffffff;
  background-color: #2668FF;
}
button{
  cursor: pointer;
}
</style>