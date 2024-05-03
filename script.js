class Lyric {
  Text = undefined;
  TimeStamp = undefined;
  constructor(Text, TimeStamp) {
    this.Text = Text;
    this.TimeStamp = TimeStamp;
  }
  get Text() {
    return this.Text;
  }
  get TimeStamp() {
    return this.TimeStamp;
  }
}

class Music {
  Name = undefined;
  Artist = undefined;
  File_Path = undefined;
  Icon_Path = undefined;
  Lyrics = [];
  constructor(Name, Artist, File_Path, Icon_Path) {
    this.Name = Name;
    this.Artist = Artist;
    this.File_Path = File_Path;
    this.Icon_Path = Icon_Path;
  }
  get Name() {
    return this.Name;
  }
  get Artist() {
    return this.Artist;
  }
  get File_Path() {
    return this.File_Path;
  }
  get Icon_Path() {
    return this.Icon_Path;
  }
}

let Musics = [];

let CurrentLyric = undefined;
let CurrentMusic = undefined;

let PassedLyricsElement = document.getElementById("PassedLyrics");
let CurrentLyricElement = document.getElementById("CurrentLyric");
let IncomingLyricsElement = document.getElementById("IncomingLyrics");
let LastScrollTime = new Date();
let HasScrolled = false;

let SelectedMusicIndex = 0;

