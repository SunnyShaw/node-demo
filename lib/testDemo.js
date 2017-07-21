const https = require('https');
class testDemo {
    subtotal(unitPrice,quantity){
        return unitPrice * quantity
    };

    waitTwoSecond(data,callback){
        setTimeout(()=>{
            callback(data)
        },3000)
    };

    fetchData(api,callback){
        var requestURl =`https://api.douban.com/v2/movie/${api}`;

        https.get(requestURl,(response)=>{
            var responseData = ''
            response.setEncoding('utf8')

            response.on('data',(chunk)=>{
                responseData += chunk;
            });

            response.on('end',()=>{
                callback(JSON.parse(responseData))
            })
        })
        
    };

    engine(fuel){
        if(fuel !== 'gas'){
            throw new Error('you are wrong')
        }
    };

    send(data){
        this.logMessage(data)
    };
    logMessage(logMessage){
        console.log(logMessage);
    }


   
}

module.exports = testDemo;