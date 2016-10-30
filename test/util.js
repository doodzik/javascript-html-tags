const assert = require('assert')
const _      = require('lodash')

const {concat, stringifyArgs} = require('../src/util')

describe('util', () => {
  describe('concat', () => {
    it('without object', () => {
      const res = concat('hallo', ' ', 'welt')
      assert.equal('hallo welt', res[1])
      assert.deepEqual({}, res[0])
    })

    it('with object', () => {
      const res = concat({hello : 'world'}, 'hallo', ' ', 'welt')
      assert.equal('hallo welt', res[1])
      assert.deepEqual({hello : 'world'}, res[0])
    })

    it('without args', () => {
      const res = concat()
      assert.equal('', res[1])
      assert.deepEqual({}, res[0])
    })
  })

  describe('strinigifyArgs', () => {
    it('strinigifyArgs', () => {
      const res = stringifyArgs({foo : 'bar'})
      assert.equal('foo="bar" ', res)
    })

    it('strinigifyArgs remove default arg', () => {
      const res = stringifyArgs({foo : '', baz : 'bar'}, {foo : 'bar'})
      assert.equal('baz="bar" ', res)
    })

    it('strinigifyArgs with default', () => {
      const res = stringifyArgs({}, {foo : 'baz'})
      assert.equal('foo="baz" ', res)
    })
  })
})

