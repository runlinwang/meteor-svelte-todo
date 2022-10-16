# RunLin's Meteor + Svelte To Do App

Welcome to my Meteor + Svelte app! I followed the suggested tutorial and based my code off of it, which is located at https://svelte-tutorial.meteor.com/simple-todos/

## How to Use / Instructions

I have deployed my Meteor app online, at https://runlintodoapp.meteorapp.com/

Alternately, you can run it locally by downloading the GitHub repo and `meteor run`.

To log in, you can use one of two accounts. The login credentials are as follows:

| Username      | Password |
| ----------- | ----------- |
| runlin      | productive       |
| guest   | unproductive        |

Click the login button to log in, and you can see the task interface. Add inputs into the text box and click the add button to add it to the list. You can check them off as complete by clicking the check box on the left, and you can also delete the tasks by clicking the red button on the right side of each todo.

The additional functionality beyond the basic todo features in this implementation are (1) a show/hide completed tasks feature, which you can use by clicking the button, and (2) the user login that supports the multiple different users. This multiple users allows for different people to access different todo lists on the same website, without seeing each others. In my case, I only hard code in 2 separate users, but you could potentially extend the Meteor + Svelte framework to add more users.

## Reflection

The Meteor + Svelte framework is very powerful, and integrates many features that we saw in previous frameworks in a different way. For one, Meteor automatically integrated MongoDB, which makes it incredibly convenient to set up a cloud based database without manually setting up a MongoDB connection like we did in a previous todo list. Furthermore, the Meteor framework automatically updates the site based on changes to the code as you make them and save them. One more benefit is that meteor is easily adaptable to be compatible for mobile platforms or other platforms, compared to some of the previous frameworks which required separate files for each individual platform.
