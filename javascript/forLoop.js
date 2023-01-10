
for(let i=0; i<=5; i++){
    console.log(i)

}

console.log("loop ended")


const studentNames = ['ram','sri','seetha']

for(let i=0; i< studentNames.length; i++){
    console.log(studentNames[i])
}
console.log('ending Loops')


const passwordValidation = "achievesomething@123"

if(passwordValidation.length >=9 && passwordValidation.includes('@')){
    console.log("strong password");
}
else if(passwordValidation.length <=5 && passwordValidation.includes("#")){
    console.log("need to more strgthen your password")
}
else{
    console.log('invalid password')
}