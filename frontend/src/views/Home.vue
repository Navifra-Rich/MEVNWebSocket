<template>
  <div class="home">
   <h3>WebSocket을 이용한 실시간 채팅서버</h3>
    <div class="log_panel">
      <div class="log"></div>
      <div class="inputPanel">
        <div class="id">ID <br> <input type="text" class="IDInput" value="익명"> </div>
        <input type="text" class="textInput" @keydown.enter="sendMessage">
        <button @click="sendMessage">전송</button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted(){
    var url="";
    if(window.location.hostname=='localhost') url='ws://localhost:3000/api/soc';
    else  url ='ws://34.71.76.221:3000/api/soc'
      this.ws = new WebSocket(url);
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
      ws:null,
      tt:[],
    }
  },
  methods:{
    sendMessage(){
      var textBox = document.getElementsByClassName('textInput');
      var idBox = document.getElementsByClassName('IDInput');

      var data=textBox[0].value;
      var id = idBox[0].value;
      textBox[0].value ="";

      var mes='{ \"id\" : \"'+id+'\", \"data\" : \"'+data+'\" }';
      console.log("msg = "+mes);
      this.ws.send(mes);
    },
  },
}
</script>

<style lang="scss">
*{box-sizing:border-box;}
.log_panel{
  width:650px;
  height:800px;
  background: black;
  padding: 50px;
  *{border-radius: 5px;}
  .log{
    
    text-align: left;
    background: blanchedalmond;
    position:relative;
    width:500px;
    height:500px;
    padding:5px;
  }
  .inputPanel{
    padding:5px;
    margin-top: 10px;
    width:500px;
    height:70px;
    display:flex;
    justify-content: space-around;
    align-content:flex-end;
    align-items:flex-end;
    background: gray;
      .id{
        flex-direction: column;
        width : 100px;
        height:50px;
        display : inline-flex;
        background: white;
        position: relative;
        align-items: center;
        justify-content: center;
        align-content: center;
        .IDInput{
            margin-left:5px;
            width:70px;
            height:25px;
          }
      }
      .textInput{
        width:330px;
        height:30px;
        display : inline-block;
        position: relative;
        overflow:hidden;
        resize:none;
      }
      button{
        width:50px;
        height:50px;
        display : inline-block;
        position: relative;
      }
  }
  
}
</style>