let Base_Musics = [
  {
    Name: "Do I Wanna Know?",
    Artist: "Arctic Monkeys",
    File_Path: "Music/Do I Wanna Know.mp3",
    Icon_Path: "Pics/am.jpg",
    Album: "AM",
    SongLength: "4:33",
    Lyrics: [
      {
        Text: "Have you got color in your cheeks?",
        TimeStamp: 29.82,
      },
      {
        Text: "Do you ever get the feeling that you can't shift the tide",
        TimeStamp: 35,
      },
      {
        Text: "That sticks around like summat in your teeth?",
        TimeStamp: 38.12,
      },
      {
        Text: "And some aces up your sleeve",
        TimeStamp: 42.10,
      },
      {
        Text: "I had no idea that you're in deep",
        TimeStamp: 46.6,
      },
      {
        Text: "I dreamt about you near me every night this week",
        TimeStamp: 48.89,
      },
      {
        Text: "How many secrets can you keep?",
        TimeStamp: 53.72,
      },
      {
        Text: "'Cause there's this tune I found that makes me think of you somehow",
        TimeStamp: 57.98,
      },
      {
        Text: "When I play it on repeat",
        TimeStamp: 62.23,
      },
      {
        Text: "Until I fall asleep",
        TimeStamp: 66.21,
      },
      {
        Text: "Spilling drinks on my settee",
        TimeStamp: 69.33,
      },
      {
        Text: "If this feeling flows both ways",
        TimeStamp: 73.59,
      },
      {
        Text: "(Sad to see you go)",
        TimeStamp: 78.98,
      },
      {
        Text: "Was sorta hoping that you'd stay",
        TimeStamp: 81.81,
      },
      {
        Text: "(Baby we both know)",
        TimeStamp: 84.62,
      },
      {
        Text: "That the nights were mainly made for saying",
        TimeStamp: 87.17,
      },
      {
        Text: "things that you can't say tomorrow day",
        TimeStamp: 90.86,
      },
      {
        Text: "Crawlin' back to you.",
        TimeStamp: 95.12,
      },
      {
        Text: "Ever thought of calling when you've had a few?",
        TimeStamp: 98.24,
      },
      {
        Text: "'Cause I always do",
        TimeStamp: 103.93,
      },
      {
        Text: "Maybe I'm too busy being yours to fall for somebody new",
        TimeStamp: 106.77,
      },
      {
        Text: "Now I've thought it through",
        TimeStamp: 115.25,
      },
      {
        Text: "Crawling back to you",
        TimeStamp: 117.81,
      },
      {
        Text: "So have you got the guts?",
        TimeStamp: 120.92,
      },
      {
        Text: "Been wondering if your heart's still open and",
        TimeStamp: 125.47,
      },
      {
        Text: "if so I wanna know what time it shuts",
        TimeStamp: 128.31,
      },
      {
        Text: "Simmer down and pucker up",
        TimeStamp: 133.70,
      },
      {
        Text: "I'm sorry to interrupt it's just I'm constantly",
        TimeStamp: 136.53,
      },
      {
        Text: "on the cusp of trying to kiss you",
        TimeStamp: 140.22,
      },
      {
        Text: "I don't know if you feel the same as I do",
        TimeStamp: 146.71,
      },
      {
        Text: "But we could be together, if you wanted to",
        TimeStamp: 153.79,
      },
      {
        Text: "If this feeling flows both ways",
        TimeStamp: 166.55,
      },
      {
        Text: "(Sad to see you go)",
        TimeStamp: 169.39,
      },
      {
        Text: "Was sorta hoping that you'd stay",
        TimeStamp: 172.23,
      },
      {
        Text: "(Baby we both know)",
        TimeStamp: 174.63,
      },
      {
        Text: "That the nights were mainly made for saying",
        TimeStamp: 177.73,
      },
      {
        Text: "things that you can't say tomorrow day",
        TimeStamp: 181.02,
      },
      {
        Text: "Crawling back to you",
        TimeStamp: 185.56,
      },
      {
        Text: "Ever thought of calling when you've had a few?",
        TimeStamp: 188.69,
      },
      {
        Text: "'Cause I always do ('cause I always do)",
        TimeStamp: 194.61,
      },
      {
        Text: "Maybe I'm too busy being yours to fall for somebody new",
        TimeStamp: 197.73,
      },
      {
        Text: "Now I've thought it through",
        TimeStamp: 205.68,
      },
      {
        Text: "Crawling back to you, (do I wanna know?)",
        TimeStamp: 208.23,
      },
      {
        Text: "If this feeling flows both ways",
        TimeStamp: 211.92,
      },
      {
        Text: "(Sad to see you go)",
        TimeStamp: 214.47,
      },
      {
        Text: "Was sorta hoping that you'd stay",
        TimeStamp: 217.31,
      },
      {
        Text: "(Baby we both know)",
        TimeStamp: 220.14,
      },
      {
        Text: "That the nights were mainly made for saying",
        TimeStamp: 223.55,
      },
      {
        Text: "things that you can't say tomorrow day",
        TimeStamp: 226.11,
      },
      {
        Text: "Too busy being yours to fall",
        TimeStamp: 234.06,
      },
      {
        Text: "(Sad to see you go)",
        TimeStamp: 237.19,
      },
      {
        Text: "Ever thought of calling darling?",
        TimeStamp: 239.74,
      },
      {
        Text: "(Do I wanna know)",
        TimeStamp: 243.14,
      },
      {
        Text: "Do you want me crawling back to you?",
        TimeStamp: 245.41,
      },
    ],
  },
  {
    Name: "Show Of Hands",
    Artist: "Future & Metro Boomin",
    File_Path:
      "Music/Show of Hands.mp3",
    Icon_Path: "Pics/still trust.jpg",
    Album: "WE STILL DON'T TRUST YOU",
    SongLength: "3:35",
    Lyrics: [
      {
        Text: "Take his chains, shorty, leave your mans for me (Can I trust you?)",
        TimeStamp: 2,
      },
      {
        Text: "Grab this cam, shorty, OnlyFans for me, uh",
        TimeStamp: 4,
      },
      {
        Text: "By a show of hands, who want a fatal? Throw them hands",
        TimeStamp: 8,
      },
      {
        Text: "Told me, Show a Benz, just play your card, dont show your hand (Uh)",
        TimeStamp: 11,
      },
      {
        Text: "Necklace gave me shoulder cramps Pinky ring your show advance",
        TimeStamp: 15,
      },
      {
        Text: "I just sent a telegram Grandma, your boy the man",
        TimeStamp: 19,
      },
      {
        Text: "Necklace gave me shoulder cramps Pinky ring your show advance",
        TimeStamp: 22,
      },
      {
        Text: "Bracelet, Rollie, both em dance A half a mill on both em hands",
        TimeStamp: 25,
      },
      {
        Text: "Im a trap nigga, better watch your ho (Uh)",
        TimeStamp: 29,
      },
      {
        Text: "Aint no bap, nigga kickin in your door (Nigga)",
        TimeStamp: 32,
      },
      {
        Text: "Yeah (Woo), Chrome Hearty, I just bought the whole store",
        TimeStamp: 35,
      },
      {
        Text: "I blew her head up, now they call her the GOAT",
        TimeStamp: 39,
      },
      {
        Text: "Turned the swag up, her last nigga was broke",
        TimeStamp: 42,
      },
      {
        Text: "Bought all them bags for her, cant fit em in her closet",
        TimeStamp: 46,
      },
      {
        Text: "She can change the fit up least bout three times a day",
        TimeStamp: 50,
      },
      {
        Text: "Aint use a condom, we fuck three times a day",
        TimeStamp: 53,
      },
      {
        Text: "This bitch so pretty, I wanna skeet it on her face",
        TimeStamp: 56,
      },
      {
        Text: "I done took the Adderall just to count up my cake",
        TimeStamp: 60,
      },
      {
        Text: "Im goin Bugatti shoppin, fuckin up this paper",
        TimeStamp: 63.7,
      },
      {
        Text: "First time I smashed it, I was highly sedated",
        TimeStamp: 66.7,
      },
      {
        Text: "It get past 3 a.m., Im way out of my mind",
        TimeStamp: 70,
      },
      {
        Text: "Cost three-eighty and it barely got any diamonds",
        TimeStamp: 74,
      },
      {
        Text: "Skeleton, faded, spent a rack on it",
        TimeStamp: 77,
      },
      {
        Text: "My lawyer gon eat the case, thats what these racks for",
        TimeStamp: 81,
      },
      {
        Text: "Necklace gave me shoulder cramps",
        TimeStamp: 85,
      },
      {
        Text: "Pinky ring your show advance",
        TimeStamp: 87,
      },
      {
        Text: "I just sent a telegram Grandma, your boy the man",
        TimeStamp: 88.5,
      },
      {
        Text: "Necklace gave me shoulder cramps",
        TimeStamp: 93,
      },
      {
        Text: "Pinky ring your show advance",
        TimeStamp: 94,
      },
      {
        Text: "Bracelet, Rollie, both 'em dance A half a mill' on—",
        TimeStamp: 96,
      },
      {
        Text: "Verse one",
        TimeStamp: 98,
      },
      {
        Text: "Call up Pluto, Metro, should've put me on the first one",
        TimeStamp: 99,
      },
      {
        Text: "Niggas swear they bitch the baddest, I just bagged the worst one",
        TimeStamp: 103,
      },
      {
        Text: "Niggas in they feelings over women, what, you hurt or somethin'?",
        TimeStamp: 107,
      },
      {
        Text: "I smash before you birthed, son, Flacko hit it first, son",
        TimeStamp: 110,
      },
      {
        Text: "Still don' trust you, it's always us, never them",
        TimeStamp: 114,
      },
      {
        Text: "Heard you dropped your latest shit",
        TimeStamp: 116,
      },
      {
        Text: "Funny how it just came and went (Ha-ha-ha)",
        TimeStamp: 117,
      },
      {
        Text: "Money long, but you know I gotta keep it trim (Trim)",
        TimeStamp: 120,
      },
      {
        Text: "Her waist small, but she ain't slim",
        TimeStamp: 123,
      },
      {
        Text: "They call me Flacko Jodye, but I'm him (Grim)",
        TimeStamp: 124.5,
      },
      {
        Text: "Ain't shit change, bitch",
        TimeStamp: 126,
      },
      {
        Text: "Upgraded a lame bitch",
        TimeStamp: 127.5,
      },
      {
        Text: "Stay up in your lane, bitch",
        TimeStamp: 129,
      },
      {
        Text: "My wrist a plain jane, bitch",
        TimeStamp: 131,
      },
      {
        Text: "She fuck me 'cause I'm famous",
        TimeStamp: 133,
      },
      {
        Text: "And they don't speak my language",
        TimeStamp: 135,
      },
      {
        Text: "But bet she know my name, bitch",
        TimeStamp: 136,
      },
      {
        Text: "A stainless 'cause I don't trust a thing, bitch (Why don't you trust me?)",
        TimeStamp: 137.5,
      },
      {
        Text: "Fuck on her tongue, but really I just hit a lick (Lick, lick)",
        TimeStamp: 141,
      },
      {
        Text: "No more Balenci' (Uh), I'm gettin' really tired of Rick (Tired of that shit)",
        TimeStamp: 144,
      },
      {
        Text: "Cough up a lung (Lung), that Bloomin' new Biscotti hit ('Scotti)",
        TimeStamp: 148,
      },
      {
        Text: "First of the month (Uh, month), I'm livin' in your head rent-free",
        TimeStamp: 151,
      },
      {
        Text: "Necklace gave me shoulder cramps Pinky ring your show advance",
        TimeStamp: 155,
      },
      {
        Text: "I just sent a telegram Grandma, your boy the man",
        TimeStamp: 159,
      },
      {
        Text: "Necklace gave me shoulder cramps Pinky ring your show advance",
        TimeStamp: 162,
      },
      {
        Text: "Bracelet, Rollie, both em dance A half a mill on both em hands",
        TimeStamp: 165,
      },
      {
        Text: "Im a trap nigga, better watch your ho (Uh)",
        TimeStamp: 169,
      },
      {
        Text: "Aint no bap, nigga kickin in your door (Nigga)",
        TimeStamp: 172,
      },
      {
        Text: "Yeah (Woo), Chrome Hearty, I just bought the whole store",
        TimeStamp: 175,
      },
      {
        Text: "I blew her head up, now they call her the GOAT",
        TimeStamp: 179,
      },
      {
        Text: "Turned the swag up, her last nigga was broke",
        TimeStamp: 182,
      },
      {
        Text: "Bought all them bags for her, cant fit em in her closet",
        TimeStamp: 186,
      },
      {
        Text: "She can change the fit up least bout three times a day",
        TimeStamp: 190,
      },
      {
        Text: "Fuck keepin' this shit hip-hop",
        TimeStamp: 194,
      },
      {
        Text: "I wanna see a fuck nigga bleed out (Nigga)",
        TimeStamp: 195.5,
      },
      {
        Text: "(I knew we couldn't trust them)",
        TimeStamp: 199,
      },
      {
        Text: "Everybody's doin' it down there",
        TimeStamp: 201,
      },
      {
        Text: "We really, you know, we was the ones that originated it in the first place",
        TimeStamp: 203,
      },
      {
        Text: "So we gon' stick to the script",
        TimeStamp: 208,
      },
      {
        Text: "They'll leave our style alone we leave it alone know what I'm talkin bout",
        TimeStamp: 211,
      },
    ],
  },
  {
    Name: "Like That",
    Artist: "Future & Metro Boomin",
    File_Path: "Music/Like That.mp3",
    Icon_Path: "Pics/trust.jpg",
    Album: "WE DON'T TRUST YOU",
    SongLength: "4:29",
    Lyrics: [
      {
        Text: "",
        TimeStamp: 3,
      },
      {
        Text: "",
        TimeStamp: 5,
      },
      {
        Text: "",
        TimeStamp: 8,
      },
    ],
  },
  {
    Name: "Creepin'",
    Artist: "Metro Boomin",
    File_Path: "Music/Creepin.mp3",
    Icon_Path: "Pics/heroes.jpg",
    Album: "HEROES & VILLAINS",
    SongLength: "3:41",
    Lyrics: [
      {
        Text: "",
        TimeStamp: 3,
      },
      {
        Text: "",
        TimeStamp: 5,
      },
      {
        Text: "",
        TimeStamp: 8,
      },
    ],
  },
];

