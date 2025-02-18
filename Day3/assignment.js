var username=prompt("Enter Your Name")
var nsub=prompt("Enter number of subjects")
var sub=[]
var marks=[]
for(var i=0;i<nsub;i++){
    sub.push(prompt("Enter subject"))
    marks.push(prompt("Enter marks "))
}
var b=0
var sum=0
for(var i=0;i<marks.length;i++){
    sum+=parseInt(marks[i])
    if(b<parseInt(marks[i])){
        b=parseInt(marks[i])
    }
}
console.log(username)
console.log(sum/marks.length)
console.log(b)
var per=sum/marks.length
if(per>=90){
    console.log("A+")
}
else if(per>=80 &&per<90){
    console.log("A-")
}
else{
    console.log('N')
}
