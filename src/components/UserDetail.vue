<template>
  <div class="red lighten-3 pa-3">
    <h3>자세한 회원 정보를 확인합니다.</h3>
    <p>상세사항</p>
    <v-list dense>
      <v-list-item>
        <v-list-item-content>이름:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ name }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>주소:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ address }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>전화번호:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ phone }}
        </v-list-item-content>
      </v-list-item>
      <v-list-item>
        <v-list-item-content>반련견유무:</v-list-item-content>
        <v-list-item-content class="justify-end">
          {{ hasDogKr }}
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>
  export default {
    props: ['name', 'address', 'phone', 'hasDog'],
    data: () => ({
    }),
    computed: {
      hasDogKr () {
        return this.hasDog === true ? "있음" : '없음'
      }
    }
  }
</script>
