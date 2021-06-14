import React from "react";
import {
  View,
  StyleSheet,
  Button,
  Image,
  Text,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

const ShoppingCart = (props) => {
  const Delete = (id) => {
    props.DeleteProduct(id);
  };

  // const clearCart = () => {
  //   props.productList.length = 0;
  // };
  //console.log(props.productList);
  const renderItem = props.productList.map((item, id) => {
    return (
      <View style={styles.card} key={id}>
        <View style={styles.ImageBox}>
          <Image source={item.image} style={styles.image} />
        </View>
        <View style={styles.textBox}>
          <MaterialIcons
            name="cancel-presentation"
            size={20}
            color="red"
            style={styles.cancel}
            onPress={() => Delete(item.id)}
          />
          <Text style={styles.details}>
            Type :<Text style={styles.insideText}> {item.type}</Text>
          </Text>
          <Text style={styles.details}>
            Price:<Text style={styles.insideText}> {item.Price}</Text>
          </Text>
        </View>
      </View>
    );
  });
  return (
    <View>
      <Text style={styles.heading}>Items</Text>
      <View style={styles.buttonClear}>
        <Button
          title="Clear All cart Products"
          color="red"
          onPress={() => props.setProductList((props.productList.length = 0))}
        />
      </View>
      <View style={styles.slider}>
        <ScrollView>{renderItem}</ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "white",
    padding: 15,
    borderColor: "black",
    borderWidth: 1,
    margin: 13,
    height: 140,
  },
  text: {
    backgroundColor: "white",
    color: "red",
    textAlign: "right",
    width: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    paddingHorizontal: 50,
    textAlign: "center",
    paddingTop: 8,
    backgroundColor: "#1eae98",
    color: "white",
    marginBottom: 15,
  },
  ImageBox: {
    borderWidth: 2,
    borderColor: "black",
    width: 110,
    height: 110,
    justifyContent: "center",
    alignItems: "flex-start",
    //padding: 5,
  },
  type: {
    // alignItems: "center",
    //justifyContent: "space-around",
    borderWidth: 2,
    borderColor: "blue",
    height: 90,
    width: 90,
    marginLeft: 90,
    //paddingBottom: 20,
    //marginVertical: 10,
    //paddingHorizontal: 14,
    marginHorizontal: 40,
  },
  details: {
    fontSize: 15,
    fontWeight: "700",
    paddingVertical: 5,
    marginVertical: 5,
    paddingHorizontal: 5,
  },
  image: {
    paddingTop: 20,
    width: "100%",
    height: "100%",
  },
  insideText: {
    fontWeight: "normal",
    marginLeft: 10,
  },
  textBox: {
    //justifyContent: "space-around",
    // borderWidth: 2,
    // borderColor: "blue",
    width: 200,
    height: 110,
    justifyContent: "center",
    //marginVertical: 10,
    marginLeft: 120,
    marginTop: -110,
  },
  slider: {
    height: "75%",
  },
  cancel: {
    marginLeft: 150,
  },
  buttonClear: {
    width: "50%",
    marginLeft: 95,
    marginBottom: 5,
  },
});

export default ShoppingCart;
