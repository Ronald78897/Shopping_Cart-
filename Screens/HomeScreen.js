import React, { useState } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import Product from "../component/Product";

const HomeScreen = (props) => {
  const [totalProduct, setTotalProduct] = useState(0);

  const select = (value) => {
    props.selectedProduct(value);
  };

  return (
    <View style={styles.ProductView}>
      <View>
        <Text style={styles.Product}>
          Product <Text style={styles.totalProducts}>6</Text>
        </Text>
      </View>
      <ScrollView>
        <Product
          style={styles.imageContainer}
          value={select}
          //   TotalProduct={TotalProduct}
        />
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  items: {
    flex: 1,
  },
  Product: {
    fontSize: 15,
    fontWeight: "bold",
    color: "black",
    margin: 7,
    marginHorizontal: 40,
    marginVertical: 10,
  },

  ProductView: {
    alignItems: "flex-start",
    justifyContent: "flex-start",
    // borderWidth: 4,
    // borderColor: "green",
    width: "100%",
    flexGrow: 1,
    //marginVertical: 10,
    //marginHorizontal: -10,
    //paddingHorizontal: 0,

    height: "87%",
  },

  totalProducts: {
    fontWeight: "300",
  },
  imageContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },
});

export default HomeScreen;
