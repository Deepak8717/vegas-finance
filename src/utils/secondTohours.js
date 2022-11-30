const secondsToHours = (d) => {
  d = Number(d);
  var h = Math.floor(d / 3600);
  var m = Math.floor((d % 3600) / 60);
  var s = Math.floor((d % 3600) % 60);

  if (h > 0) {
    return h + "hrs";
  } else if (m > 0) {
    return m + "min";
  } else if (s > 0) {
    return s + "sec";
  }
};

export default secondsToHours;
