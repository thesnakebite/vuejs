import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'

describe('Counter Component', () => {
    test('Debe ser identico al image', () => {
        const wrapper = shallowMount( Counter )

        expect ( wrapper.html() ).toMatchSnapshot()

    })
})