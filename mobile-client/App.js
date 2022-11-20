import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  TextInput,
  ScrollView,
  TouchableWithoutFeedback,
  Modal,
  Pressable,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/Feather";
import IconM from "react-native-vector-icons/MaterialCommunityIcons";
import IconO from "react-native-vector-icons/Octicons";
import { Searchbar } from "react-native-paper";
import _ from "lodash";
import { findMedicines } from "./src/api";

const FavoriteButton = props => {
  const [isFavorite, setIsFavorite] = useState(props.isFavorite);
  return (
    <TouchableWithoutFeedback onPress={() => { setIsFavorite(!isFavorite) }}>
      <IconO suppressHighlighting={true}  name={ isFavorite ? 'star-fill' : 'star'} size={30} />
    </TouchableWithoutFeedback>
  );
};

const MedicineDescription = props => {
  // const [test, setTest] = useState(0);
  let availability;
  if (props.medicine.available) {
    availability = <Text style={styles.availableText}>AVAILABLE</Text>;
  } else {
    availability = <Text style={styles.unavailableText}>UNAVAILABLE</Text>;
  }
  return (
    <Modal
      animationType='slide'
      presentationStyle='formSheet'
      onRequestClose={() => {
        props.onClose();
      }}
    >
      <View style={{ paddingTop: 25, paddingLeft: 20 }}>
        <Text style={{ fontSize: 20 }}>{props.medicine.name}</Text>
        <View
          style={{
            flexDirection: "row",
            marginTop: 4,
            paddingRight: 25,
            flexWrap: "wrap",
            justifyContent: "space-between",
          }}
        >
          {availability}
          <FavoriteButton isFavorite={props.medicine.isFavorite}/>
        </View>
        <Image
          style={{ width: null, height: 220, resizeMode: "contain" }}
          source={{ uri: props.medicine.bigImage }}
        />
        <Text style={{ fontSize: 20, margin: 9 }}>Description</Text>
        <Text style={styles.descriptionSmallTitle}>
          Name of the medicinal product
        </Text>
        <Text style={styles.descriptionField}>
          {props.medicine.productName}
        </Text>
        <Text style={styles.descriptionSmallTitle}>
          Qualitative and quantitative composition
        </Text>
        <Text style={styles.descriptionField}>
          {props.medicine.composition}
        </Text>
        <Text style={styles.descriptionSmallTitle}>Pharmaceutical form</Text>
        <Text style={styles.descriptionField}>{props.medicine.form}</Text>
      </View>
    </Modal>
  );
};

const MedicineItem = props => {
  const [isShowDescription, setIsShowDescription] = useState(false);
  let availability;
  if (props.medicine.available) {
    availability = <Text style={styles.availableText}>AVAILABLE</Text>;
  } else {
    availability = <Text style={styles.unavailableText}>UNAVAILABLE</Text>;
  }
  let modal;
  if (isShowDescription) {
    modal = MedicineDescription({
      medicine: props.medicine,
      onClose: () => setIsShowDescription(false),
    });
  }
  return (
    <TouchableWithoutFeedback onPress={() => setIsShowDescription(true)}>
      <View style={styles.medicineItem}>
        <View style={styles.containerView}>
          <Image
            style={{ height: 50, width: 50 }}
            source={{ uri: props.medicine.image }}
          />
          <View style={styles.medicineItemRightPart}>
            <Text style={{ fontSize: 17 }}>{props.medicine.name}</Text>
            <View style={{ marginTop: 3 }}>{availability}</View>
          </View>
          {modal}
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const MedicineList = props => {
  return (
    <ScrollView style={{ height: "100%" }}>
      {props.medicines.map((m, i) => (
        <MedicineItem key={i} medicine={m} />
      ))}
    </ScrollView>
  );
};

const medicines = findMedicines();

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder='Type medicine name here'
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <MedicineList medicines={medicines} />
    </SafeAreaView>
  );
};

function HomeScreen() {
  return (
    <View>
      <SearchComponent />
    </View>
  );
}

function SettingsScreen() {
  return (
    <SafeAreaView>
      <MedicineList medicines={medicines} />
    </SafeAreaView>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Profile is not implemented yet :(</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name='Search'
          component={HomeScreen}
          options={{
            tabBarIcon: ({ tintColor }) => <Icon name='search' size={30} />,
          }}
        />
        <Tab.Screen
          name='Saved'
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <IconM name='folder-star-outline' size={30} />
            ),
          }}
        />
        <Tab.Screen
          name='Profile'
          component={ProfileScreen}
          options={{
            tabBarIcon: ({ tintColor }) => <Icon name='user' size={30} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  medicineItem: {
    width: "95%",
    marginTop: 6,
    marginBottom: 6,
    marginLeft: 10,
    padding: 5,
    borderRadius: 8,
    elevation: 5,
    shadowColor: "rgba(0,0,0,0.4)",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 1,
  },
  containerView: {
    alignItems: "center",
    flexDirection: "row",
    margin: 10,
    flexWrap: "wrap",
  },
  medicineItemRightPart: {
    margin: 10,
  },
  availableText: {
    backgroundColor: "green",
    color: "white",
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontSize: 13,
    overflow: "hidden",
  },
  unavailableText: {
    backgroundColor: "red",
    color: "white",
    alignSelf: "flex-start",
    borderRadius: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontSize: 13,
    overflow: "hidden",
  },
  descriptionSmallTitle: {
    fontSize: 14,
    margin: 10,
    marginBottom: 0,
    fontWeight: "bold",
  },
  descriptionField: {
    fontSize: 14,
    margin: 10,
    marginTop: 4,
  },
});
