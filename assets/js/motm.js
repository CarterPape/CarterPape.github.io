function hashDate(year, month, date, hour, minute) {
  return year * 31 + month * 31 + date * 31 + hour * 31 + minute * 31;
};

$(document).ready(function() {
    if (!$("#page-title").html()) {
        var now = new Date();
        var minuteHash = now.getUTCFullYear() * 31 +
                         now.getUTCMonth() * 31 +
                         now.getUTCDate() * 31 +
                         now.getUTCHours() * 31 +
                         now.getUTCMinutes() * 31 +
                         Math.ceil(now.getUTCSeconds() / 10) * 31;
        $("#page-title").html(POSSIBLE_MESSAGES[minuteHash % POSSIBLE_MESSAGES.length]);
        $("#hacky").remove();
    }
});