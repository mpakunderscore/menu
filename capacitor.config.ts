import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'space.mpak.menu',
  appName: 'menu',
  webDir: 'dist',
  bundledWebRuntime: false,
  backgroundColor: '#FFFFFF',
  plugins: {
    "LocalNotifications": {
      "smallIcon": "ic_stat_logo_favicon",
      "iconColor": "#FFFFFF",
      "sound": "long_sound"
    },
    "SplashScreen": {
      "launchShowDuration": 0
    },
    "PushNotifications": {
      "presentationOptions": ["badge", "sound", "alert"]
    }
  }
};

export default config;
