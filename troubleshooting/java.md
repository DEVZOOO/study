# Trouble Shooting - JAVA

## Map<String, Object> to VO/List\<VO\>
외부 REST API에 요청해야 할 때는 주로 FeignClient 를 사용한다.

상황에 따라 응답값이 다른 경우 또는 List<VO>가 중첩되는 구족 반복되는 경우 응답 구조별 VO 객체를 생성해서 받으려니 클래스가 너무 많아진다..

응답값은 Map<String, Object>로 통일하여 받고, map 내 key를 enum 상수로 정의하여 접근하는 방법을 사용하게 되었다.

- 응답값의 구조를 json 형식으로 표현하면 아래와 같다.

    ```json
    {
      "resultCode": "",
      "response": {
        "body": {
          "items": [
            {
              "dataType": "",
              "dataName": "",
              "date": "",
              "seq": 1
            },
            // ...
          ]
        }
      }
    }
    ```

Map 형식의 데이터를 특정 타입에 매핑하기 위해 org.codehaus.jackson 패키지 내의 클래스들을 통해 변환한다.

```java
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.type.TypeReference;


ObjectMapper mapper = new ObjectMapper();

// Map to VO
DataRes body = mapper.convertValue(response.get("body"), DataRes.class);

// Map to List<VO>
List<DataItemRes> items = mapper.convertValue(body.getItems(), new TypeReference<List<DataItemRes>>(){});

```
  
