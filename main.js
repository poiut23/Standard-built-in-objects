// Math.abs methed is used to get the absolute value of a number
function difference(a, b) {
  return Math.abs(a - b);// this will return the absolute value of the difference between a and b
}

console.log(difference(3, 5));
// Expected output: 2

console.log(difference(5, 3));
// Expected output: 2

console.log(difference(1.23456, 7.89012));
// Expected output: 6.6555599999999995

/*You use Math.abs() directly from the Math object, like this: Math.abs(-5).
You don’t create a new Math object with new Math(), because Math is not something you can make copies of.
It’s just a built-in object with useful math methods, and abs() is one of them.
So, always use Math.abs(), not something like myMath.abs().
*/
Math.abs(-Infinity); // Infinity
Math.abs(-1); // 1
Math.abs(-0); // 0
Math.abs(0); // 0
Math.abs(1); // 1
Math.abs(Infinity); // Infinity


//------------------------------------------------------------------

/*
Math.acos(x) gives you the angle (in radians) whose cosine is x.

You can use it for numbers between -1 and 1.
The result is always between 0 and π (about 3.14).
this π is pi, a special number in math that is about 3.14.
*/

Math.acos(-2); // NaN
Math.acos(-1); // 3.141592653589793 (π)
Math.acos(0); // 1.5707963267948966 (π/2)
Math.acos(0.5); // 1.0471975511965979 (π/3)
Math.acos(1); // 0
Math.acos(2); // NaN



// Calculates angle of a right-angle triangle in radians
function calcAngle(adjacent, hypotenuse) {
  return Math.acos(adjacent / hypotenuse);
}

console.log(calcAngle(8, 10));
// Expected output: 0.6435011087932843

console.log(calcAngle(5, 3));
// Expected output: NaN


//------------------------------------------------------------------

/*
Math.acosh(x) gives you the inverse hyperbolic cosine of x.

You can use it for numbers 1 or greater.
The result is a number (in radians).
For example:

Math.acosh(1) returns 0
Math.acosh(2) returns about 1.31696
Math.acosh(0.5) returns NaN (because it only works for x ≥ 1)
*/

Math.acosh(0); // NaN
Math.acosh(1); // 0
Math.acosh(2); // 1.3169578969248166
Math.acosh(Infinity); // Infinity


//------------------------------------------------------------------

/*
Math.asin(x) gives you the angle (in radians) whose sine is x.

You can use it for numbers between -1 and 1.
The result is always between -π/2 and π/2 (about -1.57 to 1.57).

For example:
Math.asin(0) returns 0
Math.asin(1) returns 1.5707963267948966 (π/2)
Math.asin(-1) returns -1.5707963267948966 (-π/2)
Math.asin(2) returns NaN (because it only works for x between -1 and 1)
*/

Math.asin(0);    // 0
Math.asin(0.5);  // 0.5235987755982989 (π/6)
Math.asin(1);    // 1.5707963267948966 (π/2)
Math.asin(-1);   // -1.5707963267948966 (-π/2)
Math.asin(2);    // NaN

//------------------------------------------------------------------

/*
Math.asinh(x) gives you the inverse hyperbolic sine of x.

You can use it for any real number (positive, negative, or zero).
The result is a number (in radians).

For example:
Math.asinh(0) returns 0
Math.asinh(1) returns about 0.88137
Math.asinh(-1) returns about -0.88137
Math.asinh(Infinity) returns Infinity
Math.asinh(-Infinity) returns -Infinity
*/

Math.asinh(0);        // 0
Math.asinh(1);        // 0.881373587019543
Math.asinh(-1);       // -0.881373587019543
Math.asinh(Infinity); // Infinity
Math.asinh(-Infinity);// -Infinity

//------------------------------------------------------------------

