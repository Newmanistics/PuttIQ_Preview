Server console:

iOS Bundled 16981ms index.js (817 modules)
[CoreFoundation] AddInstanceForFactory: No factory registered for id <CFUUID
0x6000002cd5e0> F8BB1C28-BAE8-11D6-9C31-00039315CD46
 WARN  [expo-av]: Expo AV has been deprecated and will be removed in SDK 54. Use the `expo-audio` and `expo-video` packages to replace the required functionality.
 LOG  🔧 Loading @cjblack/expo-audio-stream module...
 LOG  ✅ Audio stream module loaded successfully: true
 LOG  Firebase offline, using cached/default data
 LOG  Microphone permission granted
 LOG  Audio mode configured for foreground playback
 LOG  Initializing VideoSyncDetector...
 LOG  VideoSyncDetector initialized successfully
 LOG  📊 Loaded BPM preferences from cache: {"beat": 76, "detect": 76, "tone": 76, "wind": 76}
[AudioToolbox]        LoudnessManager.mm:1755  ReadPListFile: unable to open
stream for LoudnessManager plist
[AudioToolbox]        LoudnessManager.mm:1261  GetHardwarePlatformKey: cannot get
acoustic ID
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12860 at <>:15260
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
 LOG  Requesting microphone permission...
 LOG  Microphone permission result: {"granted": true, "status": "granted"}
 LOG  Starting VideoSyncDetector...
 LOG  🎯 VideoSyncDetectorV2 starting... {"beat3": "50%", "beat4": "75%", "beatsInVideo": 4, "bpm": 76, "debugMode": "OFF", "listenDelay": "460.2631578947368ms", "listenWindow": "64.6%-100% (460.2631578947368ms after Beat 3)", "targetPosition": "87.5%"}
 LOG  🚀 [START] Step 2: Requesting microphone permissions...
 LOG  ✅ [START] Step 2 complete - Permission granted: true
 LOG  🚀 [START] Step 3: Configuring audio mode...
 LOG  📱 Platform: ios
 LOG  🎵 Applying audio settings: {"allowsRecordingIOS": true, "interruptionModeIOS": "MixWithOthers", "playsInSilentModeIOS": true, "staysActiveInBackground": false}
 LOG  ✅ [START] Step 3 complete - Audio mode configured successfully
 LOG  🚀 [START] Step 4: Checking for ExpoPlayAudioStream module...
 LOG  ExpoPlayAudioStream available: true
 LOG  ExpoPlayAudioStream.startRecording available: true
 LOG  🚀 [START] Step 5: Using ExpoPlayAudioStream (native audio stream)
 LOG  📝 Stream config: {"bitsPerChannel": 16, "channels": 1, "interval": 100, "onAudioStream": [Function onAudioStream], "sampleRate": 44100}
 LOG  🛑 Stopping any existing recording...
 ERROR  [Error: Recording is not active]
 LOG  ℹ️ No existing recording to stop: Failed to stop recording: Error: Recording is not active
 LOG  🎤 Starting ExpoPlayAudioStream recording...
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[React] { [Error: Recording is not active] code: 'ERROR' }
[libEmbeddedSystemAUs.dylib]            AURemoteIO.cpp:1135  failed: -10851
(enable 1, outf< 2 ch,      0 Hz, Int16, interleaved> inf< 2 ch,      0 Hz,
Int16, interleaved>)
[libEmbeddedSystemAUs.dylib]            AURemoteIO.cpp:1135  failed: -10851
(enable 1, outf< 2 ch,      0 Hz, Int16, interleaved> inf< 2 ch,      0 Hz,
Int16, interleaved>)
[AudioToolbox] iOSSimulatorAudioDevice-27304-0: Abandoning I/O cycle because
reconfig pending
[CoreAudio]             HALPlugIn.cpp:540    HALPlugIn::StopIOProc: got an error
from the plug-in routine, Error: 560227702 (!dev)
[CoreAudio]             HALSystem.cpp:2229   AudioObjectPropertiesChanged: no
such object
[CoreAudio] AudioHardware-mac-imp.cpp:3154   AudioDeviceGetCurrentTime: no device
with given ID
[CoreAudio] AudioHardware-mac-imp.cpp:3154   AudioDeviceGetCurrentTime: no device
with given ID
[CoreMedia] <<<< FADC >>>> signalled err=560227702 at <>:995
[MediaToolbox] <<<< FigFilePlayer >>>> signalled err=-12864 at <>:10026
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[AudioToolbox]        LoudnessManager.mm:1215  IsHardwareSupported: no plist
loaded, returning false
[CoreAudio] AudioHardware-mac-imp.cpp:3154   AudioDeviceGetCurrentTime: no device
with given ID
[CoreMedia] <<<< FADC >>>> signalled err=560227702 at <>:995
[AVFAudio]            AVAEUtility.mm:176   Format mismatch: input hw
<AVAudioFormat 0x600002194370:  1 ch,  48000 Hz, Float32>, client format
<AVAudioFormat 0x60000225cb40:  1 ch,  44100 Hz, Int16>

Crash Log

-------------------------------------
Translated Report (Full Report Below)
-------------------------------------

Incident Identifier: 71A91414-CA64-4074-9D49-0AFED47EE56C
CrashReporter Key:   D8B8D5E6-2015-FB1B-7FE5-362699D6F7BE
Hardware Model:      MacBookPro15,1
Process:             PuttIQ [27304]
Path:                /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/PuttIQ
Identifier:          com.puttiq.app
Version:             1.0.2 (5)
Code Type:           X86-64 (Native)
Role:                Foreground
Parent Process:      launchd_sim [10925]
Coalition:           com.apple.CoreSimulator.SimDevice.A077A522-64C5-482C-A9A1-68A6D5846859 [4515]
Responsible Process: SimulatorTrampoline [852]

Date/Time:           2025-11-23 18:49:55.2450 +0000
Launch Time:         2025-11-23 18:49:17.3635 +0000
OS Version:          macOS 15.7.2 (24G325)
Release Type:        User
Report Version:      104

Exception Type:  EXC_BAD_ACCESS (SIGSEGV)
Exception Subtype: UNKNOWN_0xD at 0x0000000000000000
Exception Codes: 0x000000000000000d, 0x0000000000000000
VM Region Info: 0 is not in any region.  Bytes before following region: 4398022656
      REGION TYPE                    START - END         [ VSIZE] PRT/MAX SHRMOD  REGION DETAIL
      UNUSED SPACE AT START
--->  
      __TEXT                      106248000-10624d000    [   20K] r-x/r-x SM=COW  /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/PuttIQ
Termination Reason: SIGNAL 11 Segmentation fault: 11
Terminating Process: exc handler [27304]

Triggered by Thread:  17

Thread 0::  Dispatch queue: com.apple.main-thread
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreFoundation                	    0x7ff802912b70 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff802911d11 __CFRunLoopRun + 1354
6   CoreFoundation                	    0x7ff80290caa7 _CFRunLoopRunSpecificWithOptions + 496
7   GraphicsServices              	    0x7ff816779918 GSEventRunModal + 94
8   UIKitCore                     	    0x7ff80929b5d2 -[UIApplication _run] + 842
9   UIKitCore                     	    0x7ff8092a05b1 UIApplicationMain + 123
10  PuttIQ.debug.dylib            	       0x108c5bc4f __debug_main_executable_dylib_entry_point + 63 (AppDelegate.swift:6)
11  ???                           	       0x1063973dc ???
12  dyld                          	       0x10eea9530 start + 3056

Thread 1:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 2:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 3:: com.apple.uikit.eventfetch-thread
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreFoundation                	    0x7ff802912b70 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff802911d11 __CFRunLoopRun + 1354
6   CoreFoundation                	    0x7ff80290caa7 _CFRunLoopRunSpecificWithOptions + 496
7   Foundation                    	    0x7ff8036870db -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 213
8   Foundation                    	    0x7ff80368734e -[NSRunLoop(NSRunLoop) runUntilDate:] + 72
9   UIKitCore                     	    0x7ff808ef221a -[UIEventFetcher threadMain] + 506
10  Foundation                    	    0x7ff8036b2081 __NSThread__start__ + 1014
11  libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
12  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 4:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 5:: com.facebook.SocketRocket.NetworkThread
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreFoundation                	    0x7ff802912b70 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff802911d11 __CFRunLoopRun + 1354
6   CoreFoundation                	    0x7ff80290caa7 _CFRunLoopRunSpecificWithOptions + 496
7   Foundation                    	    0x7ff8036870db -[NSRunLoop(NSRunLoop) runMode:beforeDate:] + 213
8   ReactNativeDependencies       	       0x106817c3b -[SRRunLoopThread main] + 267
9   Foundation                    	    0x7ff8036b2081 __NSThread__start__ + 1014
10  libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
11  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 6:: com.apple.NSURLConnectionLoader
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreFoundation                	    0x7ff802912b70 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff802911d11 __CFRunLoopRun + 1354
6   CoreFoundation                	    0x7ff80290caa7 _CFRunLoopRunSpecificWithOptions + 496
7   CFNetwork                     	    0x7ff8078b5682 +[__CFN_CoreSchedulingSetRunnable _run:] + 447
8   Foundation                    	    0x7ff8036b2081 __NSThread__start__ + 1014
9   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
10  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 7:: com.apple.CFSocket.private
0   libsystem_kernel.dylib        	       0x1062d89fe __select + 10
1   CoreFoundation                	    0x7ff8029212d8 __CFSocketManager + 670
2   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
3   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 8:: com.facebook.react.runtime.JavaScript
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreFoundation                	    0x7ff802912b70 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff802911d11 __CFRunLoopRun + 1354
6   CoreFoundation                	    0x7ff80290caa7 _CFRunLoopRunSpecificWithOptions + 496
7   React                         	       0x10fa558af +[RCTJSThreadManager runRunLoop] + 399
8   Foundation                    	    0x7ff8036b2081 __NSThread__start__ + 1014
9   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
10  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 9:: hades
0   libsystem_kernel.dylib        	       0x1062d26f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	       0x10625e2ae _pthread_cond_wait + 988
2   libc++.1.dylib                	    0x7ff8027f2e4a std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&) + 18
3   hermes                        	       0x1073d5938 hermes::vm::HadesGC::Executor::worker() + 136
4   hermes                        	       0x1073d587a void* std::__1::__thread_proxy[abi:nn180100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*) + 42
5   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
6   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 10:: com.apple.CFNetwork.CustomProtocols
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreFoundation                	    0x7ff802912b70 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff802911d11 __CFRunLoopRun + 1354
6   CoreFoundation                	    0x7ff80290caa7 _CFRunLoopRunSpecificWithOptions + 496
7   CFNetwork                     	    0x7ff8078b5682 +[__CFN_CoreSchedulingSetRunnable _run:] + 447
8   Foundation                    	    0x7ff8036b2081 __NSThread__start__ + 1014
9   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
10  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 11:: com.apple.CFStream.LegacyThread
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreFoundation                	    0x7ff802912b70 __CFRunLoopServiceMachPort + 145
5   CoreFoundation                	    0x7ff802911d11 __CFRunLoopRun + 1354
6   CoreFoundation                	    0x7ff80290caa7 _CFRunLoopRunSpecificWithOptions + 496
7   CoreFoundation                	    0x7ff802930fac _legacyStreamRunLoop_workThread + 251
8   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
9   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 12:: caulk.messenger.shared:17
0   libsystem_kernel.dylib        	       0x1062cfac6 semaphore_wait_trap + 10
1   caulk                         	    0x7ffa015f551c caulk::semaphore::timed_wait(double) + 158
2   caulk                         	    0x7ffa015fc666 caulk::concurrent::details::worker_thread::run() + 30
3   caulk                         	    0x7ffa015fc6ba void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*) + 41
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 13:: caulk.messenger.shared:high
0   libsystem_kernel.dylib        	       0x1062cfac6 semaphore_wait_trap + 10
1   caulk                         	    0x7ffa015f551c caulk::semaphore::timed_wait(double) + 158
2   caulk                         	    0x7ffa015fc666 caulk::concurrent::details::worker_thread::run() + 30
3   caulk                         	    0x7ffa015fc6ba void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*) + 41
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 14:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 15:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 16:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 17 Crashed::  Dispatch queue: expo.modules.AsyncFunctionQueue
0   libunwind.dylib               	    0x7ffa1bb0afbf _Unwind_RaiseException + 399
1   libc++abi.dylib               	    0x7ff8027c2324 __cxa_throw + 61
2   libobjc.A.dylib               	    0x7ff80253b0d6 objc_exception_throw + 321
3   CoreFoundation                	    0x7ff8029b9f67 +[NSException raise:format:] + 226
4   AVFAudio                      	    0x7ffa1cf35a2b AVAudioEngineImpl::InstallTapOnNode(AVAudioNode*, unsigned long, unsigned int, AVAudioFormat*, void (AVAudioPCMBuffer*, AVAudioTime*) block_pointer) + 1397
5   AVFAudio                      	    0x7ffa1cf137e4 -[AVAudioNode installTapOnBus:bufferSize:format:block:] + 596
6   PuttIQ.debug.dylib            	       0x10901fcb1 AudioSessionManager.startRecording(settings:intervalMilliseconds:) + 4689 (AudioSessionManager.swift:417)
7   PuttIQ.debug.dylib            	       0x109033d1c closure #3 in ExpoPlayAudioStreamModule.definition() + 1916 (ExpoPlayAudioStreamModule.swift:93)
8   PuttIQ.debug.dylib            	       0x10903441f partial apply for closure #3 in ExpoPlayAudioStreamModule.definition() + 15
9   PuttIQ.debug.dylib            	       0x108d24887 thunk for @escaping @callee_guaranteed (@in_guaranteed B, @pack_guaranteed @indirect Pack{repeat C}) -> (@out A, @error @owned Error) + 727
10  PuttIQ.debug.dylib            	       0x108d24973 partial apply for thunk for @escaping @callee_guaranteed (@in_guaranteed B, @pack_guaranteed @indirect Pack{repeat C}) -> (@out A, @error @owned Error) + 83
11  PuttIQ.debug.dylib            	       0x108d21827 closure #3 in AsyncFunctionDefinition.call(by:withArguments:appContext:callback:) + 1063 (AsyncFunctionDefinition.swift:105)
12  PuttIQ.debug.dylib            	       0x108d21e7a partial apply for closure #3 in AsyncFunctionDefinition.call(by:withArguments:appContext:callback:) + 58
13  PuttIQ.debug.dylib            	       0x108d227a2 closure #1 in AsyncFunctionDefinition.dispatchOnQueueUntilViewRegisters(appContext:arguments:queue:retryCount:_:) + 1554 (AsyncFunctionDefinition.swift:150)
14  PuttIQ.debug.dylib            	       0x108d22857 partial apply for closure #1 in AsyncFunctionDefinition.dispatchOnQueueUntilViewRegisters(appContext:arguments:queue:retryCount:_:) + 55
15  PuttIQ.debug.dylib            	       0x108c7f748 thunk for @escaping @callee_guaranteed @Sendable () -> () + 40
16  libdispatch.dylib             	    0x7ff80266a644 _dispatch_call_block_and_release + 12
17  libdispatch.dylib             	    0x7ff8026847ce _dispatch_client_callout + 6
18  libdispatch.dylib             	    0x7ff802672fb7 _dispatch_lane_serial_drain + 1170
19  libdispatch.dylib             	    0x7ff802673aa6 _dispatch_lane_invoke + 413
20  libdispatch.dylib             	    0x7ff80267eee6 _dispatch_root_queue_drain_deferred_wlh + 290
21  libdispatch.dylib             	    0x7ff80267e606 _dispatch_workloop_worker_thread + 814
22  libsystem_pthread.dylib       	       0x10625a861 _pthread_wqthread + 298
23  libsystem_pthread.dylib       	       0x106259843 start_wqthread + 15

