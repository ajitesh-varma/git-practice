function main(a){
    console.log(a);
    console.log(a());
        
}
main(function(){
    return 'im aj'
})
main(function(){
    return 'im aj2'
})

function main1(task){
    console.log(task(20,30));
}
main1(function(a,b){
    return a+b
})
main1(function(a,b){
    return a-b
})
main1(function(a,b){
    return a*b
})