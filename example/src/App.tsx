import React, { Component } from "react"
import { EmitterSubscription, Platform } from "react-native"
import { AirPlay, AirPlayListener } from "react-native-airplay-module"

export default class App extends Component {
  deviceConnected: EmitterSubscription | undefined;

  componentDidMount () {
    if(Platform.OS !== "ios")
      return

    AirPlay.startScan()

    this.deviceConnected = AirPlayListener.addListener(
      'deviceConnected',
      ({ connected, mirroring, devices }) => this.setState({
        devices,
        connected,
        mirroring
      })
    )
  }

  componentWillUnmount () {
    this.deviceConnected && this.deviceConnected.remove()
  }

  render() {
    return null
  }
}
