"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const node_http_1 = require("node:http");
const PORT = 3000;
const serverhttp = (0, node_http_1.createServer)((req, res) => {
    const { method, url, headers } = req;
    const parsedUrl = new URL(url || '/', `http://${headers.host || 'localhost'}`);
    const pathname = parsedUrl.pathname.replace(/\/+$/, '') || '/';
    res.setHeader('Content-Type', 'application/json; charset=utf-8');
    res.setHeader('Access-Control-Allow-Origin', '*');
    if (method !== 'GET') { //such as method === Post or put or Delete return Method not allowed 405 
        res.statusCode = 405;
        return res.end(JSON.stringify({ error: 'Method not allowed' }));
    }
    if (pathname === '/') {
        res.statusCode = 200;
        return res.end(JSON.stringify({ message: 'Welcome to the server' }));
    }
    if (pathname === '/about') {
        res.statusCode = 200;
        return res.end(JSON.stringify({ message: 'This is the about route' }));
    }
    res.statusCode = 404;
    res.end(JSON.stringify({ error: 'Route not found' }));
});
serverhttp.listen(PORT, () => {
    console.log(`The Server listening on http://localhost:${PORT}`);
});
