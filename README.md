# 101DigitalAssessmentProject

List features of the Assessment Project

<!-- START Table of contents -->

- Login/ Logout
- List Invoices
- Search/ Sort/ Refresh Data
- View Details Invoice
- Create Invoice
- E2E Testing (Detox)
 
## Install
- Clone project.
- install packages
  ```sh
  yarn 
  or
  npm i
  ```
- For run android:
  ```sh
  yarn android
  ```
- For run ios:
  ```sh
  cd ios && pod install && cd ..
  yarn ios
  ```
## Run E2E testing with emulator/simulator.
- IOS
  ```sh
  yarn detox-build-ios
  yarn detox-run-ios
  ```
- Android
  - First you need to specify your android emulator name in detox's configurations devices.
  ```ts
   "emulator": {
      "type": "android.emulator",
      "device": {
        "avdName": "Pixel_3_API_29"
      }
    }
  ```
  
 - Then you can build and run test.
  ```sh
  yarn detox-build-android
  yarn detox-run-android
  ```
  
  Output:
  - ios: https://drive.google.com/file/d/1SyTI3_-uofK6AA3M3sy8qEVojueiR906/view?usp=sharing.
  - android: https://drive.google.com/file/d/1SQCqs2Vy0e7B2GfIbo7FEVh658hsvpih/view?usp=sharing.
