"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { musics } from "@/app/Karaoke/[music]/musicsdata";
import { IoArrowBackCircleOutline } from "react-icons/io5";

const MusicPlayer = (props) => {
  const titleFetch = props.setTitle;
  const audioFetch = props.setAudio;
  const lyricFetch = props.setLyric;
  const navigateProps = props.setNavigate;

  const navigate = useRouter();

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

    const currentLyric = lyrics[index].text;
    const lyricElement = document.querySelector(".lyric");
    lyricElement.innerHTML = currentLyric;

    if (lyricIndex !== index) {
      if (index % 3) {
        // Store text
        setNotesStore(notesStore + " " + note);
        setNote("");
        setIsPlaying(Math.random(100));
      }
      setLyricStore(lyricStore + currentLyric);
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
    navigate.push(navigateProps);
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
    <>
      <div className="w-full h-[71vh] md:h-screen relative px-7">
        <div className="w-auto h-[25%] md:h-[18%] md:absolute md:-ml-5 flex flex-col items-center justify-center gap-2">
          <Link href={"/Karaoke"} className="w-[25%] h-auto flex items-center justify-center gap-2 rounded-full hover:border-[0.5px] active:scale-90">
          <div>
          <IoArrowBackCircleOutline />
          </div>
          <div>Back</div>
          </Link>
          <h1 className="text-3xl md:text-2xl text-white font-extrabold ease-in-out duration-200">
            Play music to read lyrics...
          </h1>
          <div className="w-full h-[30%] flex items-center justify-between gap-2 md:gap-5 text-2xl md:text-xl text-teal-500 px-2">
            <h1 className="uppercase font-bold">{titleFetch}</h1>
            <p>Points: {points}%</p>
          </div>
          <div className="w-full h-full flex items-center justify-center">
            <audio
              onPlay={handleOnPlay}
              onPause={handleOnPause}
              className="player w-full h-full"
              controls
              onTimeUpdate={handleTimeUpdate}
            >
              <source src={audioFetch} type="audio/mpeg" />
            </audio>
          </div>
        </div>
        <div className="w-full h-[50%] md:h-full flex items-center justify-center text-center text-white">
          <div className="lyric"></div>
          {/* Display your synchronized lyrics here */}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;

MusicPlayer.defaultProps = {
  audio: musics.theGoodPart.audio,
  lyric: musics.theGoodPart.lyric,
};
