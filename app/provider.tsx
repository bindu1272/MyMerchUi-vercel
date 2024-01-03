"use client";

import { PropsWithChildren } from "react";
import { Provider } from "react-redux";
// import store from "../redux/store/store";
import {store} from "@/utilities/configureStore";

// const { store } = configureStore();


export default function ReduxProvider({ children }: PropsWithChildren) {
  return <Provider store={store}>{children}</Provider>;
}