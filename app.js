
var quote = "";
var quoted = "";
var occupation = "";
var baseTweetUrl = "https://twitter.com/intent/tweet?text=";
var fallbackAvatar = "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'><rect width='140' height='140' fill='%23d4d4d8'/><circle cx='70' cy='52' r='24' fill='%23a1a1aa'/><rect x='31' y='86' width='78' height='36' rx='18' fill='%23a1a1aa'/></svg>";
var quotes = [
  {
    text: "It always seems impossible until it is done.",
    author: "Nelson Mandela",
    occupation: "Former President of South Africa",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Nelson_Mandela_1994.jpg/220px-Nelson_Mandela_1994.jpg",
    relatedLink: "https://en.wikipedia.org/wiki/Nelson_Mandela",
    palette: { c1: "#67e8f9", c2: "#fdba74", c3: "#93c5fd" }
  },
  {
    text: "Simplicity is the soul of efficiency.",
    author: "Austin Freeman",
    occupation: "Novelist and Physician",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/R._Austin_Freeman.jpg/220px-R._Austin_Freeman.jpg",
    relatedLink: "https://en.wikipedia.org/wiki/R._Austin_Freeman",
    palette: { c1: "#a5b4fc", c2: "#fda4af", c3: "#86efac" }
  },
  {
    text: "What we think, we become.",
    author: "Buddha",
    occupation: "Spiritual Teacher",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Gandhara_Buddha_%28tnm%29.jpeg/220px-Gandhara_Buddha_%28tnm%29.jpeg",
    relatedLink: "https://en.wikipedia.org/wiki/Gautama_Buddha",
    palette: { c1: "#f9a8d4", c2: "#93c5fd", c3: "#fde68a" }
  },
  {
    text: "The best way out is always through.",
    author: "Robert Frost",
    occupation: "Poet",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Robert_Frost_NYWTS.jpg/220px-Robert_Frost_NYWTS.jpg",
    relatedLink: "https://en.wikipedia.org/wiki/Robert_Frost",
    palette: { c1: "#7dd3fc", c2: "#fca5a5", c3: "#bbf7d0" }
  },
  {
    text: "Do one thing every day that scares you.",
    author: "Eleanor Roosevelt",
    occupation: "Diplomat and Activist",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Eleanor_Roosevelt_portrait_1933.jpg/220px-Eleanor_Roosevelt_portrait_1933.jpg",
    relatedLink: "https://en.wikipedia.org/wiki/Eleanor_Roosevelt",
    palette: { c1: "#c4b5fd", c2: "#fbcfe8", c3: "#86efac" }
  },
  {
    text: "Well begun is half done.",
    author: "Aristotle",
    occupation: "Philosopher",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    relatedLink: "https://en.wikipedia.org/wiki/Aristotle",
    palette: { c1: "#93c5fd", c2: "#f9a8d4", c3: "#fdba74" }
  },
  {
    text: "Quality is not an act, it is a habit.",
    author: "Aristotle",
    occupation: "Philosopher",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Aristotle_Altemps_Inv8575.jpg/220px-Aristotle_Altemps_Inv8575.jpg",
    relatedLink: "https://en.wikipedia.org/wiki/Aristotle",
    palette: { c1: "#a7f3d0", c2: "#fda4af", c3: "#93c5fd" }
  },
  {
    text: "Action is the foundational key to all success.",
    author: "Pablo Picasso",
    occupation: "Artist",
    avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/220px-Pablo_picasso_1.jpg",
    relatedLink: "https://en.wikipedia.org/wiki/Pablo_Picasso",
    palette: { c1: "#fcd34d", c2: "#93c5fd", c3: "#fca5a5" }
  }
];

function isCompatibleAvatarUrl(url) {
  if (!url) {
    return false;
  }
  return /^https:\/\/.+\.(jpg|jpeg|png|webp)(\?.*)?$/i.test(url) || /^data:image\//i.test(url);
}

function setAvatarImage(url) {
  var safeUrl = isCompatibleAvatarUrl(url) ? url : fallbackAvatar;
  var testImage = new Image();
  testImage.onload = function() {
    $("#authorAvatar").attr("src", safeUrl);
  };
  testImage.onerror = function() {
    $("#authorAvatar").attr("src", fallbackAvatar);
  };
  testImage.src = safeUrl;
}

function renderQuote() {
  var randomIndex = Math.floor(Math.random() * quotes.length);
  var randomQuote = quotes[randomIndex];
  quote = randomQuote.text;
  quoted = randomQuote.author;
  occupation = randomQuote.occupation;

  $("#quote").text(quote);
  $("#quoted").text(quoted);
  $("#authorOccupation").text(occupation);
  setAvatarImage(randomQuote.avatar);
  $("#authorAvatar").attr("alt", quoted + " avatar");
  $("#authorLink").attr("href", randomQuote.relatedLink);
  document.documentElement.style.setProperty("--c1", randomQuote.palette.c1);
  document.documentElement.style.setProperty("--c2", randomQuote.palette.c2);
  document.documentElement.style.setProperty("--c3", randomQuote.palette.c3);
}

function updateShareLink() {
  var tweetText = encodeURIComponent(quote + " - " + quoted);
  $("#share").attr("href", baseTweetUrl + tweetText);
}

$("#getQuoteButton").click(function getQuote(t) {
  t.preventDefault();
  renderQuote();
  updateShareLink();
});

$("#share").click(function shareContent() {
  updateShareLink();
});

$(document).keydown(function(event) {
  if (event.which == 32) {
    event.preventDefault();
    $("#getQuoteButton").click();
    $("#getQuoteButton").toggleClass("button-nice-active");
  } else if (event.which == 84) {
    event.preventDefault();
    $("#share")[0].click();
    $("#share").toggleClass("button-nice-active");
  }
});

$(document).keyup(function(event) {
  if (event.which == 32) {
    $("#getQuoteButton").toggleClass("button-nice-active");
  } else if (event.which == 84) {
    $("#share").toggleClass("button-nice-active");
  }
});

$("#authorAvatar").on("error", function() {
  $(this).attr("src", fallbackAvatar);
});

renderQuote();
updateShareLink();
