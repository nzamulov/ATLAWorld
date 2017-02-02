'use strict';

var AudioPlayer = {};

Object.defineProperty(AudioPlayer, '_instance', { value:
	(function() {

		var _audioListener = new THREE.AudioListener();
		var _sounds = [];

		return {

			playSound: function(settings) {

				var _audio = Loader._instance.getAudio(settings.path.split('/').pop().split('.')[0]);
				var _sound = new THREE.Audio(_audioListener);

				_sound.setBuffer(_audio);

				if(settings && settings.loop) {
					_sound.setLoop(true);
				}

				if(settings && settings.volume) {
					_sound.setVolume(settings.volume);
				}

				_sound.play();
				_sounds.push(_sound);
			},

			pauseAllSounds: function() {
				for(var i = 0; i < _sounds.length; ++i) {
					_sounds[i].pause();
				}
			},

			stopAllSounds: function() {
				for(var i = 0; i < _sounds.length; ++i) {
					_sounds[i].stop();
				}
			},

			restorePlaying: function() {
				for(var i = 0; i < _sounds.length; ++i) {
					_sounds[i].play();
				}
			}
		};
	})()
});