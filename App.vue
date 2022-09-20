<template>
  <div class="container">
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div class="input-group">
      <input v-model="a1" @keyup="hesapla" type="number"  class="form-control">
      <input v-model="a2" @keyup="hesapla" type="text" class="form-control">
      <input v-model="a3" @keyup="hesapla" type="text" class="form-control">
      <input v-model="aTotal" type="text"  class="form-control" disabled>
    </div>
    <div class="input-group">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control" disabled >
    </div>
    <div class="input-group">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control" disabled>
    </div>
    <div class="input-group">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control" disabled>
    </div>
    <div class="input-group">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control">
      <input type="text"  class="form-control" disabled>
    </div>
    <div class="row mt-3">
      <div class="input-group">
        <div class="col-9"></div>
        <input type="text"  class="form-control" disabled>
      </div>
    </div>
    <div class="row px-3 mt-4">
      <button class="btn btn-primary btn-block">Kaydet</button>
    </div>
  </div>
</template>
<script setup>

import { ref, reactive } from "vue";

  const a1 = ref(null);
  const a2 = ref(null);
  const a3 = ref(null);
  const aTotal = ref(null);
  
  function hesapla() {
    if(a1 == null){
      a1 = 1
      console.log(a1.value*a2.value*a3.value);
    }else if(a2 == null){
     a2 = 1
     console.log(a1.value*a2.value*a3.value);
    }else if(a3 == null){
     a3 = 1
     console.log(a1.value*a2.value*a3.value);
    }
   console.log(a1.value*a2.value*a3.value);
  }


</script>

<style>
.container {
  margin-left: auto;
  margin-right: auto;
}

.form-control {
  margin-right: 10px;
  margin-top: 30px;
  text-align: center;
}
</style>