Thread 18:: com.apple.UIKit.inProcessAnimationManager
0   libsystem_kernel.dylib        	       0x1062cfac6 semaphore_wait_trap + 10
1   libdispatch.dylib             	    0x7ff80266bb82 _dispatch_sema4_wait + 16
2   libdispatch.dylib             	    0x7ff80266bff0 _dispatch_semaphore_wait_slow + 98
3   UIKitCore                     	    0x7ff808113aaf 0x7ff807baa000 + 5675695
4   UIKitCore                     	    0x7ff808118855 0x7ff807baa000 + 5695573
5   UIKitCore                     	    0x7ff807d39a09 0x7ff807baa000 + 1636873
6   Foundation                    	    0x7ff8036b2081 __NSThread__start__ + 1014
7   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
8   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 19:: com.apple.coremedia.sharedRootQueue.47
0   libsystem_kernel.dylib        	       0x1062cfade semaphore_timedwait_trap + 10
1   libdispatch.dylib             	    0x7ff80269db8b _dispatch_sema4_timedwait + 52
2   libdispatch.dylib             	    0x7ff80266bfc8 _dispatch_semaphore_wait_slow + 58
3   libdispatch.dylib             	    0x7ff80267d1db _dispatch_worker_thread + 507
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 20:: com.apple.coremedia.sharedRootQueue.47
0   libsystem_kernel.dylib        	       0x1062cfade semaphore_timedwait_trap + 10
1   libdispatch.dylib             	    0x7ff80269db8b _dispatch_sema4_timedwait + 52
2   libdispatch.dylib             	    0x7ff80266bfc8 _dispatch_semaphore_wait_slow + 58
3   libdispatch.dylib             	    0x7ff80267d1db _dispatch_worker_thread + 507
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 21:: com.apple.coremedia.rootQueue.fP-47.mP-47
0   libsystem_kernel.dylib        	       0x1062cfade semaphore_timedwait_trap + 10
1   libdispatch.dylib             	    0x7ff80269db8b _dispatch_sema4_timedwait + 52
2   libdispatch.dylib             	    0x7ff80266bfc8 _dispatch_semaphore_wait_slow + 58
3   libdispatch.dylib             	    0x7ff80267d1db _dispatch_worker_thread + 507
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 22:: com.apple.coremedia.rootQueue.fP-47.mP-47
0   libsystem_kernel.dylib        	       0x1062cfade semaphore_timedwait_trap + 10
1   libdispatch.dylib             	    0x7ff80269db8b _dispatch_sema4_timedwait + 52
2   libdispatch.dylib             	    0x7ff80266bfc8 _dispatch_semaphore_wait_slow + 58
3   libdispatch.dylib             	    0x7ff80267d1db _dispatch_worker_thread + 507
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 23:: com.apple.coremedia.sharedRootQueue.47 Dispatch queue: */TM
0   libsystem_kernel.dylib        	       0x1062d1e72 __psynch_mutexwait + 10
1   libsystem_pthread.dylib       	       0x10625b758 _pthread_mutex_firstfit_lock_wait + 78
2   libsystem_pthread.dylib       	       0x1062595a1 _pthread_mutex_firstfit_lock_slow + 217
3   MediaToolbox                  	    0x7ff816111bbb figAudioQueueRenderPipelineSetProperty + 40
4   MediaToolbox                  	    0x7ff816465adf fp_setPropertyOnAllAudioRenderPipelines + 94
5   MediaToolbox                  	    0x7ff816086631 playerfig_applySoftwareVolume + 1141
6   MediaToolbox                  	    0x7ff8160954d4 playerfig_setBossRateWithFade + 908
7   MediaToolbox                  	    0x7ff816097623 playerfig_setRateGuts + 1456
8   MediaToolbox                  	    0x7ff816096e4c playerfig_setRateForReason + 1323
9   MediaToolbox                  	    0x7ff816087932 playerfig_pauseForInternalReason + 172
10  MediaToolbox                  	    0x7ff81608ceb4 itemfig_ReachedEndGuts + 801
11  MediaToolbox                  	    0x7ff81608cb5c itemfig_ReachedEnd_ReachedEndGuts_f + 38
12  libdispatch.dylib             	    0x7ff8026847ce _dispatch_client_callout + 6
13  libdispatch.dylib             	    0x7ff802672fb7 _dispatch_lane_serial_drain + 1170
14  libdispatch.dylib             	    0x7ff802673aa6 _dispatch_lane_invoke + 413
15  libdispatch.dylib             	    0x7ff80267d3f3 _dispatch_root_queue_drain + 352
16  libdispatch.dylib             	    0x7ff80267d12b _dispatch_worker_thread + 331
17  libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
18  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 24:: com.apple.coremedia.sharedRootQueue.47 Dispatch queue: AQServer
0   libsystem_kernel.dylib        	       0x1062d25c2 __semwait_signal + 10
1   libsystem_c.dylib             	    0x7ff80265d03a nanosleep + 209
2   libsystem_c.dylib             	    0x7ff80265cf28 usleep + 53
3   AudioToolbox                  	    0x7ff818b7c143 AudioQueueObject::BeginPause(long long&, bool) + 289
4   AudioToolbox                  	    0x7ff818b95a09 AudioQueueXPC_Server::Pause(unsigned int) + 161
5   AudioToolbox                  	    0x7ff818be0bb7 invocation function for block in AudioQueueXPC_Bridge::Pause(unsigned int) + 26
6   libdispatch.dylib             	    0x7ff8026847ce _dispatch_client_callout + 6
7   libdispatch.dylib             	    0x7ff80267ac79 _dispatch_sync_invoke_and_complete_recurse + 99
8   AudioToolbox                  	    0x7ff818bdc8ef AudioQueueXPC_Bridge::Pause(unsigned int) + 145
9   AudioToolbox                  	    0x7ff818b219f7 AQ::API::V2Impl::AudioQueuePause(OpaqueAudioQueue*) + 375
10  MediaToolbox                  	    0x7ff816534c3d FigAudioQueueTimingShimPause + 326
11  MediaToolbox                  	    0x7ff81600bd4b FigAudioQueuePause + 355
12  MediaToolbox                  	    0x7ff8161155c3 faqrp_stopTimebaseAndAudioQueue + 1081
13  MediaToolbox                  	    0x7ff8164a2497 figAudioQueueRenderPipelineSetRateAndAnchorTime + 1057
14  MediaToolbox                  	    0x7ff81610d1ae bossSetPossiblyOutsourcedTimebaseRate + 713
15  MediaToolbox                  	    0x7ff81610389b bossStopTimebaseAndAudioContext + 945
16  MediaToolbox                  	    0x7ff8160fc1d0 figPlaybackBossSetRateToZero + 314
17  MediaToolbox                  	    0x7ff81610b430 figPlaybackBossReachedEndWithContext + 461
18  libdispatch.dylib             	    0x7ff8026847ce _dispatch_client_callout + 6
19  libdispatch.dylib             	    0x7ff80266eadb _dispatch_continuation_pop + 859
20  libdispatch.dylib             	    0x7ff802681c5a _dispatch_source_invoke + 2178
21  libdispatch.dylib             	    0x7ff802672c88 _dispatch_lane_serial_drain + 355
22  libdispatch.dylib             	    0x7ff802673aa6 _dispatch_lane_invoke + 413
23  libdispatch.dylib             	    0x7ff80267d3f3 _dispatch_root_queue_drain + 352
24  libdispatch.dylib             	    0x7ff80267d12b _dispatch_worker_thread + 331
25  libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
26  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 25:: caulk::deferred_logger
0   libsystem_kernel.dylib        	       0x1062cfac6 semaphore_wait_trap + 10
1   caulk                         	    0x7ffa015f551c caulk::semaphore::timed_wait(double) + 158
2   caulk                         	    0x7ffa015fc666 caulk::concurrent::details::worker_thread::run() + 30
3   caulk                         	    0x7ffa015fc6ba void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*) + 41
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 26:: com.apple.coremedia.sharedRootQueue.59 Dispatch queue: */TM.03
0   libsystem_kernel.dylib        	       0x1062d1e72 __psynch_mutexwait + 10
1   libsystem_pthread.dylib       	       0x10625b758 _pthread_mutex_firstfit_lock_wait + 78
2   libsystem_pthread.dylib       	       0x1062595a1 _pthread_mutex_firstfit_lock_slow + 217
3   MediaToolbox                  	    0x7ff8163e1b11 subaq_performStartupSync + 2831
4   MediaToolbox                  	    0x7ff8163e0fef subaq_startListenerInternal + 589
5   libdispatch.dylib             	    0x7ff8026847ce _dispatch_client_callout + 6
6   libdispatch.dylib             	    0x7ff802672fb7 _dispatch_lane_serial_drain + 1170
7   libdispatch.dylib             	    0x7ff802673aa6 _dispatch_lane_invoke + 413
8   libdispatch.dylib             	    0x7ff80267d3f3 _dispatch_root_queue_drain + 352
9   libdispatch.dylib             	    0x7ff80267d12b _dispatch_worker_thread + 331
10  libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
11  libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 27:: com.apple.coremedia.rootQueue.fP-45.mP-47
0   libsystem_kernel.dylib        	       0x1062cfade semaphore_timedwait_trap + 10
1   libdispatch.dylib             	    0x7ff80269db8b _dispatch_sema4_timedwait + 52
2   libdispatch.dylib             	    0x7ff80266bfc8 _dispatch_semaphore_wait_slow + 58
3   libdispatch.dylib             	    0x7ff80267d1db _dispatch_worker_thread + 507
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 28:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 29:: com.apple.coremedia.audioqueue.source
0   libsystem_kernel.dylib        	       0x1062d26f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	       0x10625e2ae _pthread_cond_wait + 988
2   CoreMedia                     	    0x7ff80fd62433 WaitOnCondition + 49
3   CoreMedia                     	    0x7ff80fe02007 FigSemaphoreWaitRelative + 151
4   MediaToolbox                  	    0x7ff81600eb71 faq_enqueueSourceDataThread + 28
5   CoreMedia                     	    0x7ff80fd62f1e figThreadMain + 237
6   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
7   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 30:: com.apple.coremedia.audiomentor
0   libsystem_kernel.dylib        	       0x1062d26f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	       0x10625e2ae _pthread_cond_wait + 988
2   CoreMedia                     	    0x7ff80fd62433 WaitOnCondition + 49
3   CoreMedia                     	    0x7ff80fe02007 FigSemaphoreWaitRelative + 151
4   MediaToolbox                  	    0x7ff8160bf685 audioMentorThread + 4612
5   CoreMedia                     	    0x7ff80fd62f1e figThreadMain + 237
6   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
7   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 31:: com.apple.audio.toolbox.AUScheduledParameterRefresher
0   libsystem_kernel.dylib        	       0x1062cfac6 semaphore_wait_trap + 10
1   caulk                         	    0x7ffa015f551c caulk::semaphore::timed_wait(double) + 158
2   caulk                         	    0x7ffa015fc666 caulk::concurrent::details::worker_thread::run() + 30
3   caulk                         	    0x7ffa015fc6ba void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*) + 41
4   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
5   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 32:
0   libsystem_pthread.dylib       	       0x106259834 start_wqthread + 0

