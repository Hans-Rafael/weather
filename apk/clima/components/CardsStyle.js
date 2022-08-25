import { StyleSheet } from 'react-native';
const styles = StyleSheet.create({
  
  MainContainer: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#13245F", //blue
    //backgroundColor: "#000",
    alignItems: "center",
    width: "100%",
  },
    container: {
      marginTop: 20,
      marginBottom: 20,
      marginLeft: "auto",
      marginRight: "auto",
      height: 400,
      width: 200,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "#2A75B34f", //blue
      padding: 10,
      borderRadius: 10,
      elevation: 20,
    },
    image: {
      width: 100,
      height: 100,
      borderRadius: 50,
      borderColor: "#F3D403", //yellow
      borderWidth: 5,
    },
    font: {
      color: "#850707", //color rojo
      fontWeight: "bold",
      fontSize: 20,
    },
    fontNumber: {
      color: '#850707',
      fontWeight: "bold",
    },
  });
  export {styles};  