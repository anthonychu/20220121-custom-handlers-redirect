Repro for [azure-functions-host#7860](https://github.com/Azure/azure-functions-host/issues/7860)

1. Start the app in Core Tools

1. Run `curl -v http://localhost:7071/api/hello`

Current behavior is that the redirect is followed:

```
< HTTP/1.1 200 OK
< Content-Length: 23
< Connection: keep-alive
< Content-Type: text/plain
< Date: Fri, 21 Jan 2022 21:01:38 GMT
< Server: Kestrel
< Keep-Alive: timeout=5
< 
* Connection #0 to host localhost left intact
Hello from another path* Closing connection 0
```


Suggested change to the behavior is to return the 301:

```
< HTTP/1.1 301 Moved Permanently
< location: /another/path
< Date: Fri, 21 Jan 2022 21:06:49 GMT
< Connection: keep-alive
< Keep-Alive: timeout=5
< Transfer-Encoding: chunked
```