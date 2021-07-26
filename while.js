"use strict"

for ( let i = 0; i < 10; i++ ){
    if ( i === 5 ) {
        console.log("i가 5에 도달함");
        continue;
    }

    if ( i === 8 ) {
        console.log ("i가 8에 도달함. for문 종료"); // 9까지 안 가고 for문 종료됨
        break;
    }
    console.log(i);
}

console.log("-----------------------------------------");

let i = 0;
while ( i < 10 ) {
    if ( i === 5 ) {
        console.log("i가 5에 도달함");
        i++;
        continue;
    }
    
    if ( i === 8 ) {
        console.log ("i가 8에 도달함. for문 종료");
        break;
    }
    
    console.log (i);
    i++;
}

console.log ("-----------------------------------------");

let k = 1;
while ( k <= 30 ) {
    if ( k % 2 === 0 ) {
        console.log( k + "는 2로 나누어 떨어지는 수이다.");
    }

    k++;
}