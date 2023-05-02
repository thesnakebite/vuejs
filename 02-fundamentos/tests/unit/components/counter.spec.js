import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
import { h } from 'vue'

describe('Counter Component', () => {
    // test('Debe ser identico al image', () => {
    //     const wrapper = shallowMount( Counter )

    //     expect ( wrapper.html() ).toMatchSnapshot()

    // })
    test('h2 debe de tener el valor por defecto "Counter"', () => {
        const wrapper = shallowMount ( Counter )

        expect( wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        
        expect(h2Value).toBe('Counter')

    })
})