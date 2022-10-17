<script>
  import { Meteor } from 'meteor/meteor';

  let username = "";
  let password = "";

  // When submitted, use the loginWithPassword method.
  const handleSubmit = () => {
    Meteor.loginWithPassword(username, password);
  }
</script>

<form class="login-form" on:submit|preventDefault={handleSubmit}>
  <!-- username input box -->
    <div>
        <label htmlFor="username">Username</label>

        <input
                type="text"
                placeholder="Username"
                name="username"
                required
                bind:value={username}
        />
    </div>

    <!-- password input box -->
    <div>
        <label htmlFor="password">Password</label>

        <input
                type="password"
                placeholder="Password"
                name="password"
                required
                bind:value={password}
        />
    </div>
    <!-- login button to submit the form -->
    <div>
        <button type="submit">Log In</button>
    </div>
</form>
