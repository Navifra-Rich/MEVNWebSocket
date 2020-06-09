<template>
  <div class="home">
   <h3>채팅하자 친구들아</h3>
    <div class="log_panel">
      <div class="log"></div>
      <div class="id">id :  <textarea class="IDInput"></textarea> </div>
      <textarea class="textInput"></textarea>
      <button @click="sendMessage">전송</button>
    </div>
    <button @click="getget">getget</button>
  </div>
</template>
<script>
export default {
  mounted(){
    var url='ws://echo.websocket.org';
      var url2='ws://localhost:3000/api/soc'
      //'ws://localhost:8080'
      this.ws = new WebSocket(url2);
      var log=document.getElementsByClassName('log');
      this.ws.onopen = (event)=>{
          //this.ws.send('');
      }
      this.ws.onmessage = (mes)=>{
        log[0].innerHTML += mes.data+"<br>";
      }
  },
  data(){
    return{
      ws,
      tt:[],
    }
  },
  methods:{
    sendMessage(){
      var textBox = document.getElementsByClassName('textInput');
      var idBox = document.getElementsByClassName('IDInput');
      var data=textBox[0].value;
      var id = idBox[0].value;
      textBox[0].value='';
      
      // var form = new FormData();
      // form.append('id','12');
      // form.append('data','aaaaaaaaaaaaaaaaaaaa');
      // this.$http.post('/api/insert',
      //     'id='+id+'&data='+data
      // ).then((res)=>{
      //  // alert('yeah~'+res);
      // })
      this.ws.send('{ \"id\" : \"'+id+'\", \"data\" : \"'+data+'\"}');
    },
    getget(){
      var log=document.getElementsByClassName('log');
      
    }
  },
}
</script>

<style lang="scss">
.log_panel{
  width:600px;
  height:600px;
  background: black;
  padding: 50px;
  .log{
    text-align: left;
    background: blanchedalmond;
    position:relative;
    width:500px;
    height:500px;
    padding:5px;
  }
  .id{
    width : 100px;
    height:50px;
    display : inline-block;
    background: white;
    position: absolute;
    left: 60px;
    bottom: 90px;
    .IDInput{
      width:30px;
      height:15px;
    }
  }
  .textInput{
    width:330px;
    height:30px;
    position: absolute;
    left: 170px;
    bottom: 90px;
  }
  button{
    width:50px;
    height:50px;
    position: absolute;
    left:510px;
    bottom:90px
  }
}
</style>