/*
Math.atan(x) gives you the angle (in radians) whose tangent is x.

You can use it for any real number (positive, negative, or zero).
The result is always between -π/2 and π/2 (about -1.57 to 1.57).

For example:
Math.atan(0) returns 0
Math.atan(1) returns 0.7853981633974483 (π/4)
Math.atan(-1) returns -0.7853981633974483 (-π/4)
Math.atan(Infinity) returns 1.5707963267948966 (π/2)
Math.atan(-Infinity) returns -1.5707963267948966 (-π/2)
*/

Math.atan(0);         // 0
Math.atan(1);         // 0.7853981633974483 (π/4)
Math.atan(-1);        // -0.7853981633974483 (-π/4)
Math.atan(Infinity);  // 1.5707963267948966 (π/2)
Math.atan(-Infinity); // -1.5707963267948966 (-π/2)

//------------------------------------------------------------------

/*
Math.atan2(y, x) gives you the angle (in radians) from the X-axis to the point (x, y).

It takes two arguments: y (vertical) and x (horizontal).
The result is always between -π and π (about -3.14 to 3.14).
It’s useful for finding the direction of a vector or the angle between two points.

For example:
Math.atan2(0, 1) returns 0           // angle is 0 radians (pointing right)
Math.atan2(1, 0) returns 1.5708...   // angle is π/2 radians (pointing up)
Math.atan2(0, -1) returns 3.1415...  // angle is π radians (pointing left)
Math.atan2(-1, 0) returns -1.5708... // angle is -π/2 radians (pointing down)
Math.atan2(1, 1) returns 0.7853...   // angle is π/4 radians (pointing up-right)
*/

Math.atan2(0, 1);    // 0
Math.atan2(1, 0);    // 1.5707963267948966 (π/2)
Math.atan2(0, -1);   // 3.141592653589793 (π)
Math.atan2(-1, 0);   // -1.5707963267948966 (-π/2)
Math.atan2(1, 1);    // 0.7853981633974483 (π/4)

//------------------------------------------------------------------

/*
Math.atanh(x) gives you the inverse hyperbolic tangent of x.

You can use it for numbers between -1 and 1 (not including -1 or 1).
The result is a number (in radians).

For example:
Math.atanh(0) returns 0
Math.atanh(0.5) returns about 0.5493
Math.atanh(-0.5) returns about -0.5493
Math.atanh(1) returns Infinity (not allowed, so result is Infinity)
Math.atanh(-1) returns -Infinity (not allowed, so result is -Infinity)
Math.atanh(2) returns NaN (because it only works for x between -1 and 1)
*/

Math.atanh(0);    // 0
Math.atanh(0.5);  // 0.5493061443340548
Math.atanh(-0.5); // -0.5493061443340548
Math.atanh(1);    // Infinity
Math.atanh(-1);   // -Infinity
Math.atanh(2);    // NaN

//------------------------------------------------------------------
/*
Math.cbrt(x) gives you the cube root of x.

You can use it to find a number that, when multiplied by itself three times, equals x.
For example, the cube root of 27 is 3 because 3 * 3 * 3 = 27.
*/

Math.cbrt(27);   // 3
Math.cbrt(-8);   // -2
Math.cbrt(0);    // 0

//------------------------------------------------------------------

/*
Math.ceil(x) rounds x up to the next largest integer.

You can use it when you need to make sure a number is rounded up, even if it already has a decimal part.
Useful for things like pagination, prices, or any case where you can't have a fraction.
*/

Math.ceil(0.95);    // 1
Math.ceil(4);       // 4
Math.ceil(-7.004);  // -7

//------------------------------------------------------------------

/*
Math.clz32(x) returns the number of leading zero bits in the 32-bit binary representation of x.

You can use it for bitwise operations or when you need to know how many zeros come before the first 1 in a 32-bit integer.
*/

Math.clz32(1);     // 31
Math.clz32(1000);  // 22
Math.clz32(0);     // 32

//------------------------------------------------------------------

