document.getElementById("txt").addEventListener("click", ()=>{
   let t = document.getElementById("output")
   let n = document.getElementById("num").value
   let array =["A","B","C", "D","E", "F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d", "e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u", "v", "w","x","y","z",0, 1, 2, 3, 4, 6, 7, 8, 9, "#","$","%"]
   let k =""
   if (n >= 35){
      alert("Maximum length allowed is 34.")
   } else{
   for (let i = 0; i < n; i++){
      k += array[Math.floor(Math.random()*array.length)]
   }
    t.innerText = k
}
});
