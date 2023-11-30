import { useEffect, useState } from "react";
import {
  TextInput,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
  ScrollView,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useDispatch, useSelector } from "react-redux";
import { GET_HOTEL_DETAIL } from "../../service/api-path";
import http from "../../service/http";
import { ADD_ORDERED_HOTEL } from "../../store/slicers/hotels";

export default Booking = ({ navigation, route }) => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  const { hotelId, price } = route.params;
  const [detailHotel, setDetailHotel] = useState(null);
  const [name, setName] = useState();
  const [email, setEmail] = useState("");
  const [days, setDays] = useState(1);
  const [phoneNumberPrefix, setPhoneNumberPrefix] = useState("+62");
  const [phoneNumber, setPhoneNumber] = useState("");

  const totalPayment = () => {
    return parseInt(days) * parseInt(price);
  };

  let getDetailHotel;
  useEffect(() => {
    getDetailHotel = async () => {
      try {
        const response = await http.get(GET_HOTEL_DETAIL, {
          params: {
            hotel_id: hotelId,
          },
        });
        setDetailHotel(response.data);
      } catch (e) {
        // e
      }
    };
  }, []);

  const showToast = () => {
    ToastAndroid.show("Checkout success!", ToastAndroid.LONG);
  };

  const handlePressBooking = () => {
    // Periksa apakah name, email, atau phoneNumber kosong
    if (!name || !email || !phoneNumber) {
      // Tampilkan notifikasi untuk lengkapi data
      alert("Lengkapi data: Name, Email, dan Phone Number harus diisi.");
      return; // Hentikan eksekusi fungsi
    }

    // Periksa apakah phoneNumberPrefix sudah ada di dalam phoneNumber
    const formattedPhoneNumber = phoneNumber.includes(phoneNumberPrefix)
      ? phoneNumber
      : `${phoneNumberPrefix}${phoneNumber}`;

    dispatch(
      ADD_ORDERED_HOTEL({
        name,
        email,
        days,
        phoneNumber: formattedPhoneNumber,
        hotel: detailHotel,
        price: totalPayment(),
      })
    );

    showToast();

    setTimeout(() => {
      navigation.goBack();
    }, 800);
  };

  useEffect(() => {
    getDetailHotel();
    setEmail(user.email);
    if (user.firstName) {
      setName(`${user.firstName} ${user.lastName}`);
    }
    if (user.phoneNumber) {
      setPhoneNumber(user.phoneNumber.slice(3, -1));
    }
  }, []);

  return (
    <View style={styles.container}>
      <ScrollView style={{ padding: 20 }}>
        <Text style={styles.textTitle}>CONTACT INFORMATIONS</Text>
        <Text style={styles.textLabel}>Full name</Text>
        <TextInput
          style={styles.input}
          placeholder="Fullname"
          autoComplete="name"
          value={name}
          onChangeText={(e) => setName(e)}
        />
        <Text style={styles.textLabel}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoComplete="email"
          value={email}
          onChangeText={(e) => setEmail(e)}
        />
        <Text style={styles.textLabel}>How many day</Text>
        <TextInput
          style={styles.input}
          placeholder="Number of days"
          value={days.toString()}
          onChangeText={(e) => setDays(e)}
        />
        <Text style={styles.textLabel}>Phone number</Text>
        <View style={styles.pickerContainer}>
          <View
            style={{
              backgroundColor: "#fff",
              borderRadius: 7,
              marginRight: 10,
            }}
          >
            <Picker
              style={{ width: 100 }}
              selectedValue="selected"
              onValueChange={(itemValue) => setPhoneNumberPrefix(itemValue)}
            >
              <Picker.Item label="+62" value="+62" />
            </Picker>
          </View>
          <TextInput
            style={styles.input}
            placeholder="Phone number"
            value={phoneNumber}
            onChangeText={(e) => setPhoneNumber(e)}
          />
        </View>
        <Text style={styles.textTitle}>BOOKING SUMMARY</Text>
        <View style={styles.summaryContainer}>
          <Text style={styles.textSubtitle}>
            {days === 1 ? `${days} day` : `${days} days`}
          </Text>
          <View style={styles.underline} />
          <View style={styles.priceInformationContainer}>
            <Text style={styles.textTotal}>Total</Text>
            <Text style={styles.textPrice}>$ {totalPayment()}</Text>
          </View>
        </View>
        <View style={styles.theBottom}>
          <Text style={[styles.textLabel, { color: "#e30000" }]}>
            * Biodata in this form will be used for check in identity. And by
            default use your account profile
          </Text>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => handlePressBooking()}
      >
        <Text style={styles.bookButtonText}>Chekcout</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  floatingButton: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    paddingVertical: 15,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "royalblue",
    borderTopRightRadius: 7,
    borderTopLeftRadius: 7,
    marginTop: 65,
  },
  bookButtonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  textTitle: {
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 5,
    marginBottom: 20,
  },
  textSubtitle: {
    fontSize: 18,
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    fontSize: 15,
    borderRadius: 7,
    marginVertical: 5,
    display: "flex",
    flexGrow: 1,
  },
  pickerContainer: {
    borderRadius: 7,
    marginVertical: 5,
    fontSize: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 30,
  },
  summaryContainer: {
    borderRadius: 7,
    backgroundColor: "#fff",
    padding: 12,
  },
  priceInformationContainer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 15,
  },
  textPrice: {
    fontSize: 18,
    color: "royalblue",
    fontWeight: "bold",
  },
  textTotal: {
    fontSize: 16,
    fontWeight: "500",
  },
  underline: {
    borderBottomWidth: 2,
    marginTop: 10,
  },
  textLabel: {
    fontWeight: "bold",
    marginTop: 11,
  },
  theBottom: {
    marginBottom: 65,
    paddingBottom: 35,
  },
});
