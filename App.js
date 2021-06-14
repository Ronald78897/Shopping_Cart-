import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Header from "./component/Header";
import HomeScreen from "./Screens/HomeScreen";
import ShoppingCart from "./Screens/ShoppingScreen";
export default function App() {
  const [selectedProduct, setSelectedProduct] = useState("");
  const [productList, setProductList] = useState([]);

  // console.log(productList);

  const BackIcon = () => {
    setSelectedProduct(!selectedProduct);
  };

  const deleteProduct = (id) => {
    setProductList(
      productList.filter((item) => {
        return item.id !== id;
      })
    );
  };
  // const clearCart = () => {
  //   // setProductList(
  //   //   productList.filter((item) => {
  //   //     return item !== arr;
  //   //   })
  //   // );
  //   alert("Hello");
  // };

  const clearCart = () => {
    //  const value = (productList.length = 0);
    setProductList((productList.length = 0));
  };

  return (
    <View>
      <Header
        IconSelect={BackIcon}
        itemLength={productList.length}
        setSelectedProduct={setSelectedProduct}
        productList={productList}
        selectedProduct={selectedProduct}
      />
      {selectedProduct && productList.length > 0 ? (
        <ShoppingCart
          productList={productList}
          setProductList={setSelectedProduct}
          DeleteProduct={deleteProduct}
          onClearCart={clearCart}
          setSelectedProduct={setSelectedProduct}
          selectedProduct={selectedProduct}
        />
      ) : (
        <HomeScreen
          selectedProduct={(selectedProduct) => {
            setSelectedProduct(selectedProduct);
            for (var i = 0; i < productList.length; i++) {
              if (selectedProduct.id === productList[i].id) {
                alert("Product has already been added to the cart ");
                return;
              }
            }
            setProductList([...productList, selectedProduct]);
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({});
