import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  Main: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#000",
    alignItems: "center",
    width: "100%",
  },
  Bowl: {
    height: 200,
    width: 200,
    //marginTop: 20,
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: 50,
    borderColor: "#F3D403", //yellow
    borderWidth: 5,
  },
});

export { styles };
