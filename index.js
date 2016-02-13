#!/usr/bin/env node
console.log('JAX - running')
// var args = process.argv.slice(2);
var exec = require('child_process').exec;

var inquirer = require("inquirer");
 
var questions = [
    { when: function (response) {
    	exec('say -v vicki Hello! What is your name?')
        return true
      },
      type: 'input',
      name: 'name',
      message: 'What is your name?',
      default: 'nobody'
    },
    { when: function (response) {
    	if(response.name) {
	    	exec('say -v vicki Welcome, ' + response.name + '. How old are you?')
	    }
    	return true
        // return response.confirm;
      },
      type: 'input',
      name: 'age',
      message: 'How old are You?',
      default: 0
    },
    { when: function (response) {
    	if(response.name) {
	    	exec('say -v vicki Wow, ' + response.age + ' years old. What is your favorite food?')
	    }
    	return true
        // return response.confirm;
      },
	  type: "list",
	  name: "food",
	  message: "What is your favorite food?",
	  choices: [
	      "Pizza",
	      "Cheese Burger",
	      // new inquirer.Separator(),
	      "Ice Cream",
	      "Cake"
	    ]
    },
    { when: function (response) {
    	if(response.food) {
	    	exec('say -v vicki Awesome, I like ' + response.food + ' too. Yummy in my tummy.')
	    }
    	return false
        // return response.confirm;
      },
      type: 'input',
      name: 'nothing',
      message: 'Exit',
      default: true
    }
    ];
inquirer.prompt(questions, function(responses) {
  console.log(responses);
});
