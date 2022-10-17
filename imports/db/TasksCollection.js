import { Mongo } from 'meteor/mongo';

// retreiving tasks from mongo
export const TasksCollection = new Mongo.Collection('tasks');