let previous = document.querySelector("#pre");
let play = document.querySelector("#play");
let next = document.querySelector("#next");
let title = document.querySelector("#title");
let slider = document.querySelector("#duration_slider");
let show_duration = document.querySelector("#show_duration");
let track_image = document.querySelector("#track_image");
let artist = document.querySelector("#artist");
let album = document.querySelector('#album')

let index_no = 0;
let Playing_song = false;
let track = document.createElement("audio");
track.setAttribute("id", "Player");

//nigga
// let auto_play = document.querySelector("#auto");
// let present = document.querySelector("#present");
// let total = document.querySelector("#total");
// let timer;
// let autoplay = 0;

let MusicPLayerElement = document.getElementById("Player");
let body = document.getElementById('backimg');
let SongLength = document.getElementById('timeStamp')


function load_track(index_no) {
  reset_slider();

  //nigga
  // clearInterval(timer);
  // timer = setInterval(range_slider, 1000);
  // total.innerHTML = All_song.length;
  // present.innerHTML = index_no + 1;

  track.src = Base_Musics[index_no].File_Path;
  title.innerHTML = Base_Musics[index_no].Name;
  track_image.src = Base_Musics[index_no].Icon_Path;
  artist.innerHTML = Base_Musics[index_no].Artist;
  album.innerHTML = Base_Musics[index_no].Album;
  body.src = Base_Musics[index_no].Icon_Path;
  SongLength.innerHTML = Base_Musics[index_no].SongLength;
  track.load();
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
  if (index_no < Base_Musics.length - 1) {
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
    index_no = Base_Musics.length;
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

  //nigga
  // if (track.ended) {
  //   play.innerHTML = '<i class="fa fa-play" aria-hidden="true"></i>';
  //   if (autoplay == 1) {
  //     index_no += 1;
  //     load_track(index_no);
  //     playsong();
  //   }
  // }
}


function LoadMusics() {
  for (let Base_Music of Base_Musics) {
    let MusicPayload = new Music(
      Base_Music.Name,
      Base_Music.Artist,
      Base_Music.File_Path,
      Base_Music.Icon_Path
    );
    for (let Base_Lyric of Base_Music.Lyrics) {
      let LyricPayload = new Lyric(Base_Lyric.Text, Base_Lyric.TimeStamp);
      MusicPayload.Lyrics.push(LyricPayload);
    }
    Musics.push(MusicPayload);
  }
}

LoadMusics();

function Manager() {
  let PassedLyrics = [];
  let CurrentLyricObj;
  let IncomingLyrics = [];

  if (Playing_song == false) {
    return;
  }

  CurrentMusic = Musics[SelectedMusicIndex];

  for (let Lyric of CurrentMusic.Lyrics) {
    if (track.currentTime >= Lyric.TimeStamp) {
      CurrentLyric = Lyric.Text;
      CurrentLyricObj = Lyric;
    }
    if (track.currentTime < Lyric.TimeStamp) {
      IncomingLyrics.push(Lyric);
    }
  }
  for (let Lyric of CurrentMusic.Lyrics) {
    if (
      CurrentLyricObj != undefined &&
      Lyric.TimeStamp <= CurrentLyricObj.TimeStamp
    ) {
      PassedLyrics.push(Lyric);
    }
  }

  if (PassedLyrics.length > PassedLyricsElement.children.length) {
    for (
      let i = 0;
      i < PassedLyrics.length - PassedLyricsElement.children.length;
      i++
    ) {
      let LyricObj = document.createElement("h1");
      PassedLyricsElement.appendChild(LyricObj);
    }
  }

  if (PassedLyrics.length < PassedLyricsElement.children.length) {
    for (
      let i = 0;
      i < PassedLyricsElement.children.length - PassedLyrics.length;
      i++
    ) {
      PassedLyricsElement.removeChild(PassedLyricsElement.children[0]);
    }
  }

  if (IncomingLyrics.length > IncomingLyricsElement.children.length) {
    for (
      let i = 0;
      i < IncomingLyrics.length - IncomingLyricsElement.children.length;
      i++
    ) {
      let LyricObj = document.createElement("h1");
      IncomingLyricsElement.appendChild(LyricObj);
    }
  }
  if (IncomingLyrics.length < IncomingLyricsElement.children.length) {
    for (
      let i = 0;
      i < IncomingLyricsElement.children.length - IncomingLyrics.length;
      i++
    ) {
      IncomingLyricsElement.removeChild(IncomingLyricsElement.children[0]);
    }
  }

  if (
    CurrentLyricObj != undefined &&
    CurrentLyricElement.children.length == 0
  ) {
    ScrollToCurrentLyric();
    let LyricObj = document.createElement("h1");
    CurrentLyricElement.appendChild(LyricObj);
  }

  if (
    CurrentLyricObj == undefined &&
    CurrentLyricElement.children.length == 1
  ) {
    CurrentLyricElement.removeChild(CurrentLyricElement.children[0]);
  }

  let LyricIndex = 0;
  for (let i = 0; i < PassedLyrics.length - 1; i++) {
    if (
      PassedLyricsElement.children[i] != undefined &&
      PassedLyricsElement.children[i].innerHTML !=
        CurrentMusic.Lyrics[LyricIndex].Text
    ) {
      PassedLyricsElement.children[i].innerHTML =
        CurrentMusic.Lyrics[LyricIndex].Text;
    }
    LyricIndex++;
  }

  if (CurrentLyricObj != undefined) {
    if (
      CurrentLyricElement.children[0].innerHTML !=
      CurrentMusic.Lyrics[LyricIndex].Text
    ) {
      CurrentLyricElement.children[0].innerHTML =
        CurrentMusic.Lyrics[LyricIndex].Text;
      ScrollToCurrentLyric();
    }
    LyricIndex++;
  }

  for (let i = 0; i < IncomingLyrics.length; i++) {
    if (
      IncomingLyricsElement.children[i] != undefined &&
      IncomingLyricsElement.children[i].innerHTML !=
        CurrentMusic.Lyrics[LyricIndex].Text
    ) {
      IncomingLyricsElement.children[i].innerHTML =
        CurrentMusic.Lyrics[LyricIndex].Text;
    }
    LyricIndex++;
  }
}

setInterval(() => {
  Manager();
}, 1);

onclick = (event) => {
  let Element = event.target;
  for (let Lyric of CurrentMusic.Lyrics) {
    if (Lyric.Text == Element.innerHTML) {
      track.currentTime = Lyric.TimeStamp;
    }
  }
};

function ScrollToCurrentLyric() {
  function scrollToElm(container, elm, duration) {
    var pos = getRelativePos(elm);
    scrollTo(container, pos.top, duration / 1000);
  }

  function getRelativePos(elm) {
    let pPos = elm.parentNode.getBoundingClientRect(),
      cPos = elm.getBoundingClientRect(),
      pos = {};

    (pos.top = cPos.top - 40 - pPos.top + elm.parentNode.scrollTop),
      (pos.right = cPos.right - pPos.right),
      (pos.bottom = cPos.bottom * 2 - pPos.bottom),
      (pos.left = cPos.left - pPos.left);

    return pos;
  }

  let LyricsBox = document.getElementById("lyricsBox");

  function scrollTo(element, to, duration, onDone) {
    let start = element.scrollTop,
      change = to - start,
      startTime = performance.now(),
      val,
      now,
      elapsed,
      t;

    function animateScroll() {
      now = performance.now();
      elapsed = (now - startTime) / 1000;
      t = elapsed / duration;

      element.scrollTop = start + change * easeInOutQuad(t);

      if (t < 1) window.requestAnimationFrame(animateScroll);
      else onDone && onDone();
    }

    animateScroll();
  }
  scrollToElm(LyricsBox, CurrentLyricElement, 1000);
}

onscroll = (event) => {
  LastScrollTime = new Date();
  HasScrolled = false;
};

function easeInOutQuad(t) {
  return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
}

if ((LastScrollTime - new Date()) / 1000 >= 2 && !HasScrolled) {
  ScrollToCurrentLyric();
  HasScrolled = true;
}

const volumeSlider = document.getElementById("volume-slider");

volumeSlider.addEventListener("input", () => {
  track.volume = volumeSlider.value;
});

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}