/*
Math.cos(x) gives you the cosine of x (x is in radians).

You can use it in trigonometry, geometry, physics, or graphics to find the ratio of the adjacent side to the hypotenuse in a right triangle.
*/

Math.cos(0);            // 1
Math.cos(Math.PI);      // -1
Math.cos(Math.PI / 2);  // 0

//------------------------------------------------------------------

/*
Math.cosh(x) gives you the hyperbolic cosine of x.

You can use it in advanced math, physics, or engineering for calculations involving hyperbolic functions.
*/

Math.cosh(0);    // 1
Math.cosh(1);    // 1.5430806348152437

//------------------------------------------------------------------

/*
Math.exp(x) returns e (Euler’s number, about 2.718) raised to the power of x.

You can use it for exponential growth, compound interest, or scientific calculations.
*/

Math.exp(1);     // 2.718281828459045
Math.exp(2);     // 7.389056098930649

//------------------------------------------------------------------

/*
Math.expm1(x) returns e^x minus 1 (more accurate for small x).

You can use it for precise calculations with very small numbers, such as in finance or statistics.
*/

Math.expm1(1);   // 1.718281828459045
Math.expm1(0);   // 0

//------------------------------------------------------------------

/*
Math.f16round(x) rounds x to the nearest 16-bit half-precision float.

You can use it when you need to simulate or work with 16-bit floating-point numbers (WebGL, graphics, etc.).
*/

Math.f16round(1.337); // 1.3359375
Math.f16round(0);     // 0

//------------------------------------------------------------------

/*
Math.floor(x) rounds x down to the next smallest integer.

You can use it to always round down, such as for array indices or pagination.
*/

Math.floor(0.95);    // 0
Math.floor(4);       // 4
Math.floor(-7.004);  // -8

//------------------------------------------------------------------

/*
Math.fround(x) returns the nearest 32-bit single-precision float representation of x.

You can use it for performance or compatibility with systems that use 32-bit floats.
*/

Math.fround(1.337); // 1.3370000123977661
Math.fround(0);     // 0

//------------------------------------------------------------------

/*
Math.hypot(...values) returns the square root of the sum of squares of its arguments.

You can use it to calculate the length of the hypotenuse or distance in 2D/3D space.
*/

Math.hypot(3, 4);      // 5
Math.hypot(2, 3, 6);   // 7

//------------------------------------------------------------------

/*
Math.imul(a, b) returns the result of 32-bit integer multiplication of a and b.

You can use it for fast integer math, especially in games or graphics.
*/

Math.imul(2, 4);    // 8
Math.imul(-1, 8);   // -8

//------------------------------------------------------------------

/*
Math.log(x) gives you the natural logarithm (base e) of x.

You can use it for scientific, financial, or statistical calculations.
*/

Math.log(1);    // 0
Math.log(Math.E); // 1

//------------------------------------------------------------------

/*
Math.log10(x) gives you the base-10 logarithm of x.

You can use it to find how many times you multiply 10 to get x.
*/

Math.log10(100); // 2
Math.log10(1);   // 0

//------------------------------------------------------------------

/*
Math.log1p(x) returns the natural logarithm of (1 + x), accurate for small x.

You can use it for precise calculations with small numbers, such as interest rates.
*/

Math.log1p(0);   // 0
Math.log1p(1);   // 0.6931471805599453

//------------------------------------------------------------------

/*
Math.log2(x) gives you the base-2 logarithm of x.

You can use it to find how many times you multiply 2 to get x (useful in computing).
*/

Math.log2(8);    // 3
Math.log2(1);    // 0

//------------------------------------------------------------------

/*
Math.max(...values) returns the largest of the given numbers.

You can use it to find the highest value in a list.
*/

Math.max(1, 3, 2); // 3

//------------------------------------------------------------------

/*
Math.min(...values) returns the smallest of the given numbers.

You can use it to find the lowest value in a list.
*/

Math.min(1, 3, 2); // 1

//------------------------------------------------------------------

