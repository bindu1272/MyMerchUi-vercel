import React, { useEffect } from "react";
import LayoutPrimary from "../LayoutPrimary";
// import "@/scss/main.scss";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <LayoutPrimary>{children}</LayoutPrimary>
    )
    }