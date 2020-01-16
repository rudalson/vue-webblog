<template>
  <div>
    <Status />
    <h1>{{ homeTitle }}</h1>
  </div>
</template>

<script>
import Status from "./Status";
export default {
  components: {Status},
  data: () => ({
    homeTitle: "홈 입니다."
  }),
};
</script>
