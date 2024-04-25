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

let MusicPLayerElement = document.getElementById("Player");

let PassedLyricsElement = document.getElementById("PassedLyrics");
let CurrentLyricElement = document.getElementById("CurrentLyric");
let IncomingLyricsElement = document.getElementById("IncomingLyrics");

let SelectedMusicIndex = 0;

let Base_Musics = [
  {
    Name: "Show Of Hands",
    Artist: "Future & Metro Boomin",
    File_Path: "Music/Future_ Metro Boomin - Show of Hands (Official Audio)(MP3_320K).mp3",
    Icon_Path: "Pics/1713425280715.jpg",
    Lyrics: [
      {
        Text: "mamad khar ast",
        TimeStamp: 3
      },
      {
        Text: "mamad khar nist",
        TimeStamp: 5
      },
      {
        Text: "mamad turke",
        TimeStamp: 7
      },
    ],
  },
  {
    Name: "Like That",
    Artist: "Future & Metro Boomin",
    File_Path: "Music/Future_ft_Metro_Boomin_-_Like_That.mp3",
    Icon_Path: "Pics/1713425298765.jpg",
    Lyrics: [
      {
        Text: "mamad khar ast",
        TimeStamp: 3
      },
      {
        Text: "mamad khar nist",
        TimeStamp: 5
      },
      {
        Text: "mamad turke",
        TimeStamp: 8
      },
    ],
  },
  {
    Name: "Do I Wanna Know?",
    Artist: "Arctic Monkeys",
    File_Path: "Music/Do I Wanna Know.mp3",
    Icon_Path: "Pics/am",
    Lyrics: [
      {
        Text: "mamad khar ast",
        TimeStamp: 3
      },
      {
        Text: "mamad khar nist",
        TimeStamp: 5
      },
      {
        Text: "mamad turke",
        TimeStamp: 8
      },
    ],
  },
];

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
};

LoadMusics();

function Manager() {
    let PassedLyrics = [];
    let CurrentLyricObj;
    let IncomingLyrics = []

    CurrentMusic = Musics[SelectedMusicIndex];

    for (let Lyric of CurrentMusic.Lyrics) {
        if (MusicPLayerElement.currentTime >= Lyric.TimeStamp) {
            CurrentLyric = Lyric.Text;
            CurrentLyricObj = Lyric;
        }
        if (MusicPLayerElement.currentTime < Lyric.TimeStamp) {
            IncomingLyrics.push(Lyric);
        }
    }
    for (let Lyric of CurrentMusic.Lyrics) {
        if (CurrentLyricObj != undefined && Lyric.TimeStamp <= CurrentLyricObj.TimeStamp) {
            PassedLyrics.push(Lyric);
        }
    }

    if (PassedLyrics.length > PassedLyricsElement.children.length) {
        for (let i = 0; i < PassedLyrics.length - PassedLyricsElement.children.length; i++) {
            let LyricObj = document.createElement("h1");
            PassedLyricsElement.appendChild(LyricObj);
        }
    }

    if (PassedLyrics.length < PassedLyricsElement.children.length) {
        for (let i = 0; i < PassedLyricsElement.children.length - PassedLyrics.length; i++) {
            PassedLyricsElement.removeChild(PassedLyricsElement.children[0]);
        }
    }

    if (IncomingLyrics.length > IncomingLyricsElement.children.length) {
        for (let i = 0; i < IncomingLyrics.length - IncomingLyricsElement.children.length; i++) {
            let LyricObj = document.createElement("h1");
            IncomingLyricsElement.appendChild(LyricObj);
        }
    }
    if (IncomingLyrics.length < IncomingLyricsElement.children.length) {
        for (let i = 0; i < IncomingLyricsElement.children.length - IncomingLyrics.length; i++) {
            IncomingLyricsElement.removeChild(IncomingLyricsElement.children[0]);
        }
    }

    if (CurrentLyricObj != undefined && CurrentLyricElement.children.length == 0) {
        let LyricObj = document.createElement("h1");
        CurrentLyricElement.appendChild(LyricObj);
    } 

    if (CurrentLyricObj == undefined && CurrentLyricElement.children.length == 1) {
        CurrentLyricElement.removeChild(CurrentLyricElement.children[0]);
    } 

    let LyricIndex = 0;
    for (let i = 0; i < PassedLyrics.length - 1; i++) {
        if (PassedLyricsElement.children[i] != undefined && PassedLyricsElement.children[i].innerHTML != CurrentMusic.Lyrics[LyricIndex].Text) {
            PassedLyricsElement.children[i].innerHTML = CurrentMusic.Lyrics[LyricIndex].Text;
        }
        LyricIndex++;
    }

    if (CurrentLyricObj != undefined) {
        if (CurrentLyricElement.children[0].innerHTML != CurrentMusic.Lyrics[LyricIndex].Text) {
            CurrentLyricElement.children[0].innerHTML = CurrentMusic.Lyrics[LyricIndex].Text;
        }
        LyricIndex++;
    }


    for (let i = 0; i < IncomingLyrics.length; i++) {
        if (IncomingLyricsElement.children[i] != undefined && IncomingLyricsElement.children[i].innerHTML != CurrentMusic.Lyrics[LyricIndex].Text) {
            IncomingLyricsElement.children[i].innerHTML = CurrentMusic.Lyrics[LyricIndex].Text;
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
            MusicPLayerElement.currentTime = Lyric.TimeStamp;
        }
    }
};