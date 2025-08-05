# Difference Http & Https & Http2

## What to include in My summary:

### What is the purpose of each module?
### Key technical differences between HTTP/1.1 and HTTP/2
### When to use each module in a real-world application


## What is the purpose of each module?
### Http Module (HyperText Transfer Protocol) 
- **Purpose:** Provides functionalities to build basic HTTP/1.1 servers and clients.

### Https Module 
- **Purpose:** Same as http, but supports secure SSL/TLS connections.
- **Purpose:** Data sent between your browser and the website is encrypted — no one can spy on it.


## 🔐 What is TLS / SSL?

- **TLS (Transport Layer Security)** and **SSL (Secure Sockets Layer)** are cryptographic protocols used to secure communications over the internet.
- `https` and `http2` rely on **TLS** to encrypt the data and ensure privacy.

---

### Http2 Module
- **Purpose:** Enables HTTP/2 features: multiplexing, header compression, single connection.



### Key technical differences between HTTP/1.1 and HTTP/2
| Feature             | HTTP/1.1              | HTTP/2                    |
|---------------------|------------------------|----------------------------|
| Connections         | One per request        | Single connection          |
| Speed               | Slower                 | Faster                     |
| Header Compression  | No                     | Yes                        |
| Multiplexing        | No                     | Yes                        |
| TLS Requirement     | Optional               | Mostly required            |


### When to use each module in a real-world application


### Http Module
- **Use:** Simple REST APIs or local development 
###### such as **public news sites - test pages**

 ```ts
  const http = require('http');
  http.createServer((req, res) => {
    res.end('Hello from HTTP!');
  }).listen(3000);
 ```

### Https Module
- **Use:** In real-world applications requiring secure connections
###### such as **Online stores - Banking websites- Login System - E-Commerce**

 ```ts
import { createServer } from 'node:https';
import { readFileSync } from 'node:fs';

const options = {
  key: readFileSync('private-key.pem'),
  cert: readFileSync('certificate.pem'),
};

createServer(options, (req, res) => {
  res.writeHead(200);
  res.end('hello world\n');
}).listen(8000);
 ```

### Http2 Module
- **Use:** Performance-critical web apps needing speed and efficiency 
###### such as **Netflix - Social media apps - Complex SPAs (single-page applications)**

 ```ts
const http2 = require('http2');
const fs = require('fs');
const server = http2.createSecureServer({
  key: fs.readFileSync('private.key'),
  cert: fs.readFileSync('certificate.crt'),
});
server.on('stream', (stream, headers) => {
  stream.respond({ ':status': 200 });
  stream.end('Hello from HTTP/2!');
});
server.listen(8443);
 ```