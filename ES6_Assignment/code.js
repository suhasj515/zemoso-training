// Here is a bunch of Lorem Ipsum. You will need it. I recomend using word wrap to view this! View > Toggle Word Wrap
const lorem = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dictum lorem vel elit laoreet, vitae maximus ligula consectetur. Etiam magna quam, varius at risus eu, rutrum commodo lacus. Maecenas felis sem, consequat non congue non, vestibulum vitae orci. Etiam laoreet ultricies enim, sit amet gravida massa sodales vel. Vivamus tempus neque sed mi elementum ornare eget non lorem. Donec dapibus ex tortor, ut vehicula metus scelerisque eget. Aenean dictum iaculis nulla, vel dapibus justo dignissim quis. Curabitur vitae efficitur neque. Ut vitae orci semper, efficitur dolor eget, porta dui. Cras eu sapien aliquam mauris facilisis ullamcorper. Nullam facilisis sem diam, quis tempor felis interdum ut. Praesent eu nibh arcu. Proin a quam augue. Integer malesuada finibus sem eget consectetur. Aenean non hendrerit purus, quis auctor elit. Duis ullamcorper, ex vitae rutrum ullamcorper, diam justo maximus quam, eget pellentesque metus nunc sit amet arcu. Nunc id eros leo. Praesent ultricies, nunc sit amet finibus posuere, quam magna viverra lectus, non tincidunt tellus mauris sit amet turpis. Nam eleifend quam vel justo pulvinar euismod. Duis ac elit id risus ultricies sollicitudin vitae ac quam. Donec et cursus leo, non dignissim enim. Vestibulum in felis imperdiet, venenatis tortor iaculis, congue augue. Nullam egestas dui nec quam sagittis sollicitudin ac blandit turpis. Nunc in fermentum odio. Morbi sodales mi nibh, ac cursus felis ultricies sed. Quisque at porttitor risus. Aenean a massa in libero venenatis tempus sed in mi. Nullam luctus sapien eget sagittis egestas. Pellentesque eros sem, semper eu molestie in, commodo a lacus. Phasellus pellentesque erat magna, eu facilisis nibh porttitor eget. Ut id mi lobortis, consequat orci ac, vulputate metus. Sed vulputate turpis nec lectus malesuada lacinia. Quisque non mattis eros. Aliquam pellentesque urna vulputate, auctor nibh in, fermentum odio. Suspendisse aliquam neque et aliquam facilisis. Donec sapien felis, molestie vel vestibulum non, sagittis sed felis. Aenean sodales iaculis dolor eget malesuada. Fusce ac libero hendrerit, viverra nunc iaculis, maximus nisi. Nulla volutpat nisi purus, non interdum erat hendrerit vitae. Integer viverra dignissim cursus. Phasellus eu libero sed ex faucibus convallis. In et egestas ipsum. Cras a metus mollis, laoreet risus eget, ultrices purus. Duis at ligula venenatis, imperdiet nulla et, bibendum augue. Pellentesque eleifend libero maximus, pretium lectus et, condimentum metus. Nulla vel est diam. In fermentum ut nulla eget finibus. Aliquam at turpis sagittis, feugiat diam ac, pulvinar quam. Phasellus pretium porta aliquet. Nunc sit amet nisl viverra justo porttitor egestas vel vitae eros. Fusce sit amet fringilla sapien. Nunc placerat, est sit amet laoreet pretium, augue turpis lacinia ipsum, non luctus magna ipsum vel sapien. Fusce luctus odio eget nunc rutrum ullamcorper. Integer vel ligula id elit viverra aliquam. Praesent id ultricies neque. Quisque molestie tellus ac ex vulputate rhoncus. Donec nec massa eget augue tincidunt ultrices vitae at diam. Ut risus purus, egestas eu eros sed, egestas auctor erat. Integer vulputate erat nisi, in aliquet turpis faucibus vel. Praesent neque augue, congue at nunc ut, congue ultricies erat. Ut sed erat in dui ornare malesuada. Nam id elementum ex. Vestibulum condimentum erat quis erat molestie hendrerit. Etiam laoreet volutpat quam, eget ornare ex molestie mollis. Phasellus eros mi, ultrices vel dui ac, facilisis consectetur nunc. Aliquam erat volutpat. Donec rutrum laoreet iaculis."

// Add a list of colors to this array
const colors = ["blue", "red","yellow","orange"]

const password=["1ygyu@7","2#tafwdDD","4@taywfdD","5rrrrr@dD","7JSAKDd","8UHAWDjssc@"]
// Use this object for your random name generator. Enter in a bunch of objects with first and last names. When generating a new random name, try to grab a random first or last name from any object. Don't just take object as a whole.
const names =
[
    {
        firstName: "Manoj",
        lastName: "Kumar"
    },
    {
        firstName: "John",
        lastName: "Cena"
    },
    {
        firstName: "Jason",
        lastName: "Smith"
    },
    {
        firstName: "Prajwal",
        lastName: "Sing"
    },
    {
        firstName: "Yuvraj",
        lastName: "Sing"
    }
]


/*function rand1(x,y){
    return Math.ceil(Math.random()*(y-x)-x)
}*/

let rand1=(x=1,y=100)=> (Math.ceil(Math.random()*(y-x)-x))


/*function rand1to100(){
    document.getElementById("1to100").innerHTML=rand1(1,100)
}*/

