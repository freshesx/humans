import Query from 'vue-human/utils/Query'

describe('util/Query', () => {
  it('.parse()', () => {
    const input = {
      n1: '10',
      n2: '0.6',
      n3: 0.6,
      n4: 'Hello World!',
      n5: 'undefined',
      n6: 'Undefined',
      n7: 'null',
      n8: 'Null',
      n9: ''
    }
    const hope = {
      n1: 10,
      n2: 0.6,
      n3: 0.6,
      n4: 'Hello World!',
      n5: undefined,
      n6: undefined,
      n7: null,
      n8: null,
      n9: undefined
    }
    const output = Query.parse(input)

    expect(output).to.deep.equal(hope)
  })

  it('.sync()', () => {
    const queris = {
      page: '1'
    }

    const models = {
      page: undefined,
      status: undefined
    }

    Query.sync(queris, models)

    expect(models.page).to.equal(1)
    expect(models.status).to.equal(undefined)
  })
})
