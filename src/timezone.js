Date.prototype.tz = function(timezone) {
  var result = [], date;
  var utc = this.getTime();
  var data = data_IANA[timezone.toUpperCase()];
  if (data === undefined) {
    data = data_abbr[timezone.toUpperCase()];
  }

  if (data !== undefined && data.constructor === String) {
    date = utc + (+data.split(':')[0] * 60 * 60 * 1000) + (((+data.split(':')[1]||0) * 60 * 1000) * (+data.split(':')[0] < 0 ? -1 : 1));
    result.push(new Date(date).toISOString());
  } else if (data !== undefined && data.constructor === Object) {
    for (var i in data) { 
      date = utc + (+i.split(':')[0] * 60 * 60 * 1000) + (((+i.split(':')[1]||0) * 60 * 1000) * (+i.split(':')[0] < 0 ? -1 : 1));
      result.push(new Date(date).toISOString() + '(' + data[i] + ')');
    }
  }

  return result;
};
