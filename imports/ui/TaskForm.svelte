<script>
  // initializing form
    export let user = null;
    let newTask = '';

    // function to be called when the form is submitted
    const handleSubmit = () => {
      // do nothing if there is no new task inputted
      if (!newTask) return;

      // use Meteor.call to add the new task using tasks.insert
      Meteor.call('tasks.insert', newTask);

      // clear form
      newTask = '';
    }
</script>

<!-- have the handleSubmit function called when the submit button is pressed -->
<form class="task-form" on:submit|preventDefault={handleSubmit}>
  <!-- Initialize the input box of the form with value as newTask -->
    <input
            type="text"
            name="text"
            placeholder="Type to add new tasks"
            bind:value={newTask}
    />
    <button type="submit">Add Task</button>
</form>