/*
Math.pow(base, exponent) returns base raised to the power of exponent.

You can use it for exponentiation, such as squaring or cubing numbers.
*/

Math.pow(2, 3); // 8

//------------------------------------------------------------------

/*
Math.random() returns a pseudo-random number between 0 (inclusive) and 1 (exclusive).

You can use it for games, simulations, or any case where you need a random number.
*/

Math.random(); // e.g., 0.123456789

//------------------------------------------------------------------

/*
Math.round(x) rounds x to the nearest integer.

You can use it to round numbers for display or calculations.
*/

Math.round(0.9);   // 1
Math.round(1.5);   // 2
Math.round(-1.5);  // -1

//------------------------------------------------------------------

/*
Math.sign(x) returns the sign of x: 1 for positive, -1 for negative, 0 for zero.

You can use it to quickly check if a number is positive, negative, or zero.
*/

Math.sign(3);   // 1
Math.sign(-3);  // -1
Math.sign(0);   // 0

//------------------------------------------------------------------

/*
Math.sin(x) gives you the sine of x (x is in radians).

You can use it in trigonometry, geometry, physics, or graphics to find the ratio of the opposite side to the hypotenuse in a right triangle.
*/

Math.sin(0);           // 0
Math.sin(Math.PI / 2); // 1

//------------------------------------------------------------------

/*
Math.sinh(x) gives you the hyperbolic sine of x.

You can use it in advanced math, physics, or engineering for calculations involving hyperbolic functions.
*/

Math.sinh(0);    // 0
Math.sinh(1);    // 1.1752011936438014

//------------------------------------------------------------------

/*
Math.sqrt(x) gives you the square root of x.

You can use it to find a number that, when multiplied by itself, equals x.
*/

Math.sqrt(9);    // 3
Math.sqrt(2);    // 1.4142135623730951

//------------------------------------------------------------------

/*
Math.sumPrecise(...values) (Experimental) returns the precise sum of all arguments, reducing floating-point errors.

You can use it when you need high-precision addition of many numbers (not supported in all browsers).
*/

// Math.sumPrecise(0.1, 0.2, 0.3); // 0.6 (if supported)

//------------------------------------------------------------------

/*
Math.tan(x) gives you the tangent of x (x is in radians).

You can use it in trigonometry, geometry, or graphics to find the ratio of the opposite side to the adjacent side in a right triangle.
*/

Math.tan(0);           // 0
Math.tan(Math.PI / 4); // 1

//------------------------------------------------------------------

/*
Math.tanh(x) gives you the hyperbolic tangent of x.

You can use it in advanced math, physics, or engineering for calculations involving hyperbolic functions.
*/

Math.tanh(0);    // 0
Math.tanh(1);    // 0.7615941559557649

//------------------------------------------------------------------

/*
Math.trunc(x) removes the fractional part of x, leaving only the integer part.

You can use it to quickly get the integer part of a number, similar to rounding toward zero.
*/

Math.trunc(13.37);   // 13
Math.trunc(-0.123);  // 0

//------------------------------------------------------------------

/*
Static properties of Math:

Math.E        // Euler’s number, base of natural logarithms (about 2.718)
Math.LN10     // Natural log of 10 (about 2.302)
Math.LN2      // Natural log of 2 (about 0.693)
Math.LOG10E   // Base-10 log of e (about 0.434)
Math.LOG2E    // Base-2 log of e (about 1.442)
Math.PI       // Pi, ratio of circumference to diameter (about 3.14159)
Math.SQRT1_2  // Square root of 1/2 (about 0.707)
Math.SQRT2    // Square root of 2 (about 1.414)

You can use these constants in mathematical formulas and calculations.
*/

Math.E;
Math.LN10;
Math.LN2;
Math.LOG10E;
Math.LOG2E;
Math.PI;
Math.SQRT1_2;
Math.SQRT2;

//------------------------------------------------------------------