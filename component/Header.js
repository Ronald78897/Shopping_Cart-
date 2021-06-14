import React, { useState } from "react";
import { StyleSheet, Text, View, Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import ShoppingCart from "../Screens/ShoppingScreen";

const Header = (props) => {
  const [cartItems, setCartItems] = useState(0);

  // const hello = () => {
  //   console.log("hello");
  // };

  const cartItem = () => {
    if (props.itemLength === 0) {
      Alert.alert("Empty Cart", "buy product to fill your cart  ", [
        {
          text: "OK",
          style: "default",
          onPress: () => console.log("OK Pressed"),
        },
      ]);
    } else {
      props.setSelectedProduct(props.productList);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.Icon}>
        <AntDesign
          name="left"
          size={20}
          color="black"
          onPress={props.IconSelect}
        />
        <Text style={styles.text}>Hi-Fi Shop & Services </Text>
        <View style={styles.cartContainer}>
          <Text style={styles.textforcart}>{props.itemLength}</Text>
          <AntDesign
            name="shoppingcart"
            size={20}
            color="black"
            style={styles.cartStyle}
            onPress={() => cartItem()}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: "center",
    // justifyContent: "flex-start",
    backgroundColor: "#0a81ab",
    width: "100%",
    paddingTop: 60,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  text: {
    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "bold",
    color: "rgb(56, 209, 110)",
    textDecorationLine: "underline",
    marginBottom: 15,
    // paddingBottom: 20,
  },

  Icon: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "flex-start",
    width: "120%",
    marginTop: 10,
    padding: 10,
    height: 50,
    marginBottom: 30,
  },

  textforcart: {
    fontSize: 10,
    color: "white",
    textAlign: "center",
  },
  cartStyle: {
    // padding: 1,
    //paddingBottom: 3,
  },
  cartContainer: {
    height: 40,
    marginTop: -7,
  },
});

export default Header;
