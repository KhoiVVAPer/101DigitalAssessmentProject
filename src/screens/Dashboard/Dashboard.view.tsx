import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RNText } from "components";
import React, { FC } from "react";
import { View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MainStackParamList } from "../index";

type DashboardViewProps = {};

const DashboardView: FC<DashboardViewProps> = ({}): JSX.Element => {
  const { goBack } = useNavigation<StackNavigationProp<MainStackParamList>>();
  return (
    <>
    <TouchableOpacity onPress={() => goBack()} style={{width: 100, height: 100, backgroundColor: 'red', marginTop: 10, marginLeft: 10}}>
    <RNText>Dashboard</RNText>

    </TouchableOpacity>
      {/* <FlatList
        data={cryptoData}
        keyExtractor={(item, index) => `ItemCrypto-${item.firstId}-${index}`}
        refreshControl={
          <RefreshControl refreshing={false} onRefresh={onLoadCryptoData} />
        }
        onEndReached={onLoadMoreCryptoData}
        onEndReachedThreshold={0.4}
        renderItem={({ item }) => <View />}
      /> */}
    </>
  );
};

export default DashboardView;
