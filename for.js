"use strict"

for ( let i = 1; i < 51; i++ ) {
    console.log( i );
} // 1 ~ 50


let sum = 0;
for ( let i = 1; i <= 3; i++ ) {
    sum += i; // sum = sum + i
} console.log( sum ); // 6


for ( let i = 1; i <= 3; i++ ) {
    console.log ( i );
} // 1 ~ 3


// 구구단 6단
for ( let i = 1; i <= 9; i++ ) {
    console.log("6 x " + i + " = " + (6 * i)); // 값은 (6 * i)
}


// 이중 For문
// for () {
//      for () {

//      }
// }

// 이중 For문 응용 구구단 1 ~ 9단
for ( let x = 1; x <= 9; x++ ) {
    for ( let y = 1; y <= 9; y++ ) {
        console.log( x + " x " + y + " = " + (x * y)); // 값은 (x * y)
    }
}

// 5 x 5 정사각형
for ( let x = 1; x <= 5; x++ ) {
    for ( let y = 1; y <= 5; y++ ) {
        process.stdout.write("* ");
    }

    console.log();
}

// 반삼각형
for ( let x = 1; x <= 5; x++ ) {        //세로
    for ( let y = 1; y <= x ; y++ ){    //가로
        process.stdout.write("* ");
    }

    console.log();
}