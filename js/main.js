const lamp1_red = document.querySelector('.lamp1_red');
const lamp1_yellow = document.querySelector('.lamp1_yellow');
const lamp1_green = document.querySelector('.lamp1_green');
const lamp2_red = document.querySelector('.lamp2_red');
const lamp2_yellow = document.querySelector('.lamp2_yellow');
const lamp2_green = document.querySelector('.lamp2_green');
const lamp3_red = document.querySelector('.lamp3_red');
const lamp3_yellow = document.querySelector('.lamp3_yellow');
const lamp3_green = document.querySelector('.lamp3_green');
const lamp4_red = document.querySelector('.lamp4_red');
const lamp4_yellow = document.querySelector('.lamp4_yellow');
const lamp4_green = document.querySelector('.lamp4_green');
const btn = document.querySelector('.btn');


const step1 = () => {
    lamp1_red.style.backgroundColor = "white";
    lamp1_yellow.style.backgroundColor = "white";
    lamp1_green.style.backgroundColor = "green";
    lamp2_red.style.backgroundColor = "red";
    lamp2_yellow.style.backgroundColor = "white";
    lamp2_green.style.backgroundColor = "white";
    lamp3_red.style.backgroundColor = "red";
    lamp3_yellow.style.backgroundColor = "white";
    lamp3_green.style.backgroundColor = "white";
    lamp4_red.style.backgroundColor = "white";
    lamp4_yellow.style.backgroundColor = "white";
    lamp4_green.style.backgroundColor = "green";
    setTimeout(step2, 3000);
};

const step2 = () => {
    lamp1_red.style.backgroundColor = "white";
    lamp1_yellow.style.backgroundColor = "white";
    lamp1_green.style.backgroundColor = "green";
    lamp2_red.style.backgroundColor = "red";
    lamp2_yellow.style.backgroundColor = "yellow";
    lamp2_green.style.backgroundColor = "white";
    lamp3_red.style.backgroundColor = "red";
    lamp3_yellow.style.backgroundColor = "yellow";
    lamp3_green.style.backgroundColor = "white";
    lamp4_red.style.backgroundColor = "white";
    lamp4_yellow.style.backgroundColor = "white";
    lamp4_green.style.backgroundColor = "green";
    setTimeout(step3, 1000);
};
 
const step3 = () => {
    lamp1_red.style.backgroundColor = "white";
    lamp1_yellow.style.backgroundColor = "yellow";
    lamp1_green.style.backgroundColor = "white";
    lamp2_red.style.backgroundColor = "red";
    lamp2_yellow.style.backgroundColor = "yellow";
    lamp2_green.style.backgroundColor = "white";
    lamp3_red.style.backgroundColor = "red";
    lamp3_yellow.style.backgroundColor = "yellow";
    lamp3_green.style.backgroundColor = "white";
    lamp4_red.style.backgroundColor = "white";
    lamp4_yellow.style.backgroundColor = "yellow";
    lamp4_green.style.backgroundColor = "white";
    setTimeout(step4, 1000);
};

const step4 = () => {
    lamp1_red.style.backgroundColor = "red";
    lamp1_yellow.style.backgroundColor = "white";
    lamp1_green.style.backgroundColor = "white";
    lamp2_red.style.backgroundColor = "white";
    lamp2_yellow.style.backgroundColor = "white";
    lamp2_green.style.backgroundColor = "green";
    lamp3_red.style.backgroundColor = "white";
    lamp3_yellow.style.backgroundColor = "white";
    lamp3_green.style.backgroundColor = "green";
    lamp4_red.style.backgroundColor = "red";
    lamp4_yellow.style.backgroundColor = "white";
    lamp4_green.style.backgroundColor = "white";
    setTimeout(step5, 3000);
};    

const step5 = () => {
    lamp1_red.style.backgroundColor = "red";
    lamp1_yellow.style.backgroundColor = "yellow";
    lamp1_green.style.backgroundColor = "white";
    lamp2_red.style.backgroundColor = "white";
    lamp2_yellow.style.backgroundColor = "white";
    lamp2_green.style.backgroundColor = "green";
    lamp3_red.style.backgroundColor = "white";
    lamp3_yellow.style.backgroundColor = "white";
    lamp3_green.style.backgroundColor = "green";
    lamp4_red.style.backgroundColor = "red";
    lamp4_yellow.style.backgroundColor = "yellow";
    lamp4_green.style.backgroundColor = "white";
    setTimeout(step6, 1000);
};    

const step6 = () => {
    lamp1_red.style.backgroundColor = "red";
    lamp1_yellow.style.backgroundColor = "yellow";
    lamp1_green.style.backgroundColor = "white";
    lamp2_red.style.backgroundColor = "white";
    lamp2_yellow.style.backgroundColor = "yellow";
    lamp2_green.style.backgroundColor = "white";
    lamp3_red.style.backgroundColor = "white";
    lamp3_yellow.style.backgroundColor = "yellow";
    lamp3_green.style.backgroundColor = "white";
    lamp4_red.style.backgroundColor = "red";
    lamp4_yellow.style.backgroundColor = "yellow";
    lamp4_green.style.backgroundColor = "white";
    setTimeout(step1, 1000);                 
};

btn.addEventListener('click', step1);
