# petUI


first cd to root folder

on your terminal
"npm install express"
"npm install browserify"

or else "npm install" this may install all the required packages if they are specified in package.json

"browserify app.js -o public/bundle.js" on u'r terminal
-->doing this is not always needed, but if u have done any change in app.js or bundle.js is not in the public folder you should do this

type "node server.js" on your terminal

now type following url on your browser
"http://127.0.0.1:10001/app.html"


if u'r port 10001 seems to be busy you should change that in the server.js
var port = 10001;

then the url which u type in browser must change accordingly


but before using this u should check weather following works properly
1. petstore-api
--->this is another repository in my github
--->u can refer readme.md of that to run that project and use "postman chrome plugin to check weather it is working"
--->"mvn exec:java -Dexec.mainClass="hms.petstore.service.Main""

2. mongoDB connection
--->type mongod in the terminal on the pc which petstore-api is executing

#Hope this was helpful :) #


things to do
1. write post,delete,put,get in seperate file and add them using "webpack(instead of browserify)"
2. check weather using bower and gulp is necessary. some documentation of webpack says bower is not needed anymore
3. add jwt authentication headers--> only needed to uncomment header data regarding this
4. add newest version of petstore-api to git (CORS headers added)
