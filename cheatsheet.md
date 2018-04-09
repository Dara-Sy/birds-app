### Cheatsheet

🤔 How do I create a node application from scratch?


1. ☛ Create a directory for your application.
2. ☛ `cd directoryName` to enter into that directory
3. ☛ `touch app.js` - that will be an entry file for our application, this file will be executed when we try to run our app 👍
4. ☛ To create a new package, in your terminal, run:
```bash
npm init
```
and follow the steps TO THE END! On your way there, change entry point (index.js) to `app.js`.

  As a result, a file `package.json` will be created for you with metadata of your application!

5. ☛ To bring necessary packages in, you need to install them. In your terminal, run
```bash
npm install --save express nodemon
```
> You can install as many as you need in one line 😉 Whaaaaat! Also you can install packages at any point of your application development, not only on initialization

  This will add 2 new lines to your `package.json`. Like so:
  ```json
    "dependencies": {
      "express": "^4.15.2",
      "nodemon": "^1.11.0"
    }
  ```
6. ☛ Since we installed some packages, it's good idea to exclude them from pushing to github. Need to create `.gitignore` file and add node_modules to it. in your terminal run:
```bash
touch .gitignore
```
then inside `.gitignore`
```
node_modules
```
7. ☛ In your `package.json` add a line under `"scripts"` to run your application. Like so:
```json

  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "nodemon app.js"
  },
```

8. ☛ In your `app.js` we need to import express framework into our application:
```js
const express = require('express');
```
9. ☛ Still, in your `app.js` Declare and assign `app` variable as an instance of Express.
```js
const app = express();
```
10. ☛ Still, in your `app.js` declare and assign the port where our app will be listening for requests and send responses. You will learn more about the `process` part later...
```js
const port = process.env.PORT || 3000;
```

11. ☛ Still, in your `app.js` Set your application to listen to communication (requests and send responses). Make sure this line is all the way on the bottom of your `app.js`
```js
app.listen(port);
// to prove it worked, print to the terminal
console.log(`My awesome app is listening on port ${port}`);
```
12. ☛ In your `terminal` run:
```bash
npm run dev
```
This command will start the sever, and at this poin, you should be able to see your message: `My awesome app is listening on port 3000` Great! **MAKE SURE YOUR SERVER IS RUNNING WHILE YOU ARE WORKING ON**

13. ☛ Still, in `app.js` create a root route and send a string (any string you like) as a response. Like so:
```js
app.get('/', function(req,res){
  res.send('HELLOoOOOoOOoOOOooO, WORLD! <h1>This is ROOT route</h1>');
});
```

14. ☛ Now you can go to `localhost:3000/` in your browser, aaaaaand ... you have your very own basic home route set up 🎉
