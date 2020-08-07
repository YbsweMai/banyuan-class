1. 新生成一个koa服务器

2. 写一个对应的get请求，路径为‘/add’，传入参数a与b，返回a与b的和
```js
router.get('/add'),(ctx,next)=>{
    const {a,b} = ctx.reequest.query;

    ctx.response.body = {
        sum:Number(a) + Number(b)
    }
}
```

3. 写一个对应的post的请求，路径为‘/isPrime’，传入任意一个数字，返回是不是一个质数，如果是返回：     如果不是，请返回false，并返回比他大的数字中，离他最近的那个质数
```js
router.post('/isPrime',(ctx,next)=>{

    const {number} = ctx.request.body;

    number = Number(number);

    const flag = isPrime(Number(number));

    let data = {};

    if(flag){

        data.isPrime = true;
    }

    else{

        data.isPrime = false;

        number++;
        while(isPrime(number)){
            number++;
        }
        data.number = number;
    }

    ctx.response.body = data;
});

function isPrime(n){
    for(var i=2;i<n;i++){
        if(n % i == 0){
            return false;
        }
    }
    return true;
}
```