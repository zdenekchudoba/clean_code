function calculateHypotenuse(sideA, sideB) {
  let hypotenuse = Math.sqrt(sideA * sideA + sideB * sideB);
  console.log("The hypotenuse is: " + hypotenuse);
  return hypotenuse;
}

let triangleSideA = 3;
let triangleSideB = 4;
let hypotenuseLength = calculateHypotenuse(triangleSideA, triangleSideB);
console.log("Computed hypotenuse length: " + hypotenuseLength);
