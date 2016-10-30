const assert = require('assert')
const _      = require('lodash')

const toTest    = require('../src/tags')

// const toTest = _.omit(fns, '_private')

const testDsl = {
  ul : {withArgs : ['<ul foo="bar"></ul>', {foo : 'bar'}],
        withContent : ['<ul >hello</ul>', 'hello']},
  li : {withArgs : ['<li foo="bar"></li>', {foo : 'bar'}],
        withContent : ['<li >hello</li>', 'hello']},
  head : {withArgs : ['<head foo="bar"></head>', {foo : 'bar'}],
          withContent : ['<head >hello</head>', 'hello']},
  html : {withArgs : ['<!DOCTYPE html><html foo="bar"></html>', {foo : 'bar'}],
          withContent : ['<!DOCTYPE html><html >hello</html>', 'hello']},
  img : {withArgs : ['<img foo="bar"/>', {foo : 'bar'}],
        withContent : ['<img />', 'hello']},
  div : {withArgs : ['<div foo="bar"></div>', {foo : 'bar'}],
        withContent : ['<div >hello</div>', 'hello']},
  span : {withArgs : ['<span foo="bar"></span>', {foo : 'bar'}],
          withContent : ['<span >hello</span>', 'hello']},
  xid : {withArgs : ['', {foo : 'bar'}],
         withContent : ['hello', 'hello']},
  body : {withArgs : ['<body id="bar"></body>', {id : 'bar'}],
          withContent : ['<body id="content">hello</body>', 'hello']},
  style : {withArgs : ['<style type="bar"></style>', {type : 'bar'}],
           withContent : ['<style type="text/css">hello</style>', 'hello']},
  script : {withArgs : [`<script type="bar">/*<!--*//*-->*/</script>`, {type : 'bar'}],
            withContent : [`<script type="text/javascript">/*<!--*/hello/*-->*/</script>`, 'hello']}
}

describe('html tags', () => {
  const tested = []
  _.forIn(testDsl, (value, key) => {
    describe(key, () => {
      if (value.withArgs) {
        it(key + ' with args', () => {
          assert.equal(toTest[key](value.withArgs[1]), value.withArgs[0])
        })
      }
      if (value.withContent) {
        it(key + ' with content', () => {
          assert.equal(toTest[key]({}, value.withContent[1]), value.withContent[0])
        })
      }
    })
    tested.push(key)
  })

  _.forIn(toTest, (value, key) => {
    if (_.indexOf(tested, key) === -1) {
      it(`function '${key}' isn't tested`, () => assert.ok(false))
    }
  })
})
