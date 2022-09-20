<template>
  <div class="container">
    <select class="form-select" aria-label="Default select example">
      <option selected>Open this select menu</option>
      <option value="1">One</option>
      <option value="2">Two</option>
      <option value="3">Three</option>
    </select>
    <div v-for="i in form" :key="i" class="input-group">
      <input v-model="i.value1" @keyup="hesapla(i)" type="number" class="form-control" />
      <input v-model="i.value2" @keyup="hesapla(i)" type="number" class="form-control" />
      <input v-model="i.value3" @keyup="hesapla(i)" type="number" class="form-control" />
      <input v-model="i.total" type="number" class="form-control" disabled />
    </div>
    <div class="row mt-3">
      <div class="input-group">
        <div class="col-9"></div>
        <input type="text" class="form-control" disabled />
      </div>
    </div>
    <div class="row px-3 mt-4">
      <button class="btn btn-primary btn-block">Kaydet</button>
    </div>
  </div>
</template>
<script setup>

const form = [
  { value1: null, value2: null, value3: null, total: null },
  { value1: null, value2: null, value3: null, total: null },
];


function hesapla(formObject) {
  console.log(formObject)
  let a1a = formObject.value1;
  let a2a = formObject.value2;
  let a3a = formObject.value3;

  if (!a1a) {
    a1a = 1;
  }
  if (!a2a) {
    a2a = 1;
  }
  if (!a3a) {
    a3a = 1;
  }
  formObject.total = a1a * a2a * a3a;
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
