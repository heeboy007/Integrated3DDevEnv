# Integrated 3D Development Environment(Template)

## Originally : React Native Animation

- Original [Git Repo](https://github.com/Rakha112/react-native-animation/) is here.
I ruined the git during the dev process, and failed to fork. But be sure to check on him!

## Available Tutorials(Not Mine)

<details>
    <summary>Tutorials</summary>
  
  This repository is a collection of results from the React Native Animation Tutorial on his YouTube Channel [Rakha Wibowo](https://www.youtube.com/@rakhawibowo) 
  
- [React Native Custom Switch Using Reanimated 2](https://youtu.be/qDI5SQAb0vI)
- [React Native Custom Animated Check Box Component Using SVG and Reanimated 2](https://youtu.be/8aax8SU0F2w)
- [React Native Custom Image Carousel with Pagination and Auto Play using Reanimated 2](https://youtu.be/1XDMJI93p0I)
- [React Native Bottom Sheet with Back Drop from Scratch using Reanimated 2 and Gesture Handler](https://youtu.be/r_cng3a6K70)
- [React Native Custom Range Slider using Reanimated 2](https://youtu.be/sZ0BDG9PAd4)
- [React Native FlatList Grid or FlatList Columns With Reveal Animation Using Moti](https://youtu.be/wFHPaBugFsQ)
- [React Native Onboarding Screen Using Reanimated 2](https://youtu.be/b9uLJJ3aNjU)
- [React Native Custom Swipeable Toast From Scratch](https://youtu.be/M2v7vsHcjHk)
- [React Native Stack Carousel](https://youtu.be/nmcsDXwUDlI)
- [React Native Accordion](https://youtu.be/qjsNgjXxK24)
- [React Native Floating Action Button](https://youtu.be/CSQLCAx-tG0)
- [React Native Onboarding Screen ( Change Color ) Using Reanimated](https://youtu.be/E-y4lCQF6_I)
- [React Native 3D Onboarding Screen Using Reanimated and React Three Fiber](https://youtu.be/zs-K4AMRoa0)
- [React Native Scrollable Bottom Sheet with Back Drop using Reanimated and Gesture Handler](https://youtu.be/kWrC4i0DorE)
- [React Native 3D Loading 3D Model Using React Three Fiber and Drei](https://youtu.be/O8q8H9c9XZ4)
- [React Native 3D Character With Animation](https://youtu.be/SP0O5o9BJVA)
- [React Native Shared Element Transition With Reanimated 3](https://youtu.be/fNIIaUUac7k)
- [React Native Custom Drawer With Reanimated 3 and Gesture Handler From Scratch](https://youtu.be/bwHh-qTjU1g)
- [React Native Animated Donut Chart using Reanimated 3 and Skia](https://youtu.be/Zgz1baxJslg)
- [React Native Animated Circular Progress Bar With Reanimated 3 and Skia](https://youtu.be/Uohkd-cef8E)
- [React Native Onboarding Screen (Masking) With Reanimated 3 and Skia](https://youtu.be/XYbVTgDym-U)
- [React Native 3D Shop App UI With React Three Fiber - ThreeJs](https://youtu.be/quVWBfqwPBA)
- [React Native Carousel With Pagination, Auto Play and Infinite Loop](https://youtu.be/iqBJ1021m0s)
- [React Native Dark Mode Switch](https://youtu.be/18Gzlh_HTRw)
- [React Native Animated Onboarding Screen (Inspired By Cuberto)](https://youtu.be/lcqS8uSpHLI)
- [React Native Card Swipe With Reanimated And Gesture Handler From Scratch](https://youtu.be/-JoQ5Y_unl8)
- [React Native Bar Chart With Skia And Reanimated From Scratch](https://youtu.be/vIuPJ_KDEz4)
- [React Native Custom Carousel with Reanimated 3](https://youtu.be/5OkYf2yyrXs)
- [React Native Line Chart With Reanimated 3, Skia and D3 From Scratch!!!](https://youtu.be/Wk51crQuqv4)
  
</details>

## Dependency Version

- [React Native](https://reactnative.dev/)
- [Reanimated](https://docs.swmansion.com/react-native-reanimated/)
- [React Native Gesture Handler](https://docs.swmansion.com/react-native-gesture-handler/docs/)
- [React Native Skia](https://shopify.github.io/react-native-skia/)
- [React Three Fiber](https://github.com/lottie-react-native/lottie-react-native)
- [Moti](https://moti.fyi/)
- [Lottie](https://github.com/lottie-react-native/lottie-react-native)
- [D3](https://d3js.org/)

The version used in this repository:

- React Native v0.73.6
- React Native Web v0.19.6
- Reanimated v3.6.2
- React Native Gesture Handler v2.14.0
- Moti v0.28.1
- Lottie v6.7.0
- React Three Fiber v8.16.1
- React Three Drei v9.105.3
9.103.1 doesn't go well with android, ios, web, had to upgrade.
- Three.js v0.162.0
- Skia v1.0.5
- D3 v7.9.0
- React Native Bars v2.4.3
This is implemented ONLY for Android Edge-To-Edge Theme, which is every easy to use on AndroidManifest.xml

Example checks :
✅ : Everything is ok
🔶 : Partial support, bug exists.
🚫 : Straight up crahes
🕐 : Not Tested Yet.

| No.            | Android       | iOS           | Web            |
| -------------- | ------------- | ------------- | -------------- |
| 1 | ✅ | ✅ | ✅ |
| 2 | ✅ | ✅ | 🔶 |
| 3 | ✅ | ✅ | ✅ |
| 4 | ✅ | ✅ | 🔶 |
| 5 | ✅ | ✅ | 🔶 |
| 6 | ✅ | ✅ | 🔶 |
| 7 | ✅ | ✅ | 🔶 |
| 8 | ✅ | ✅ | 🔶 |
| 9 | ✅ | ✅ | 🔶 |
| 10 | ✅ | 🕐 | 🔶 |
| 11 | ✅ | 🕐 | 🚫 |
| 12 | ✅ | 🕐 | 🕐 |
| 13 | ✅ | 🕐 | 🕐 |
| 14 | ✅ | 🕐 | 🕐 |
| 15 | ✅ | ✅ | 🕐 |
| 16 | ✅ | ✅ | 🕐 |
| 17 | ✅ | ✅ | 🚫 |
| 18 | ✅ | 🔶 | 🚫 |
| 19 | ✅ | 🕐 | 🕐 |
| 20 | ✅ | 🕐 | 🕐 |
| 21 | ✅ | 🕐 | 🕐 |
| 22 | ✅ | 🕐 | 🕐 |
| 23 | ✅ | 🕐 | 🕐 |
| 24 | ✅ | 🕐 | 🕐 |
| 25 | ✅ | 🕐 | 🕐 |
| 26 | ✅ | 🕐 | 🕐 |
| 27 | ✅ | 🕐 | 🕐 |
| 28 | ✅ | 🕐 | 🕐 |
| 29 | ✅ | 🕐 | 🕐 |
| 30 | ✅ | 🕐 | 🕐 |
| 31 | ✅ | 🕐 | 🕐 |
| 32 | ✅ | 🕐 | 🕐 |

## Run Locally

Clone the project

```bash
git clone https://github.com/heeboy007/Integrated3DDevEnv.git
cd Integrated3DDevEnv
```

Install dependencies

```bash
npm install
```
or maybe this, if you prefer it this way.
```bash
npx expo install
```

For iOS, extra steps : (if you have mac)
```bash
npx pod-install
```

Start the server(for native builds for android or ios)
```bash
npm run native
```
you can press a or i after this to build out apps by react-native's internal build method.

#### Run on IOS

```bash
npm run ios
```
Disclaimer : I've never tested on react-native by xcode, since i don't have mac on my hands now.
But you could still try physical testing on expo go.

```bash
npm start
```
to start up the expo server, and download Expo Go on your testing device,
scan it, then you can test the app for ios.

#### Run on ANDROID

```bash
npm run android
```

#### Run on Web

```bash
npm run webpack
```
i've managed to bundle the whole thing by webpack, but it's very buggy for now.



## Preview

Web Version(Ubuntu, webpack, chrome)
![image](https://github.com/heeboy007/Integrated3DDevEnv/assets/41155496/5ba456d2-cd33-4183-9582-8b650eff60d3)

iOS Version(Physical, iPad Air gen 5, expo go)
![image](https://github.com/heeboy007/Integrated3DDevEnv/assets/41155496/32684b23-b764-41ea-ac3b-22f922756af6)

Android version(Physical, SM-A805N, os version 11)
![Screenshot_20240429-013055_ReactNativeAnimation.jpg](https://github.com/heeboy007/Integrated3DDevEnv/assets/41155496/10022775-84b3-4eae-82fa-adc2772615df)


