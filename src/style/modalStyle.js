import { StyleSheet } from 'react-native';

// Styling the modals
modalStyle = StyleSheet.create({
  // Colors used:
    colorTextTrigger:{
      color:"#D66075",
    },
  // Modals that are used as creating pages:
    modal: {
        height:"100%",
        width:"100%",
        backgroundColor: "#000000",
        alignItems: "center", 
      },
    title:{
        position:"absolute",
        color:"white",
        fontSize: 17,
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: "600",
        lineHeight: 22,
        letterSpacing: 0.374,
        top:"5%",
        marginHorizontal:15,
    },
    textSupRight:{ // next
        position:"absolute",
        top:"5%",
        fontWeight: "600",
        fontSize: 17,
        right:"5%",
    },
    textSupLeft:{ // back
        position:"absolute",
        top:"5%",
        fontWeight: "600",
        fontSize: 17,
        left:"10%",
        lineHeight: 22,
      },
    leftIcon:{ // backIcon
        position: "absolute", 
        top: "5%",
        left:"5%"
    },
    subtitle:{ // when
        fontWeight: "bold",
        fontSize: 22,
        lineHeight: 28,
        letterSpacing: 0.352,
        color: "#FFFFFF",
        position:"absolute",
        top:"15%",
        left:"10%"
      },
      instructions:{
        position:"absolute",
        width: 343,
        top:"22%",
        left:"10%",
        fontFamily: "Barlow",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: 17,
        lineHeight: 22,
        letterSpacing: -0.408,
        color: "rgba(255, 255, 255, 0.55)",
      },
      button: {
        width: 343,
        height:56,
        paddingVertical:8,
        paddingHorizontal:32,
        backgroundColor:"rgba(214, 96, 117, 0.3)",
        borderRadius:12,
        alignItems:"center",
        justifyContent:"center"
        },
      buttonText: {
        display:"flex",
        flexDirection:"row",
        fontSize:17,
        fontWeight:"600",
        lineHeight:22,
        letterSpacing: -0.408,
      },
})
 export default modalStyle;