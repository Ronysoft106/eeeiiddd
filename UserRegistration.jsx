import React from 'react'

const UserRegistration = () => {
  return (
    <div>
        <header><h2 class="page-title">User Registration</h2>
  <main id="userRegister" class="page-container" style="display:inline-block;">
    <form class="auth-form">
      <label>Name
        <input type="text" placeholder="Full Name" required />
      </label>
      <label>Email
        <input type="email" placeholder="user@example.com" required />
      </label>
      <label>Password
        <input type="password" placeholder="Create a password" required />
      </label>
      <button type="submit">Register</button>
    </form>
  </main>
  </header>
    </div>
  )
}

export default UserRegistration