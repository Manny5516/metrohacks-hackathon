import { StatusBar } from 'expo-status-bar';
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Feather';
import IconM from 'react-native-vector-icons/MaterialCommunityIcons';
import { Searchbar } from 'react-native-paper';
import _ from 'lodash';

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

const imageData = 'data:image/png;base64,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';

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

const medicine = {
  name: "Test medicine",
  available: true,
  image: imageData,
}

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
        { _.range(10).map(i => <MedicineItem key={i} medicine={medicine}/>) }
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