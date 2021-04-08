# react-native-airplay

AirPlay library for React Native

## Installation with Automatic Linking

```js
npm i react-native-airplay-module --save
react-native link
```

Check the [example](https://github.com/Spicy-Sparks/react-native-airplay/blob/master/Example/App.js) project

Make sure to enable Swift support in your project, if you haven't done it yet.
Xcode -> New file -> Swift file -> Create bridging headers

### How to create listeners

```js
import { AirPlayListener, AirPlay } from react-native-airplay

// Setups native listeners which detect audio output route changes
AirPlay.startScan()

this.airPlayConnected = AirPlayListener.addListener(
  'deviceConnected',
  ({ connected, mirroring, devices }) => this.setState({
    devices,
    connected,
    mirroring
  })
); --> returns a boolean


// Remove Listener in componentWillUnmount
this.deviceConnected.remove();
```

Also you can import `withAirPlayControl` hoc and wrap your view component like so:

```js
import React from "react";
import { View, Text } from "react-native";
import { withAirPlayControl } from "react-native-airplay";

type Device = {
  deviceName: string,
  portName: string,
  isHeadphones: boolean
};

type Props = {
  devices: Device[],
  connected: boolean,
  mirroring: boolean
};

// Shows currently connected audio output devices
export const AirPlayDevices = withAirPlayControl(
  ({ connected, mirroring, devices }: Props) => (
    <View style={{ flex: 1, alignItems: "center" }}>
      <Text>
        {connected} {mirroring}
      </Text>
      {devices.map(device => (
        <Text>
          {device.deviceName} {device.portName} {device.isHeadphones}
        </Text>
      ))}
    </View>
  )
);
```

Devices is an array of objects that contains information about currently connected audio output(s):

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

### Create AirPlay Button

```js
import { AirPlayButton } from "react-native-airplay";
<AirPlayButton
  source={{
    disabled: "",
    normal: "",
    focused: "",
    highlighted: "",
    selected: "",
    imageRenderingMode: "always-original" // or always-template
  }}
/>;
```

Source is optional, as well as the states. You can pass a single state if you want, or don't pass this prop at all.

The string is base64 encoded image.

The size of image is 29x29.

This limitation is due to the fact that AirPlayButton is a native component under the hood. It uses MPVolumeView to show routes button.

> Note: The AirPlay Button does not show in the simulator

## Author

Original author of the library:

Nadia Dillon

Modifications:

Andrey Efremov (gazedash)

Spicy Sparks

## Contributing

Pull requests are welcome!
