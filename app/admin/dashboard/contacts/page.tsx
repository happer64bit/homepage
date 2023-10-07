"use client"

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { DataTable } from "./Datatable"

export default function () {
  return (
    <div>
      <div className="w-full">
        <DataTable />
      </div>
    </div>
  )
}
