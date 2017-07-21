const sinon = require('sinon')
const chai = require('chai');
const expect = chai.expect;
const testDemo = require('../lib/testDemo');

var demo = new testDemo();

describe('testDemo',function(){
    it('3个小熊，每个10元，共30元',function(){
        var subtotal = demo.subtotal(10,3);
        expect(subtotal).to.equal(30);

    });
    this.timeout(5000);
    it('async测试一段时间后返回数据',function(done){
        demo.waitTwoSecond('hello',function(data){
            expect(data).to.equal('你好');
            done();
        })
    });

    it('豆瓣电影https://api.douban.com/v2/movie/top250包含subjects',function(done){
        demo.fetchData('top250',function(data){
            expect(data).to.have.property('subjects');
            done();
        });
    });

     it('汽车引擎不是加水啊',function () {
          //写法一
        expect(function(){
            demo.engine('water')
        }).to.throw('you are wrong');

        //写法二
        expect(demo.engine.bind(demo,'water')).to.throw('you are wrong');
    });
    //sinon
    it('使用Sinon Spy',function(){
        sinon.spy(demo,'logMessage');
        demo.send('simon是谁');
        //console.log(demo.logMessage);
        expect(demo.logMessage.calledOnce).to.be.true;
        expect(demo.logMessage.firstCall.args[0]).to.equal('simon是谁');
        demo.logMessage.restore();

    });

     it('使用Sinon Stub',function(){
       var stub = sinon.stub(demo,'logMessage')
       stub.withArgs('hello').returns('hello')
       demo.send('hello')
       expect(stub.returnValues[0]).to.equal('hello')
       stub.restore()
    });

})

