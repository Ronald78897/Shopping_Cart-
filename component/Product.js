import React, { useState } from "react";
import { View, StyleSheet, Button, Image, Text } from "react-native";

const ImageDetails = [
  {
    id: 1,
    type: "Party",
    image: require("../assets/download.jpg"),
    Price: "Rs.4400",
  },
  {
    id: 2,
    type: "Over- Ear",
    image: require("../assets/iclever-bluetooth-wireless-headphones-kids_thumb800.jpg"),
    Price: "Rs.4800",
  },
  {
    id: 3,
    type: "Enjoying",
    image: require("../assets/maxresdefault.jpg"),
    Price: "Rs.7400",
  },
  {
    id: 4,
    type: "Dancing ",
    image: require("../assets/highquality-headphones-on-white-background-260nw-1574611990.jpg"),
    Price: "Rs.3200",
  },
  {
    id: 5,
    type: "Listening ",
    image: require("../assets/headphone1.jpg"),
    Price: "Rs.5400",
  },
  {
    id: 6,
    type: "Lavish ",
    image: require("../assets/new.jpg"),
    Price: "Rs.6400",
  },
];

const Product = (props) => {
  //const [totalProduct, setTotalProduct] = useState(ImageDetails.length);
  //   setTotalProduct(ImageDetails.length);
  //   props.TotalProduct(ImageDetails.length);
  //   console.log(totalProduct);

  //   const TotalProduct = () => {
  //     setTotalProduct(ImageDetails.length);
  //     totalProduct;
  //   };

  const ImageDisplay = () => {
    let type = [];

    ImageDetails.map((product, id) => {
      type.push(
        <View style={{ ...styles.card, ...props.style }} key={id}>
          <View style={styles.ImageBox}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={product.image}
            />
            <Text style={styles.text}>{product.type}</Text>
            <Text style={styles.price}>{product.Price}</Text>
          </View>
          <View style={styles.buttonContainer}>
            <View style={styles.button}>
              <Button title="Buy now " />
            </View>
            <View style={styles.button}>
              <Button
                title="Add to cart"
                onPress={() => props.value(product)}
              />
            </View>
          </View>
        </View>
      );
    });

    return type;
  };
  // props.TotalProduct(ImageDetails.length);
  return ImageDisplay();
};

const styles = StyleSheet.create({
  card: {
    elevation: 8,
    backgroundColor: "white",
    padding: 20,
    borderRadius: 10,
    marginHorizontal: 35,
    marginVertical: 18,
  },
  buttonContainer: {
    flexDirection: "row",
    width: "120%",
    justifyContent: "space-between",
    paddingHorizontal: 15,
    // borderColor: "blue",
    // borderWidth: 3,
    marginVertical: 60,
    marginBottom: 0,
  },
  button: {
    width: 110,
  },
  input: {
    width: 50,
    textAlign: "center",
  },

  ImageBox: {
    // borderWidth: 2,
    // borderColor: "blue",
    width: 220,
    height: 180,
    marginVertical: 5,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    paddingVertical: 4,
  },
  price: {
    textAlign: "center",
    fontSize: 14,
    paddingBottom: 30,
  },
});

export default Product;
