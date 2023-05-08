const { createApp } = Vue;

createApp({
  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8888/boolean/php-dischi-json/server.php")
      .then((resp) => {
        this.todos = resp.data.results;
      });
  },
}).mount("#app");