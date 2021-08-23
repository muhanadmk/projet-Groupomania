<template>
  <p class="eee" v-if="hide"></p>
</template>

<script>
import axios from "axios";

export default {
  name: "auth",
  data() {
    return {
      message: "",
      hide: true,
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
         this.response = response;
          this.$router.push("/Home");
        } else {
          this.message = "you must log in";
          this.hide = false;
          this.$router.push("/");
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
