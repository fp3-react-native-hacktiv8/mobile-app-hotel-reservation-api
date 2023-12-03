import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CardPopDesti = () => {
  return (
    <>
      {/*  Labuan Bajo */}
      <View
        style={{
          width: 140,
          height: 147,
          borderRadius: 16,
          borderColor: "black",
          borderWidth: 0.3,
          borderRadius: 8,
          shadowOffset: { width: 0, height: 1 },
          backgroundColor: "white",
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
        }}
      >
        <View style={{}}>
          <View
            style={{
              width: 120,
              height: 110,
              backgroundColor: "yellow",
              marginTop: 9,
              borderRadius: 12,
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/bali-nusa-tenggara/east-nusa-tenggara/labuan-bajo/LB2.jpg",
              }}
              style={{ width: 120, height: 110, borderRadius: 8 }}
            />
          </View>
          <Text
            style={{
              marginTop: 3,
              fontSize: 14,

              textAlign: "center",
              color: "black",
            }}
          >
            Labuan Bajo
          </Text>
        </View>
      </View>
      {/* Borobudur */}
      <View
        style={{
          width: 140,
          height: 147,
          borderRadius: 16,
          borderColor: "black",
          borderWidth: 0.3,
          borderRadius: 8,
          shadowOffset: { width: 0, height: 1 },
          backgroundColor: "white",
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          marginLeft: 10,
        }}
      >
        <View style={{}}>
          <View
            style={{
              width: 120,
              height: 110,
              backgroundColor: "yellow",
              marginTop: 9,
              borderRadius: 12,
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/destinations/revision-2019/4.jpg",
              }}
              style={{ width: 120, height: 110, borderRadius: 8 }}
            />
          </View>
          <Text
            style={{
              marginTop: 3,
              fontSize: 14,

              textAlign: "center",
              color: "black",
            }}
          >
            Borobudur
          </Text>
        </View>
      </View>
      {/* Danau Toba */}
      <View
        style={{
          width: 140,
          height: 147,
          borderRadius: 16,
          borderColor: "black",
          borderWidth: 0.3,
          borderRadius: 8,
          shadowOffset: { width: 0, height: 1 },
          backgroundColor: "white",
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          marginLeft: 10,
        }}
      >
        <View style={{}}>
          <View
            style={{
              width: 120,
              height: 110,
              backgroundColor: "yellow",
              marginTop: 9,
              borderRadius: 12,
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: "https://www.indonesia.travel/content/dam/indtravelrevamp/en/trip-ideas/going-on-a-bleisure-trip-to-danau-toba-try-these-5-feel-good-resorts/thumbnail.jpg",
              }}
              style={{ width: 120, height: 110, borderRadius: 8 }}
            />
          </View>
          <Text
            style={{
              marginTop: 3,
              fontSize: 14,

              textAlign: "center",
              color: "black",
            }}
          >
            Danau Toba
          </Text>
        </View>
      </View>
      {/* Atlas Beach Fest */}
      <View
        style={{
          width: 140,
          height: 147,
          borderRadius: 16,
          borderColor: "black",
          borderWidth: 0.3,
          borderRadius: 8,
          shadowOffset: { width: 0, height: 1 },
          backgroundColor: "white",
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          marginLeft: 10,
        }}
      >
        <View style={{}}>
          <View
            style={{
              width: 120,
              height: 110,
              backgroundColor: "yellow",
              marginTop: 9,
              borderRadius: 12,
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: "https://www.paradisepartiesbali.com/wp-content/uploads/2023/07/Screenshot-2023-07-17-at-3.12.56-pm-1024x447.png",
              }}
              style={{ width: 120, height: 110, borderRadius: 8 }}
            />
          </View>
          <Text
            style={{
              marginTop: 3,
              fontSize: 14,

              textAlign: "center",
              color: "black",
            }}
          >
            Atlas Beach Fest
          </Text>
        </View>
      </View>
      {/* Mandalika */}
      <View
        style={{
          width: 140,
          height: 147,
          borderRadius: 16,
          borderColor: "black",
          borderWidth: 0.3,
          borderRadius: 8,
          shadowOffset: { width: 0, height: 1 },
          backgroundColor: "white",
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 3,
          marginLeft: 10,
        }}
      >
        <View style={{}}>
          <View
            style={{
              width: 120,
              height: 110,
              backgroundColor: "yellow",
              marginTop: 9,
              borderRadius: 12,
              alignSelf: "center",
            }}
          >
            <Image
              source={{
                uri: "https://hellolombok.id/wp-content/uploads/2023/03/circuit-mandalika.jpg",
              }}
              style={{ width: 120, height: 110, borderRadius: 8 }}
            />
          </View>
          <Text
            style={{
              marginTop: 3,
              fontSize: 14,

              textAlign: "center",
              color: "black",
            }}
          >
            Mandalika
          </Text>
        </View>
      </View>
    </>
  );
};

export default CardPopDesti;
