let subjectmark = prompt("Enter Your language mark hear:", 35);

let languageResult = (subjectmark < 35) ?
  () => alert('Fail!') :
  () => alert("pass!");

  languageResult();