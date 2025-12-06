# TestFlight Debugging Guide

## Problem
Build 23 still crashes when activating detector mode, despite sample rate fix (48000 Hz) working locally.

## Enhanced Logging Added
- Platform detection logging
- Sample rate verification
- Detailed error capture for ExpoPlayAudioStream.startRecording()
- Stream configuration logging

## How to Get Logs from TestFlight Build

### Method 1: Console.app (Mac Required)
1. Connect your iPhone to your Mac via cable
2. Open **Console.app** on your Mac (Applications → Utilities → Console)
3. Select your iPhone from the devices list in the left sidebar
4. In the search bar, filter by: `PuttIQ` or `expo`
5. Launch the TestFlight app on your iPhone
6. Activate detector mode to trigger the crash
7. Watch the console for detailed error messages

**Look for these log lines:**
- `🚀 [START] Step 4: Checking for ExpoPlayAudioStream module...`
- `Platform.OS: ios`
- `🔊 iOS Sample Rate: 48000`
- `❌ CRITICAL: ExpoPlayAudioStream.startRecording() failed!`

### Method 2: Device Analytics (No Mac Needed)
1. On your iPhone, go to **Settings → Privacy & Security → Analytics & Improvements → Analytics Data**
2. Look for crash reports named like `PuttIQ-2025-XX-XX-XXXXXX.ips`
3. Tap the report and use the share button to export
4. Send to a computer for analysis

### Method 3: TestFlight Crash Reporting
1. Open **TestFlight** app on iPhone
2. Tap on **PuttIQ**
3. Scroll down and tap **Previous Builds**
4. Select the crashed build
5. Tap **Send Feedback**
6. Include crash logs in the feedback

## What to Look For

### If Crash Shows Sample Rate Error:
- The fix didn't apply correctly
- Check if build actually has the updated code

### If Crash Shows "ExpoPlayAudioStream not available":
- Native module didn't compile correctly
- May need to rebuild with cleared cache

### If Crash Shows Permission Error:
- Microphone permission not granted
- Check Info.plist for NSMicrophoneUsageDescription

### If Crash Shows Different Error:
- Share the exact error message
- We'll investigate further based on logs

## Next Steps

1. **Build 24** with enhanced logging
2. Submit to TestFlight
3. Install on device
4. Connect to Console.app
5. Activate detector mode and watch logs
6. Share the complete console output

## Key Questions to Answer

- Does `ExpoPlayAudioStream` exist in production build?
- What is the exact error message when startRecording() fails?
- Is the sample rate actually 48000 Hz?
- Does the crash happen before or after startRecording() is called?
