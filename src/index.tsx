import {
  NativeModules,
  NativeEventEmitter,
} from "react-native"

const { AirplayModule } = NativeModules

export const AirPlay = AirplayModule

export const AirPlayListener = new NativeEventEmitter(AirplayModule)
