# EasyDiscord
## A Discord.JS wrapper included in the EasyTools libary for NodeJS


***


### **How to get started**
`Run the following commands in your terminal/command prompt to install`
```
npm i EasyDiscord
```

**After that everything should be installed**
**Now open a new file (we will use index.js in this example) and add the following**

```javascript
const EasyDiscord = require("easydiscord") //import the package

new EasyDiscord.add({name: "test", output: "This is a example of EasyDiscord"}).command(); //add a test command (must be using new)

EasyDiscord.run({token: process.env.TOKEN, status: "Powered by EasyDiscord", prefix: "!"}) //login using the token from https://discord.dev (can be hard coded, but I do not recommend that). Then we set the status and the prefix
``` 
### Then just ```node index.js``` in a terminal/command prompt (or replace index.js with your file name)

## **See how easy it is? We made a bot in 5 lines!**
