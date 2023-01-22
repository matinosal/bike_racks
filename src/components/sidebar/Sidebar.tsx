import React, {
  forwardRef,
  ReactNode,
  useImperativeHandle,
  useState,
} from "react";
import {
  Animated,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from "react-native";
import SidebarBody from "./SidebarBody";
import SidebarHeader from "./SidebarHeader";
import { SidebarProps } from "./SidebarTypes";

const Sidebar: React.FC<SidebarProps> = forwardRef((props, ref) => {
  const { width } = useWindowDimensions();
  const hideWidth = -width;
  const [isHidden, isHiddenSet] = useState<boolean>(true);
  const [bounceValue, bounceValueSet] = useState<Animated.Value>(
    new Animated.Value(hideWidth)
  );

  useImperativeHandle(ref, () => ({
    sidebarAction() {
      toggleSidebar();
    },
  }));

  const toggleSidebar = () => {
    const width = isHidden ? 0 : hideWidth;
    Animated.spring(bounceValue, {
      toValue: width,
      velocity: 3,
      tension: 2,
      friction: 8,
      useNativeDriver: false,
    }).start();

    isHiddenSet(!isHidden);
  };

  const hideSidebar = () => {
    props.onSidebarClose?.();
    toggleSidebar();
  };
  //TODO sprawdzic jak się zachowa slider jak podzieli sie go na 2 kolumny content | pusto <- tu dac klika
  return (
    <Animated.View
      style={[styles.overlay, { transform: [{ translateX: bounceValue }] }]}
    >
      <View style={{ width: `${props.width ?? 80}%` }}>
        <View style={[styles.sidebar]}>
          <SidebarHeader title={props.title} closeSidebar={hideSidebar} />
          <SidebarBody children={props.children} />
        </View>
      </View>
      <View
        style={{
          width: `${props.width ? 100 - props.width : 20}%`,
        }}
      >
        <TouchableOpacity
          style={{ width: "100%", height: "100%" }}
          delayPressIn={1500}
          onPress={() => hideSidebar()}
        />
      </View>
    </Animated.View>
  );
});

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0.0)",
    width: "100%",
    height: "100%",
    top: 0,
    flexDirection: "row",
  },
  sidebar: { height: "100%", backgroundColor: "#fff", position: "relative" },
});
export default Sidebar;
