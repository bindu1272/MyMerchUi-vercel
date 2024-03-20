"use client";
import ReduxProvider from "./provider";
import Header from "@/common/Header";
import React,{useEffect} from "react";
import TagManager from 'react-gtm-module';
import { initGA } from '../utilities/GoogleSetUp';


export default function LayoutPrimary({
    children,
  }: {
    children: React.ReactNode
  }) {
    useEffect(() => {
      initGA(process.env.NEXT_PUBLIC_GA_ID);
      TagManager.initialize({
        gtmId: process.env.NEXT_PUBLIC_GTM_ID,
        auth: process.env.NEXT_PUBLIC_GTM_AUTH,
        preview: process.env.NEXT_PUBLIC_GTM_PREVIEW,
      });
    }, [])
    return (
      <ReduxProvider>
        <Header/>
        {children}
      </ReduxProvider>
    )
    }