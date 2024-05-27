//Question No 1:
//1) Reuse the function to convert Celsius to Fahrenheit made on exercise #2. But this time the celsius temperature should be informed in the input field below and the calculation done after pressing the button.

document.getElementById("fahren").onclick=function (){
    let cel=parseInt(document.getElementById("Celsius").value);
    let fah = (cel*9/5)+32;
    document.getElementById("para").innerHTML=`The Fahrenheit of Celsius    ${cel}   is   ${fah}`;
    document.getElementById("fahren").style.color="Red";
    document.getElementById("Quest1").style.textAlign="center";
    document.getElementById("Quest1").style.backgroundColor="silver";
    

}
/***************************************************************************** */

//Question No 2:
//2) Print in the list below the years when the World Cup of Soccer will happen from 2022 to 2050. Remember that the World Cup happens every 4 years.
// document.getElementById("list").onkeydown=function (){
//     let startyear = parseInt(document.getElementById("StartYear").value);
//     let endyear = parseInt(document.getElementById("EndYear").value);
//     let worldCupYears = "";

// for (let year = startyear; year <= endyear; year += 4) {
//   worldCupYears += `<li>${year}</li>`;
// }

// document.getElementById("result").innerHTML = worldCupYears;
// document.getElementById("Quest2").style.textAlign="center";
// document.getElementById("Quest2").style.backgroundColor="silver";
    
// }
// Another way
function Newyear(){
  let startyear = 2022;
  let endyear = 2050;
  let worldCupYears="" ;

for (let year = startyear; year <= endyear; year += 4) {
worldCupYears += `<li>${year}</li>`;
}


document.getElementById("result").innerHTML =worldCupYears;

  
}
Newyear();


/*********************************************************************************** */
//Question No 3:
//3) Use the input fields below to inform two grades and the number of absences of a student. Follow the rules below to inform the result:

//Minimum 70% presence is required to be approved (total number of classes is 20)
//Minimum average of 6.5 is required to be approved
//If the student fails, we need to inform what was the reason (absences, insufficient grade or both.)

document.getElementById("CheckResult").ondblclick = function(){
  let absences = parseInt(document.getElementById("CheckAbsences").value);
  let grade1 = parseFloat(document.getElementById("CheckGrade1").value);
  let grade2 = parseFloat(document.getElementById("CheckGrade2").value);

  // let minpresence = 14;
  let averageGrade = parseFloat((grade1+grade2)/2);
  let minimumGrade = 6.5;
  let gradeStatus = (averageGrade>=minimumGrade)?"meet":"fail"; 
  let minpresence =14;
  let presenceStatus = (absences <(20-minpresence))?"meet":"fail";

  if(presenceStatus==="fail" && gradeStatus==="meet"){
    document.getElementById("result1").innerHTML="The student is fail due to many absencities";

  }
  else if(presenceStatus==="fail" && gradeStatus==="fail"){
    document.getElementById("result1").innerHTML="The student is fail due to many absencities and low grade";

  }
  else if(presenceStatus==="meet" && gradeStatus==="fail"){
    document.getElementById("result1").innerHTML="The student is fail due to low grade";

  }
  else{
    document.getElementById("result1").innerHTML="The student is Pass due to high effects";
  }

  }
  /************************************************************************************* */
  //Question No 4;
  //Fill the html table below with the sales and print the total amount of sales in the last line. Don't include the sales that had a refund requested.
  let x=document.getElementById("Student");
  let y=document.getElementById("Date");
  let z=document.getElementById("Amount");


  function displayTable(displayTable){
    var sales = [

      {
          'student': 'Jason Gomes',
          'date': '10/06/2018',
          'amount': 34.99,
          'refundRequested': null
          
      },

      {
          'student': 'Carlos Blue',
          'date': '10/06/2018',
          'amount': 29.99,
          'refundRequested': null
          
      },

      {
          'student': 'Martin Heyes',
          'date': '11/06/2018',
          'amount': 39.99,
          'refundRequested': '13/06/2018'
          
      },

      {
          'student': 'Isabella Hopkins',
          'date': '11/06/2018',
          'amount': 29.99,
          'refundRequested': null
          
      },

      {
          'student': 'Andrew Walt',
          'date': '12/06/2018',
          'amount': 34.99,
          'refundRequested': null
          
      }
  
  ];
  for (var i = 0; i < sales.length; i++) {
    x = +sales[i].student;
    y = +sales[i].date;
    z = +sales[i].amount;
}

  }

  