const weModule=require("ws");
module.exports = function(_server){

    //서버 생성
    const wss = new weModule.Server({server:_server});

    //클라이언트가 접속했을 때 처리
    // console.log('Connected!!!!');
    wss.on('connection', function(ws,req){
       
        console.log('Connected!!!!');
        ws.on('message',function(message){

            var mesJ = JSON.parse(message);
            console.log('Message : '+mesJ.id);

            var echo = mesJ.id+" : "+mesJ.data;
            wss.clients.forEach(function(client){
                client.send(echo);
                console.log("cli : "+client);
            })
        });

        ws.on('error',function(err){
            console.log("연결중 오류발생 "+err);
        })

        ws.on('close',function(){
            console.log("연결이 끊겼다!!")
        })
    });
}