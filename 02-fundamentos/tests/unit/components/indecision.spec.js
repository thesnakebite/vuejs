import { shallowMount } from '@vue/test-utils'
import Indecision from '@/components/Indecision.vue'
import { h } from 'vue'

describe('Indecision Component', () => {
    let wrapper
    let clgSpy

    beforeEach( () => {
        wrapper = shallowMount (Indecision)

        clgSpy = jest.spyOn( console, 'log' )
    })

    test('Debe de hacer match con el snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot()
    })

    test('Escribir en el input no debe de disparar nada (console.log)', async() => {
        const getAnswerSpy = jest.spyOn( wrapper.vm, 'getAnswer' )

        const input = wrapper.find('input')
        await input.setValue('Hola mundo')

        expect(clgSpy).toHaveBeenCalledTimes(1)
        expect(getAnswerSpy).not.toHaveBeenCalled()
    })

    test('Escribir el simbolo de interrogación "?" debe disparar el fetch', () => {

    })

    test('Pruebas en el getAnswer', () => {

    })

    test('Pruebas en el getAnswer - Fallo en el API', () => {

    })
})
