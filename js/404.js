function count(){
  let spn=document.getElementById('n')
  let i=3
  setInterval(()=>{
    i--
    spn.innerHTML=i
  },1000)
}
