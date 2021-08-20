<template>
  <h1 class="text-center">  </h1>
</template>

<script>
import axios from "axios";

export default {
  name: "auth",
  data() {
    return {
      message: this.message,
    };
  },
  methods: {
    async autoLogin() {
      try {
        const token = localStorage.getItem("token");
        if (token) {
          const response = await axios.get("users/auth", {
            headers: {
              Authorization: "Bearer " + token,
            },
          });
          console.log(response.data);
          this.$router.push("/Home");
        } else {
          this.message = "to dpit sin in";
        }
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.autoLogin();
  },
};
</script>
