import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#000",
      alignItems: "center",
      width: "100%",
    },
    h1: {
      color: "#008F68",
      fontSize: 40,
    },
    h2: {
      flex: 2,
      marginLeft: "auto",
      marginRight: "auto",
      color: "#FAE042",
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 10,
    },
    logo: {
      height: 250,
      width: 250,
      borderRadius: 50,
      borderWidth: 5,
    },
  });
  
  export {styles};