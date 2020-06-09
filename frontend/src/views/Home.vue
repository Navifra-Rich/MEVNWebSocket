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
  data(){
    return{
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
      // var form = document.createElement('form');
      // form.setAttribute('method','POST');
      // form.setAttribute('action','/api/insert');

      // var idField = document.createElement('input');
      // idField.setAttribute('type','hidden');
      // idField.setAttribute('name','id');
      // idField.setAttribute('value',id);

      // var dataField = document.createElement('input');
      // dataField.setAttribute('type','hidden');
      // dataField.setAttribute('name','data');
      // dataField.setAttribute('value',data);
      
      // form.appendChild(idField);
      // form.appendChild(dataField);
      // document.body.appendChild(form);
      // alert(form.id.value);
      // form.submit();
      // this.id=id;
      // this.data=data;
      
      var form = new FormData();
      form.append('id','12');
      form.append('data','aaaaaaaaaaaaaaaaaaaa');
      this.$http.post('/api/insert',
          'id='+id+'&data='+data
      ).then((res)=>{
        alert('yeah~'+res);
      })
    },
    getget(){
      var log=document.getElementsByClassName('log');

      this.$http.get('/api/insert/12')
          .then((res) => {
            this.tt = res.data;
            alert("res data = "+res.data);
      })
      alert("this tt = "+this.tt);
      log[0].innerHTML=this.tt;
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
    background: blanchedalmond;
    position:relative;
    width:500px;
    height:500px;
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
