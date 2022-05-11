import {
  CardInvoice,
  RNButton,
  RNLoadingSpinner,
  RNText,
  SearchInputField,
} from "components";
import { RNHeader } from "components/Header/Header";
import React, { FC } from "react";
import { FlatList, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IInvoice } from "interfaces/IInvoice";
import Icon from "react-native-vector-icons/AntDesign";
import { styles } from "./Dashboard.styles";
import { TouchableOpacity } from "react-native-gesture-handler";

type DashboardViewProps = {
  onInvoiceSelect: (invoice: IInvoice) => void;
  invoiceData: IInvoice[];
  isLoading: boolean;
  changeOrderingInvoice: () => void;
  onRefresh: () => void;
  onLogout: () => void;
  onAddNewInvoice: () => void;
  onSearchInvoice: (searchText: string) => void;
};

const DashboardView: FC<DashboardViewProps> = ({
  onInvoiceSelect,
  invoiceData,
  isLoading,
  onLogout,
  onRefresh,
  changeOrderingInvoice,
  onAddNewInvoice,
  onSearchInvoice,
}): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RNHeader
        title={"Dashboard"}
        rightIconName={"form"}
        onPressRightIcon={onAddNewInvoice}
        leftIconName={"logout"}
        onPressLeftIcon={onLogout}
        leftIconNameTitle={"logout"}
        testId={"header-dashboard"}
      />
      <View style={styles.row}>
        <SearchInputField
          testId={"dashboard-search-input"}
          placeholder="Enter invoice number here"
          onChangeText={onSearchInvoice}
        />
        <TouchableOpacity
          testID="dashboard-sort-btn"
          onPress={changeOrderingInvoice}
        >
          <Icon name="swap" style={styles.iconOrdering} size={30} />
        </TouchableOpacity>
      </View>
      <FlatList
        testID="dashboard-list-invoice"
        data={invoiceData}
        refreshing={false}
        onRefresh={onRefresh}
        renderItem={({ item, index }) => (
          <CardInvoice
            testId={`invoice-row-${index}`}
            data={item}
            onSelect={onInvoiceSelect}
          />
        )}
      />
      {isLoading && <RNLoadingSpinner testId="dashboard-loading-spinner" />}
    </SafeAreaView>
  );
};

export default DashboardView;
