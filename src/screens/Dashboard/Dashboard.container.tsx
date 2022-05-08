// import {
//   getCryptoShowingDataState,
//   getIsLoadingState,
// } from "@redux/selectors/crypto";
// import {
//   getCryptoDataRequest,
//   loadMoreShowingCryptoData,
// } from "@redux/slices/crypto";
import React, { FC } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import DashboardView from "./Dashboard.view";

const DashboardScreen: FC = (): JSX.Element => {
  const dispatch = useDispatch();
  // const cryptoData = useSelector(getCryptoShowingDataState);
  // const isLoading = useSelector(getIsLoadingState);

  // useEffect(() => {
  //   dispatch(getCryptoDataRequest());
  // }, [dispatch]);

  // const onLoadCryptoData = () => {
  //   dispatch(getCryptoDataRequest());
  // };

  // const onLoadMoreCryptoData = () => {
  //   dispatch(loadMoreShowingCryptoData());
  // };

  return <DashboardView />;
};

export default DashboardScreen;
