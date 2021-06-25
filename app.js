                       // Rounding numbers
                         
                    // var a=5.456789;
                    //   round
// var b=Math.round(a);
// document.write(b);
                          // ceil
// var b=Math.ceil(a);
// document.write(b);
                          // floor
// var b=Math.floor(a);
// document.write(b);
                         // random
// var b=Math.random();
// document.write(b);

                //    Task
// var head_username=prompt("enter head username");
// var tail_username=prompt("enter tail username");
// var number=Math.random()*2;
// var floor =Math.floor(number);
// if(floor===0){
//     alert("Head"+" "+head_username+" "+"win the toss");
// }
// else{
//     alert("Tail"+" "+tail_username+" "+"win the toss");
// }

           // Converting strings to integers and decimals


// var a="20";
//            // strings to integers
// // var b=parseInt(a);
// // document.write(b);
//                  // integers and decimals
// // var b=parseFloat(a);
// // document.write(a);


              // finding current month

// var m=["jan","feb", "march","aprail","may ","june","jul","aug","sep ","oct","nov","dec"];
// var a=new Date();
// var b=a.getMonth();
// var thismonth=m[b];
// alert(thismonth);


                 // Age Calculator
//  var today=new Date();
//  var a=today.getTime();
//  var my_birth=new Date(prompt("Enter your DOB","1day,xyzmonth,200xyear"));
//  var b=my_birth.getTime();
//  var c=a-b;
//  var age=Math.ceil(c/(1000*60*60*24*30*12));
//  alert("your age is :"+" "+age);

var a=new Date();
var b=a.getHours();
var c=a.getMinutes();
var d=a.getSeconds();
document.write("The time is : " +b+":"+c+":"+d);