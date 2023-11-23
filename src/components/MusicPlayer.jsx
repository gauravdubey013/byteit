"use client";

import { musics } from "@/app/Karaoke/[music]/musicsdata";
import { useEffect, useState } from "react";

const MusicPlayer = (props) => {
  const titleFetch = props.setTitle;
  const audioFetch = props.setAudio;
  const lyricFetch = props.setLyric;

  const [lyrics, setLyrics] = useState([]);
  const [pointArray, setPointArray] = useState([]);
  const [points, setPoints] = useState(0);
  const [lyricStore, setLyricStore] = useState("");
  const [lyricIndex, setLyricIndex] = useState(0);
  const [isRecording, setIsRecording] = useState(false);
  const [isPlaying, setIsPlaying] = useState(0);
  const [note, setNote] = useState("");
  const [notesStore, setNotesStore] = useState("");

  const parseTime = (time) => {
    const [min, sec] = time.split(":").map((value) => parseFloat(value));
    return min * 60 + sec;
  };

  const parseLyric = (lrc) => {
    const regex = /^\[(?<time>\d{2}:\d{2}(.\d{2})?)\](?<text>.*)/;
    const lines = lrc.split("\n");
    return lines
      .map((line) => {
        const match = line.match(regex);
        if (!match) return null;
        const { time, text } = match.groups;
        return {
          time: parseTime(time),
          text: text.trim(),
        };
      })
      .filter(Boolean);
  };

  const syncLyric = (lyrics, time) => {
    const scores = lyrics
      .filter((lyric) => time - lyric.time >= 0)
      .map((lyric) => time - lyric.time);
    if (scores.length === 0) return null;
    const closest = Math.min(...scores);
    return scores.indexOf(closest);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(lyricFetch);
        const lrc = await res.text();
        setLyrics(parseLyric(lrc));
      } catch (error) {
        console.error("Error fetching lyric: ", error);
      }
    };
    fetchData();
  }, []);

  const handleTimeUpdate = (e) => {
    const time = e.target.currentTime;
    const index = syncLyric(lyrics, time);

    if (index == null) return;

    const lyricElement = document.querySelector(".lyric");
    lyricElement.innerHTML = lyrics[index].text;

    if (lyricIndex !== index) {
      if (index % 3) {
        // Store text
        setNotesStore(notesStore + " " + note);
        setNote("");
        setIsPlaying(Math.random(100));
      }
      setLyricStore(lyricStore + lyrics[index].text);
      setLyricIndex(index);
      countScore();
    }
    lyricElement.classList.add("active");

    setTimeout(() => {
      lyricElement.classList.remove("active");
    }, 500);
  };

  const startRecordController = () => {
    const microphone = new (window["SpeechRecognition"] ||
      window["webkitSpeechRecognition"] ||
      window["mozSpeechRecognition"] ||
      window["msSpeechRecognition"])();

    microphone.continuous = true;
    microphone.interimResults = true;
    microphone.lang = "en-US";

    console.log("Recording: " + isRecording + " - " + isPlaying);

    microphone.stop();

    if (isRecording) {
      microphone.start();
    } else {
      console.log("Mic Stopped");
      microphone.stop();
    }

    microphone.onresult = (event) => {
      const recordingResult = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");
      // console.log(note);
      setNote(recordingResult);
      microphone.onerror = (event) => {
        // console.log(event.error);
      };
    };
  };

  useEffect(() => {
    startRecordController();
  }, [isRecording, isPlaying]);

  useEffect(() => {
    lyrics.map((lyc) => {
      setLyricStore(lyricStore + " " + lyc);
    });
    console.log(lyricStore);
  }, [lyrics]);

  const handleOnPlay = () => {
    setIsRecording(true);
  };

  const handleOnPause = () => {
    setIsRecording(false);
  };

  const countScore = () => {
    let originalScore = similarity(lyricStore, notesStore) * 100;
    let min = 10;
    let max = 40;
    if (originalScore < 15) {
      min = max = 0;
    }
    setPointArray([
      ...pointArray,
      originalScore + randomIntFromInterval(min, max),
    ]);
    // console.log("pointArray" + pointArray);
    setPoints(Math.round(findMedian(pointArray) * 100) / 100);
  };

  function similarity(s1, s2) {
    var longer = s1;
    var shorter = s2;
    if (s1.length < s2.length) {
      longer = s2;
      shorter = s1;
    }
    var longerLength = longer.length;
    if (longerLength == 0) {
      return 1.0;
    }
    return (
      (longerLength - editDistance(longer, shorter)) / parseFloat(longerLength)
    );
  }

  function editDistance(s1, s2) {
    s1 = s1.toLowerCase();
    s2 = s2.toLowerCase();

    var costs = new Array();
    for (var i = 0; i <= s1.length; i++) {
      var lastValue = i;
      for (var j = 0; j <= s2.length; j++) {
        if (i == 0) costs[j] = j;
        else {
          if (j > 0) {
            var newValue = costs[j - 1];
            if (s1.charAt(i - 1) != s2.charAt(j - 1))
              newValue = Math.min(Math.min(newValue, lastValue), costs[j]) + 1;
            costs[j - 1] = lastValue;
            lastValue = newValue;
          }
        }
      }
      if (i > 0) costs[s2.length] = lastValue;
    }
    return costs[s2.length];
  }

  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function findMedian(arr) {
    arr.sort((a, b) => a - b);
    const middleIndex = Math.floor(arr.length / 2);

    if (arr.length % 2 === 0) {
      return (arr[middleIndex - 1] + arr[middleIndex]) / 2;
    } else {
      return arr[middleIndex];
    }
  }
  console.log("what u singing :\n" + notesStore);

  return (
    <div className="text-xl flex flex-col gap-2 items-center justify-center">
      <h1 className="text-3xl text-[#33dbbf]">Play music to read lyrics...</h1>
      <div className="w-full h-full flex items-center justify-between gap-2">
        <h1 className="text-[25px] text-[#33dbbf] uppercase font-bold">
          {titleFetch}
          {/* {params.music} */}
        </h1>
        <p className="text-[#33dbbf]">Points : {points}%</p>
      </div>
      <audio
        onPlay={handleOnPlay}
        onPause={handleOnPause}
        className="player w-full h-[19vh]"
        controls
        onTimeUpdate={handleTimeUpdate}
      >
        <source src={audioFetch} type="audio/mpeg" />
      </audio>
      <div className="lyric"></div>
    </div>
  );
};

export default MusicPlayer;

MusicPlayer.defaultProps = {
  audio: musics.theGoodPart.audio,
  lyric: musics.theGoodPart.lyric,
};
