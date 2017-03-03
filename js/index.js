

var count =1;
var inputArr=[];
var inputBackUp=[];
var mapping={0:"yellow",1:"blue",2:"green",3:"red"};
  var strict="false";

function generateInput(){
  
   var randomNumber=Math.floor(Math.random()*4);
    console.log(randomNumber,mapping[randomNumber]);
    inputArr.push(mapping[randomNumber]);
    inputBackUp.push(mapping[randomNumber]);
  console.log(inputArr);
    console.log(inputBackUp);
    
    var t=document.getElementById("systemSound");
  t.play();
  
  
}

function reset(){
  document.getElementById("victoryMssg").style.display="none";
  document.getElementById("centerDiv").style.display="flex";
      count=1;
      document.getElementById("count").innerHTML=count;
      inputArr=[];
      inputBackUp=[];
      addRandomElement();
      setTimeout(playComputer,1000);
  
}

function matchInput(id){
  
  if(inputArr[0]===id){
    
    inputArr.shift();
    
  }else{
    
    console.log(strict);
    
    if(strict==="false"){
    var x=document.getElementById("error");
    x.play();
    inputArr=inputBackUp.slice();
    setTimeout(playComputer,1000);
      
    }else{
       var x=document.getElementById("error");
    x.play();
      reset();
      
      
    }
    
  }
  
  if(inputArr.length===0){
    
    if(count===20){
      
      document.getElementById("centerDiv").style.display="none";
      document.getElementById("victoryMssg").style.display="flex";
      
      setTimeout(reset,2000);
      
      
      
    }else{
    
    count+=1;
    document.getElementById("count").innerHTML=count;
    
    inputArr=inputBackUp.slice();
    
    addRandomElement();
    setTimeout(playComputer,1000);
    
  }
  }
  
  
}

function addRandomElement(){
  
   var randomNumber=Math.floor(Math.random()*4);
    //console.log(randomNumber,mapping[randomNumber]);
    inputArr.push(mapping[randomNumber]);
    inputBackUp.push(mapping[randomNumber]);
  
}

function playComputer(){
  
  for(var i=0;i<inputArr.length;i++){
  
 (function(x){
      
      setTimeout(function(){
        
        var z=document.getElementById(inputArr[x]);
        z.style.opacity=0.5;
         var t=document.getElementById("systemSound");
  t.play();
         (function(){
         
         setTimeout(function(){
           
           document.getElementById("red").style.opacity=1;
           document.getElementById("blue").style.opacity=1;
           document.getElementById("yellow").style.opacity=1;
     document.getElementById("green").style.opacity=1;
         },500);
         
         })();
        
       
        
        
        
        
        
      },i*1000);
    })(i);
    
    
    
    
  
  }
  
  
  
  
  
}

document.getElementById("start").onclick=function(){
  
  document.getElementById("count").innerHTML=1;
  
  addRandomElement();
  
  
  setTimeout(playComputer,1000);
  
}

document.getElementById("red").onclick=function(){
  
 var x=document.getElementById("userSound");
  x.play();
  matchInput("red");
  
  
}

document.getElementById("blue").onclick=function(){
  
  var x=document.getElementById("userSound");
  x.play();
  matchInput("blue")
  
  
}

document.getElementById("yellow").onclick=function(){
  
  var x=document.getElementById("userSound");
  x.play();
  matchInput("yellow");
  
  
}

document.getElementById("green").onclick=function(){
  
  var x=document.getElementById("userSound");
  x.play();
  matchInput("green")
  
  
}

document.getElementById("strict").onclick=function(){
  if(strict==="false"){
  strict="true";
  document.getElementById("strict").style.backgroundColor="green";
  }else{
    
    strict="false";
     document.getElementById("strict").style.backgroundColor="yellow";
  
    
  }
}

document.getElementById("reset").onclick=function(){
  
     reset();
  
}