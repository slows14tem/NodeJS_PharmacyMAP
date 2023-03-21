# NodeJS_PharmacyMAP
- 공공 데이터 포탈의 약국정보조회 서비스를 활용하여 현재 내 주변의 약국 위치와 정보를 알려는 서비스 입니다.
- 참고 컨텐츠 : Node Js로 네이버 약국 지도 만들기 #1 (공공데이터포털 오픈 API 활용)  
               https://www.youtube.com/watch?v=-sKd4NYS2sA&list=LL&index=3&t=175s
## 소개
- Node.js 의 express, axios 모듈을 활용하여 백엔드 서버 구성
- 현재 위치의 시도, 시군구 정보와 함께 express서버에 request 요청
- 요청된 시도, 시군구 정보를 바탕으로 open api 서비스와 통신하여 해당 지역의 약국 정보를 획득
- 네이버 지도 api를 활용하여 약국 정보를 지도에 표시
### 사용한 오픈 API
국립중앙의료원_전국 약국 정보 조회 서비스  
https://www.data.go.kr/data/15000576/openapi.do

## 추가 아이디어
- 시도, 시군구를 선택하면 해당 지역의 약국 정보 보여줌
- 내가 가본 약국 표시 및 상세 정보(평점? 산 제품?등)
