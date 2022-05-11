import React, { FC } from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { RNText } from "../index";
import { IInvoice } from "interfaces/IInvoice";

type CardInvoiceProps = {
  data: IInvoice;
  testId: string;
  onSelect: (item: IInvoice) => void;
};

export const CardInvoice: FC<CardInvoiceProps> = ({
  data,
  testId,
  onSelect,
}): JSX.Element => {
  const renderInfoRow = (title: string, content: string | number) => (
    <View style={styles.rowInfo}>
      <RNText
        testID={`${testId}-${title}-title`}
        style={styles.title}
        text={`${title}: `}
      />
      <RNText testID={`${testId}-${title}-value`} text={`${content}`} />
    </View>
  );

  return (
    <TouchableOpacity onPress={() => onSelect(data)} testID={testId}>
      <View style={styles.container}>
        {renderInfoRow("invoiceNumber", data.invoiceNumber)}
        {renderInfoRow("references", data.itemReference)}
        {renderInfoRow("invoiceDate", data.invoiceDate)}
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    flexWrap: "wrap",
    marginBottom: 10,
    borderBottomWidth: 1,
    borderTopWidth: 1,
    padding: 10,
  },
  rowInfo: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  title: {
    fontWeight: "bold",
  },
});
