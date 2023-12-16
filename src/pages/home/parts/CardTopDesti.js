import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CardTopDesti = ({ onSelectCity }) => {
  return (
    <>
      {/* Jakarta */}
      <TouchableOpacity onPress={() => onSelectCity("Jakarta")}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 12,
              backgroundColor: "black",
              marginRight: 5,
            }}
          >
            <Image
              source={{
                uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/java/dki-jakarta/Image1.jpg",
              }}
              style={{ width: 66, height: 66, borderRadius: 12 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            Jakarta
          </Text>
        </View>
      </TouchableOpacity>
      {/* Bali */}
      <TouchableOpacity onPress={() => onSelectCity("Bali")}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 12,
              backgroundColor: "black",
              marginHorizontal: 5,
            }}
          >
            <Image
              source={{
                uri: "https://d3p0bla3numw14.cloudfront.net/news-content/img/2021/05/03112735/Tempat-Tinggal-Terbaik-di-Bali.jpg",
              }}
              style={{ width: 66, height: 66, borderRadius: 12 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            Bali
          </Text>
        </View>
      </TouchableOpacity>
      {/* Yogyakarta */}
      <TouchableOpacity onPress={() => onSelectCity("Yogyakarta")}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 12,
              backgroundColor: "black",
              marginHorizontal: 5,
            }}
          >
            <Image
              source={{
                uri: "https://upload.wikimedia.org/wikipedia/commons/1/10/Yogyakarta_Indonesia_Tugu-Yogyakarta-02.jpg",
              }}
              style={{ width: 66, height: 66, borderRadius: 12 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            Yogyakarta
          </Text>
        </View>
      </TouchableOpacity>
      {/* Surabaya */}
      <TouchableOpacity onPress={() => onSelectCity("Surabaya")}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 12,
              backgroundColor: "black",
              marginHorizontal: 5,
            }}
          >
            <Image
              source={{
                uri: "https://img.okezone.com/content/2022/12/08/337/2722874/ini-5-alasan-kenapa-kota-surabaya-disebut-kota-pahlawan-nWb0plbz3Y.jpg",
              }}
              style={{ width: 66, height: 66, borderRadius: 12 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            Surabaya
          </Text>
        </View>
      </TouchableOpacity>
      {/* Lombok */}
      <TouchableOpacity onPress={() => onSelectCity("Lombok")}>
        <View style={{ flexDirection: "column" }}>
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 12,
              backgroundColor: "black",
              marginHorizontal: 5,
            }}
          >
            <Image
              source={{
                uri: "https://blog.antavaya.com/wp-content/uploads/2020/03/Destinasi-Wisata-Lombok-Paling-Populer-Tahun-2020-Sumber-Instagram-kezyayoanas_.jpg",
              }}
              style={{ width: 66, height: 66, borderRadius: 12 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            Lombok
          </Text>
        </View>
      </TouchableOpacity>
      {/* Aceh */}
      <TouchableOpacity onPress={() => onSelectCity("Aceh")}>
        <View
          style={{
            flexDirection: "column",
            marginLeft: 5,
          }}
        >
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 12,
              backgroundColor: "black",
            }}
          >
            <Image
              source={{
                uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/id-id/destinasi/banda-aceh/image-1.jpg",
              }}
              style={{ width: 66, height: 66, borderRadius: 12 }}
            />
          </View>
          <Text
            style={{
              textAlign: "center",
              color: "black",
            }}
          >
            Aceh
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
};

export default CardTopDesti;
