// formats a date to British format

const formatDate = function(d, separator) {
  separator = separator || '/';
  
  const addZero = function (n) {
  	return (n < 10) ? '0' + n : n;
  };

  d = new Date(d);
  
  let year = d.getFullYear(),
      month = addZero(d.getMonth() + 1),
      day = addZero(d.getDate());
      
  return day + separator + month + separator + year;
};

formatDate(new Date()); // 12/02/2016
formatDate('2014-10-12 09:00 AM'); // 12/10/2014
formatDate(new Date(), '-'); // 12-02-2016
