/*1 
function inequality(a, b, c) {
    if (a < b && b < c) {
        return true
    }
    return false
}
console.log(inequality(1, 2, 3));
console.log(inequality(4, 2, 1));
console.log(inequality(10, 12, 20)); */

/* 2
function minNum(a, b, c) {
    let min = Infinity
    if (a < b && a < c) {
        return a
    } else if (b < a && b < c) {
        return b
    }
    return c

}
console.log(minNum(3, 2, 1));
console.log(minNum(-2, -5, 0));
console.log(minNum(20, 12, 10)); */


/* 3
function minAndMax(a, b, c) {
    if (a < b && b < c) {
        console.log(a,c);
    } else if (a < c && c < b) {
        console.log(a,b);
    } else if (b < a && a < c) {
        console.log(b,c);
    } else if (b < c && c < a) {
        console.log(b,a);
    } else if (c < a && a < b) {
        console.log(c,b);
    } else if (c < b && b < a) {
        console.log(c,a);
    }
}
minAndMax(-5,5,15)
minAndMax(20,12,2)
minAndMax(10,-2,11) */

/* 4
function nextEvenNum(n) {
    if (n%2==0) {
        return n+2
    }
    return n+1
}
console.log(nextEvenNum(2));
console.log(nextEvenNum(9));
console.log(nextEvenNum(4)); */


/* 5
function sequenceNum(a, b, c) {
    if (a != b && a != c) {
        console.log(1);
    } else if (b != a && b != c) {
        console.log(2);
    } else if (c != a && c != b) {
       console.log(3);
    }
}

sequenceNum(2,5,2)
sequenceNum(20,20,2)
sequenceNum(10,11,11)  */

/* 6
function passingTheHead(a, b, d) {
    a >= d + 1 && b >= d + 1 ? console.log(true) : console.log(false);
}
passingTheHead(3,4,2)
passingTheHead(4,4,4)
passingTheHead(8,8,7)  */


/* 7
function incAndDec(a, b, c) {
    if (a < b && b < c) {
        console.log(a * 2, b * 2, c * 2);
    } else {
        console.log(-a, -b, -c);
    }
}

incAndDec(1,2,3)
incAndDec(2,1,3)
incAndDec(5,15,30)  */

/* 8
function sequenceNums(a, b, c, d) {
    if (a != b && a != c && a != d) {
        console.log(1);
    } else if (b != a && b != c && b != d) {
        console.log(2);
    } else if (c != a && c != b && c != d) {
        console.log(3);
    } else if (d != a && d != b && d != c) {
        console.log(4);
    }
}
sequenceNums(2,2,2,3)
sequenceNums(1,6,6,6)
sequenceNums(2,8,2,2)  */

/* 9
function sumOfInequalities(n, a) {
    let n1 = Math.floor(n / 10)
    let n2 = n % 10
    if ((n1 + n2) > a) {
        console.log(true);
    } else {
        console.log(false);
    }
}
sumOfInequalities(55,9)
sumOfInequalities(24,7)
sumOfInequalities(18,8)  */

/* 10
function threeDigitNum(num) {
    let n1 = Math.floor(num / 100)
    let n2 = Math.floor(num / 10 % 10)
    let n3 = num % 10
    let res = n1 * n2 * n3
    if (res>99) {
        console.log(true);
    }else{
        console.log(false);
    }
}
threeDigitNum(555)
threeDigitNum(234)
threeDigitNum(188) */