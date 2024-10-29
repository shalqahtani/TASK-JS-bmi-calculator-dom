function calculateBMI() {
  // Don't edit the code
  let age = document.getElementById("age").value;
  let weight = document.getElementById("weight").value;
  let height = document.getElementById("height").value;
  let male = document.getElementById("m").checked;
  let female = document.getElementById("f").checked;
  console.table({ age, weight, height, male, female });

  // You are going to write the code here before the curly braces 👇🏻
  let heightInM= height*10;
  let BMI = heightInM * weight;
  
  if (BMI <18.5){
    alert("Under Weight");
  }
  if(BMI >= 18.5 && BMI <= 24.9){
   alert("Healthy Weight");
  }
  if(BMI >=25.0 && BMI <=29.9){
   alert("Over Weight");
  }
   if(BMI>=30.0){
    alert ("Obesity");
   }
}

