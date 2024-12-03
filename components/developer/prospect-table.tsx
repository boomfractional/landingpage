"use client"

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"

const prospects = [
  {
    name: "Trinayaan Hariharan",
    type: "Investor",
    profile: "TH LLC",
    portfolio: "Individual",
    documents: 2,
    commitment: "$300,000",
    contribution: "$150,000",
    date: "Sep 6, 2024"
  },
  {
    name: "Sai Koppu",
    type: "Investor",
    profile: "Koppu LLC",
    portfolio: "Yes",
    documents: 2,
    commitment: "$400,000",
    contribution: "$0",
    date: "Oct 3, 2024"
  }
]

export default function ProspectTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow className="border-gray-800">
          <TableHead className="w-12">
            <Checkbox />
          </TableHead>
          <TableHead className="text-gray-400">PROSPECT NAME</TableHead>
          <TableHead className="text-gray-400">CONTACT TYPE</TableHead>
          <TableHead className="text-gray-400">PROFILE</TableHead>
          <TableHead className="text-gray-400">EXISTING PORTFOLIO</TableHead>
          <TableHead className="text-gray-400">DOCUMENTS</TableHead>
          <TableHead className="text-gray-400">COMMITMENT</TableHead>
          <TableHead className="text-gray-400">CONTRIBUTION</TableHead>
          <TableHead className="text-gray-400">CONTRIBUTION DATE</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {prospects.map((prospect) => (
          <TableRow key={prospect.name} className="border-gray-800">
            <TableCell>
              <Checkbox />
            </TableCell>
            <TableCell className="font-medium text-white">{prospect.name}</TableCell>
            <TableCell className="text-gray-400">{prospect.type}</TableCell>
            <TableCell className="text-gray-400">{prospect.profile}</TableCell>
            <TableCell className="text-gray-400">{prospect.portfolio}</TableCell>
            <TableCell>
              <Badge variant="secondary">{prospect.documents}</Badge>
            </TableCell>
            <TableCell className="text-gray-400">{prospect.commitment}</TableCell>
            <TableCell className="text-gray-400">{prospect.contribution}</TableCell>
            <TableCell className="text-gray-400">{prospect.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}