<script>
  import { TasksCollection } from '../db/TasksCollection';
  import { Meteor } from 'meteor/meteor';
  import Task from './Task.svelte';
  import TaskForm from './TaskForm.svelte';
  import LoginForm from './LoginForm.svelte';

// initialize with all tasks shown
  let hideCompleted = false;

// the filter is set up to hid the ones that are checked and thus completed
  const hideCompletedFilter = { isChecked: { $ne: true } };

// initializing variables
  let incompleteCount;
  let pendingTasksTitle = '';
  let tasks = [];
  let user = null;
  let isLoading = true;

  const handler = Meteor.subscribe('tasks');
  $m: {
    user = Meteor.user();

    if (user) {

        isLoading = !handler.ready();
        // initialize user id filter
        const userFilter = { userId: user._id };
        // this is both filters combined (when the hide completed option is selected)
        const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };


        // when hideCompeleted is checked off, user both filter, otherwise just use one
        tasks = TasksCollection.find(
                hideCompleted ? pendingOnlyFilter : userFilter,
                // sort tasks in reverse order of date created so that most recent are on top
                { sort: { createdAt: -1 } }
            ).fetch();

        // count the number of tasks that are incomplete using the two combined filters
        incompleteCount = TasksCollection.find(pendingOnlyFilter).count();

        // setting value for the number of incomplete tasks
        pendingTasksTitle = `${
          incompleteCount ? ` (${incompleteCount})` : ''
        }`;
    }
  }

  const setHideCompleted = value => {
    hideCompleted = value;
  };
//   logout function from Meteor
  const logout = () => Meteor.logout();
</script>


<div class="app">
    <header>
        <!-- top bar with title and counter for number of pending tasks remaining -->
        <div class="app-bar">
            <div class="app-header">
                <h1>📝️ RunLin's To Do List {pendingTasksTitle}</h1>
            </div>
        </div>
    </header>

    <div class="main">
        <!-- when the user is logged in -->
        {#if user}
        <!-- have at top a logout option -->
            <div class="user" on:click={logout}>
                Log out: {user.username} 🚪
            </div>

            <!-- show the form for adding tasks -->
            <TaskForm />

            <!-- hide completed button -->
            <div class="filter">
                <button on:click={() => setHideCompleted(!hideCompleted)}>
                    {hideCompleted ? 'Show All' : 'Hide Completed'}
                </button>
            </div>

            <!-- showing the loading message if it is loading -->
            {#if isLoading}
                <div class="loading">loading...</div>
            {/if}

            <!-- Showing each individual task within the list of tasks -->
            <ul class="tasks">
              {#each tasks as task (task._id)}
                  <Task task={task} />
              {/each}
            </ul>
        <!-- if the user is not yet logged in, show the login form page -->
        {:else}
            <LoginForm />
        {/if}
    </div>
</div>
