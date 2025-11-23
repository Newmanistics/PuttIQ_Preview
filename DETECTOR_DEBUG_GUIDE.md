# iOS Detector Crash Diagnostic Guide

## Overview
This guide helps diagnose crashes when activating the Listen Mode detector on iOS.

## Enhanced Logging Added
The codebase now includes comprehensive step-by-step logging in [VideoSyncDetectorV2.js](services/dsp/VideoSyncDetectorV2.js:605) that tracks:

1. **Step 1**: Beat timing calculation
2. **Step 2**: Microphone permission request
3. **Step 3**: Audio mode configuration
4. **Step 4**: ExpoPlayAudioStream module check
5. **Step 5**: Audio stream initialization
6. **Step 6**: Detector state initialization
7. **Step 7**: Video event listener setup
8. **Step 8**: Position monitoring start

Each step logs:
- 🚀 When starting
- ✅ When completing successfully
- ❌ Any errors with full stack trace

## Diagnostic Methods (Mac Only)

### Method 1: Xcode Debug Console (RECOMMENDED)

This is the **best method** for diagnosing native crashes.

#### Steps:
```bash
# Open the iOS project in Xcode
npx expo run:ios
```

Or manually:
1. Navigate to `ios/` folder
2. Open `PuttIQ2.xcworkspace` in Xcode
3. Select your target device or simulator
4. Click Run (⌘+R) or the Play button
5. Open the **Debug Console** (View → Debug Area → Show Debug Area)

#### What to Look For:
- **Native crash logs** with exact line numbers
- **Audio session errors** (look for "AVAudioSession" messages)
- **Memory issues** (EXC_BAD_ACCESS, SIGSEGV)
- **Threading issues** (crashes on background threads)
- **ExpoPlayAudioStream errors** (native module not linked)

#### Common Error Patterns:

**Audio Session Conflict:**
```
[AVAudioSession] Error setting category: -50
[AudioSession] Unable to activate audio session
```
→ Indicates conflict between video playback and recording audio modes

**Native Module Not Linked:**
```
RCTBridge required dispatch_sync to load expo-audio-stream
Unable to find module for ExpoPlayAudioStream
```
→ Indicates @cjblack/expo-audio-stream isn't properly linked

**Memory Crash:**
```
EXC_BAD_ACCESS (code=1, address=0x0)
```
→ Indicates null pointer dereference or memory corruption

---

### Method 2: Physical Device Console Logs

For testing on a real iPhone/iPad:

```bash
# Install libimobiledevice (if not already installed)
brew install libimobiledevice

# Stream device logs in real-time
idevicesyslog | grep -i "PuttIQ\|audio\|crash\|error"

# Or filter for specific patterns
idevicesyslog | grep -E "(ExpoPlayAudioStream|AVAudioSession|VideoSyncDetector)"
```

#### Benefits:
- See system-level audio errors
- Track audio session interruptions
- Monitor actual device behavior (not simulator)

---

### Method 3: Enhanced App Logging

The app now includes detailed logging at each step. Watch for:

#### Startup Sequence:
```
🔧 Loading @cjblack/expo-audio-stream module...
✅ Audio stream module loaded successfully: true
```

#### Detector Initialization:
```
🚀 [START] Step 1: Beat timing calculation...
✅ [START] Step 1 complete
🚀 [START] Step 2: Requesting microphone permissions...
✅ [START] Step 2 complete - Permission granted: true
🚀 [START] Step 3: Configuring audio mode...
📱 Platform: ios
🎵 Applying audio settings: {...}
✅ [START] Step 3 complete - Audio mode configured successfully
🚀 [START] Step 4: Checking for ExpoPlayAudioStream module...
ExpoPlayAudioStream available: true
ExpoPlayAudioStream.startRecording available: true
🚀 [START] Step 5: Using ExpoPlayAudioStream (native audio stream)
📝 Stream config: {sampleRate: 44100, channels: 1, ...}
🛑 Stopping any existing recording...
✅ Existing recording stopped (if any)
🎤 Starting ExpoPlayAudioStream recording...
✅ [START] Step 5 complete - ExpoPlayAudioStream started
🚀 [START] Step 6: Initializing detector state...
✅ [START] Step 6 complete - Detector state initialized
🚀 [START] Step 7: Setting up video event listener...
📹 Video player status: {exists: true, duration: 3.428, ...}
✅ [START] Step 7 complete - Video event listener attached
🚀 [START] Step 8: Starting position monitoring...
✅ [START] Step 8 complete - Position monitoring started
✅✅✅ VideoSyncDetectorV2 FULLY STARTED and recording!
```

