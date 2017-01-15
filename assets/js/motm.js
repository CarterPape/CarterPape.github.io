var POSSIBLE_MESSAGES = [
  "¿No way?"
, "It inspired her to build her own refrigerator from scratch"
, "It was not for you guys or the fans. It was for him."
, "My other hobbies include etymology and duct tape"
, "Day 28: Kermit finally gives up the charade"
, "BATS AREN&apos;T BUGS"
, "He learned that from his goldfish"
, "Don&apos;t make me bring out the JRE"
, "Don&apos;t make me explain it with regex"
, "On Tuesday, the Prime Minister announced."
, "Nope nope nope nope nope"
, "Maple farmers and project managers are calling it &quot;Barely above average&quot;!"
, "No wonder!"
, "That was when they realized there was no steering wheel."
, "Redeem your chance at redemption"
, "Maybe I shouldn&apos;t have eaten so many croutons"
, "Don&apos;t take it too seriously"
, "Favorite Carrot?"
, "Thanks!"
, "I think they actually did"
, "What an effort!"
, "&quot;It changed my life&quot; - Barles Charkley"
]

var POSSIBLE_SUBTITLES = [
  "&quot;Original ©ontent&quot;"
, "&quot;Guacamole&quot;"
, "&quot;It's all about meta-humor&quot;"
, "&quot;The revolution will not be crowdsourced&quot;"
, "&quot;<img src=\"{{ site.url }}/images/tul.png\" /><img src=\"{{ site.url }}/images/tur.png\" />&quot;"
]
    
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