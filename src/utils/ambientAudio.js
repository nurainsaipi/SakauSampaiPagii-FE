// Ambient Audio Engine using Web Audio API
// Produces real-time, non-jarring, sensory-friendly soundscapes for special needs users

class AmbientAudioEngine {
  constructor() {
    this.ctx = null;
    this.currentSound = null;
    this.nodes = [];
    this.masterGain = null;
    this.volume = 0.8;
  }

  initContext() {
    if (!this.ctx) {
      const AudioContextClass = window.AudioContext || window.webkitAudioContext;
      if (AudioContextClass) {
        this.ctx = new AudioContextClass();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setVolume(vol) {
    this.volume = Math.max(0, Math.min(1, vol));
    if (this.masterGain && this.ctx) {
      this.masterGain.gain.setValueAtTime(this.volume, this.ctx.currentTime);
    }
  }

  stop() {
    this.nodes.forEach(node => {
      try {
        if (node.stop) node.stop();
        if (node.disconnect) node.disconnect();
      } catch (e) {
        // ignore cleanup errors
      }
    });
    this.nodes = [];
    this.currentSound = null;
  }

  playRain() {
    this.initContext();
    if (!this.ctx) return;
    this.stop();
    this.currentSound = 'hujan';

    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Master Gain
    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, now);
    this.masterGain.connect(ctx.destination);
    this.nodes.push(this.masterGain);

    // 1. DESAU GERIMIS (Jelas terdengar tapi tetap sejuk dan tidak bising)
    const bufferSize = ctx.sampleRate * 2;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0, b3 = 0, b4 = 0, b5 = 0, b6 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.99886 * b0 + white * 0.0555179;
      b1 = 0.99332 * b1 + white * 0.0750759;
      b2 = 0.96900 * b2 + white * 0.1538520;
      b3 = 0.86650 * b3 + white * 0.3104856;
      b4 = 0.55000 * b4 + white * 0.5329522;
      b5 = -0.7616 * b5 - white * 0.0168980;
      output[i] = (b0 + b1 + b2 + b3 + b4 + b5 + b6 + white * 0.5362) * 0.08;
      b6 = white * 0.115926;
    }

    const rainBedSource = ctx.createBufferSource();
    rainBedSource.buffer = noiseBuffer;
    rainBedSource.loop = true;

    // Low-pass filter di 1100Hz agar desau rintik air terdengar alami dan tidak pekak
    const bedFilter = ctx.createBiquadFilter();
    bedFilter.type = 'lowpass';
    bedFilter.frequency.setValueAtTime(1100, now);

    const bedGain = ctx.createGain();
    bedGain.gain.setValueAtTime(0.55, now);

    rainBedSource.connect(bedFilter);
    bedFilter.connect(bedGain);
    bedGain.connect(this.masterGain);
    rainBedSource.start();
    this.nodes.push(rainBedSource, bedFilter, bedGain);

    // 2. RINTIK-RINTIK TETESAN AIR (Pitter-Patter Raindrops generator)
    // Menghasilkan bunyi "tik... tik-tik... tik" rintik air hujan di daun/atap
    const triggerRainDrops = () => {
      if (this.currentSound !== 'hujan' || !this.ctx) return;

      const dropOsc = ctx.createOscillator();
      const dropGain = ctx.createGain();
      const dropFilter = ctx.createBiquadFilter();

      // Frekuensi rintik khas tetesan air: 700Hz - 1500Hz
      const freq = 750 + Math.random() * 700;
      dropOsc.type = 'sine';
      dropOsc.frequency.setValueAtTime(freq, ctx.currentTime);
      dropOsc.frequency.exponentialRampToValueAtTime(freq * 0.65, ctx.currentTime + 0.07);

      dropFilter.type = 'bandpass';
      dropFilter.frequency.setValueAtTime(freq, ctx.currentTime);
      dropFilter.Q.setValueAtTime(4.0, ctx.currentTime);

      const dropVol = 0.04 + Math.random() * 0.06;
      dropGain.gain.setValueAtTime(0.001, ctx.currentTime);
      dropGain.gain.linearRampToValueAtTime(dropVol, ctx.currentTime + 0.01);
      dropGain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.08);

      dropOsc.connect(dropFilter);
      dropFilter.connect(dropGain);
      dropGain.connect(this.masterGain);

      dropOsc.start(ctx.currentTime);
      dropOsc.stop(ctx.currentTime + 0.09);

      // Ritme rintik-rintik acak berkelanjutan (70ms - 220ms)
      const nextDelay = 70 + Math.random() * 150;
      const timerId = setTimeout(triggerRainDrops, nextDelay);
      this.nodes.push({ stop: () => clearTimeout(timerId) });
    };

    // Jalankan 2 stream rintik paralel agar suara rintik-rintiknya kaya dan berlapis
    triggerRainDrops();
    setTimeout(triggerRainDrops, 90);
  }

