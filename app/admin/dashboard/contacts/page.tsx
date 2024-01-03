"use client"

import dynamic from "next/dynamic"

import { DataTable } from "./Datatable"

export default function ContactPage() {
  return (
    <div>
      <div className="w-full">
        <DataTable />
      </div>
    </div>
  )
}
