#!/usr/bin/env node
console.log('JAX - running')
// var args = process.argv.slice(2);
var exec = require('child_process').exec;

// exec('say ' + args[0])

// var prompt = require('prompt');

// prompt.start();

// prompt.get(['username', 'email'], function (err, result) {
// 	if (err) { return onErr(err); }
// 	console.log('Command-line input received:');
// 	console.log('  Username: ' + result.username);
// 	console.log('  Email: ' + result.email);
// });

// function onErr(err) {
// 	console.log(err);
// 	return 1;
// }


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
    // { type: 'confirm',
    //   name: 'confirm',
    //   message: 'Confirm?',
    // },
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
    // {
    // type: "checkbox",
    // message: "Servicios Publicos",
    // name: "servicios",
    // choices: [
    //   {
    //     name: "Agua",
    //     checked: true
    //   },
    //   {
    //     name: "Luz"
    //   },
    //   {
    //     name: "Internet"
    //   },
    //   ],
    // }
    ];
inquirer.prompt(questions, function(responses) {
  console.log(responses);
});