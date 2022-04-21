let bttn =document.getElementById('magic')
bttn.addEventListener('click',function(event){
    let rmv=document.getElementById('primary')
    // event.target.parentNode.removeChild(event.target)
    rmv.style.display ='none'
    let nxtPage =document.getElementById('overPage')
    nxtPage.style.display ='block'
})

let depositBtn =document.getElementById('amountBtn')
depositBtn.addEventListener('click', function(){
    let finalAmount =getInpValue('inpAmount')
    experiment("currentDeposit", finalAmount)
    experiment("banlaceSpn", finalAmount)

    document.getElementById('inpAmount').value =''

    // let balanceAmount =document.getElementById('banlaceSpn').innerText;
    // let balanceFlr =parseFloat(balanceAmount)
    // let result =finalAmount+balanceFlr
    // document.getElementById('banlaceSpn').innerText=result

})
let withdrawBtn =document.getElementById('withDrawBtn')
withdrawBtn.addEventListener('click', function(){
    let withdrawNumber =getInpValue('withdrawInp')
    experiment('spanWithdraw', withdrawNumber)
    experiment('banlaceSpn', -1 * withdrawNumber)
    document.getElementById('withdrawInp').value =''
    //console.log(withdrawNumber)
})
function getInpValue(id){
       let withdrawInp =document.getElementById(id).value;
       let withdrawNumber =parseFloat(withdrawInp)
       return withdrawNumber;
}

function experiment(id, finalAmount){
    
    let spn =document.getElementById(id).innerText
    let finalSpn =parseFloat(spn)
    let total =finalAmount + finalSpn

    document.getElementById(id).innerText =total
}
 
