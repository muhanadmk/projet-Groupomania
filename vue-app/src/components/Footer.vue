<template>
  <footer class="container-fluid bg-dark p-1">
    <div class="py-3 my-4">
      <ul class="nav justify-content-center border-bottom pb-3 mb-3">
        <li class="nav-item ms-5">
          <a href="#" class="nav-link px-2 text-muted"
            ><i class="fab fa-twitter"></i
          ></a>
        </li>
        <li class="nav-item ">
          <a href="#" class="nav-link px-2 text-muted"
            ><i class="fab fa-facebook-f"></i
          ></a>
        </li>
        <li class="nav-item me-5">
          <a href="#" class="nav-link px-2 text-muted"
            ><i class="fab fa-google-plus"></i
          ></a>
        </li>
      </ul>
      <div class="d-flex justify-content-center">
        <img
          style="width:15%"
          src="../assets/icon-left-font-monochrome-white.png"
          alt=""
        />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.image-logo {
  width: 200px;
}
</style>
