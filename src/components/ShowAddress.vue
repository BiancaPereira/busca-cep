<template>
  <div class="show-address">
    <div class="consult">
      <h1>Consultar</h1>
      <div class="consult--wrapper">
        <label for="cep">CEP</label>
        <input
          type="text"
          name="cep-input"
          id="cep"
          v-model="cep"
          minlenght="8"
          maxlength="9"
          placeholder="02050-010"
          @keyup.enter="searchCEP()">
        <input type="button" value="Buscar" @click="searchCEP()">
      </div>
    </div>
    <div class="msg-box" v-if="msg">
      {{ msg }}
    </div>
    <div class="result" v-if="address.cep">
      <h2>{{ address.logradouro }}</h2>
      <p>{{ address.bairro }}</p>
      <p>{{ address.localidade }} - {{ address.uf }}</p>
      <p>{{ address.cep }}</p>
      <div class="map">
        map
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ShowAddress',
  data () {
    return {
      address: [],
      cep: '',
      msg: 'Busque um CEP para iniciar'
    }
  },
  methods: {
    cleanCEP (cep) {
      return cep.replace(/\D/g, '')
    },
    searchCEP () {
      this.msg = ''
      let promise = this.$http.get(`https://viacep.com.br/ws/${this.cleanCEP(this.cep)}/json`)
      promise
        .then(res => res.json())
        .then(adr => {
          this.address = adr
          this.$nextTick(() => {
            if (!this.address.cep) {
              this.msg = 'CEP não encontrado. Tente novamente.'
            }
          })
        }, err => {
          if (err) {
            this.msg = 'Houve um problema durante sua requisição. Tente novamente.'
          }
        })
    }
  }
}
</script>

<style scoped>
h1 {
  font-size: 1.5rem;
}
h1,
h2 {
  margin: 0 0 10px;
}
.consult {
  padding: 30px;
  background: #e0e0e0;
}
.consult--wrapper {
  display: flex;
  align-items: center;
}
.consult--wrapper * {
  box-sizing: border-box;
}
label {
  margin-right: 5px;
  color: #444;
}
input[type="text"] {
  flex: 1;
  width: 100%;
  max-width: 150px;
  box-sizing: border-box;
  padding: 8px;
  border-radius: 2px;
  border: 1px solid #d0d0d0;
}
input[type="button"] {
  padding: 8px 15px;
  margin-left: 10px;
  border: 0;
  border-radius: 5px;
  background: #0756a5;
  color: #fff;
  font-weight: bold;
}
input[type="button"]:hover {
  cursor: pointer;
  opacity: .8;
  transition: opacity .5s;
}
label,
input[type="button"] {
  flex: 0;
}
.result {
  margin-top: 15px;
  padding: 15px;
  border: 4px solid #cdcdcd
}
.msg-box {
  margin: 20px 0;
  padding: 15px;
  border-radius: 5px;
  background: #f9d792;
  border: 1px solid #d2a446;
  color: #674808;
  text-align: center;
}
@media screen and (max-width: 400px) {
  .consult {
    padding: 15px;
  }
}
</style>
