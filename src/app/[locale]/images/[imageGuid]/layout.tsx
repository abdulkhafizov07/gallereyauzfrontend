import type {Metadata} from "next";
import React from "react";


export const metadata: Metadata = {
  title: 'Image 111',
  description: 'This is image made by someone no one knows',
}

export default function Layout({children}: {children: React.ReactNode}) {
  return children;
}

