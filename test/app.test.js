const assert=require("chai").assert;
const app=require("../index")
//testfile
describe('App',function(){
    it('app should say hello', function(){
        assert.equal(app(),'hello')
    })
    it('return value should be a string', function(){
        assert.typeOf(app(), 'string')
    })
})
