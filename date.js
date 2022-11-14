exports.getDate = function () {
  let options = {
    weekday: "long",
    month: "long",
    day: "numeric",
  };
  let today = new Date();
  let day = today.toLocaleDateString("en-US", options);

  return day;
};

// export default getDate();
