/*const sum=(a,b)=>{
    const ans=a+b;
    return ans;
};
const printPretty=(txt)=>{
    console.log("......")
    console.log(txt)
    console.log("......");
};
const res=sum(20,30);
printPretty(res)*/
/*const sum=(a,b)=>{
    const ans=a+b;
    return ans;
};
const printPretty=(txt)=>{
    console.log("......")
    console.log(txt)
    console.log("......");
};
printPretty(sum(20,30))*/
/*const sum=(a,b,c)=>{//High Order Function is a function which accepts another function as parameter example sum
    const ans=a+b;
    c(ans);
};
const printPretty=(txt)=>{//Callback function is a function which is passed as parameter example printpretty
    console.log("......")
    console.log(txt)
    console.log("......");
};
sum(20,30,printPretty)*/
//...........................................
const getMetaData=()=>{
    const name =prompt("Please enter your name");
    console.log("Hello",name)
    const nsub=prompt("Please enter the number of subjects")
    const numofsub=parseInt(nsub)
    return numofsub;
}
const getSubjects=(num)=>{
    const record={};
    for(let i=0;i<num;i++){
        const subName=prompt(`Please enter the name of subjects ${i+1}`)
        const marks=parseInt(prompt(`Please enter the marks for ${subName}`))
        record[subName]=marks;
    }
    //record={hello:"Vipin"}; ::ERROR
    console.log(record);
    return record
}
const getHighestScroingSubject=(obj)=>{
    let id=0
    const marks=Object.values(obj);
    const sub=Object.keys(obj);
    let check=marks[0]
    marks.forEach((ele,idx)=>{
        if(check<ele){
            id=idx
        }
    })
    return sub[id]

}
const getGrades=(percentage)=>{
    const grades=[
        [30,"D+"],
        [40,"C"],
        [50,"C+"],
        [60,"B"],
        [70,"B+"],
        [80,"A"],
        [90,"A+"],
    ];
    let grade="F";
    /*grades.forEach((arr)=>{
    if(percentage>=arr[0]){
        grade=arr[1]
    }
})*/
}
const getPercentage=(obj)=>{
    let sum=0;
    const marks=Object.values(obj);
    marks.forEach(ele=>{
        sum+=ele;
    })
    return sum/marks.length
    
}
const num=getMetaData()
const record=getSubjects(num)
//const record={
  //  maths:100,
   // physics:96,
    //chemistry:93,
//};
const percentage=getPercentage(record);
const highestsub=getHighestScroingSubject(record);
console.log(percentage);
console.log(highestsub);
const g=getGrades(percentage)
console.log(g);

