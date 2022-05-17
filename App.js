import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-web";
import { Styles } from "./src/styles/StyleGlobal";
import tempData from "./tempData";

export default function App() {
  return (
    <View style={Styles.container}>
      <View style={{ flexDirection: "row" }}>
        <View style={AppStyles.divider} />
        <Text style={AppStyles.title}>Todo List</Text>
      </View>

      <View style={{ marginVertical: 48 }}>
        <TouchableOpacity style={AppStyles.addList}>
          <AntDesign name="plus" size={16} color={Styles.blue} />
        </TouchableOpacity>

        <Text style={AppStyles.add}>Add List</Text>
      </View>

      <View style={{ height: 275, paddingLeft: 32 }}>
        <Flatlist
          data={tempData}
          keyExtractor={(item) => item.name}
          horizontal={true}
          showHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <View>
              <Text>{item.name}</Text>
            </View>
          )}
        />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const AppStyles = StyleSheet.create({
  divider: {
    backgroundColor: "black",
    height: 1,
    flex: 1,
    alignSelf: "center",
  },
  title: {
    fontSize: 38,
    fontWeight: "800",
    color: Styles.black,
    paddingHorizontal: 64,
  },
  addList: {
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 4,
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  add: {
    color: "blue",
    fontWeight: "600",
    fontSize: 14,
    marginTop: 8,
  },
});
