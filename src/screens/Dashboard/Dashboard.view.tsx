import { CardInvoice, RNLoadingSpinner, RNText } from "components";
import { RNHeader } from "components/Header/Header";
import React, { FC } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { IInvoice } from "interfaces/IInvoice";

type DashboardViewProps = {
  onInvoiceSelect: (invoice: IInvoice) => void;
  invoiceData: IInvoice[];
  isLoading: boolean;
  onRefresh: () => void;
  onPressAddBtn: () => void;
};

const DashboardView: FC<DashboardViewProps> = ({
  onInvoiceSelect,
  invoiceData,
  isLoading,
  onRefresh,
  onPressAddBtn,
}): JSX.Element => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <RNHeader
        title={"Dashboard"}
        rightIconName={"form"}
        onPressRightIcon={onPressAddBtn}
      />
      <FlatList
        data={invoiceData}
        refreshing={false}
        onRefresh={onRefresh}
        renderItem={({ item }) => (
          <CardInvoice data={item} onSelect={onInvoiceSelect} />
        )}
      />
      {isLoading && <RNLoadingSpinner />}
    </SafeAreaView>
  );
};

export default DashboardView;
