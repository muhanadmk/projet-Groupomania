<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-dark mb-10">
    <div class="container-fluid">
       <router-link to="/Home"><a class="navbar-brand text-light">Groupomania</a></router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active text-light" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Link</a>
          </li>

        </ul>
        <form class="d-flex">
          <button class="btn btn-outline-danger me-2" type="submit" @click="LogOutUser">Logout</button>
          <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success" type="submit">Search</button>
        </form>
      </div>
    </div>
</nav>
</template>


<script>
export default {
  name: "AppHeader",
 methods: {
    LogOutUser(){
      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      localStorage.removeItem('admin');
      localStorage.removeItem('ProfileUserId');
      this.$router.push("/");
    }
  }
}
</script>
