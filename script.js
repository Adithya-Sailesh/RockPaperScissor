let button=document.querySelectorAll('.iconbox')
let outtext=document.querySelector('.outputtext')
let mys=document.getElementById("myscore")
let pcs=document.getElementById("pcscore")
let resetbt=document.querySelector(".resetswitch")
score={"you":0,"pc":0}
button.forEach(butt => {
    butt.onclick = () =>{
        y=random()
        if(butt.value==y){
            outtext.innerText='its a draw'
        }
        else if (butt.value=="rock" && y=="paper" || butt.value=="paper" && y=="scissor" ||butt.value=="scissor" && y=="rock" )  {
            outtext.innerText="Computer Won"
            score['pc']=score.pc+1
            pcs.innerText=score.pc
            
        }
        else if(butt.value=="paper" && y=="rock" || butt.value=="scissor" && y=="paper" ||butt.value=="rock" && y=="scissor" ) {
            outtext.innerText='You Won'
            score['you']=score.you+1
            mys.innerText=score.you
        }
    }
})
resetbt.onclick = function(){
    console.log("reset")
    score["pc"]=score["you"]=0
    mys.innerText=pcs.innerText=0
    outtext.innerText='Start The Game'
}
out=["rock","paper","scissor"]
function random(){
    x=Math.floor(Math.random()*3)
    return out[x]
}
