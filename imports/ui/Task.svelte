<script>
  export let task;

  // function to call the setIsChecked function with the inputs as the task id and new completion status
  const toggleChecked = () =>
    Meteor.call('tasks.setIsChecked', task._id, !task.isChecked);

  // function to call the remove function with the input as the task id
  const deleteThisTask = () => Meteor.call('tasks.remove', task._id);
</script>

<li>
    <!-- check box linking to isChecked and toggleChecked -->
    <input
            type="checkbox"
           readonly
           checked={!!task.isChecked}
           on:click={toggleChecked}
    />
    <!-- the actual text of the task -->
    <span>{ task.text }</span>
    <!-- delete button linking to deleteThisTask function -->
    <button class="delete" on:click={deleteThisTask}>&times;</button>
</li>