Thread 33:: com.apple.audio.IOThread.client
0   libsystem_kernel.dylib        	       0x1062cfb4a mach_msg2_trap + 10
1   libsystem_kernel.dylib        	       0x1062de704 mach_msg2_internal + 83
2   libsystem_kernel.dylib        	       0x1062d6bc3 mach_msg_overwrite + 574
3   libsystem_kernel.dylib        	       0x1062cfe3b mach_msg + 19
4   CoreAudio                     	    0x7ff804d9c7b1 HALC_ProxyIOContext::IOWorkLoop() + 7325
5   CoreAudio                     	    0x7ff804d9a45d invocation function for block in HALC_ProxyIOContext::HALC_ProxyIOContext(unsigned int, unsigned int) + 139
6   CoreAudio                     	    0x7ff804e8032f HALC_IOThread::Entry(void*) + 73
7   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
8   libsystem_pthread.dylib       	       0x106259857 thread_start + 15

Thread 34:: AQConverterThread
0   libsystem_kernel.dylib        	       0x1062d26f6 __psynch_cvwait + 10
1   libsystem_pthread.dylib       	       0x10625e2ae _pthread_cond_wait + 988
2   libAudioToolboxUtility.dylib  	    0x7ff818c3e55a CADeprecated::CAGuard::Wait() + 68
3   AudioToolbox                  	    0x7ff818b6e671 AQConverterManager::AQConverterThread::ConverterThreadEntry(void*) + 397
4   libAudioToolboxUtility.dylib  	    0x7ff818c2bf61 CADeprecated::CAPThread::Entry(void*) + 77
5   libsystem_pthread.dylib       	       0x10625de05 _pthread_start + 115
6   libsystem_pthread.dylib       	       0x106259857 thread_start + 15


Thread 17 crashed with X86 Thread State (64-bit):
  rax: 0x0020019008070c10  rbx: 0x0000600003332540  rcx: 0x0000600003332540  rdx: 0x434c4e47432b2b00
  rdi: 0x0000000000000001  rsi: 0x0000000000000001  rbp: 0x000070000c0938c0  rsp: 0x000070000c092cb0
   r8: 0x000070000c0931f0   r9: 0x00000000ffffff80  r10: 0x00007ff8026ab750  r11: 0x0000000000ffffff
  r12: 0x000070000c093850  r13: 0x000060000770b9c0  r14: 0x000070000c0931f0  r15: 0x0000000000000003
  rip: 0x00007ffa1bb0afbf  rfl: 0x0000000000010202  cr2: 0x0000000000000000
  
Logical CPU:     2
Error Code:      0x00000000 
Trap Number:     13