#### If It Crashes:
The last step logged before the crash indicates where the failure occurred:

- **Crash after Step 2**: Microphone permission issue
- **Crash after Step 3**: Audio mode configuration conflict
- **Crash after Step 5**: ExpoPlayAudioStream native module problem
- **Crash after Step 7**: Video player event listener issue

---

### Method 4: Expo Dev Client Logs

If running via Expo Dev Client:

```bash
# Start with clear cache
npx expo start --clear

# Watch for errors in Metro console
# Also check device logs in Expo Go / Dev Client app
```

---

## Common Issues & Solutions

### Issue 1: Audio Session Conflict
**Symptoms:**
- Crash after Step 3 (audio mode config)
- Video audio stops working
- Error: "AVAudioSession setCategory failed"

**Cause:** iOS can't run video playback audio AND microphone recording simultaneously with current settings.

**Solution:**
```javascript
// In VideoSyncDetectorV2.js, try alternative audio mode:
await Audio.setAudioModeAsync({
  allowsRecordingIOS: true,
  playsInSilentModeIOS: true,
  staysActiveInBackground: false,
  interruptionModeIOS: InterruptionModeIOS.DoNotMix, // Changed from MixWithOthers
  shouldDuckAndroid: false,
});
```

---

### Issue 2: ExpoPlayAudioStream Not Linked
**Symptoms:**
- Crash at Step 5 (starting audio stream)
- Log shows: `ExpoPlayAudioStream available: false`
- Error: "Unable to find module"

**Cause:** Native module not properly linked in EAS build.

**Solution:**
1. Check `app.json` or `app.config.js` includes the plugin:
```json
{
  "expo": {
    "plugins": [
      "@cjblack/expo-audio-stream"
    ]
  }
}
```

2. Rebuild with EAS:
```bash
eas build --platform ios --profile development
```

---

### Issue 3: Video Player Reference Lost
**Symptoms:**
- Crash at Step 7 (video event listener)
- Log shows: `Video player status: {exists: false}`

**Cause:** Video player was unmounted or not ready when detector started.

**Solution:** Ensure video is loaded before starting detector:
```javascript
// In HomeScreen.js, check video is ready:
if (!videoPlayer || !videoPlayer.duration) {
  Alert.alert('Error', 'Video not ready. Please wait and try again.');
  return;
}
```

---

### Issue 4: Memory Leak / Crash on Cleanup
**Symptoms:**
- Crash when stopping detector
- EXC_BAD_ACCESS error
- Multiple crashes after repeated start/stop

**Cause:** Resources not properly released.

**Solution:** Check cleanup in `stop()` method, ensure:
- Audio stream stopped before releasing
- Video listeners removed
- Intervals cleared

---

## Debugging Checklist

Before reporting crash, collect:

- [ ] **Last log message** before crash (which step?)
- [ ] **Xcode console output** (full crash log)
- [ ] **Device model** (iPhone X, iPhone 15, etc.)
- [ ] **iOS version** (16.0, 17.4, etc.)
- [ ] **ExpoPlayAudioStream availability** (true/false from logs)
- [ ] **Video player state** (duration, isPlaying from Step 7 logs)
- [ ] **Microphone permission status** (from Step 2)
- [ ] **Reproducibility** (happens every time, or intermittent?)

---

## Quick Test Script

Run this in Xcode console or device logs:

```bash
# Monitor for crashes
idevicesyslog | grep -E "(CRASHED|FATAL|ERROR|AudioStream|VideoSync)"

# Filter for detailed detector logs
idevicesyslog | grep -E "\[(START|STOP)\] Step"

# Watch audio session changes
idevicesyslog | grep -i "AVAudioSession"
```

---

## Next Steps

1. **Run from Xcode** → Get native crash log
2. **Check last logged step** → Identify failure point
3. **Review error pattern** → Match to common issues above
4. **Apply solution** → Test fix
5. **Report issue** if not resolved (include all logs)

---

## Additional Resources

- [Expo Audio Documentation](https://docs.expo.dev/versions/latest/sdk/audio/)
- [@cjblack/expo-audio-stream GitHub](https://github.com/cjblack/expo-audio-stream)
- [Apple AVAudioSession Guide](https://developer.apple.com/documentation/avfaudio/avaudiosession)
- [iOS Audio Session Programming Guide](https://developer.apple.com/library/archive/documentation/Audio/Conceptual/AudioSessionProgrammingGuide/Introduction/Introduction.html)
