import React from "react";

export default function DetailLayout({ children, modal }: {
  children: React.ReactNode,
  modal: React.ReactNode,
}) {
  return (
    <>
      {modal}
      {children}
    </>
  )
}
