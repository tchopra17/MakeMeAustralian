"use strict";

var Alexa = require("alexa-sdk");
var Skill = "Make Me Australian";
var APP_ID = "";
var index = 0;

var lines = [
  "Repeat after me. Rise. up. lights. Now say it quicker, rise up lights. Great! You just pronounced razor blades with an australian accent",
  "Next, you have to replace your o r's ,and e r's, with ahhh. So, doctor will become doctah. Similarly, baker will become bakah",
  "Together you can now say a sentence with the accent. G'day mighte, the barbah has really nice rise up lights."
];

exports.handler = function(event, context, callback) {
  var alexa = Alexa.handler(event, context);
  alexa.APP_ID = APP_ID;
  alexa.registerHandlers(handlers);
  alexa.execute();
}

var handlers = {
  'LaunchRequest': function(){
    this.emit('GetStarted');
  },
  'GetStartedIntent': function(){
    this.emit('GetStarted');
  },
  'NextLineIntent': function(){
    this.emit('NextLine');
  },
  'RepeatIntent': function(){
    this.emit('Repeat')
  },
  'GetStarted': function(){
    index = 0;
     this.emit(":tell", "G'day mighte,.. In ordah to be an auzzie, you gotta start speaking like whon. Get started by sayin, next line")
  },
  'NextLine': function(){
    this.emit(":tell", lines[index]);
    index += 1;
  },
  'Repeat': function(){
    this.emit(":tell", lines[index - 1]);
  },
  'AMAZON.HelpIntent': function(){
    var speech = "To proceed to the next line say, next line. To repeat a sentence, say Repeat. To quit say quit."
    var reprompt = "What can I help you with?"
    this.emit(":ask", speech, reprompt);
  },
  'AMAZON.StopIntent': function(){
    this.emit(":tell", "See ya latah mighte!");
  },
  'AMAZON.CancelIntent': function(){
    this.emit(":tell", "See ya latah mighte!");
  },
}
