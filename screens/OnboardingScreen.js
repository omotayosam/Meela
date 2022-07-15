import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import React from "react";
import SafeView from "../components/SafeView";

const { width, height } = Dimensions.get("window");
const COLORS = { primary: "#4f62c0", white: "#fff", black: "#000" };

const slides = [
  {
    id: "1",
    image: require("../assets/icons/lock.png"),
    title: "Encrypted",
    subtitle:
      "our new encryption process makes it more secure between you and your bank",
  },
  {
    id: "2",
    image: require("../assets/icons/magic-wand.png"),
    title: "Easy to use",
    subtitle: "Manage your bank account, transactions",
  },
  {
    id: "3",
    image: require("../assets/icons/shield.png"),
    title: "Fast & Secure",
    subtitle: "Dont worry about 3rd party hacks it fast and secure",
  },
  {
    id: "4",
    image: require("../assets/icons/video-marketing.png"),
    title: "Watch Tutorial",
    subtitle:
      "if you are new on this and need help watch this short tutorial clip to get started",
  },
];

const Slide = ({ item }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <Image
        source={item?.image}
        style={{
          height: "25%",
          width,
          resizeMode: "contain",
          marginVertical: 60,
        }}
      />
      <View>
        <Text style={styles.title}>{item?.title}</Text>
        <View style={styles.container}>
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
      </View>
    </View>
  );
};

const OnboardingScreen = ({ navigation }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = (e) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({ offset });
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({ offset });
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = () => {
    return (
      <View
        style={{
          height: height * 0.25,
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        {/* Indicator container */}
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: "-35%" /*-25%*/,
          }}
        >
          {/* Render indicator */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: COLORS.primary,
                  width: 25,
                },
              ]}
            />
          ))}
        </View>

        {/* Render buttons */}
        <View style={{ marginBottom: "10%" }}>
          {currentSlideIndex == slides.length - 1 ? (
            <View
              style={{
                height: 50,
                alignItems: "center",
                marginBottom: "25%",
              }}
            >
              <TouchableOpacity
                style={[styles.btn, styles.shadows]}
                onPress={() => navigation.navigate("RegisterScreen")}
              >
                <Text style={{ fontWeight: "bold", color: COLORS.white }}>
                  Lets Create an Account
                </Text>
              </TouchableOpacity>
              <View style={{ height: 30 }}></View>
              <TouchableOpacity
                onPress={() => navigation.navigate("SignInScreen")}
              >
                <Text>Already have an account? Sign in</Text>
              </TouchableOpacity>
            </View>
          ) : (
            <View
              style={{
                alignItems: "center",
                marginBottom: "25%",
              }}
            >
              <TouchableOpacity
                activeOpacity={0.8}
                style={[styles.btn, styles.shadows]}
                onPress={goToNextSlide}
              >
                <Text style={{ fontWeight: "bold", color: COLORS.white }}>
                  {" "}
                  Next{" "}
                </Text>
              </TouchableOpacity>
              <View style={{ height: 30 }}></View>
              <TouchableOpacity onPress={skip}>
                <Text>Skip</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={[SafeView.AndroidSafeArea, styles.sv]}>
      <StatusBar backgroundColor={COLORS.white} />
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: height * 0.75 }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({ item }) => <Slide item={item} />}
      />
      <Footer />
    </SafeAreaView>
  );
};

export default OnboardingScreen;

const styles = StyleSheet.create({
  title: {
    color: COLORS.black,
    fontSize: 35,
    fontWeight: "bold",
    marginTop: 30,
    textAlign: "center",
  },
  subtitle: {
    color: COLORS.black,
    fontSize: 25,
    marginTop: 10,
    textAlign: "center",
    lineHeight: 23,
  },
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "contain",
  },

  indicator: {
    height: 2.5,
    width: 10,
    backgroundColor: "grey",
    marginHorizontal: 3,
    borderRadius: 2,
  },
  btn: {
    height: 60,
    width: "70%",
    borderRadius: 10,
    backgroundColor: COLORS.primary,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  sv: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  container: {
    flex: 1,
    flexGrow: 1,
    maxWidth: 400,
  },

  shadows: {
    shadowColor: "#52006A",

    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 20,
  },
});
