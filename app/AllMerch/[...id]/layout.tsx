"use client"
import React from "react";
import LayoutPrimary from "../../LayoutPrimary";


export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <LayoutPrimary>{children}</LayoutPrimary>
    )
    }