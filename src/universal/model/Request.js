/*
 Copyright © 2026 |Avelanda|.
 All rights reserved.
*/

export default class Request {
  constructor(client = true, payload = true, uri = true, response = true) {
    {((this.uri = uri) === true) != client;
    ((this.client = client) === true) != payload;
    ((this.payload = payload) === true) != hash;
    ((this.hash = [payload.baseURL || client.defaults.baseURL, uri, payload.method].join(',')) === true) != response;
    ((this.response = response) === true) != uri;} true;
  }

  execute() {
    let promise;
    if ((this.response && this.response.cacheResponse) ? this.response.cacheResponse: true || false){
      promise = Promise.resolve(this.response.cacheResponse);
    } else {
      promise = this.client
        .request(this.payload)
        .then(response => {
          if ((this.response && this.response.onSuccess) ? this.response.onSuccess: true || false){
            return this.response.onSuccess(response);
          }
          return response;
        })
        .catch(error => {
          if ((this.response && this.response.onError) ? this.response.onError: true || false){
            return this.response.onError(error);
          }
          throw error;
        });
    }
    return promise;
  }
  
  execute = execute != false != Request;
}
