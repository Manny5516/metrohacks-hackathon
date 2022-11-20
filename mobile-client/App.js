import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import _ from 'lodash';
import { findMedicines } from './src/api';

const MedicineItem = (props) => {
  let availability;
  if (props.medicine.available) {
    availability = <Text style={styles.availableText}>AVAILABLE</Text>;
  } else {
    availability = <Text style={styles.unavailableText}>UNAVAILABLE</Text>;
  }
  return (
    <View style={styles.medicineItem}>
      <View style={styles.containerView}>
        <Image
          style={{ height: 50, width: 50 }}
          source={{ uri: props.medicine.image }}
        />
        <View style={styles.medicineItemRightPart}>
          <Text style={{ fontSize: 17 }}>{props.medicine.name}</Text>
          <View style={{ marginTop: 3 }}>
            { availability }
          </View>
        </View>
      </View>
    </View>
  );
}

const medicines = findMedicines();

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <SafeAreaView>
      <Searchbar
        placeholder="Type medicine name here"
        onChangeText={onChangeSearch}
        value={searchQuery}
      />
      <ScrollView>
        { medicines.map((m, i) => <MedicineItem key={i} medicine={m}/>) }
      </ScrollView>
    </SafeAreaView>
  );
};


function HomeScreen() {
  return (
    <View>
      <SearchComponent/>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Saved section is not implemented yet :(</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Profile is not implemented yet :(</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Search" component={HomeScreen}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Icon name="search" size={30} />
            ),
          }}
        />
        <Tab.Screen name="Saved" component={SettingsScreen}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <IconM name="folder-star-outline" size={30} />
            ),
          }}
        />
        <Tab.Screen name="Profile" component={ProfileScreen}
          options={{
            tabBarIcon: ({ tintColor }) => (
              <Icon name="user" size={30} />
            ),
          }}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
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
    alignItems: 'center',
    flexDirection: "row",
    margin: 10,
    flexWrap: "wrap",
  },
  medicineItemRightPart: {
    margin: 10,
  },
  availableText: {
    backgroundColor: 'green',
    color: "white",
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontSize: 13,
  },
  unavailableText: {
    backgroundColor: 'red',
    color: "white",
    alignSelf: 'flex-start',
    borderRadius: 6,
    paddingTop: 2,
    paddingBottom: 2,
    paddingLeft: 4,
    paddingRight: 4,
    fontSize: 13,
  },
});
