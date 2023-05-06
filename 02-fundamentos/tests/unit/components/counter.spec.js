import { shallowMount } from '@vue/test-utils'
import Counter from '@/components/Counter.vue'
import { h } from 'vue'

describe('Counter Component', () => {
    let wrapper;

    beforeEach( () => {
        wrapper = shallowMount (Counter)
    })


    // test('Debe ser identico al image', () => {
    //     const wrapper = shallowMount( Counter )

    //     expect ( wrapper.html() ).toMatchSnapshot()

    // })
    test('h2 debe de tener el valor por defecto "Counter"', () => {

        expect( wrapper.find('h2').exists()).toBeTruthy()

        const h2Value = wrapper.find('h2').text()
        
        expect(h2Value).toBe('Counter')

    })

    test('El valor por defecto debe ser 10 en el elemento <p>', () => {
        // pTags
        const value = wrapper.find('[data-testid="counter"]').text()
        // Expect segundo p === 10
        expect(value).toBe('100')

    })

    test('Debe de incrementar en 1 el valor del contador', async() => {
        const [ increaseBtn, decreaseBtn ] = wrapper.findAll('button')

        await increaseBtn.trigger('click')
        await increaseBtn.trigger("click")
        await increaseBtn.trigger("click")

        await decreaseBtn.trigger("click")
        await decreaseBtn.trigger("click")

        const value = wrapper.find('[data-testid="counter"]').text()

        expect(value).toBe('101')
    })

    test('Debe de establecer el valor por defecto', () => {
        const { start } = wrapper.props()

        const value = wrapper.find('[data-testid="counter"]').text()
        
        expect( Number(value) ).toBe(start)
    })

    test('Debe de mostrar la prop title', () => {

        const title = 'Hola mundo !!!!!'

        const wrapper = shallowMount (Counter, {
            props: {
                title
            }
        })

        expect(wrapper.find('h2').text()).toBe(title)
    })
})