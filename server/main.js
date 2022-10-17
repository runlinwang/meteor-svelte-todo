// importing meteor functionality and packages
import { Meteor } from 'meteor/meteor';
import { Accounts } from 'meteor/accounts-base';
// importing functions from the other files we have
import { TasksCollection } from '/imports/db/TasksCollection';
import '/imports/api/tasksMethods';
import '/imports/api/tasksPublications';

// function to add the specific task that was submitted with corresponding text, userid, and date
const insertTask = (taskText, user) =>
  TasksCollection.insert({
    text: taskText,
    userId: user._id,
    createdAt: new Date(),
  });

// Hardcoding two different users here
const SEED_USERNAME = 'guest';
const SEED_PASSWORD = 'unproductive';

const MY_USERNAME = 'runlin';
const MY_PASSWORD = 'productive';

// when starting up the app, making sure that these two users are already added to the user database
Meteor.startup(() => {
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }

  if (!Accounts.findUserByUsername(MY_USERNAME)) {
    Accounts.createUser({
      username: MY_USERNAME,
      password: MY_PASSWORD,
    });
  }

  // in the initialization phase, just adding these placeholder tasks to the SEED_USERNAME user
  // not adding anythign to the other user to show the blank interface
  // note that in my deployed implementation, I have already replaced this with custom tasks
  const user = Accounts.findUserByUsername(SEED_USERNAME);

  if (TasksCollection.find().count() === 0) {
    [
      'First Task',
      'Second Task',
      'Third Task',
      'Fourth Task',
      'Fifth Task',
      'Sixth Task',
      'Seventh Task',
    ].forEach(taskText => insertTask(taskText, user));
  }
});
