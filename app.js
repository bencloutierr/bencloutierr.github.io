const myname = document.querySelectorAll('#myname path');

for(let i = 2; i<12; i++){
    console.log(`Letter ${i} is ${myname[i].getTotalLength()}`);
}