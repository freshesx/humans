import Query from 'vue-human/utils/Query'

describe('util/Query', () => {
  it('parse & format', () => {
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
    const output1 = Query.parse(input)
    const output2 = Query.format(input)

    expect(output1).to.deep.equal(hope)
    expect(output2).to.deep.equal(hope)
  })

  it('sync() # sync models with some queris', () => {
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

  it('merge', () => {
    const x = {
      offset: 0,
      limit: 10
    }
    const y = {
      title: 'Hello',
      offset: 10
    }
    const hope = {
      title: 'Hello',
      offset: 10,
      limit: 10
    }

    const output = Query.merge(x, y)

    expect(output).to.deep.equal(hope)
  })

  it('merge second', () => {
    const x = {
      offset: 0,
      limit: 10,
      title: 'Hello'
    }
    const y = {
      title: undefined
    }
    const hope = {
      offset: 0,
      limit: 10,
      title: undefined
    }

    const output = Query.merge(x, y)
    console.log(output)

    expect(output).to.deep.equal(hope)
  })

  it('reset', () => {
    const x = {
      title: 'world'
    }
    const y = {
    }
    const hope = {
      title: undefined
    }

    const output = Query.reset(x, y)

    expect(output).to.deep.equal(hope)
  })
})
