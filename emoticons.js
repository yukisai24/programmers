function solution(users, emoticons) {
    var answer = [];
    const discount = [10,20,30,40]
    const emoticonsLen= emoticons.length //자릿수
    const makePairs = length =>{
        if(length === 1)return [[10],[20],[30],[40]]
        else{
            let pairs=[]
            makePairs(length-1).forEach(pair=>{
                pairs.push([...pair,10])
                pairs.push([...pair,20])
                pairs.push([...pair,30])
                pairs.push([...pair,40])
            })
            return pairs
        }
    }
    const discountPairs = makePairs(emoticonsLen)
    
    let _serviceUsing = 0
    let _totalPrice = 0 
       
    for(let pair of discountPairs){
        let serviceUsing=0
        let totalPrice=0
            users.forEach(user=>{
                const percent = user[0];
                const budget = user[1]
                let price=0
                
                    for(let j=0; j<emoticonsLen; j++){
                        if(pair[j]>=percent){
                            price = price + emoticons[j] * (100-pair[j]) / 100
                        }
                    }
                    if((budget-price)<=0) {
                        serviceUsing++
                    }
                    else {
                        totalPrice=totalPrice+price
                    }
                }
            )
        if(_serviceUsing < serviceUsing){
            _serviceUsing = serviceUsing
            _totalPrice =totalPrice
        } else if(_serviceUsing === serviceUsing && _totalPrice<=totalPrice){
                _serviceUsing= serviceUsing
                _totalPrice=totalPrice

        }
        
    }        
    return [_serviceUsing, _totalPrice];
}
