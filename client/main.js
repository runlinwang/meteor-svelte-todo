import { Meteor } from 'meteor/meteor';
import App from '../imports/ui/App.svelte';

Meteor.startup(() => {
  // on startup, replacing the empty app div with the Meteor app
  new App({
    target: document.getElementById('app'),
  });
});
