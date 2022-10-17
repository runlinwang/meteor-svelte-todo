import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { TasksCollection } from '../db/TasksCollection';

// defining our custom method for inserting a task into the list of tasks
Meteor.methods({
  'tasks.insert'(text) {
    // ensure the text is a string
    check(text, String);

    // ensure that the task being added is to the correct user
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    // use the insert property to add the text, date, and userid
    TasksCollection.insert({
      text,
      createdAt: new Date(),
      userId: this.userId,
    });
  },

  // defining our custom method for removing a task 
  'tasks.remove'(taskId) {
    // ensure the text is a string
    check(taskId, String);

    // ensure that the task being added is to the correct user
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    // Using the id to find the task to be removed
    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    // if there is no such task, then throw error
    if (!task) {
      throw new Meteor.Error('Access denied.');
    }

    // use the remove function to get rid of the task
    TasksCollection.remove(taskId);
  },

  // defining our custom method for checking off a task
  'tasks.setIsChecked'(taskId, isChecked) {
    // checking that all the inputs are of the right type
    check(taskId, String);
    check(isChecked, Boolean);

    // ensure that the task being added is to the correct user
    if (!this.userId) {
      throw new Meteor.Error('Not authorized.');
    }

    // Using the id to find the task to be checked off
    const task = TasksCollection.findOne({ _id: taskId, userId: this.userId });

    // if there is no such task, then throw error
    if (!task) {
      throw new Meteor.Error('Access denied.');
    }

    // use the update function to change the state of it to isChecked
    TasksCollection.update(taskId, {
      $set: {
        isChecked,
      },
    });
  },
});
