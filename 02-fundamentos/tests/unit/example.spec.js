describe('Example Component', () => {
  test('Debe ser mayor a 10', () => {
    // Arreglar
    const value = 5;

    // Estimulo
    value = value + 2

    // Observar el resultado
    if(value > 10){
      // TODO: todo bien!
    } else {
      throw `${value} no es mayor a 10`
    }
  })
})