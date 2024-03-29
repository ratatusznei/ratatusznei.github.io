'use strict';

let laugh;

window.onload = function onload () {
	laugh = function () {
		if (window.speechSynthesis === undefined) {
			alert('Speech Synthesis not suported');
			return;
		}

		window.speechSynthesis.cancel();

		let synth = window.speechSynthesis;
		let utt = new SpeechSynthesisUtterance();

		let voices = [];
		synth.onvoiceschanged = () => { voices = synth.getVoices(); };
		synth.getVoices();

		if (voices.length === 0) {
			alert('Speech Synthesis not suported - no voices');
			return;
		}
		utt.lang = voices.select().lang;

		let laughModes = ['ha', 'k', 'he', 'há', 'mi', 'hí', 'glu'];
		let laughMode = laughModes.select();

		utt.text = '';
		for (let i = 0; i < Math.floor(randRange(3, 9)); i++) {
			utt.text += laughMode;
		}

		utt.volume = randRange(1, 1.2);
		utt.rate = randRange(0.9, 1.25);
		utt.pitch = randRange(0.75, 1.25);

		window.speechSynthesis.speak(utt);
	}

	let randRange = function (a, b) {
		return Math.random() * (b - a) + a;
	}

	Array.prototype.select = function () {
		return this[Math.floor(Math.random() * this.length)];
	}
}
