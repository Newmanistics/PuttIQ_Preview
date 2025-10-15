const { withInfoPlist } = require('@expo/config-plugins');

function withIOSAudioSession(config) {
  // Add background audio capability (already in app.json but ensuring it's there)
  config = withInfoPlist(config, (config) => {
    const backgroundModes = config.modResults.UIBackgroundModes || [];
    if (!backgroundModes.includes('audio')) {
      backgroundModes.push('audio');
    }
    config.modResults.UIBackgroundModes = backgroundModes;
    
    // Add microphone usage description
    config.modResults.NSMicrophoneUsageDescription = 
      config.modResults.NSMicrophoneUsageDescription || 
      'This app needs microphone access to detect putting timing.';
    
    return config;
  });

  return config;
}

module.exports = withIOSAudioSession;
