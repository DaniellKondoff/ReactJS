const data = {
  getCars: () => {
    return new Promise((resolve, reject) => {
      resolve([
        { id: 1, make: 'Opel', model: 'Astra' },
        { id: 2, make: 'VW', model: 'GOlf' },
        { id: 3, make: 'BMW', model: '330' }
      ])
    })
  }
}

export default data
