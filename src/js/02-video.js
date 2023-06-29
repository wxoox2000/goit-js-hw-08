import Player from '@vimeo/player';
const throttle = require('lodash.throttle');


const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_KEY = "videoplayer-current-time";
 const onPlay  = function(currentTime){
    const time = currentTime.seconds;
    localStorage.setItem(CURRENT_TIME_KEY, JSON.stringify(time))
}
player.on('timeupdate', throttle(onPlay, 1000))
const savedTime = JSON.parse(localStorage.getItem(CURRENT_TIME_KEY));
player.setCurrentTime(savedTime);
// console.log(JSON.parse(savedTime))
