import { WHITE } from "@constants/colors";
import fonts from "@constants/fonts";
import { RNButton, RNInputField, RNLoadingSpinner, RNText } from "components";
import { RNHeader } from "components/Header/Header";
import React, { FC, useEffect, useState } from "react";
import { StyleSheet, Keyboard, KeyboardAvoidingView } from "react-native";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { SafeAreaView } from "react-native-safe-area-context";
import { IInvoice } from "src/interfaces/IInvoice";
import DatePicker from "react-native-date-picker";
import { format } from "date-fns";
import { useSelector } from "react-redux";
import { selectIsErrorState } from "@redux/selectors/invoice";

type InvoiceDetailsViewProps = {
  data?: IInvoice;
  isLoading: boolean;
  onCreateInvoice: (
    itemRef: string,
    date: string,
    description: string,
    invoiceNumber: string
  ) => void;
};

const InvoiceDetailsView: FC<InvoiceDetailsViewProps> = ({
  data,
  isLoading = false,
  onCreateInvoice,
}): JSX.Element => {
  const isViewMode = !!data;
  const randomItemRef = `${+new Date()}`;
  const [date, setDate] = useState<Date>(
    isViewMode ? new Date(data.invoiceDate) : new Date()
  );
  const [descriptions, setDescription] = useState<string>(
    isViewMode ? data.description : ""
  );
  const [invoiceNumber, setInvoiceNumber] = useState<string>(
    isViewMode ? data.invoiceNumber : `INV${randomItemRef}`
  );
  const [open, setOpen] = useState(false);
  const isError = useSelector(selectIsErrorState);

  useEffect(() => {
    if (isError) {
    }
  }, [isError]);

  const onSave = () => {
    onCreateInvoice(
      randomItemRef,
      format(date, "yyyy-MM-dd"),
      descriptions,
      invoiceNumber
    );
  };

  return (
    <SafeAreaView>
      <RNHeader
        testId={isViewMode ? "header-invoice-details" : "header-create-invoice"}
        title={isViewMode ? "Invoice Details" : "Create Invoice"}
        canGoBack={true}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <KeyboardAvoidingView style={styles.container}>
          <RNInputField
            disabled={true}
            placeholder="ItemReference"
            value={isViewMode ? data.itemReference : `#${randomItemRef}`}
          />
          <RNInputField
            disabled={true}
            placeholder="InvoiceNumber"
            value={invoiceNumber}
            onChangeText={setInvoiceNumber}
          />
          <RNInputField
            placeholder="Date"
            disabled={isViewMode}
            value={format(date, "yyyy-MM-dd")}
            onPress={() => setOpen(true)}
          />
          <RNInputField
            testId={"invoice-details-descriptions-input"}
            disabled={isViewMode}
            onChangeText={setDescription}
            placeholder="Description"
            value={descriptions}
          />
          {!isViewMode && (
            <RNButton onPress={onSave} testID={"invoice-details-save-btn"}>
              <RNText style={styles.btnText} text={"Create"} />
            </RNButton>
          )}
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <DatePicker
        modal
        open={open}
        date={date}
        mode={"date"}
        onConfirm={(date) => {
          setOpen(false);
          setDate(date);
        }}
        onCancel={() => {
          setOpen(false);
        }}
      />
      {isLoading && <RNLoadingSpinner />}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  btnText: {
    ...fonts.types.normalText,
    color: WHITE,
  },
});

export default InvoiceDetailsView;
