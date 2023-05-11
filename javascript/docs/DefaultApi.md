# EspecificacinDeApiDeUsuario.DefaultApi

All URIs are relative to *http://localhost:8080*

Method | HTTP request | Description
------------- | ------------- | -------------
[**usersGet**](DefaultApi.md#usersGet) | **GET** /users | Obtiene una lista de usuarios
[**usersUserIdGet**](DefaultApi.md#usersUserIdGet) | **GET** /users/{userId} | Obtiene información de un usuario



## usersGet

> [User] usersGet()

Obtiene una lista de usuarios

Devuelve una lista de objetos de usuario

### Example

```javascript
import EspecificacinDeApiDeUsuario from 'especificacin_de_api_de_usuario';

let apiInstance = new EspecificacinDeApiDeUsuario.DefaultApi();
apiInstance.usersGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**[User]**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json


## usersUserIdGet

> User usersUserIdGet(userId)

Obtiene información de un usuario

Devuelve un objeto de usuario basado en el ID proporcionado

### Example

```javascript
import EspecificacinDeApiDeUsuario from 'especificacin_de_api_de_usuario';

let apiInstance = new EspecificacinDeApiDeUsuario.DefaultApi();
let userId = 56; // Number | ID del usuario a obtener
apiInstance.usersUserIdGet(userId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **userId** | **Number**| ID del usuario a obtener | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: application/json

