import React from "react";
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { dev_config } from "../../../dev-config";
import CommonButton from "../common/button/CommonButton";
import { UserEditProps } from "./UserInfoTypes";

const UserInfoEdit: React.FC<UserEditProps> = (props) => {
  const cancelEdit = () => {
    props.changeEditMode(false);
  };

  const saveData = () => {};

  return (
    <SafeAreaView>
      <KeyboardAwareScrollView>
        <View style={styles.container}>
          <View style={styles.editUserImage}>
            <Text style={[styles.editText, styles.marginBottom]}>
              Click on image to change it!
            </Text>
            <View style={styles.userImageContainer}>
              <Image
                source={{
                  uri: `${dev_config.filePath}${props.image}`,
                }}
                style={styles.userImage}
              />
            </View>
          </View>

          <View style={[styles.marginBottom, styles.marginTop]}>
            <Text style={[styles.editText]}>Edit your nickname and bio!</Text>
            <TextInput
              style={[styles.input, styles.oneLineInput]}
              defaultValue={props.username}
            />
            <TextInput
              multiline
              defaultValue={props.bio ?? ""}
              style={[styles.input, styles.multilineInput]}
            />
          </View>
          <View style={[styles.controlsContainer, styles.marginTop]}>
            <CommonButton
              text="Save"
              width={100}
              height={50}
              click={saveData}
            />
            <CommonButton
              text="Cancel"
              width={100}
              height={50}
              click={cancelEdit}
            />
          </View>
        </View>
      </KeyboardAwareScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 30,
    backgroundColor: "#f3f3f3",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  editUserImage: {
    display: "flex",
    alignContent: "center",
    justifyContent: "center",
  },
  editText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 18,
  },
  marginBottom: {
    marginBottom: 20,
  },
  marginTop: {
    marginTop: 20,
  },
  userImageContainer: {
    width: 88,
    height: 88,
    justifyContent: "center",
    alignContent: "stretch",
    borderRadius: 88 / 2,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    alignSelf: "center",
  },
  userImage: {
    width: 88,
    height: 88,
    borderRadius: 88 / 2,
  },
  header: {
    fontSize: 18,
    fontWeight: "bold",
  },
  userBio: {
    marginTop: 10,
    marginBottom: 10,
  },
  controlsContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
  },
  input: {
    marginTop: 20,
    marginBottom: 20,
    height: 40,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
  },
  oneLineInput: {
    height: 40,
  },
  multilineInput: {
    height: 100,
  },
});
export default UserInfoEdit;
