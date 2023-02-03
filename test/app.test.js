const assert=require("chai").assert;
const app=require("../index")

describe('App',function(){
    it('app should say hello', function(){
        assert.equal(app(),'racist')
    })
    it('return value should be a string', function(){
        assert.typeOf(app(), 'string')
    })
    it('length should be a 6', function(){
        assert.lengthOf(app(),6)
    })
})
