<template>
  <div>
    <svg v-if="playing" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <path fill="#2CD5C4" d="M4.58 25.79C.68 22.022-.883 16.445.49 11.201 1.861 5.958 5.957 1.862 11.201.49 16.446-.883 22.023.68 25.79 4.58c5.685 5.886 5.604 15.242-.182 21.028-5.786 5.786-15.142 5.867-21.027.182zm7.543-14.667v8h2v-8h-2zm4 0v8h2v-8h-2z" />
    </svg>
    <svg v-if="!playing" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30">
      <path fill="#485CC7" d="M25.79 4.58c5.684 5.885 5.603 15.24-.183 21.027-5.786 5.786-15.142 5.867-21.027.182C.68 22.023-.883 16.446.49 11.202 1.861 5.958 5.957 1.862 11.201.489 16.446-.883 22.023.68 25.789 4.58zM10.684 9.185v12l12-6-12-6z" />
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    playing: Boolean
  }
}
</script>
