let docTitle = document.title;

window.addEventListener("focus", () => {
  document.title = docTitle;
});

let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let recent_volume = document.querySelector("#volume");
let volume_show = document.querySelector("#volume_show");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let auto_play = document.querySelector("#auto");
let present = document.querySelector("#present");
let total = document.querySelector("#total");
let artist = document.querySelector("#artist");

let timer;
let autoplay = 0;

let index_no = 0;
let Playing_song = false;
let track = document.createElement("audio");

let All_song = [
  {
    name: "Show Of Hands",
    path: "Future_ Metro Boomin - Show of Hands (Official Audio)(MP3_320K).mp3",
    img: "1713425280715.jpg",
    singer: "Future & Metro Boomin",
  },
  {
    name: "One Big Family",
    path: "Future_ Metro Boomin - One Big Family (Official Audio)(MP3_320K).mp3",
    img: "1713425280715.jpg",
    singer: "Future & Metro Boomin",
  },
  {
    name: "Like That",
    path: "Future_ft_Metro_Boomin_-_Like_That.mp3",
    img: "1713425298765.jpg",
    singer: "Future & Metro Boomin",
  },
  {
    name: "Runnin Outta Time",
    path: "Future_ft_Metro_Boomin_-_Runnin_Outta_Time.mp3",
    img: "1713425298765.jpg",
    singer: "Future & Metro Boomin",
  },
  {
    name: "Superhero",
    path: "02-Metro-Boomin-Superhero-Heroes-Villains-ft-Future-Chris-Brown-(HiphopKit.com).mp3",
    img: "1713425320816.jpg",
    singer: "Metro Boomin",
  },
];

function load_track(index_no) {
  clearInterval(timer);
  reset_slider();

  track.src = All_song[index_no].path;
  title.innerHTML = All_song[index_no].name;
  track_image.src = All_song[index_no].img;
  artist.innerHTML = All_song[index_no].singer;
  track.load();

  timer = setInterval(range_slider, 1000);
  total.innerHTML = All_song.length;
  present.innerHTML = index_no + 1;
}

load_track(index_no);

function justplay() {
  if (Playing_song == false) {
    playsong();
  } else {
    pausesong();
  }
}

function playsong() {
  track.play();
  Playing_song = true;
  play.innerHTML = '<i class="fa fa-pause" aria-hidden="true"></i>';
}

function pausesong() {
  track.pause();
  Playing_song = false;
  play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
}

function reset_slider() {
  slider.value = 0;
}

function next_song() {
  if (index_no < All_song.length - 1) {
    index_no += 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = 0;
    load_track(index_no);
    playsong();
  }
}

function previous_song() {
  if (index_no > 0) {
    index_no -= 1;
    load_track(index_no);
    playsong();
  } else {
    index_no = All_song.length;
    load_track(index_no);
    playsong();
  }
}

function change_duration() {
  slider_position = track.duration * (slider.value / 100);
  track.currentTime = slider_position;
}

function range_slider() {
  let position = 0;

  if (!isNaN(track.duration)) {
    position = track.currentTime * (100 / track.duration);
    slider.value = position;
  }

  if (track.ended) {
    play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
    if (autoplay == 1) {
      index_no += 1;
      load_track(index_no);
      playsong();
    }
  }
}

function textShow(text, time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, time);
  });
}

