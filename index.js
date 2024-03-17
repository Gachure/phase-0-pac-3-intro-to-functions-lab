export function shout(string) {
    return string.toUpperCase();
  }
  
  export function whisper(string) {
    return string.toLowerCase();
  }
  
  export function logShout(string) {
    console.log(shout(string));
  }
  
  export function logWhisper(string) {
    console.log(whisper(string));
  }
  
  export function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }