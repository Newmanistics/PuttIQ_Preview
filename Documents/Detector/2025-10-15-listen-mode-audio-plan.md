# Listen Mode Audio Crash Mitigation — 2025-10-15

## Context
- Device crash logs (`Documents/crashlog.crash`, `Documents/crashlog2.crash`) show `AVAudioEngineImpl::InstallTapOnNode` aborts on Listen Mode start inside the 1.1.0 TestFlight build.
- Reported by TestFlight feedback (`Documents/feedback.json`) as “Crashed on load” on iOS 18.6.2 hardware.
- Root cause: reliance on `expo-av`’s `Audio.Recording` tap during Listen Mode (`services/dsp/VideoSyncDetectorV2.js`) colliding with AppDelegate session overrides and leading to intermittent tap creation failures.

## Changes
- `services/dsp/VideoSyncDetectorV2.js:17` — detect `@cjblack/expo-audio-stream` availability and record through its live audio stream when present (native module already bundled for acoustic detector). Fall back to `expo-av` recorder only on platforms without the module.
- `services/dsp/VideoSyncDetectorV2.js:324-432` — convert streamed Int16 payloads to RMS, reuse existing spike detection logic via `processMeteringSample`, and guard pause/resume/stop for the stream path.
- `services/dsp/VideoSyncDetectorV2.js:652-869` — initialize stream vs recorder based on module availability, add logging, and ensure full teardown (pause/resume, stop).
- `plugins/withIOSAudioSession.js:1-21` — remove AppDelegate patching; retain only Info.plist background audio/microphone strings to avoid session tug-of-war.
- `App.js:49-74` — centralize audio session setup at bootstrap via `Audio.setAudioModeAsync`, aligning playback defaults with the new detector path.
- `src/audio/audioEngine.ts` & `src/audio/PuttingAudioEngine.ts` — restore `AudioMode` export plus helper methods expected by archived schedulers; adapt to new expo-audio typings; provide `gainDb` compatibility.
- `src/audio/Metronome.ts` — switch back to `expo-av` `Audio` import for the metronome utility.
- `src/audio/enableAEC.ts` — type the WebRTC stream using `@stream-io/react-native-webrtc` definitions so `tsc --noEmit` passes.
- `types/external.d.ts` — stub `@picovoice/react-native-voice-processor` typings used by DSP code.

## Rationale
- **Stream fallback:** Using the existing expo-audio-stream module keeps audio capture entirely inside the custom native module we ship, eliminating `AVAudioEngine` tap creation during Listen Mode and matching the production acoustic detector’s path.
- **Session simplification:** Removing the AppDelegate hook prevents double configuration of `AVAudioSession`, which was a contributing factor to intermittent tap failures on device.
- **Compatibility shims:** Restoring `AudioMode` exports and `gainDb` handling in `audioEngine.ts` brings TypeScript into alignment with backup scheduler files so the project compiles cleanly.
- **Type hygiene:** The metronome and AEC helpers now reflect the actual modules in use, ensuring local builds (`npx tsc --noEmit`) succeed.

## Test Plan
1. **Type Check**
   - `npx tsc --noEmit` (already confirmed locally after above changes).

2. **Expo Go / Dev Client**
   - Start tunnel: `npx expo start --tunnel` (or `--dev-client` if using a custom client).
   - Connect an iOS 18 device, toggle Listen Mode repeatedly; verify no crash and audio spikes log as expected.

3. **EAS Build**
   - `npx eas-cli build --platform ios --profile preview` to generate a distribution build for on-device validation.
   - Install via Expo dashboard link; confirm Listen Mode start/stop/resume works and metronome playback unaffected.

4. **Regression**
   - Exercise metronome, tones, and wind modes for playback quality.
   - Run acoustic detector path on custom client to ensure shared expo-audio-stream module still functions.

5. **Logging Review**
   - Inspect device logs (Console.app / Xcode) to ensure no `InstallTapOnNode` exceptions or new audio-session warnings.