async function textDisplay() {
  let matn = document.getElementById("matn");
  let matn2 = document.getElementById("preMatn");
  let matn3 = document.getElementById("afterMatn");

  const l1 = await textShow(
    "Take his chains, shorty, leave your mans for me (Can I trust you?)",
    2000
  );
  matn.innerHTML = l1;

  const l2 = await textShow(
    "Take his chains, shorty, leave your mans for me (Can I trust you?)",
    4000
  );
  matn2.innerHTML = l2;

  const l3 = await textShow("Grab this cam, shorty, OnlyFans for me, uh", 0);
  matn.innerHTML = l3;

  const l4 = await textShow("Grab this cam, shorty, OnlyFans for me, uh", 2000);
  matn2.innerHTML = l4;

  const l5 = await textShow(
    "By a show of hands, who want a fatal? Throw them hands",
    0
  );
  matn.innerHTML = l5;

  const l6 = await textShow(
    "By a show of hands, who want a fatal? Throw them hands",
    4000
  );
  matn2.innerHTML = l6;

  const l7 = await textShow(
    'Told me, "Show a Benz," just play your card, dont show your hand (Uh)',
    0
  );
  matn.innerHTML = l7;

  const l8 = await textShow(
    'Told me, "Show a Benz," just play your card, dont show your hand (Uh)',
    3000
  );
  matn2.innerHTML = l8;

  const l9 = await textShow(
    "Necklace gave me shoulder cramps Pinky ring your show advance",
    0
  );
  matn.innerHTML = l9;

  const l10 = await textShow(
    "Necklace gave me shoulder cramps Pinky ring your show advance",
    4000
  );
  matn2.innerHTML = l10;

  const l11 = await textShow(
    "I just sent a telegram Grandma, your boy the man",
    0
  );
  matn.innerHTML = l11;

  const l12 = await textShow(
    "I just sent a telegram Grandma, your boy the man",
    4000
  );
  matn2.innerHTML = l12;

  const l13 = await textShow(
    "Necklace gave me shoulder cramps Pinky ring your show advance",
    0
  );
  matn.innerHTML = l13;

  const l14 = await textShow(
    "Necklace gave me shoulder cramps Pinky ring your show advance",
    3000
  );
  matn2.innerHTML = l14;

  const l15 = await textShow(
    "Bracelet, Rollie, both em dance A half a mill on both em hands",
    0
  );
  matn.innerHTML = l15;

  const l16 = await textShow(
    "Bracelet, Rollie, both em dance A half a mill on both em hands",
    3000
  );
  matn2.innerHTML = l16;

  const l17 = await textShow("Im a trap nigga, better watch your ho (Uh)", 0);
  matn.innerHTML = l17;

  const l18 = await textShow(
    "Im a trap nigga, better watch your ho (Uh)",
    4000
  );
  matn2.innerHTML = l18;

  const l19 = await textShow(
    "Aint no bap, nigga kickin in your door (Nigga)",
    0
  );
  matn.innerHTML = l19;

  const l20 = await textShow(
    "Aint no bap, nigga kickin in your door (Nigga)",
    3000
  );
  matn2.innerHTML = l20;

  const l21 = await textShow(
    "Yeah (Woo), Chrome Hearty, I just bought the whole store",
    0
  );
  matn.innerHTML = l21;

  const l22 = await textShow(
    "Yeah (Woo), Chrome Hearty, I just bought the whole store",
    3000
  );
  matn2.innerHTML = l22;

  const l23 = await textShow(
    "I blew her head up, now they call her the GOAT",
    0
  );
  matn.innerHTML = l23;

  const l24 = await textShow(
    "I blew her head up, now they call her the GOAT",
    4000
  );
  matn2.innerHTML = l24;

  const l25 = await textShow("Turned the swag up, her last nigga was broke", 0);
  matn.innerHTML = l25;

  const l26 = await textShow(
    "Turned the swag up, her last nigga was broke",
    3000
  );
  matn2.innerHTML = l26;

  const l27 = await textShow(
    "Bought all them bags for her, cant fit em in her closet",
    0
  );
  matn.innerHTML = l27;

  const l28 = await textShow(
    "Bought all them bags for her, cant fit em in her closet",
    4000
  );
  matn2.innerHTML = l28;

  const l29 = await textShow(
    "She can change the fit up least bout three times a day",
    0
  );
  matn.innerHTML = l29;

  const l30 = await textShow(
    "She can change the fit up least bout three times a day",
    4000
  );
  matn2.innerHTML = l30;

  const l31 = await textShow("Aint use a condom, we fuck three times a day", 0);
  matn.innerHTML = l31;

  const l32 = await textShow(
    "Aint use a condom, we fuck three times a day",
    3000
  );
  matn2.innerHTML = l32;

  const l33 = await textShow(
    "This bitch so pretty, I wanna skeet it on her face",
    0
  );
  matn.innerHTML = l33;

  const l34 = await textShow(
    "This bitch so pretty, I wanna skeet it on her face",
    3000
  );
  matn2.innerHTML = l34;

  const l35 = await textShow(
    "I done took the Adderall just to count up my cake",
    0
  );
  matn.innerHTML = l35;

  const l36 = await textShow(
    "I done took the Adderall just to count up my cake",
    4000
  );
  matn2.innerHTML = l36;

  const l37 = await textShow(
    "Im goin Bugatti shoppin, fuckin up this paper",
    0
  );
  matn.innerHTML = l37;

  const l38 = await textShow(
    "Im goin Bugatti shoppin, fuckin up this paper",
    3700
  );
  matn2.innerHTML = l38;

  const l39 = await textShow(
    "First time I smashed it, I was highly sedated",
    0
  );
  matn.innerHTML = l39;

  const l40 = await textShow(
    "First time I smashed it, I was highly sedated",
    3000
  );
  matn2.innerHTML = l40;

  const l41 = await textShow("It get past 3 a.m., Im way out of my mind", 0);
  matn.innerHTML = l41;

  const l42 = await textShow("It get past 3 a.m., Im way out of my mind", 3300);
  matn2.innerHTML = l42;

  const l43 = await textShow(
    "Cost three-eighty and it barely got any diamonds",
    0
  );
  matn.innerHTML = l43;

  const l44 = await textShow(
    "Cost three-eighty and it barely got any diamonds",
    3000
  );
  matn2.innerHTML = l44;

  const l45 = await textShow("Skeleton, faded, spent a rack on it", 0);
  matn.innerHTML = l45;

  const l46 = await textShow("Skeleton, faded, spent a rack on it", 3500);
  matn2.innerHTML = l46;

  const l47 = await textShow(
    "My lawyer gon eat the case, thats what these racks for",
    0
  );
  matn.innerHTML = l47;
}