  playWaves() {
    this.initContext();
    if (!this.ctx) return;
    this.stop();
    this.currentSound = 'ombak';

    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Master Gain
    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, now);
    this.masterGain.connect(ctx.destination);
    this.nodes.push(this.masterGain);

    // Pink noise buffer
    const bufferSize = ctx.sampleRate * 4;
    const noiseBuffer = ctx.createBuffer(1, bufferSize, ctx.sampleRate);
    const output = noiseBuffer.getChannelData(0);
    let b0 = 0, b1 = 0, b2 = 0;
    for (let i = 0; i < bufferSize; i++) {
      const white = Math.random() * 2 - 1;
      b0 = 0.995 * b0 + white * 0.08;
      b1 = 0.98 * b1 + white * 0.12;
      b2 = 0.92 * b2 + white * 0.2;
      output[i] = (b0 + b1 + b2) * 0.08;
    }

    const noiseSource = ctx.createBufferSource();
    noiseSource.buffer = noiseBuffer;
    noiseSource.loop = true;

    // Swelling Lowpass filter to simulate waves rolling in and out
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(300, now);

    // LFO to modulate waves (cycle of ~5.5s)
    const lfo = ctx.createOscillator();
    lfo.frequency.setValueAtTime(0.18, now);

    const lfoGain = ctx.createGain();
    lfoGain.gain.setValueAtTime(250, now);

    lfo.connect(lfoGain);
    lfoGain.connect(filter.frequency);

    // Dynamic wave volume swell
    const swellGain = ctx.createGain();
    swellGain.gain.setValueAtTime(0.4, now);
    const ampLfo = ctx.createOscillator();
    ampLfo.frequency.setValueAtTime(0.18, now);
    const ampLfoGain = ctx.createGain();
    ampLfoGain.gain.setValueAtTime(0.35, now);
    ampLfo.connect(ampLfoGain);
    ampLfoGain.connect(swellGain.gain);

    noiseSource.connect(filter);
    filter.connect(swellGain);
    swellGain.connect(this.masterGain);

    noiseSource.start();
    lfo.start();
    ampLfo.start();

    this.nodes.push(noiseSource, filter, lfo, lfoGain, swellGain, ampLfo, ampLfoGain);
  }

  playMusic() {
    this.initContext();
    if (!this.ctx) return;
    this.stop();
    this.currentSound = 'musik';

    const ctx = this.ctx;
    const now = ctx.currentTime;

    // Master Gain
    this.masterGain = ctx.createGain();
    this.masterGain.gain.setValueAtTime(this.volume, now);
    this.masterGain.connect(ctx.destination);
    this.nodes.push(this.masterGain);

    // Gentle pentatonic drone chords (F, A, C, E, G) - Warm & soothing
    const chordNotes = [
      [174.61, 261.63, 329.63], // F, C, E
      [220.00, 261.63, 329.63], // A, C, E
      [196.00, 293.66, 392.00], // G, D, G
      [174.61, 220.00, 329.63]  // F, A, E
    ];

    let currentChord = 0;
    const playChordStep = () => {
      if (this.currentSound !== 'musik') return;

      const freqs = chordNotes[currentChord % chordNotes.length];
      currentChord++;

      freqs.forEach(freq => {
        const osc = ctx.createOscillator();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, ctx.currentTime);

        const gain = ctx.createGain();
        gain.gain.setValueAtTime(0.001, ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.06, ctx.currentTime + 1.5);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 4.5);

        osc.connect(gain);
        gain.connect(this.masterGain);

        osc.start(ctx.currentTime);
        osc.stop(ctx.currentTime + 4.8);
        this.nodes.push(osc, gain);
      });

      const timerId = setTimeout(playChordStep, 4000);
      this.nodes.push({ stop: () => clearTimeout(timerId) });
    };

    playChordStep();
  }
}

export const ambientEngine = new AmbientAudioEngine();
