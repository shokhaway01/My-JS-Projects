
document.querySelector('.tugma').addEventListener('click', function(){
   var ekran = document.querySelector('.ekran');
   console.log(typeof parseInt(ekran.value));
   ekran.value = parseInt(ekran.value)  + 1000;
});

document.querySelector('.nolga').addEventListener('click', function(){
    document.querySelector('.ekran').value = 0;
})