// modulus with and without % operator

// with %
const getModulus = (n, m) => {
  return n % m;
};

// without % operator
const getModulus = (n, m) => {
  return n - (Math.floor(n / m) * m);
};

getModulus(20, 3); // 2
