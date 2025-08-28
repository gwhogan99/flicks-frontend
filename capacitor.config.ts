import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.flicks.app',
  appName: 'Flicks',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    url: "https://flicks-backend-neru.onrender.com",
    cleartext: true
  }
};

export default config;

