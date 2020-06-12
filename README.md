# WebSocket을 통한 실시간 채팅
###### <br> 
## 1. Overview  
**Express + Vue.js + NodeJS**를 이용한 채팅 서버구현  
<img src="https://user-images.githubusercontent.com/55074554/84466915-804fe880-acb5-11ea-91e8-db55106f5b47.png">
http://34.71.76.221:3000/ 에 접속해서 시험해볼 수 있다.   
닉네임과 메세지를 사용해서 채팅하고, client의 요청없이도 실시간으로 채팅 데이터를 전송받을 수 있도록<br>
WebSocket을 사용해서 통신했다.
처음에는 MongoDB까지 이용할 생각이었으나 웹소켓을 이용한 실시간 채팅에 집중하고싶어 배제했다.
###### <br> 
## 2. SKill Stack
### **Front-end**  
####  
HTML, CSS, JavaScript<br>
Framework - Vue.JS

### **Back-end**  
####  
**Runtime** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;Node.JS<br>
**Framework** &nbsp; - &nbsp;&nbsp;Express<br>
**Server** &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;  - &nbsp;&nbsp;Google Cloud Platform (compute engine)<br>

## 3. Program Structure
<img src="https://user-images.githubusercontent.com/55074554/84467670-cc039180-acb7-11ea-99bf-70668daee1fe.png">
##### <br>
Vue와 Express를 연동해서 배포하기 위해 Vue를 Express에 빌드하는 방법을 사용했다.<br>
Vue를 Express에 빌드한 다음, Express는 요청에 따라 자원에 접근하고, 필요한 경우 내부에 빌드된 vue를 사용해서 사용자에게 응답한다.<br>
서버에 편리하게 Express를 배포하기 위해서 Git을 활용했는데, 로컬 개발환경에서 Push를 하고,<br>
SSH통신을 통해 GCP의 컴퓨터에 접근한 다음 Pull하는 방식으로 손쉽게 파일을 전송했다.<br>
마지막으로 GCP에서 Express를 실행시켜 3000번 포트를 통해 외부에서 접속할 수 있게 했다.
