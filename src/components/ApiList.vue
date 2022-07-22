<template>
    <div>
<button @click="getPosts">Fetch data</button>

    <div v-for = "list in lists" :key="list.title">
    
    <h3 @click="viewDetail(list.id)"> -- {{list.title}}</h3>
    <p>{{list.body}}</p>
    </div>

    </div>
</template>

<script>
    export default {
        name:"Fetch-data",
        data(){
            return {
               lists:[]
            }
        },
        methods:{
            viewDetail(id){
console.log("iiiiiiiiiiiiii",id)
      this.$router.push({path: `/about/${id}`});
      
                fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  .then(response => response.json())
  .then(json => {
    this.lists= []
    this.lists.push(json)})
            
            },
            getPosts(){
                fetch('https://jsonplaceholder.typicode.com/posts')
  .then(response => response.json())
  .then(json => this.lists=json )
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>