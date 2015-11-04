Meteor React Google OAuth
=========================

### Google OAuth를 위한 Key 얻기

https://console.developers.google.com/ 가서 local 테스트를 위한 프로젝트를 하나 생성합니다.

그리고 API 및 인증 > 사용자 인증 정보 > 사용자 인증 정보 추가 > OAuth2 Client ID 클릭

Web 애플리케이션 선택 후 -> 

1. 앱 이름 입력 
2. 자바스크립트 원본 : http://localhost:3000
3. 승인된 리디렉션 URI: http://localhost:3000/_oauth/google 
 
을 순차적으로 입력하고 저장


## 실행(in Terminal)

```
meteor 
```





