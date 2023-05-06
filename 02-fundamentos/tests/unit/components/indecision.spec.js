import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'
import { h } from 'vue'

describe('Indecision Component', () => {
    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount (Indecision)
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })
})
