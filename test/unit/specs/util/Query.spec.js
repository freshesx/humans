import Query from 'vue-human/util/Query'

describe('util/Query', () => {
  it('.parse()', () => {
    const query = new Query()
    const input = {
      stringNumber: '10'
    }
    const hope = {
      stringNumber: 10
    }
    const output = query.parse(input)

    expect(output).to.deep.equal(hope)
  })
})
