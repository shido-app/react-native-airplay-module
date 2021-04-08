import {
  NativeModules,
  NativeEventEmitter,
} from "react-native"

const { RNAirplay } = NativeModules

export const AirPlay = RNAirplay

export const AirPlayListener = new NativeEventEmitter(RNAirplay)
