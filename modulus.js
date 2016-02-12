// modulus with and without % operator

// with %
var getModulus = (n, m) => {
  return n % m;
};

// without % operator
var getModulus = (n, m) => {
  return n - (Math.floor(n / m) * m);
};

getModulus(20, 3); // 2
