# react-native-airplay-module

AirPlay library for React Native

## Installation with Automatic Linking

```js
npm i react-native-airplay-module --save
react-native link
```

Check the [example](https://github.com/Spicy-Sparks/react-native-airplay-module/blob/main/Example/App.js) project

Make sure to enable Swift support in your project, if you haven't done it yet.
Xcode -> New file -> Swift file -> Create bridging headers

### How to create listeners

```js
import { AirPlayListener, AirPlay } from react-native-airplay-module

AirPlay.startScan()

this.deviceConnected = AirPlayListener.addListener(
  'deviceConnected',
  ({ connected, mirroring, devices }) => this.setState({
    devices,
    connected,
    mirroring
  })
); --> returns a boolean

this.deviceConnected.remove();
```

The result is an object that contains information about currently connected audio output(s):

```js
{
  devices: [{
    deviceName: "Some Bluetooth Headphones Model",
    portType: "BluetoothA2DPOutput",
    isHeadphones: true
  }],
  connected: true,
  mirroring: false
}

// or
{
  devices: [{
    deviceName: "Speakers",
    portType: "Speakers",
    isHeadphones: false
  }],
  connected: true,
  mirroring: false
}

// or
{
  devices: [{
    deviceName: "Andrey’s Apple TV",
    portType: "AirPlay",
    isHeadphones: false
  }],
  connected: true,
  mirroring: true
}
```

> Note: Probably it could just be an object, but internally AVAudioSessionRouteDescription returns array, so there _might_ be a case when there is more than one device connected at the time.

## Methods

```js
AirPlay.startScan();

AirPlay.disconnect();
```

## Author

Original author of the library:

Nadia Dillon

Modifications:

Andrey Efremov (gazedash)

Spicy Sparks

## Contributing

Pull requests are welcome!
