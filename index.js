const chalk = require("chalk");
const Discord = require("discord.js")
const client = new Discord.client();
const chalkAnimation = require('chalkercli');
const log = console.log;
let token = "";
function User(name) {
  // this = {};  (implicitly)

  // add properties to this
  this.name = name;
  this.isAdmin = false;

  // return this;  (implicitly)
}

const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = function (options) {
  var opts = options || {};
  token = opts.token;
  const status = opts.status || null;
  const prefix = opts.prefix|| null;
  let statType = opts.statusType;
  if (statType === null) return statType = "WATCHING";
  if (token === null) return log(chalk.red("No token was provided! Make sure you have provided a token or create one at https://discord.dev/")
  if (status === null) return log(chalk.red("No status was provided. Not using one"))
  if (prefix === null) return log(chalk.red("No prefix was provided, using defualt '!'"))
  client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);
    if (status !== null) return client.user.setActivity(status, { type: statType, });
  });

  if (token !== null) return client.login(token);
};

exports.add = function (name, output, TranslateToLower = true) {
  const TranslateToLower = true;
  const opts = options;
  this.name = opts.name;
  this.output = opts.output; 
  client.on("messageCreate", async function (message) => {
    if (TranslateToLower == true) {
      if (message.content.toLowerCase() === this.name.toLowerCase()) {
        await message.channel.send(this.output);
      }
    } else {
      if (message.content === name) {
        await message.channel.send(this.output);
      }
    }
  });
};

exports.status = function (Type = 1, Txt) {
  client.on("ready", () => {
    client.user.setActivity(Txt, {
      type: Type,
    });
  });
};
