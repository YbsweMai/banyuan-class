```js
let array = [2,4,1,8,9,10,2];
let s = new Set();
array.forEach(item =>s.add(item));
console.log(s);
```


```js
let map = new Map();
let data = [
    {name:'A',score:90},
    {name:'B',score:82},
    {name:'C',score:100},
    {name:'D',score:71},
    {name:'E',score:81},
    {name:'F',score:92},
    {name:'G',score:72},
    {name:'H',score:61},
    {name:'I',score:71},
    {name:'J',score:51},
    {name:'K',score:90},
    {name:'L',score:82},
    {name:'M',score:74},
    {name:'N',score:71},
    {name:'O',score:81}
]
function getLevel(score){

    if(score < 60){

        return '差'
        
    }if(score >= 60 && score <= 74){

        return '中等'

    }if(score >= 75 && score <= 84){

        return '良好'
    }
    else{

        return '优'
    }
}

data = data.map((item)=>{

    item.level = getLevel(item.score);
    // console.log(item.level);

    return item;
});
console.log(data);

data.forEach((item)=>{

    if(item.level === '差'){

        if(!map.get('差')){
            map.set('差',1)
        }else{
            map.set('差',map.get('差')+1)
        }
    }

    if(item.level === '中等'){

        if(!map.get('中等')){
            map.set('中等',1)
        }else{
            map.set('中等',map.get('中等')+1)
        }
    }

    if(item.level === '良好'){

        if(!map.get('良好')){
            map.set('良好',1)
        }else{
            map.set('良好',map.get('良好')+1)
        }
    }
    if(item.level === '优'){

        if(!map.get('优')){
            map.set('优',1)
        }else{
            map.set('优',map.get('优')+1)
        }
    }
})

console.log(map);
```