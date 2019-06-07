import Vue from 'vue'
import ShowAddress from '@/components/ShowAddress'

describe('ShowAddress.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(ShowAddress)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('h1').textContent)
      .toEqual('Consultar')
  })
})
