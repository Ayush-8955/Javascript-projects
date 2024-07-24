//+++++++++++++++++++++++++++This is my code +++++++++++++++++++++++++++++++++++++++

const btn=document.querySelector('button')

btn.addEventListener('click',(event)=>{
    event.preventDefault(); // Prevent the form from submitting
    const height=parseFloat(document.querySelector('#height').value)
const weight=parseFloat(document.querySelector('#weight').value)
const solve=(weight/((height*height)/10000)).toFixed(2)
const results=document.querySelector('#results').innerText=solve

})

//+++++++++++++++++++Below is chai code ++++++++++++++++++++++++++++++++++++++++++++++++

// const form = document.querySelector('form');
// // this usecase will give you empty
// // const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);
//     //show the result
//     results.innerHTML = `<span>${bmi}</span>`;
//   }
// });

