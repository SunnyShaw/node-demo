const chai = require('chai');
const assert = chai.assert;
const should = chai.should();
const expect = chai.expect;




describe('SurperDemo', function () {
    it('assert风格测试', function () {
        var value = '123';
        assert.typeOf(value, 'string')
    });
    describe('方法1', function () {
        before(function () {
            console.log('测试之前');
        });
        after(function () {
            console.log('测试之后');
        });
        beforeEach(function () {
            console.log('Each测试之前');
        });
        afterEach(function () {
            // runs after each test in this block
            console.log('Each测试之后');
        });
        context('情境1', function () {
            it('测试1', function () {

            });
            it('测试2', function () {

            });
            it('测试3', function () {

            });
        });

    });
})


describe('shouldDemo',function(){
    it('should风格的断言',function(){
        var value = "hello";
        value.should.exist.and.equal('hello').and.be.a('string').and.not.equal('hi').has.length('7');
        // value.should.exist;
        // value.should.equal('hello');
        // value.should.be.a('string');
        // value.should.not.equal('hi');
        // value.should.has.length(7);

    })
});

describe('expectDemoa啊',function(){
    it('expect风格断言',function(){
 var value = 'hello3';
    var number= 3;
    expect(value).to.exist;
    expect(value).to.be.a('string');
    expect(value).to.equal('hello3');
    expect(value).to.have.length(6);
    expect(number).to.be.at.most(5);
 expect(number).to.be.at.least(3);
 expect(number).to.be.within(1,3);
    })
   

})