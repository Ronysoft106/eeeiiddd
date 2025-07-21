import React from 'react'

const AdminLogin = () => {
  return (
    <div>
        <header><h2 class="page-title">Admin Login</h2>
  <main id="adminLogin" class="page-container" style="display:inline-block;">
    <form class="auth-form">
      <label>Username
        <input type="text" placeholder="admin" required />
      </label>
      <label>Password
        <input type="password" placeholder="••••••••" required />
      </label>
      <button type="submit">Login</button>
    </form>
  </main>
</header>

    </div>
  )
}

export default AdminLogin