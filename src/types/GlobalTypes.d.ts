import { StyleProp, ViewStyle } from "react-native";

export interface AuthToken {
  value?: string;
}

export type CustomComponentWrapperStyle = {
  style?: StyleProp<ViewStyle>;
};
