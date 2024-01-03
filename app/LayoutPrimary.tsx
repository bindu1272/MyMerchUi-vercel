"use client";
import ReduxProvider from "./provider";
import Header from "@/common/Header";
import React, { useEffect } from "react";


export default function LayoutPrimary({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <ReduxProvider>
        <Header/>
        {children}
      </ReduxProvider>
    )
    }