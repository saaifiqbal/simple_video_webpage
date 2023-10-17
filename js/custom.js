'use strict';

// document.querySelector('body').style.background = 'red';
var tag = document.createElement('script');
tag.src = 'https://www.youtube.com/iframe_api';
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
var player_css = document.querySelector('.player');

// Variables to store the player and video list
var player;
var videoList = document.getElementById('videoList');
var videoPlayer = document.getElementById('video-player');

var videoId = '6stlCkUDG_s';

// player_css.style.backgroundImage(
//   'https://img.youtube.com/vi/VIDEO_ID_1/maxresdefault.jpg'
// );

player_css.style.background =
  'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(https://img.youtube.com/vi/' +
  videoId +
  '/maxresdefault.jpg)';
player_css.style.backgroundSize = 'cover';

// Function to create a YouTube player
function onYouTubeIframeAPIReady() {
  player = new YT.Player('video-player', {
    height: '360',
    width: '640',
    videoId: videoId, // Default video ID
    playerVars: {
      autoplay: 1,
      controls: 1,
      showinfo: 0,
      rel: 0,
      modestbranding: 1,
    },
  });

  // Add click event listeners to video items
  var videoItems = videoList.getElementsByClassName('video-item');
  for (var i = 0; i < videoItems.length; i++) {
    videoItems[i].addEventListener('click', onVideoItemClick);
  }
}

// Function to handle video item click
function onVideoItemClick(event) {
  var videoId = event.currentTarget.getAttribute('data-video-id');
  player_css.style.background =
    'linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url(https://img.youtube.com/vi/' +
    videoId +
    '/maxresdefault.jpg)';
  player.loadVideoById(videoId);
}

//Scroll
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (document.documentElement.scrollTop > 200) {
    document.getElementById('video-player').style.position = 'fixed';
    document.getElementById('video-player').style.height = '200px';
    document.getElementById('video-player').style.width = 'auto';
    document.getElementById('video-player').style.bottom = '10px';
    document.getElementById('video-player').style.right = '10px';
  } else {
    document.getElementById('video-player').style.position = 'relative';
    document.getElementById('video-player').style.height = '460px';
    document.getElementById('video-player').style.width = '840px';
  }
}
var list = [
  {
    playList: 'PlayList 1',
    videoList: [
      { title: 'Video 1', id: '4N8oOj_aue8' },
      { title: 'Video 2', id: 'gsnqXt7d1mU' },
      { title: 'Video 3', id: 'eg2g6FPsdLI' },
      { title: 'Video 4', id: 'oe70Uhjc_F4' },
      { title: 'Video 5', id: 'HccqokXN2n8' },
      { title: 'Video 6', id: 'Jh6jZftn2e0' },
    ],
  },
  {
    playList: 'PlayList 2',
    videoList: [
      { title: 'Video 1', id: 'HHBsvKnCkwI' },
      { title: 'Video 2', id: 'NpdQkEPELh4' },
      { title: 'Video 3', id: '5OrrP3sxOSk' },
      { title: 'Video 4', id: 'SDzl9uB7j0s' },
      { title: 'Video 5', id: 'dVYl5ImNjow' },
      { title: 'Video 6', id: 'CmCIZ_aUAeQ' },
    ],
  },
  {
    playList: 'PlayList 3',
    videoList: [
      { title: 'Video 1', id: '3176Sw8A0EE' },
      { title: 'Video 2', id: 'gIZVVYJkRHM' },
      { title: 'Video 3', id: 'DP_NqOOeoao' },
      { title: 'Video 4', id: 'ljLV1s5f62A' },
      { title: 'Video 5', id: 'AvZzlw6izMw' },
      { title: 'Video 6', id: 'OyjlY3LfOSY' },
    ],
  },
];
var videoListContainer = document.getElementById('videoList');

list.forEach(function (playlist) {
  // Display the playlist title using an h4 element
  var playlistTitle = document.createElement('h4');
  playlistTitle.className = 'playlist-title';
  playlistTitle.textContent = playlist.playList;
  videoListContainer.appendChild(playlistTitle);

  playlist.videoList.forEach(function (video) {
    var videoDiv = document.createElement('div');
    videoDiv.className = 'video-item col-md-2';
    videoDiv.setAttribute('data-video-id', video.id);
    videoDiv.innerHTML = `
                    <img height="100%" width="100%" src="https://img.youtube.com/vi/${video.id}/maxresdefault.jpg" alt="${video.title}" />
                    <div class="play-icon"><i class="fa fa-play"></i></div>
                    <p>${video.title}</p>
                `;
    videoListContainer.appendChild(videoDiv);
  });
});