Binary Images:
       0x10eea3000 -        0x10ef3dfff dyld (*) <6b5ca9e7-21aa-36e9-9006-99ad808b943b> /usr/lib/dyld
       0x106248000 -        0x10624cfff com.puttiq.app (1.0.2) <92741c8c-ee29-3d3c-b6c7-e7d51b7fc1a0> /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/PuttIQ
       0x108c57000 -        0x10988efff PuttIQ.debug.dylib (*) <47649f10-b662-3867-a0c9-959c8649d88e> /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/PuttIQ.debug.dylib
       0x10efbf000 -        0x10fd92fff react-native.React (1.0) <1a3b4fdc-96f1-3db2-a758-e3220b1af4cd> /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/Frameworks/React.framework/React
       0x1067c2000 -        0x1068fbfff third-party.ReactNativeDependencies (1.0) <e2523555-296f-39cb-9522-4e969e06057c> /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/Frameworks/ReactNativeDependencies.framework/ReactNativeDependencies
       0x107950000 -        0x1086b9fff org.webrtc.WebRTC (1.0) <4c4c4419-5555-3144-a16a-e7fef0b4069c> /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/Frameworks/WebRTC.framework/WebRTC
       0x107202000 -        0x1075c3fff dev.hermesengine.iphonesimulator (0.12.0) <2b6f6730-5ae7-312c-a0b3-c6db8fa2f322> /Users/USER/Library/Developer/CoreSimulator/Devices/A077A522-64C5-482C-A9A1-68A6D5846859/data/Containers/Bundle/Application/EC79AA4F-D5B8-487B-9038-0E876FA86150/PuttIQ.app/Frameworks/hermes.framework/hermes
       0x1062b6000 -        0x1062bffff libsystem_platform.dylib (*) <78c9dcc0-2fba-3be4-a1dd-da618362ae68> /usr/lib/system/libsystem_platform.dylib
       0x1062cf000 -        0x10630bfff libsystem_kernel.dylib (*) <482d57d2-374a-3244-84d0-d09d58d29b2e> /usr/lib/system/libsystem_kernel.dylib
       0x106258000 -        0x106263fff libsystem_pthread.dylib (*) <a031f066-4daa-3801-9155-88106d874835> /usr/lib/system/libsystem_pthread.dylib
       0x106789000 -        0x106795fff libobjc-trampolines.dylib (*) <406433db-3988-3924-906b-3d3a35ad422d> /Volumes/VOLUME/*/libobjc-trampolines.dylib
    0x7ff802880000 -     0x7ff802c13485 com.apple.CoreFoundation (6.9) <8248037d-078a-359c-bcb5-53553f176d4e> /Volumes/VOLUME/*/CoreFoundation.framework/CoreFoundation
    0x7ff816777000 -     0x7ff81677e7e2 com.apple.GraphicsServices (1.0) <927942fa-ea36-36ce-b668-e5284a7a03ce> /Volumes/VOLUME/*/GraphicsServices.framework/GraphicsServices
    0x7ff807baa000 -     0x7ff80a373f04 com.apple.UIKitCore (1.0) <d7c41e4c-be75-3328-ad32-e21679883490> /Volumes/VOLUME/*/UIKitCore.framework/UIKitCore
               0x0 - 0xffffffffffffffff ??? (*) <00000000-0000-0000-0000-000000000000> ???
    0x7ff802c8e000 -     0x7ff803b248f1 com.apple.Foundation (6.9) <cabb2e73-bcf6-3733-94ec-9a494f1386de> /Volumes/VOLUME/*/Foundation.framework/Foundation
    0x7ff807697000 -     0x7ff807a1ceaa com.apple.CFNetwork (1.0) <1769872e-c7d2-3cce-852e-eb1809bd1310> /Volumes/VOLUME/*/CFNetwork.framework/CFNetwork
    0x7ff8027d0000 -     0x7ff802859f9f libc++.1.dylib (*) <6eb7e9aa-5cd3-38b7-ba11-d1cbb01cb25c> /Volumes/VOLUME/*/libc++.1.dylib
    0x7ffa015e6000 -     0x7ffa0160a78f com.apple.audio.caulk (1.0) <b26a775a-8e7e-3d1f-ba26-a88533caf08f> /Volumes/VOLUME/*/caulk.framework/caulk
    0x7ffa1bb04000 -     0x7ffa1bb0c883 libunwind.dylib (*) <eb8ac542-8b85-393e-aefc-fd56257f6948> /Volumes/VOLUME/*/libunwind.dylib
    0x7ff8027b0000 -     0x7ff8027c6dff libc++abi.dylib (*) <86ba4394-07f5-3404-816e-424a71dc7581> /Volumes/VOLUME/*/libc++abi.dylib
    0x7ff802511000 -     0x7ff80254c1a0 libobjc.A.dylib (*) <dc15cae5-cb5f-3fc2-af53-0a19a00c631e> /Volumes/VOLUME/*/libobjc.A.dylib
    0x7ffa1ce2b000 -     0x7ffa1cf8d5b5 com.apple.audio.AVFAudio (1.0) <dc6941f2-9ffb-3b32-a146-ce8ac4cb2b93> /Volumes/VOLUME/*/AVFAudio.framework/AVFAudio
    0x7ff802669000 -     0x7ff8026ad2b9 libdispatch.dylib (*) <9440b7c8-64b5-3d3f-9813-034efb2d84f1> /Volumes/VOLUME/*/libdispatch.dylib
    0x7ff815f76000 -     0x7ff816776f17 com.apple.MediaToolbox (1.0) <9f2a1d1a-8bdb-39ab-a553-ffaff931832f> /Volumes/VOLUME/*/MediaToolbox.framework/MediaToolbox
    0x7ff8025e2000 -     0x7ff80266892f libsystem_c.dylib (*) <1b21365a-210e-3a59-a8a9-e7300ac31e67> /Volumes/VOLUME/*/libsystem_c.dylib
    0x7ff818a9b000 -     0x7ff818c2279c com.apple.audio.toolbox.AudioToolbox (1.8) <c9b327c7-3704-32fe-9139-e4bbde0253f9> /Volumes/VOLUME/*/AudioToolbox.framework/AudioToolbox
    0x7ff80fd1b000 -     0x7ff80fe83baa com.apple.CoreMedia (1.0) <d2d15d79-d709-3310-b00e-98f3054458c3> /Volumes/VOLUME/*/CoreMedia.framework/CoreMedia
    0x7ff804c99000 -     0x7ff8050e2136 com.apple.audio.CoreAudio (5.0) <78fdf6c4-b531-35dc-b3ed-f6db95a7f911> /Volumes/VOLUME/*/CoreAudio.framework/CoreAudio
    0x7ff818c23000 -     0x7ff818c43dff libAudioToolboxUtility.dylib (*) <8c6f8fb4-3422-3653-bdaa-4ba6ed319dbe> /Volumes/VOLUME/*/libAudioToolboxUtility.dylib

EOF

-----------
Full Report
-----------

{"app_name":"PuttIQ","timestamp":"2025-11-23 18:50:09.00 +0000","app_version":"1.0.2","slice_uuid":"92741c8c-ee29-3d3c-b6c7-e7d51b7fc1a0","build_version":"5","platform":7,"bundleID":"com.puttiq.app","share_with_app_devs":0,"is_first_party":0,"bug_type":"309","os_version":"macOS 15.7.2 (24G325)","roots_installed":0,"name":"PuttIQ","incident_id":"71A91414-CA64-4074-9D49-0AFED47EE56C"}
{
  "uptime" : 21000,
  "procRole" : "Foreground",
  "version" : 2,
  "userID" : 501,
  "deployVersion" : 210,
  "modelCode" : "MacBookPro15,1",
  "coalitionID" : 4515,
  "osVersion" : {
    "train" : "macOS 15.7.2",
    "build" : "24G325",
    "releaseType" : "User"
  },
  "captureTime" : "2025-11-23 18:49:55.2450 +0000",
  "codeSigningMonitor" : 0,
  "incident" : "71A91414-CA64-4074-9D49-0AFED47EE56C",
  "pid" : 27304,
  "cpuType" : "X86-64",
  "roots_installed" : 0,
  "bug_type" : "309",
  "procLaunch" : "2025-11-23 18:49:17.3635 +0000",
  "procStartAbsTime" : 21109442776519,
  "procExitAbsTime" : 21147284277598,
  "procName" : "PuttIQ",
  "procPath" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/PuttIQ",
  "bundleInfo" : {"CFBundleShortVersionString":"1.0.2","CFBundleVersion":"5","CFBundleIdentifier":"com.puttiq.app"},
  "storeInfo" : {"deviceIdentifierForVendor":"C04BCF8E-8E4E-5318-B5EC-2AFFA1D23082","thirdParty":true},
  "parentProc" : "launchd_sim",
  "parentPid" : 10925,
  "coalitionName" : "com.apple.CoreSimulator.SimDevice.A077A522-64C5-482C-A9A1-68A6D5846859",
  "crashReporterKey" : "D8B8D5E6-2015-FB1B-7FE5-362699D6F7BE",
  "appleIntelligenceStatus" : {"reasons":["deviceNotCapable","selectedLanguageDoesNotMatchSelectedSiriLanguage"],"state":"unavailable"},
  "responsiblePid" : 852,
  "responsibleProc" : "SimulatorTrampoline",
  "codeSigningID" : "com.puttiq.app",
  "codeSigningTeamID" : "",
  "codeSigningFlags" : 570425857,
  "codeSigningValidationCategory" : 10,
  "codeSigningTrustLevel" : 4294967295,
  "codeSigningAuxiliaryInfo" : 0,
  "bootSessionUUID" : "8486D133-566A-43B3-A4F8-70DA146BD150",
  "wakeTime" : 1085,
  "bridgeVersion" : {"build":"23P52028d","train":"10.2"},
  "sleepWakeUUID" : "86137A85-CFE1-455D-ACFA-8A2C256C56FC",
  "sip" : "enabled",
  "vmRegionInfo" : "0 is not in any region.  Bytes before following region: 4398022656\n      REGION TYPE                    START - END         [ VSIZE] PRT\/MAX SHRMOD  REGION DETAIL\n      UNUSED SPACE AT START\n--->  \n      __TEXT                      106248000-10624d000    [   20K] r-x\/r-x SM=COW  \/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/PuttIQ",
  "exception" : {"codes":"0x000000000000000d, 0x0000000000000000","rawCodes":[13,0],"type":"EXC_BAD_ACCESS","signal":"SIGSEGV","subtype":"UNKNOWN_0xD at 0x0000000000000000"},
  "termination" : {"flags":0,"code":11,"namespace":"SIGNAL","indicator":"Segmentation fault: 11","byProc":"exc handler","byPid":27304},
  "vmregioninfo" : "0 is not in any region.  Bytes before following region: 4398022656\n      REGION TYPE                    START - END         [ VSIZE] PRT\/MAX SHRMOD  REGION DETAIL\n      UNUSED SPACE AT START\n--->  \n      __TEXT                      106248000-10624d000    [   20K] r-x\/r-x SM=COW  \/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/PuttIQ",
  "extMods" : {"caller":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"system":{"thread_create":0,"thread_set_state":0,"task_for_pid":2},"targeted":{"thread_create":0,"thread_set_state":0,"task_for_pid":0},"warnings":0},
  "faultingThread" : 17,
  "threads" : [{"id":427590,"threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":37396280246272},"rsi":{"value":21592279046},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":37396280246272},"r9":{"value":37396280246272},"r15":{"value":2},"rbx":{"value":140701950758704},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":140701950758544},"rsp":{"value":140701950758440},"r12":{"value":37396280246272},"rcx":{"value":140701950758440},"flavor":"x86_THREAD_STATE","rdi":{"value":140701950758704}},"queue":"com.apple.main-thread","frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":600944,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":11},{"imageOffset":597265,"symbol":"__CFRunLoopRun","symbolLocation":1354,"imageIndex":11},{"imageOffset":576167,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":10520,"symbol":"GSEventRunModal","symbolLocation":94,"imageIndex":12},{"imageOffset":24057298,"symbol":"-[UIApplication _run]","symbolLocation":842,"imageIndex":13},{"imageOffset":24077745,"symbol":"UIApplicationMain","symbolLocation":123,"imageIndex":13},{"imageOffset":19535,"sourceLine":6,"sourceFile":"AppDelegate.swift","symbol":"__debug_main_executable_dylib_entry_point","imageIndex":2,"symbolLocation":63},{"imageOffset":4399395804,"imageIndex":14},{"imageOffset":25904,"symbol":"start","symbolLocation":3056,"imageIndex":0}]},{"id":427622,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":5123},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145489793024},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145490316152},"rbx":{"value":123145490317312},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145490317312},"r12":{"value":13500416},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145490317312}}},{"id":427623,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":9475},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145490329600},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145490852728},"rbx":{"value":123145490853888},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145490853888},"r12":{"value":5128196},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145490853888}}},{"id":427624,"name":"com.apple.uikit.eventfetch-thread","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":68182605824000},"rsi":{"value":21592279046},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":68182605824000},"r9":{"value":68182605824000},"r15":{"value":2},"rbx":{"value":123145491385760},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":123145491385600},"rsp":{"value":123145491385496},"r12":{"value":68182605824000},"rcx":{"value":123145491385496},"flavor":"x86_THREAD_STATE","rdi":{"value":123145491385760}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":600944,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":11},{"imageOffset":597265,"symbol":"__CFRunLoopRun","symbolLocation":1354,"imageIndex":11},{"imageOffset":576167,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":10457307,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":213,"imageIndex":15},{"imageOffset":10457934,"symbol":"-[NSRunLoop(NSRunLoop) runUntilDate:]","symbolLocation":72,"imageIndex":15},{"imageOffset":20218394,"symbol":"-[UIEventFetcher threadMain]","symbolLocation":506,"imageIndex":13},{"imageOffset":10633345,"symbol":"__NSThread__start__","symbolLocation":1014,"imageIndex":15},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":427627,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":17667},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145491939328},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145492462456},"rbx":{"value":123145492463616},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145492463616},"r12":{"value":13500416},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145492463616}}},{"id":427633,"name":"com.facebook.SocketRocket.NetworkThread","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":134153303490560},"rsi":{"value":21592279046},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":134153303490560},"r9":{"value":134153303490560},"r15":{"value":2},"rbx":{"value":123145494068608},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":123145494068448},"rsp":{"value":123145494068344},"r12":{"value":134153303490560},"rcx":{"value":123145494068344},"flavor":"x86_THREAD_STATE","rdi":{"value":123145494068608}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":600944,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":11},{"imageOffset":597265,"symbol":"__CFRunLoopRun","symbolLocation":1354,"imageIndex":11},{"imageOffset":576167,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":10457307,"symbol":"-[NSRunLoop(NSRunLoop) runMode:beforeDate:]","symbolLocation":213,"imageIndex":15},{"imageOffset":351291,"symbol":"-[SRRunLoopThread main]","symbolLocation":267,"imageIndex":4},{"imageOffset":10633345,"symbol":"__NSThread__start__","symbolLocation":1014,"imageIndex":15},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":427634,"name":"com.apple.NSURLConnectionLoader","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":105566001168384},"rsi":{"value":21592279046},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":105566001168384},"r9":{"value":105566001168384},"r15":{"value":2},"rbx":{"value":123145494605152},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":123145494604992},"rsp":{"value":123145494604888},"r12":{"value":105566001168384},"rcx":{"value":123145494604888},"flavor":"x86_THREAD_STATE","rdi":{"value":123145494605152}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":600944,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":11},{"imageOffset":597265,"symbol":"__CFRunLoopRun","symbolLocation":1354,"imageIndex":11},{"imageOffset":576167,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":2221698,"symbol":"+[__CFN_CoreSchedulingSetRunnable _run:]","symbolLocation":447,"imageIndex":16},{"imageOffset":10633345,"symbol":"__NSThread__start__","symbolLocation":1014,"imageIndex":15},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":427635,"name":"com.apple.CFSocket.private","threadState":{"r13":{"value":0},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":105553116333888},"rsi":{"value":105553116333888},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":105553116333872},"r10":{"value":0},"r9":{"value":0},"r15":{"value":1},"rbx":{"value":140704253292824,"symbolLocation":0,"symbol":"__CFActiveSocketsLock"},"trap":{"value":133},"err":{"value":33554525},"r11":{"value":582},"rip":{"value":4398615038},"rbp":{"value":123145495146416},"rsp":{"value":123145495112664},"r12":{"value":105553116333872},"rcx":{"value":123145495112664},"flavor":"x86_THREAD_STATE","rdi":{"value":32}},"frames":[{"imageOffset":39422,"symbol":"__select","symbolLocation":10,"imageIndex":8},{"imageOffset":660184,"symbol":"__CFSocketManager","symbolLocation":670,"imageIndex":11},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":427663,"name":"com.facebook.react.runtime.JavaScript","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":89090506620928},"rsi":{"value":21592279046},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":89090506620928},"r9":{"value":89090506620928},"r15":{"value":2},"rbx":{"value":123145496202576},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":123145496202416},"rsp":{"value":123145496202312},"r12":{"value":89090506620928},"rcx":{"value":123145496202312},"flavor":"x86_THREAD_STATE","rdi":{"value":123145496202576}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":600944,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":11},{"imageOffset":597265,"symbol":"__CFRunLoopRun","symbolLocation":1354,"imageIndex":11},{"imageOffset":576167,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":11102383,"symbol":"+[RCTJSThreadManager runRunLoop]","symbolLocation":399,"imageIndex":3},{"imageOffset":10633345,"symbol":"__NSThread__start__","symbolLocation":1014,"imageIndex":15},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":427664,"name":"hades","threadState":{"r13":{"value":4294967552},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":105553171874736},"rsi":{"value":4294967552},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":0},"r9":{"value":160},"r15":{"value":0},"rbx":{"value":123145496743936},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":4398589686},"rbp":{"value":123145496743680},"rsp":{"value":123145496743528},"r12":{"value":123145496743552},"rcx":{"value":123145496743528},"flavor":"x86_THREAD_STATE","rdi":{"value":105553171874736}},"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":8},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":142922,"symbol":"std::__1::condition_variable::wait(std::__1::unique_lock<std::__1::mutex>&)","symbolLocation":18,"imageIndex":17},{"imageOffset":1915192,"symbol":"hermes::vm::HadesGC::Executor::worker()","symbolLocation":136,"imageIndex":6},{"imageOffset":1915002,"symbol":"void* std::__1::__thread_proxy[abi:nn180100]<std::__1::tuple<std::__1::unique_ptr<std::__1::__thread_struct, std::__1::default_delete<std::__1::__thread_struct>>, hermes::vm::HadesGC::Executor::Executor()::'lambda'()>>(void*)","symbolLocation":42,"imageIndex":6},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":427665,"name":"com.apple.CFNetwork.CustomProtocols","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":173735722090496},"rsi":{"value":21592279046},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":173735722090496},"r9":{"value":173735722090496},"r15":{"value":2},"rbx":{"value":123145497275744},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":123145497275584},"rsp":{"value":123145497275480},"r12":{"value":173735722090496},"rcx":{"value":123145497275480},"flavor":"x86_THREAD_STATE","rdi":{"value":123145497275744}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":600944,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":11},{"imageOffset":597265,"symbol":"__CFRunLoopRun","symbolLocation":1354,"imageIndex":11},{"imageOffset":576167,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":2221698,"symbol":"+[__CFN_CoreSchedulingSetRunnable _run:]","symbolLocation":447,"imageIndex":16},{"imageOffset":10633345,"symbol":"__NSThread__start__","symbolLocation":1014,"imageIndex":15},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":427667,"name":"com.apple.CFStream.LegacyThread","threadState":{"r13":{"value":21592279046},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":155044024418304},"rsi":{"value":21592279046},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":8589934592},"r10":{"value":155044024418304},"r9":{"value":155044024418304},"r15":{"value":2},"rbx":{"value":123145497813056},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":123145497812896},"rsp":{"value":123145497812792},"r12":{"value":155044024418304},"rcx":{"value":123145497812792},"flavor":"x86_THREAD_STATE","rdi":{"value":123145497813056}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":600944,"symbol":"__CFRunLoopServiceMachPort","symbolLocation":145,"imageIndex":11},{"imageOffset":597265,"symbol":"__CFRunLoopRun","symbolLocation":1354,"imageIndex":11},{"imageOffset":576167,"symbol":"_CFRunLoopRunSpecificWithOptions","symbolLocation":496,"imageIndex":11},{"imageOffset":724908,"symbol":"_legacyStreamRunLoop_workThread","symbolLocation":251,"imageIndex":11},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428402,"name":"caulk.messenger.shared:17","threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":515},"cpu":{"value":0},"r14":{"value":105553177053664},"rsi":{"value":0},"r8":{"value":1},"cr2":{"value":0},"rdx":{"value":1},"r10":{"value":0},"r9":{"value":4736593944},"r15":{"value":0},"rbx":{"value":105553177053441},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":515},"rip":{"value":4398578374},"rbp":{"value":123145493000048},"rsp":{"value":123145493000008},"r12":{"value":0},"rcx":{"value":123145493000008},"flavor":"x86_THREAD_STATE","rdi":{"value":47623}},"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":62748,"symbol":"caulk::semaphore::timed_wait(double)","symbolLocation":158,"imageIndex":18},{"imageOffset":91750,"symbol":"caulk::concurrent::details::worker_thread::run()","symbolLocation":30,"imageIndex":18},{"imageOffset":91834,"symbol":"void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*)","symbolLocation":41,"imageIndex":18},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428403,"name":"caulk.messenger.shared:high","threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":515},"cpu":{"value":0},"r14":{"value":105553177052624},"rsi":{"value":62467},"r8":{"value":4294967295},"cr2":{"value":0},"rdx":{"value":62467},"r10":{"value":22},"r9":{"value":0},"r15":{"value":0},"rbx":{"value":105553177052417},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":515},"rip":{"value":4398578374},"rbp":{"value":123145498353520},"rsp":{"value":123145498353480},"r12":{"value":0},"rcx":{"value":123145498353480},"flavor":"x86_THREAD_STATE","rdi":{"value":47875}},"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":62748,"symbol":"caulk::semaphore::timed_wait(double)","symbolLocation":158,"imageIndex":18},{"imageOffset":91750,"symbol":"caulk::concurrent::details::worker_thread::run()","symbolLocation":30,"imageIndex":18},{"imageOffset":91834,"symbol":"void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*)","symbolLocation":41,"imageIndex":18},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428461,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":129799},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145498365952},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":123145498890240},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145498890240},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145498890240}}},{"id":428462,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":99343},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145498902528},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145499425656},"rbx":{"value":123145499426816},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145499426816},"r12":{"value":13500416},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145499426816}}},{"id":428595,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":98835},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145501048832},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":123145501573120},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145501573120},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145501573120}}},{"triggered":true,"id":428600,"instructionState":{"instructionStream":{"bytes":[204,180,255,255,76,141,101,144,65,191,3,0,0,0,102,144,72,139,133,48,249,255,255,76,137,247,49,246,255,80,64,133,192,15,132,150,0,0,0,15,136,183,0,0,0,15,87,192,15,41,69,192,15,41,69,176,15,41,69,160,15,41,69,144,72,199,69,208,0,0,0,0,72,139,133,48,249,255,255,76,137,247,76,137,230,255,80,72,72,131,125,152,0,15,132,129,0,0,0,72,139,69,168,72,133,192,116,164,72,139,19,191,1,0,0,0,190,1,0,0,0,72,137,217,77,137,240,255,208,131,248,8,116,138,131,248,6,117,89,72,139,133,48,249,255,255,72,141,189,48,249,255,255,190,254,255,255,255,255,80,16,132,192,116,32,72,139,133,48,249,255,255,72,141,189,48,249,255,255,190,254,255,255,255,255,80,24,235,10,65,191,5],"offset":127}},"threadState":{"r13":{"value":105553241094592},"rax":{"value":9008917376338960},"rflags":{"value":66050},"cpu":{"value":2},"r14":{"value":123145504240112},"rsi":{"value":1},"r8":{"value":123145504240112},"cr2":{"value":0},"rdx":{"value":4849336966747728640},"r10":{"value":140703169165136},"r9":{"value":4294967168},"r15":{"value":3},"rbx":{"value":105553169950016},"trap":{"value":13},"err":{"value":0},"r11":{"value":16777215},"rip":{"value":140712183115711,"matchesCrashFrame":1},"rbp":{"value":123145504241856},"rsp":{"value":123145504238768},"r12":{"value":123145504241744},"rcx":{"value":105553169950016},"flavor":"x86_THREAD_STATE","rdi":{"value":1}},"queue":"expo.modules.AsyncFunctionQueue","frames":[{"imageOffset":28607,"symbol":"_Unwind_RaiseException","symbolLocation":399,"imageIndex":19},{"imageOffset":74532,"symbol":"__cxa_throw","symbolLocation":61,"imageIndex":20},{"imageOffset":172246,"symbol":"objc_exception_throw","symbolLocation":321,"imageIndex":21},{"imageOffset":1285991,"symbol":"+[NSException raise:format:]","symbolLocation":226,"imageIndex":11},{"imageOffset":1092139,"symbol":"AVAudioEngineImpl::InstallTapOnNode(AVAudioNode*, unsigned long, unsigned int, AVAudioFormat*, void (AVAudioPCMBuffer*, AVAudioTime*) block_pointer)","symbolLocation":1397,"imageIndex":22},{"imageOffset":952292,"symbol":"-[AVAudioNode installTapOnBus:bufferSize:format:block:]","symbolLocation":596,"imageIndex":22},{"imageOffset":3968177,"sourceLine":417,"sourceFile":"AudioSessionManager.swift","symbol":"AudioSessionManager.startRecording(settings:intervalMilliseconds:)","imageIndex":2,"symbolLocation":4689},{"imageOffset":4050204,"sourceLine":93,"sourceFile":"ExpoPlayAudioStreamModule.swift","symbol":"closure #3 in ExpoPlayAudioStreamModule.definition()","imageIndex":2,"symbolLocation":1916},{"imageOffset":4051999,"sourceFile":"\/<compiler-generated>","symbol":"partial apply for closure #3 in ExpoPlayAudioStreamModule.definition()","symbolLocation":15,"imageIndex":2},{"imageOffset":841863,"sourceFile":"\/<compiler-generated>","symbol":"thunk for @escaping @callee_guaranteed (@in_guaranteed B, @pack_guaranteed @indirect Pack{repeat C}) -> (@out A, @error @owned Error)","symbolLocation":727,"imageIndex":2},{"imageOffset":842099,"sourceFile":"\/<compiler-generated>","symbol":"partial apply for thunk for @escaping @callee_guaranteed (@in_guaranteed B, @pack_guaranteed @indirect Pack{repeat C}) -> (@out A, @error @owned Error)","symbolLocation":83,"imageIndex":2},{"imageOffset":829479,"sourceLine":105,"sourceFile":"AsyncFunctionDefinition.swift","symbol":"closure #3 in AsyncFunctionDefinition.call(by:withArguments:appContext:callback:)","imageIndex":2,"symbolLocation":1063},{"imageOffset":831098,"sourceFile":"\/<compiler-generated>","symbol":"partial apply for closure #3 in AsyncFunctionDefinition.call(by:withArguments:appContext:callback:)","symbolLocation":58,"imageIndex":2},{"imageOffset":833442,"sourceLine":150,"sourceFile":"AsyncFunctionDefinition.swift","symbol":"closure #1 in AsyncFunctionDefinition.dispatchOnQueueUntilViewRegisters(appContext:arguments:queue:retryCount:_:)","imageIndex":2,"symbolLocation":1554},{"imageOffset":833623,"sourceFile":"\/<compiler-generated>","symbol":"partial apply for closure #1 in AsyncFunctionDefinition.dispatchOnQueueUntilViewRegisters(appContext:arguments:queue:retryCount:_:)","symbolLocation":55,"imageIndex":2},{"imageOffset":165704,"sourceFile":"\/<compiler-generated>","symbol":"thunk for @escaping @callee_guaranteed @Sendable () -> ()","symbolLocation":40,"imageIndex":2},{"imageOffset":5700,"symbol":"_dispatch_call_block_and_release","symbolLocation":12,"imageIndex":23},{"imageOffset":112590,"symbol":"_dispatch_client_callout","symbolLocation":6,"imageIndex":23},{"imageOffset":40887,"symbol":"_dispatch_lane_serial_drain","symbolLocation":1170,"imageIndex":23},{"imageOffset":43686,"symbol":"_dispatch_lane_invoke","symbolLocation":413,"imageIndex":23},{"imageOffset":89830,"symbol":"_dispatch_root_queue_drain_deferred_wlh","symbolLocation":290,"imageIndex":23},{"imageOffset":87558,"symbol":"_dispatch_workloop_worker_thread","symbolLocation":814,"imageIndex":23},{"imageOffset":10337,"symbol":"_pthread_wqthread","symbolLocation":298,"imageIndex":9},{"imageOffset":6211,"symbol":"start_wqthread","symbolLocation":15,"imageIndex":9}]},{"id":428619,"name":"com.apple.UIKit.inProcessAnimationManager","threadState":{"r13":{"value":105553152030384},"rax":{"value":14},"rflags":{"value":582},"cpu":{"value":0},"r14":{"value":105553152030384},"rsi":{"value":18446744073709551615},"r8":{"value":1},"cr2":{"value":0},"rdx":{"value":3},"r10":{"value":3},"r9":{"value":8589934592},"r15":{"value":18446744073709551615},"rbx":{"value":105553152030448},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":582},"rip":{"value":4398578374},"rbp":{"value":123145505328224},"rsp":{"value":123145505328200},"r12":{"value":105553152030384},"rcx":{"value":123145505328200},"flavor":"x86_THREAD_STATE","rdi":{"value":104195}},"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":11138,"symbol":"_dispatch_sema4_wait","symbolLocation":16,"imageIndex":23},{"imageOffset":12272,"symbol":"_dispatch_semaphore_wait_slow","symbolLocation":98,"imageIndex":23},{"imageOffset":5675695,"imageIndex":13},{"imageOffset":5695573,"imageIndex":13},{"imageOffset":1636873,"imageIndex":13},{"imageOffset":10633345,"symbol":"__NSThread__start__","symbolLocation":1014,"imageIndex":15},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428625,"name":"com.apple.coremedia.sharedRootQueue.47","threadState":{"r13":{"value":4437596080},"rax":{"value":14},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":4437596336},"rsi":{"value":4294966411236737028},"r8":{"value":18},"cr2":{"value":0},"rdx":{"value":999999794},"r10":{"value":4999999794},"r9":{"value":0},"r15":{"value":1000000000},"rbx":{"value":21152279964198},"trap":{"value":133},"err":{"value":16777254},"r11":{"value":514},"rip":{"value":4398578398},"rbp":{"value":123145506938656},"rsp":{"value":123145506938616},"r12":{"value":123145506938744},"rcx":{"value":123145506938616},"flavor":"x86_THREAD_STATE","rdi":{"value":94219}},"frames":[{"imageOffset":2782,"symbol":"semaphore_timedwait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":215947,"symbol":"_dispatch_sema4_timedwait","symbolLocation":52,"imageIndex":23},{"imageOffset":12232,"symbol":"_dispatch_semaphore_wait_slow","symbolLocation":58,"imageIndex":23},{"imageOffset":82395,"symbol":"_dispatch_worker_thread","symbolLocation":507,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428627,"name":"com.apple.coremedia.sharedRootQueue.47","threadState":{"r13":{"value":4437596080},"rax":{"value":14},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":4437596336},"rsi":{"value":4294966565855559684},"r8":{"value":18},"cr2":{"value":0},"rdx":{"value":999999830},"r10":{"value":4999999830},"r9":{"value":0},"r15":{"value":1000000000},"rbx":{"value":21152275726114},"trap":{"value":133},"err":{"value":16777254},"r11":{"value":518},"rip":{"value":4398578398},"rbp":{"value":123145508011808},"rsp":{"value":123145508011768},"r12":{"value":123145508011896},"rcx":{"value":123145508011768},"flavor":"x86_THREAD_STATE","rdi":{"value":94219}},"frames":[{"imageOffset":2782,"symbol":"semaphore_timedwait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":215947,"symbol":"_dispatch_sema4_timedwait","symbolLocation":52,"imageIndex":23},{"imageOffset":12232,"symbol":"_dispatch_semaphore_wait_slow","symbolLocation":58,"imageIndex":23},{"imageOffset":82395,"symbol":"_dispatch_worker_thread","symbolLocation":507,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428631,"name":"com.apple.coremedia.rootQueue.fP-47.mP-47","threadState":{"r13":{"value":4410058656},"rax":{"value":14},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":4410058912},"rsi":{"value":4294966759129088004},"r8":{"value":18},"cr2":{"value":0},"rdx":{"value":999999875},"r10":{"value":4999999875},"r9":{"value":0},"r15":{"value":1000000000},"rbx":{"value":21152275734949},"trap":{"value":133},"err":{"value":16777254},"r11":{"value":514},"rip":{"value":4398578398},"rbp":{"value":123145509084960},"rsp":{"value":123145509084920},"r12":{"value":123145509085048},"rcx":{"value":123145509084920},"flavor":"x86_THREAD_STATE","rdi":{"value":110083}},"frames":[{"imageOffset":2782,"symbol":"semaphore_timedwait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":215947,"symbol":"_dispatch_sema4_timedwait","symbolLocation":52,"imageIndex":23},{"imageOffset":12232,"symbol":"_dispatch_semaphore_wait_slow","symbolLocation":58,"imageIndex":23},{"imageOffset":82395,"symbol":"_dispatch_worker_thread","symbolLocation":507,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428632,"name":"com.apple.coremedia.rootQueue.fP-47.mP-47","threadState":{"r13":{"value":4410058656},"rax":{"value":14},"rflags":{"value":514},"cpu":{"value":0},"r14":{"value":4410058912},"rsi":{"value":4294966157833666564},"r8":{"value":18},"cr2":{"value":0},"rdx":{"value":999999735},"r10":{"value":4999999735},"r9":{"value":0},"r15":{"value":1000000000},"rbx":{"value":21152275707150},"trap":{"value":133},"err":{"value":16777254},"r11":{"value":514},"rip":{"value":4398578398},"rbp":{"value":123145509621536},"rsp":{"value":123145509621496},"r12":{"value":123145509621624},"rcx":{"value":123145509621496},"flavor":"x86_THREAD_STATE","rdi":{"value":110083}},"frames":[{"imageOffset":2782,"symbol":"semaphore_timedwait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":215947,"symbol":"_dispatch_sema4_timedwait","symbolLocation":52,"imageIndex":23},{"imageOffset":12232,"symbol":"_dispatch_semaphore_wait_slow","symbolLocation":58,"imageIndex":23},{"imageOffset":82395,"symbol":"_dispatch_worker_thread","symbolLocation":507,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"threadState":{"r13":{"value":105553152270496},"rax":{"value":4},"rflags":{"value":519},"cpu":{"value":0},"r14":{"value":256},"rsi":{"value":514},"r8":{"value":73896},"cr2":{"value":0},"rdx":{"value":256},"r10":{"value":428636},"r9":{"value":1099511628290},"r15":{"value":514},"rbx":{"value":105553152270464},"trap":{"value":133},"err":{"value":33554733},"r11":{"value":518},"rip":{"value":4398587506},"rbp":{"value":123145510155248},"rsp":{"value":123145510155192},"r12":{"value":105553152270488},"rcx":{"value":123145510155192},"flavor":"x86_THREAD_STATE","rdi":{"value":105553152270464}},"id":428633,"name":"com.apple.coremedia.sharedRootQueue.47","queue":"*\/TM","frames":[{"imageOffset":11890,"symbol":"__psynch_mutexwait","symbolLocation":10,"imageIndex":8},{"imageOffset":14168,"symbol":"_pthread_mutex_firstfit_lock_wait","symbolLocation":78,"imageIndex":9},{"imageOffset":5537,"symbol":"_pthread_mutex_firstfit_lock_slow","symbolLocation":217,"imageIndex":9},{"imageOffset":1686459,"symbol":"figAudioQueueRenderPipelineSetProperty","symbolLocation":40,"imageIndex":24},{"imageOffset":5176031,"symbol":"fp_setPropertyOnAllAudioRenderPipelines","symbolLocation":94,"imageIndex":24},{"imageOffset":1115697,"symbol":"playerfig_applySoftwareVolume","symbolLocation":1141,"imageIndex":24},{"imageOffset":1176788,"symbol":"playerfig_setBossRateWithFade","symbolLocation":908,"imageIndex":24},{"imageOffset":1185315,"symbol":"playerfig_setRateGuts","symbolLocation":1456,"imageIndex":24},{"imageOffset":1183308,"symbol":"playerfig_setRateForReason","symbolLocation":1323,"imageIndex":24},{"imageOffset":1120562,"symbol":"playerfig_pauseForInternalReason","symbolLocation":172,"imageIndex":24},{"imageOffset":1142452,"symbol":"itemfig_ReachedEndGuts","symbolLocation":801,"imageIndex":24},{"imageOffset":1141596,"symbol":"itemfig_ReachedEnd_ReachedEndGuts_f","symbolLocation":38,"imageIndex":24},{"imageOffset":112590,"symbol":"_dispatch_client_callout","symbolLocation":6,"imageIndex":23},{"imageOffset":40887,"symbol":"_dispatch_lane_serial_drain","symbolLocation":1170,"imageIndex":23},{"imageOffset":43686,"symbol":"_dispatch_lane_invoke","symbolLocation":413,"imageIndex":23},{"imageOffset":82931,"symbol":"_dispatch_root_queue_drain","symbolLocation":352,"imageIndex":23},{"imageOffset":82219,"symbol":"_dispatch_worker_thread","symbolLocation":331,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"threadState":{"r13":{"value":123145511764016},"rax":{"value":4},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":123145511763488},"rsi":{"value":0},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":1},"r10":{"value":1},"r9":{"value":25000000},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":133},"err":{"value":33554766},"r11":{"value":582},"rip":{"value":4398589378},"rbp":{"value":123145511763472},"rsp":{"value":123145511763416},"r12":{"value":123145511763880},"rcx":{"value":123145511763416},"flavor":"x86_THREAD_STATE","rdi":{"value":2307}},"id":428636,"name":"com.apple.coremedia.sharedRootQueue.47","queue":"AQServer","frames":[{"imageOffset":13762,"symbol":"__semwait_signal","symbolLocation":10,"imageIndex":8},{"imageOffset":503866,"symbol":"nanosleep","symbolLocation":209,"imageIndex":25},{"imageOffset":503592,"symbol":"usleep","symbolLocation":53,"imageIndex":25},{"imageOffset":921923,"symbol":"AudioQueueObject::BeginPause(long long&, bool)","symbolLocation":289,"imageIndex":26},{"imageOffset":1026569,"symbol":"AudioQueueXPC_Server::Pause(unsigned int)","symbolLocation":161,"imageIndex":26},{"imageOffset":1334199,"symbol":"invocation function for block in AudioQueueXPC_Bridge::Pause(unsigned int)","symbolLocation":26,"imageIndex":26},{"imageOffset":112590,"symbol":"_dispatch_client_callout","symbolLocation":6,"imageIndex":23},{"imageOffset":72825,"symbol":"_dispatch_sync_invoke_and_complete_recurse","symbolLocation":99,"imageIndex":23},{"imageOffset":1317103,"symbol":"AudioQueueXPC_Bridge::Pause(unsigned int)","symbolLocation":145,"imageIndex":26},{"imageOffset":551415,"symbol":"AQ::API::V2Impl::AudioQueuePause(OpaqueAudioQueue*)","symbolLocation":375,"imageIndex":26},{"imageOffset":6024253,"symbol":"FigAudioQueueTimingShimPause","symbolLocation":326,"imageIndex":24},{"imageOffset":613707,"symbol":"FigAudioQueuePause","symbolLocation":355,"imageIndex":24},{"imageOffset":1701315,"symbol":"faqrp_stopTimebaseAndAudioQueue","symbolLocation":1081,"imageIndex":24},{"imageOffset":5424279,"symbol":"figAudioQueueRenderPipelineSetRateAndAnchorTime","symbolLocation":1057,"imageIndex":24},{"imageOffset":1667502,"symbol":"bossSetPossiblyOutsourcedTimebaseRate","symbolLocation":713,"imageIndex":24},{"imageOffset":1628315,"symbol":"bossStopTimebaseAndAudioContext","symbolLocation":945,"imageIndex":24},{"imageOffset":1597904,"symbol":"figPlaybackBossSetRateToZero","symbolLocation":314,"imageIndex":24},{"imageOffset":1659952,"symbol":"figPlaybackBossReachedEndWithContext","symbolLocation":461,"imageIndex":24},{"imageOffset":112590,"symbol":"_dispatch_client_callout","symbolLocation":6,"imageIndex":23},{"imageOffset":23259,"symbol":"_dispatch_continuation_pop","symbolLocation":859,"imageIndex":23},{"imageOffset":101466,"symbol":"_dispatch_source_invoke","symbolLocation":2178,"imageIndex":23},{"imageOffset":40072,"symbol":"_dispatch_lane_serial_drain","symbolLocation":355,"imageIndex":23},{"imageOffset":43686,"symbol":"_dispatch_lane_invoke","symbolLocation":413,"imageIndex":23},{"imageOffset":82931,"symbol":"_dispatch_root_queue_drain","symbolLocation":352,"imageIndex":23},{"imageOffset":82219,"symbol":"_dispatch_worker_thread","symbolLocation":331,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428638,"name":"caulk::deferred_logger","threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":515},"cpu":{"value":0},"r14":{"value":105553178471192},"rsi":{"value":0},"r8":{"value":1},"cr2":{"value":0},"rdx":{"value":1},"r10":{"value":0},"r9":{"value":4736593944},"r15":{"value":0},"rbx":{"value":105553178470913},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":515},"rip":{"value":4398578374},"rbp":{"value":123145512841072},"rsp":{"value":123145512841032},"r12":{"value":0},"rcx":{"value":123145512841032},"flavor":"x86_THREAD_STATE","rdi":{"value":172547}},"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":62748,"symbol":"caulk::semaphore::timed_wait(double)","symbolLocation":158,"imageIndex":18},{"imageOffset":91750,"symbol":"caulk::concurrent::details::worker_thread::run()","symbolLocation":30,"imageIndex":18},{"imageOffset":91834,"symbol":"void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*)","symbolLocation":41,"imageIndex":18},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"threadState":{"r13":{"value":105553152270176},"rax":{"value":4},"rflags":{"value":519},"cpu":{"value":0},"r14":{"value":512},"rsi":{"value":770},"r8":{"value":73896},"cr2":{"value":0},"rdx":{"value":512},"r10":{"value":428636},"r9":{"value":2199023256322},"r15":{"value":770},"rbx":{"value":105553152270144},"trap":{"value":133},"err":{"value":33554733},"r11":{"value":518},"rip":{"value":4398587506},"rbp":{"value":123145489778944},"rsp":{"value":123145489778888},"r12":{"value":105553152270168},"rcx":{"value":123145489778888},"flavor":"x86_THREAD_STATE","rdi":{"value":105553152270144}},"id":428793,"name":"com.apple.coremedia.sharedRootQueue.59","queue":"*\/TM.03","frames":[{"imageOffset":11890,"symbol":"__psynch_mutexwait","symbolLocation":10,"imageIndex":8},{"imageOffset":14168,"symbol":"_pthread_mutex_firstfit_lock_wait","symbolLocation":78,"imageIndex":9},{"imageOffset":5537,"symbol":"_pthread_mutex_firstfit_lock_slow","symbolLocation":217,"imageIndex":9},{"imageOffset":4635409,"symbol":"subaq_performStartupSync","symbolLocation":2831,"imageIndex":24},{"imageOffset":4632559,"symbol":"subaq_startListenerInternal","symbolLocation":589,"imageIndex":24},{"imageOffset":112590,"symbol":"_dispatch_client_callout","symbolLocation":6,"imageIndex":23},{"imageOffset":40887,"symbol":"_dispatch_lane_serial_drain","symbolLocation":1170,"imageIndex":23},{"imageOffset":43686,"symbol":"_dispatch_lane_invoke","symbolLocation":413,"imageIndex":23},{"imageOffset":82931,"symbol":"_dispatch_root_queue_drain","symbolLocation":352,"imageIndex":23},{"imageOffset":82219,"symbol":"_dispatch_worker_thread","symbolLocation":331,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428794,"name":"com.apple.coremedia.rootQueue.fP-45.mP-47","threadState":{"r13":{"value":4753946704},"rax":{"value":14},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":4753946960},"rsi":{"value":4294966591625363460},"r8":{"value":18},"cr2":{"value":0},"rdx":{"value":999999836},"r10":{"value":4999999836},"r9":{"value":0},"r15":{"value":1000000000},"rbx":{"value":21147335619305},"trap":{"value":133},"err":{"value":16777254},"r11":{"value":518},"rip":{"value":4398578398},"rbp":{"value":123145491926816},"rsp":{"value":123145491926776},"r12":{"value":123145491926904},"rcx":{"value":123145491926776},"flavor":"x86_THREAD_STATE","rdi":{"value":111119}},"frames":[{"imageOffset":2782,"symbol":"semaphore_timedwait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":215947,"symbol":"_dispatch_sema4_timedwait","symbolLocation":52,"imageIndex":23},{"imageOffset":12232,"symbol":"_dispatch_semaphore_wait_slow","symbolLocation":58,"imageIndex":23},{"imageOffset":82395,"symbol":"_dispatch_worker_thread","symbolLocation":507,"imageIndex":23},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428816,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":33554800},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":1},"rsi":{"value":100375},"r8":{"value":409604},"cr2":{"value":0},"rdx":{"value":123145513926656},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":123145514449784},"rbx":{"value":123145514450944},"trap":{"value":133},"err":{"value":33554800},"r11":{"value":582},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145514450944},"r12":{"value":5193732},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145514450944}}},{"id":428821,"name":"com.apple.coremedia.audioqueue.source","threadState":{"r13":{"value":4402341479680},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":105553156592904},"rsi":{"value":4402341479680},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":1024},"r10":{"value":0},"r9":{"value":65704},"r15":{"value":1024},"rbx":{"value":123145493536768},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":4398589686},"rbp":{"value":123145493536224},"rsp":{"value":123145493536072},"r12":{"value":123145493536096},"rcx":{"value":123145493536072},"flavor":"x86_THREAD_STATE","rdi":{"value":105553156592904}},"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":8},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":291891,"symbol":"WaitOnCondition","symbolLocation":49,"imageIndex":27},{"imageOffset":946183,"symbol":"FigSemaphoreWaitRelative","symbolLocation":151,"imageIndex":27},{"imageOffset":625521,"symbol":"faq_enqueueSourceDataThread","symbolLocation":28,"imageIndex":24},{"imageOffset":294686,"symbol":"figThreadMain","symbolLocation":237,"imageIndex":27},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428822,"name":"com.apple.coremedia.audiomentor","threadState":{"r13":{"value":6601364735744},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":105553156550664},"rsi":{"value":6601364735744},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":1536},"r10":{"value":0},"r9":{"value":65704},"r15":{"value":1536},"rbx":{"value":123145502646272},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":4398589686},"rbp":{"value":123145502644896},"rsp":{"value":123145502644744},"r12":{"value":123145502644768},"rcx":{"value":123145502644744},"flavor":"x86_THREAD_STATE","rdi":{"value":105553156550664}},"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":8},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":291891,"symbol":"WaitOnCondition","symbolLocation":49,"imageIndex":27},{"imageOffset":946183,"symbol":"FigSemaphoreWaitRelative","symbolLocation":151,"imageIndex":27},{"imageOffset":1349253,"symbol":"audioMentorThread","symbolLocation":4612,"imageIndex":24},{"imageOffset":294686,"symbol":"figThreadMain","symbolLocation":237,"imageIndex":27},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428862,"name":"com.apple.audio.toolbox.AUScheduledParameterRefresher","threadState":{"r13":{"value":0},"rax":{"value":14},"rflags":{"value":515},"cpu":{"value":0},"r14":{"value":105553178134328},"rsi":{"value":105553140389024},"r8":{"value":105553140388992},"cr2":{"value":0},"rdx":{"value":6},"r10":{"value":0},"r9":{"value":53},"r15":{"value":0},"rbx":{"value":105553178134273},"trap":{"value":133},"err":{"value":16777252},"r11":{"value":515},"rip":{"value":4398578374},"rbp":{"value":123145514987376},"rsp":{"value":123145514987336},"r12":{"value":0},"rcx":{"value":123145514987336},"flavor":"x86_THREAD_STATE","rdi":{"value":45067}},"frames":[{"imageOffset":2758,"symbol":"semaphore_wait_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":62748,"symbol":"caulk::semaphore::timed_wait(double)","symbolLocation":158,"imageIndex":18},{"imageOffset":91750,"symbol":"caulk::concurrent::details::worker_thread::run()","symbolLocation":30,"imageIndex":18},{"imageOffset":91834,"symbol":"void* caulk::thread_proxy<std::__1::tuple<caulk::thread::attributes, void (caulk::concurrent::details::worker_thread::*)(), std::__1::tuple<caulk::concurrent::details::worker_thread*>>>(void*)","symbolLocation":41,"imageIndex":18},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":428871,"frames":[{"imageOffset":6196,"symbol":"start_wqthread","symbolLocation":0,"imageIndex":9}],"threadState":{"r13":{"value":0},"rax":{"value":0},"rflags":{"value":512},"cpu":{"value":0},"r14":{"value":0},"rsi":{"value":0},"r8":{"value":278532},"cr2":{"value":0},"rdx":{"value":123145514999808},"r10":{"value":0},"r9":{"value":18446744073709551615},"r15":{"value":0},"rbx":{"value":0},"trap":{"value":0},"err":{"value":0},"r11":{"value":0},"rip":{"value":4398094388},"rbp":{"value":0},"rsp":{"value":123145515524096},"r12":{"value":0},"rcx":{"value":0},"flavor":"x86_THREAD_STATE","rdi":{"value":123145515524096}}},{"id":429086,"name":"com.apple.audio.IOThread.client","threadState":{"r13":{"value":17179869187},"rax":{"value":268451845},"rflags":{"value":518},"cpu":{"value":0},"r14":{"value":581723255472128},"rsi":{"value":17179869187},"r8":{"value":21474836480},"cr2":{"value":0},"rdx":{"value":103079215123},"r10":{"value":119047},"r9":{"value":581723255472128},"r15":{"value":32},"rbx":{"value":123145489243856},"trap":{"value":133},"err":{"value":16777263},"r11":{"value":518},"rip":{"value":4398578506},"rbp":{"value":123145489243072},"rsp":{"value":123145489242968},"r12":{"value":119047},"rcx":{"value":123145489242968},"flavor":"x86_THREAD_STATE","rdi":{"value":123145489243856}},"frames":[{"imageOffset":2890,"symbol":"mach_msg2_trap","symbolLocation":10,"imageIndex":8},{"imageOffset":63236,"symbol":"mach_msg2_internal","symbolLocation":83,"imageIndex":8},{"imageOffset":31683,"symbol":"mach_msg_overwrite","symbolLocation":574,"imageIndex":8},{"imageOffset":3643,"symbol":"mach_msg","symbolLocation":19,"imageIndex":8},{"imageOffset":1062833,"symbol":"HALC_ProxyIOContext::IOWorkLoop()","symbolLocation":7325,"imageIndex":28},{"imageOffset":1053789,"symbol":"invocation function for block in HALC_ProxyIOContext::HALC_ProxyIOContext(unsigned int, unsigned int)","symbolLocation":139,"imageIndex":28},{"imageOffset":1995567,"symbol":"HALC_IOThread::Entry(void*)","symbolLocation":73,"imageIndex":28},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]},{"id":429102,"name":"AQConverterThread","threadState":{"r13":{"value":4294967552},"rax":{"value":260},"rflags":{"value":583},"cpu":{"value":0},"r14":{"value":4409249192},"rsi":{"value":4294967552},"r8":{"value":0},"cr2":{"value":0},"rdx":{"value":0},"r10":{"value":0},"r9":{"value":160},"r15":{"value":0},"rbx":{"value":123145499963392},"trap":{"value":133},"err":{"value":33554737},"r11":{"value":582},"rip":{"value":4398589686},"rbp":{"value":123145499963104},"rsp":{"value":123145499962952},"r12":{"value":123145499962976},"rcx":{"value":123145499962952},"flavor":"x86_THREAD_STATE","rdi":{"value":4409249192}},"frames":[{"imageOffset":14070,"symbol":"__psynch_cvwait","symbolLocation":10,"imageIndex":8},{"imageOffset":25262,"symbol":"_pthread_cond_wait","symbolLocation":988,"imageIndex":9},{"imageOffset":111962,"symbol":"CADeprecated::CAGuard::Wait()","symbolLocation":68,"imageIndex":29},{"imageOffset":865905,"symbol":"AQConverterManager::AQConverterThread::ConverterThreadEntry(void*)","symbolLocation":397,"imageIndex":26},{"imageOffset":36705,"symbol":"CADeprecated::CAPThread::Entry(void*)","symbolLocation":77,"imageIndex":29},{"imageOffset":24069,"symbol":"_pthread_start","symbolLocation":115,"imageIndex":9},{"imageOffset":6231,"symbol":"thread_start","symbolLocation":15,"imageIndex":9}]}],
  "usedImages" : [
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4545196032,
    "size" : 634880,
    "uuid" : "6b5ca9e7-21aa-36e9-9006-99ad808b943b",
    "path" : "\/usr\/lib\/dyld",
    "name" : "dyld"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4398022656,
    "CFBundleShortVersionString" : "1.0.2",
    "CFBundleIdentifier" : "com.puttiq.app",
    "size" : 20480,
    "uuid" : "92741c8c-ee29-3d3c-b6c7-e7d51b7fc1a0",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/PuttIQ",
    "name" : "PuttIQ",
    "CFBundleVersion" : "5"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4442124288,
    "size" : 12812288,
    "uuid" : "47649f10-b662-3867-a0c9-959c8649d88e",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/PuttIQ.debug.dylib",
    "name" : "PuttIQ.debug.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4546359296,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "react-native.React",
    "size" : 14499840,
    "uuid" : "1a3b4fdc-96f1-3db2-a758-e3220b1af4cd",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/Frameworks\/React.framework\/React",
    "name" : "React",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4403765248,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "third-party.ReactNativeDependencies",
    "size" : 1286144,
    "uuid" : "e2523555-296f-39cb-9522-4e969e06057c",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/Frameworks\/ReactNativeDependencies.framework\/ReactNativeDependencies",
    "name" : "ReactNativeDependencies",
    "CFBundleVersion" : "1"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4422172672,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "org.webrtc.WebRTC",
    "size" : 14065664,
    "uuid" : "4c4c4419-5555-3144-a16a-e7fef0b4069c",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/Frameworks\/WebRTC.framework\/WebRTC",
    "name" : "WebRTC",
    "CFBundleVersion" : "1.0.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4414513152,
    "CFBundleShortVersionString" : "0.12.0",
    "CFBundleIdentifier" : "dev.hermesengine.iphonesimulator",
    "size" : 3940352,
    "uuid" : "2b6f6730-5ae7-312c-a0b3-c6db8fa2f322",
    "path" : "\/Users\/USER\/Library\/Developer\/CoreSimulator\/Devices\/A077A522-64C5-482C-A9A1-68A6D5846859\/data\/Containers\/Bundle\/Application\/EC79AA4F-D5B8-487B-9038-0E876FA86150\/PuttIQ.app\/Frameworks\/hermes.framework\/hermes",
    "name" : "hermes",
    "CFBundleVersion" : "0.12.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4398473216,
    "size" : 40960,
    "uuid" : "78c9dcc0-2fba-3be4-a1dd-da618362ae68",
    "path" : "\/usr\/lib\/system\/libsystem_platform.dylib",
    "name" : "libsystem_platform.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4398575616,
    "size" : 249856,
    "uuid" : "482d57d2-374a-3244-84d0-d09d58d29b2e",
    "path" : "\/usr\/lib\/system\/libsystem_kernel.dylib",
    "name" : "libsystem_kernel.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4398088192,
    "size" : 49152,
    "uuid" : "a031f066-4daa-3801-9155-88106d874835",
    "path" : "\/usr\/lib\/system\/libsystem_pthread.dylib",
    "name" : "libsystem_pthread.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 4403531776,
    "size" : 53248,
    "uuid" : "406433db-3988-3924-906b-3d3a35ad422d",
    "path" : "\/Volumes\/VOLUME\/*\/libobjc-trampolines.dylib",
    "name" : "libobjc-trampolines.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703171084288,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.CoreFoundation",
    "size" : 3748998,
    "uuid" : "8248037d-078a-359c-bcb5-53553f176d4e",
    "path" : "\/Volumes\/VOLUME\/*\/CoreFoundation.framework\/CoreFoundation",
    "name" : "CoreFoundation",
    "CFBundleVersion" : "4109.1.101"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703505543168,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.GraphicsServices",
    "size" : 30691,
    "uuid" : "927942fa-ea36-36ce-b668-e5284a7a03ce",
    "path" : "\/Volumes\/VOLUME\/*\/GraphicsServices.framework\/GraphicsServices",
    "name" : "GraphicsServices",
    "CFBundleVersion" : "1.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703258288128,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.UIKitCore",
    "size" : 41721605,
    "uuid" : "d7c41e4c-be75-3328-ad32-e21679883490",
    "path" : "\/Volumes\/VOLUME\/*\/UIKitCore.framework\/UIKitCore",
    "name" : "UIKitCore",
    "CFBundleVersion" : "9126.1.12.1.112"
  },
  {
    "size" : 0,
    "source" : "A",
    "base" : 0,
    "uuid" : "00000000-0000-0000-0000-000000000000"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703175335936,
    "CFBundleShortVersionString" : "6.9",
    "CFBundleIdentifier" : "com.apple.Foundation",
    "size" : 15296754,
    "uuid" : "cabb2e73-bcf6-3733-94ec-9a494f1386de",
    "path" : "\/Volumes\/VOLUME\/*\/Foundation.framework\/Foundation",
    "name" : "Foundation",
    "CFBundleVersion" : "4109.1.101"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703252967424,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.CFNetwork",
    "size" : 3694251,
    "uuid" : "1769872e-c7d2-3cce-852e-eb1809bd1310",
    "path" : "\/Volumes\/VOLUME\/*\/CFNetwork.framework\/CFNetwork",
    "name" : "CFNetwork",
    "CFBundleVersion" : "3860.200.71"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703170363392,
    "size" : 565152,
    "uuid" : "6eb7e9aa-5cd3-38b7-ba11-d1cbb01cb25c",
    "path" : "\/Volumes\/VOLUME\/*\/libc++.1.dylib",
    "name" : "libc++.1.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140711741513728,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.audio.caulk",
    "size" : 149392,
    "uuid" : "b26a775a-8e7e-3d1f-ba26-a88533caf08f",
    "path" : "\/Volumes\/VOLUME\/*\/caulk.framework\/caulk",
    "name" : "caulk"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140712183087104,
    "size" : 34948,
    "uuid" : "eb8ac542-8b85-393e-aefc-fd56257f6948",
    "path" : "\/Volumes\/VOLUME\/*\/libunwind.dylib",
    "name" : "libunwind.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703170232320,
    "size" : 93696,
    "uuid" : "86ba4394-07f5-3404-816e-424a71dc7581",
    "path" : "\/Volumes\/VOLUME\/*\/libc++abi.dylib",
    "name" : "libc++abi.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703167483904,
    "size" : 242081,
    "uuid" : "dc15cae5-cb5f-3fc2-af53-0a19a00c631e",
    "path" : "\/Volumes\/VOLUME\/*\/libobjc.A.dylib",
    "name" : "libobjc.A.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140712203169792,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.audio.AVFAudio",
    "size" : 1451446,
    "uuid" : "dc6941f2-9ffb-3b32-a146-ce8ac4cb2b93",
    "path" : "\/Volumes\/VOLUME\/*\/AVFAudio.framework\/AVFAudio",
    "name" : "AVFAudio"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703168892928,
    "size" : 279226,
    "uuid" : "9440b7c8-64b5-3d3f-9813-034efb2d84f1",
    "path" : "\/Volumes\/VOLUME\/*\/libdispatch.dylib",
    "name" : "libdispatch.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703497150464,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.MediaToolbox",
    "size" : 8392472,
    "uuid" : "9f2a1d1a-8bdb-39ab-a553-ffaff931832f",
    "path" : "\/Volumes\/VOLUME\/*\/MediaToolbox.framework\/MediaToolbox",
    "name" : "MediaToolbox",
    "CFBundleVersion" : "3285.11.1.4"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703168339968,
    "size" : 551216,
    "uuid" : "1b21365a-210e-3a59-a8a9-e7300ac31e67",
    "path" : "\/Volumes\/VOLUME\/*\/libsystem_c.dylib",
    "name" : "libsystem_c.dylib"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703542390784,
    "CFBundleShortVersionString" : "1.8",
    "CFBundleIdentifier" : "com.apple.audio.toolbox.AudioToolbox",
    "size" : 1603485,
    "uuid" : "c9b327c7-3704-32fe-9139-e4bbde0253f9",
    "path" : "\/Volumes\/VOLUME\/*\/AudioToolbox.framework\/AudioToolbox",
    "name" : "AudioToolbox",
    "CFBundleVersion" : "1.8"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703394017280,
    "CFBundleShortVersionString" : "1.0",
    "CFBundleIdentifier" : "com.apple.CoreMedia",
    "size" : 1477547,
    "uuid" : "d2d15d79-d709-3310-b00e-98f3054458c3",
    "path" : "\/Volumes\/VOLUME\/*\/CoreMedia.framework\/CoreMedia",
    "name" : "CoreMedia",
    "CFBundleVersion" : "3285.11.1.4"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703208935424,
    "CFBundleShortVersionString" : "5.0",
    "CFBundleIdentifier" : "com.apple.audio.CoreAudio",
    "size" : 4493623,
    "uuid" : "78fdf6c4-b531-35dc-b3ed-f6db95a7f911",
    "path" : "\/Volumes\/VOLUME\/*\/CoreAudio.framework\/CoreAudio",
    "name" : "CoreAudio",
    "CFBundleVersion" : "5.0"
  },
  {
    "source" : "P",
    "arch" : "x86_64",
    "base" : 140703543996416,
    "size" : 134656,
    "uuid" : "8c6f8fb4-3422-3653-bdaa-4ba6ed319dbe",
    "path" : "\/Volumes\/VOLUME\/*\/libAudioToolboxUtility.dylib",
    "name" : "libAudioToolboxUtility.dylib"
  }
],
  "sharedCache" : {
  "base" : 140703128616960,
  "size" : 25769803776,
  "uuid" : "ca87a3cd-9e94-3698-bf85-b302c8c429eb"
},
  "vmSummary" : "ReadOnly portion of Libraries: Total=1.3G resident=0K(0%) swapped_out_or_unallocated=1.3G(100%)\nWritable regions: Total=809.4M written=0K(0%) resident=0K(0%) swapped_out=0K(0%) unallocated=809.4M(100%)\n\n                                VIRTUAL   REGION \nREGION TYPE                        SIZE    COUNT (non-coalesced) \n===========                     =======  ======= \nAccelerate framework               128K        1 \nActivity Tracing                   256K        1 \nAttributeGraph Data               1024K        1 \nCG raster data                    20.8M       36 \nColorSync                            4K        1 \nCoreAnimation                     1384K       54 \nCoreMedia HTTP cache              6048K       75 \nFoundation                          16K        1 \nImage IO                            64K        2 \nKernel Alloc Once                    8K        1 \nMALLOC                           747.7M      114 \nMALLOC guard page                   48K       12 \nMALLOC_LARGE (reserved)            512K        1         reserved VM address space (unallocated)\nSQLite page cache                  384K        3 \nSTACK GUARD                       56.1M       35 \nStack                             25.8M       35 \nVM_ALLOCATE                       13.4M       21 \nVM_ALLOCATE (media)               10.0M        1 \nVM_ALLOCATE (reserved)             784K        2         reserved VM address space (unallocated)\n__DATA                            41.7M      795 \n__DATA_CONST                      96.5M      817 \n__DATA_DIRTY                        39K       16 \n__FONT_DATA                        2352        1 \n__LINKEDIT                       240.8M       13 \n__OBJC_RO                         64.6M        1 \n__OBJC_RW                         2866K        1 \n__TEXT                             1.1G      832 \n__TPRO_CONST                         8K        2 \ndyld private memory               27.9G       41 \nmapped file                      209.5M       33 \nshared memory                     1240K        4 \n===========                     =======  ======= \nTOTAL                             30.5G     2953 \nTOTAL, minus reserved VM space    30.5G     2953 \n",
  "legacyInfo" : {
  "threadTriggered" : {
    "queue" : "expo.modules.AsyncFunctionQueue"
  }
},
  "logWritingSignature" : "6bfa96fadf1c6b5f90a861d520fa454a1ece3950",
  "trialInfo" : {
  "rollouts" : [
    {
      "rolloutId" : "6410af69ed1e1e7ab93ed169",
      "factorPackIds" : {

      },
      "deploymentId" : 240000011
    },
    {
      "rolloutId" : "67d07cd6a7affa169ae21f45",
      "factorPackIds" : {

      },
      "deploymentId" : 240000002
    }
  ],
  "experiments" : [

  ]
}
}

Model: MacBookPro15,1, BootROM 2094.40.1.0.0 (iBridge: 23.16.12028.5.4,0), 6 processors, 6-Core Intel Core i7, 2.2 GHz, 16 GB, SMC 
Graphics: Intel UHD Graphics 630, Intel UHD Graphics 630, Built-In
Graphics: Radeon Pro 555X, Radeon Pro 555X, PCIe, 4 GB
Display: Color LCD, 2880 x 1800 Retina, Main, MirrorOff, Online
Display: Z1, 1920 x 1080 (1080p FHD - Full High Definition), MirrorOff, Online
Memory Module: BANK 0/ChannelA-DIMM0, 8 GB, DDR4, 2400 MHz, SK Hynix, HMA81GS6AFR8N-UH
Memory Module: BANK 2/ChannelB-DIMM0, 8 GB, DDR4, 2400 MHz, SK Hynix, HMA81GS6AFR8N-UH
AirPort: spairport_wireless_card_type_wifi (0x14E4, 0x7BF), wl0: Jul 26 2024 22:09:35 version 9.30.514.0.32.5.94 FWID 01-47278712
AirPort: 
Bluetooth: Version (null), 0 services, 0 devices, 0 incoming serial ports
Network Service: Wi-Fi, AirPort, en0
USB Device: USB31Bus
USB Device: T2Bus
USB Device: Touch Bar Backlight
USB Device: Touch Bar Display
USB Device: Apple Internal Keyboard / Trackpad
USB Device: Headset
USB Device: Ambient Light Sensor
USB Device: FaceTime HD Camera (Built-in)
USB Device: Apple T2 Controller
Thunderbolt Bus: MacBook Pro, Apple Inc., 47.5
Thunderbolt Bus: MacBook Pro, Apple Inc., 47.5
