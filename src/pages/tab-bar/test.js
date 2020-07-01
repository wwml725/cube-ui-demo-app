var obj= {
    name:"wangwei",
    id:'000'
}

var res = Object.keys(obj)
console.log(res);

var eee = res.map((item,index)=>{
    return {item}
})

console.log(eee);