let rand1to100=()=>(document.getElementById("1to100").innerHTML=rand1(1,100))

/*function randRange(){
    var r1=document.getElementById("rand1").value
    var r2=document.getElementById("rand2").value
    document.getElementById("id2").innerHTML=rand1(r1,r2)
}*/

let randRange=()=>{
    var r1=document.getElementById("rand1").value
    var r2=document.getElementById("rand2").value
    document.getElementById("id2").innerHTML=rand1(r1,r2)
}

//function longLorem(){
 //   document.getElementById("lorem").innerHTML=lorem
//}

var longLorem=()=> document.getElementById("lorem").innerHTML=lorem

/*function basedOnSentence(){
    let c=lorem.split(".")
    let b=document.getElementById("noOfSentence").value
    var v2=""
    for(var i=0;i<b;i++){
         v2=v2+c[i]+"<br/>"
    }
    document.getElementById("paraNoOfSentence").innerHTML=v2

}*/

let basedOnSentence=()=>{
    let c=lorem.split(".")
    let b=document.getElementById("noOfSentence").value
    var v2=""
    for(var i=0;i<b;i++){
         v2=v2+c[i]+"<br/>"
    }
    document.getElementById("paraNoOfSentence").innerHTML=v2
}

 /*function basedOnChar(){
    let c=lorem.split("")
    console.log(c)
    let b=document.getElementById("noOfChar").value
    var v2=""
    for(var i=0;i<b;i++){
         v2=v2+c[i]+"<br/>"
    }
    document.getElementById("paraNoOfChar").innerHTML=v2

}*/

let basedOnChar=()=>{
    let c=lorem.split("")
    console.log(c)
    let b=document.getElementById("noOfChar").value
    var v2=""
    for(var i=0;i<b;i++){
         v2=v2+c[i]+"<br/>"
    }
    document.getElementById("paraNoOfChar").innerHTML=v2
}

/*function currentDate(){
    var d=new Date()
    cd=d.getDate()+"-"+d.getDay()+"-"+d.getFullYear()
    document.getElementById("paraDate").innerHTML=cd
}*/

let currentDate=()=>{
    var d=new Date()
    cd=d.getDate()+"-"+d.getDay()+"-"+d.getFullYear()
    document.getElementById("paraDate").innerHTML=cd
}


/*function currentTime(){
    var d=new Date()
    cd=d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds()
    document.getElementById("paraTime").innerHTML=cd
}*/

let currentTime=()=>{
    var d=new Date()
    cd=d.getHours()+"-"+d.getMinutes()+"-"+d.getSeconds()
    document.getElementById("paraTime").innerHTML=cd
}

/*function inchesToFeet(){
    var d=document.getElementById("itof").value
    var c=d/12
    document.getElementById("paraIToF").innerHTML=c
}*/

let inchesToFeet=()=>{
    var d=document.getElementById("itof").value
    var c=d/12
    document.getElementById("paraIToF").innerHTML=c
}

/*function feetToInches(){
    var d=document.getElementById("ftoi").value
    var c=d*12
    document.getElementById("paraFToI").innerHTML=c
}*/

let feetToInches=()=>{
    var d=document.getElementById("ftoi").value
    var c=d*12
    document.getElementById("paraFToI").innerHTML=c
}

/*function sameLength(){
    let c1=document.getElementById("s1").value
    let c2=document.getElementById("s2").value
    if(c1.length==c2.length)
    {
        document.getElementById("paraSameLength").innerHTML=true
    }else{
        document.getElementById("paraSameLength").innerHTML=false
    }
}*/

let sameLength=()=>{
    let c1=document.getElementById("s1").value
    let c2=document.getElementById("s2").value
    if(c1.length==c2.length)
    {
        document.getElementById("paraSameLength").innerHTML=true
    }else{
        document.getElementById("paraSameLength").innerHTML=false
    }
}

/*function evenOrOdd(){
    let c=document.getElementById("eoro").value
    if(c%2==0)
    {
        document.getElementById("paraEvenOrOdd").innerHTML="Even"
    }else{
        document.getElementById("paraEvenOrOdd").innerHTML="Odd"
    }
}*/

let evenOrOdd=()=>{
    let c=document.getElementById("eoro").value
    if(c%2==0)
    {
        document.getElementById("paraEvenOrOdd").innerHTML="Even"
    }else{
        document.getElementById("paraEvenOrOdd").innerHTML="Odd"
    }
}

/*function randColor(){
    var x=rand1(0,colors.length)
    document.getElementById("paraRandColor").innerHTML=colors[x-1]
}*/

let randColor=()=>{
    var x=rand1(0,colors.length)
    document.getElementById("paraRandColor").innerHTML=colors[x-1]
}

/*function randNames(){
    var x=rand1(0,names.length)
    document.getElementById("paraRandNames").innerHTML=names[x-1].firstName+" "+names[x-1].lastName
}*/

let randNames=()=>{
    var x=rand1(0,names.length)
    document.getElementById("paraRandNames").innerHTML=names[x-1].firstName+" "+names[x-1].lastName
}

/*function randPasswords(){
    var x=rand1(0,password.length)
    document.getElementById("paraRandPasswords").innerHTML=password[x-1]
}*/

let randPasswords=()=>{
    var x=rand1(0,password.length)
    document.getElementById("paraRandPasswords").innerHTML=password[x-1]
}