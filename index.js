const Discord = require("discord.js")
const client = new Discord.Client();
const chalkAnimation = require('chalkercli');
const log = console.log;
let token = "";
let prefix = "!";

exports.config = function(options) {
  return console.log("This feature is coming in version 1.1.2 (next version).");
}

exports.start = function (options) {
  var opts = options || {};
  token = opts.token;
  const status = opts.status || null;
  prefix = opts.prefix || "!";
  let statType = opts.statusType;
  if (statType === null) return statType = "WATCHING";
  if (token === null) return log("No token was provided! Make sure you have provided a token or create one at https://discord.dev/")
  if (status === null) return log("No status was provided. Not using one")
  if (prefix === null) return log("No prefix was provided, using defualt '!'")
  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    if (status !== null) return client.user.setActivity(status, { type: statType, });
  });

  if (token !== null) return client.login(token);
};

exports.add = function (options) {
  const opts = options;
  this.name = opts.name;
  this.output = opts.output; 
  const name = this.name;
  const output = this.output
  this.command = function() {
  client.on("message", async function (message) {
      let command = message.content.split(" ")[0];
      if (command.toLowerCase() === name) {
        await message.channel.send(output);
      }

  });
  }

};
