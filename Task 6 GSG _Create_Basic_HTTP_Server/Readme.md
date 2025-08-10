# Task6 GSG Create Basic HTTP Server

## This is the result  of running the code
### This is the Project file
<img width="192" height="193" alt="image" src="https://github.com/user-attachments/assets/d4aa0747-60d8-491f-9913-a87de42d029d" />

### What does http://localhost:3000/ mean?
###### - It’s the address (URL) you use to open your running server in a web browser.
###### - localhost means your own computer.
###### - 3000 is the port number your server is listening on.
###### - / means the homepage or root path of your server.



### So in simple words:
###### - You run your server code (like node server.js).
###### - Then you open http://localhost:3000/ in your browser to see the website or server response


## GET / → return a JSON response like { message: "Welcome to the server" }
<img width="1050" height="114" alt="image" src="https://github.com/user-attachments/assets/df48bfeb-9a40-4574-bb21-568a4a8240de" />
<img width="186" height="27" alt="image" src="https://github.com/user-attachments/assets/4c33cdee-0295-46e7-bda2-5513250fa912" />
<img width="368" height="83" alt="image" src="https://github.com/user-attachments/assets/3d317ff2-25c3-4d8b-8248-dad294353dba" />

----------------------------------------------------------------------------------------------------------------------------------
## GET /about → return a JSON response like { message: "This is the about route" }
<img width="297" height="49" alt="image" src="https://github.com/user-attachments/assets/cb1116e6-bca7-4e20-9c53-cf9a49ee0296" />
<img width="331" height="55" alt="image" src="https://github.com/user-attachments/assets/47c1dc7f-09aa-4409-9e8e-df1162b84202" />

----------------------------------------------------------------------------------------------------------------------------------
## Handle any unknown route with a 404 response: { error: "Route not found" }
<img width="338" height="59" alt="image" src="https://github.com/user-attachments/assets/3eb90379-2ed9-48b3-a4e0-d3876d907c09" />
<img width="216" height="48" alt="image" src="https://github.com/user-attachments/assets/87aac358-ab71-436e-8dc0-b14b589a057e" />



