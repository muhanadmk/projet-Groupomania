<template>
  <div id="container" class="bg-dark container-fluid">
    <div id="contacts">
      <div id="contacts--contact">
        <p>mouhanadmk1@gmail.com</p>
        <p>06 05 79 85 30</p>
      </div>
      <div id="contacts--social">
        <ul class="social-network social-circle">
          <li>
            <a href="#" class="icoFacebook" title="Facebook"
              ><i class="fab fa-facebook-f"></i
            ></a>
          </li>
          <li>
            <a href="#" class="icoTwitter" title="Twitter"
              ><i class="fab fa-twitter"></i
            ></a>
          </li>
          <li>
            <a href="#" class="icoGoogle" title="Google +"
              ><i class="fab fa-google-plus"></i
            ></a>
          </li>
        </ul>
      </div>
    </div>
    <div id="mentions">
      <h4>Groupomania</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

body {
  display: flex;
  background-color: #f0f8ff;
  height: 95vh;
  justify-content: center;
  align-items: flex-end;
  font-family: Open Sans;
}

#container {
  padding-top: 20px;
  margin-top: 20px;
  width: 100vw;
  color: white;
  background-color: #292354;
  display: flex;
  flex-direction: column;
  align-items: center;
}
#contacts {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
}
#contacts--contact {
  text-align: right;
}
#contacts--social {
  width: 20%;
  display: flex;
  justify-content: space-between;
}
#contacts--social div {
  height: 30px;
  width: 30px;
  background-color: white;
  border-radius: 50%;
}
#mentions p {
  font-size: 0.5em;
}
</style>
