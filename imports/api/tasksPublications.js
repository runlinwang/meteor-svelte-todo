import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/db/TasksCollection';

// retreive and publish the tasks based on which user is viewing them
Meteor.publish('tasks', function publishTasks() {
  return TasksCollection.find({ userId: this.userId });
});
