"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, DollarSign } from 'lucide-react'

const transactions = [
  {
    id: "TXN-001",
    date: "2024-03-10",
    type: "Investment",
    amount: "$50,000",
    status: "Completed",
    investor: "John Smith"
  },
  {
    id: "TXN-002",
    date: "2024-03-09",
    type: "Distribution",
    amount: "$2,500",
    status: "Pending",
    investor: "Sarah Johnson"
  },
  {
    id: "TXN-003",
    date: "2024-03-08",
    type: "Investment",
    amount: "$75,000",
    status: "Completed",
    investor: "Michael Chen"
  }
]

export default function PaymentsPage() {
  return (
    <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-3xl font-bold text-white font-plus-jakarta-sans">
              Payments
            </h1>
            <div className="flex gap-4">
              <Button variant="outline" className="border-gray-700">
                <Download className="w-4 h-4 mr-2" />
                Export
              </Button>
              <Button className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa]">
                <DollarSign className="w-4 h-4 mr-2" />
                New Payment
              </Button>
            </div>
          </div>

          <Card className="bg-[#151819] border-gray-800 p-6">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">TRANSACTION ID</TableHead>
                  <TableHead className="text-gray-400">DATE</TableHead>
                  <TableHead className="text-gray-400">TYPE</TableHead>
                  <TableHead className="text-gray-400">AMOUNT</TableHead>
                  <TableHead className="text-gray-400">STATUS</TableHead>
                  <TableHead className="text-gray-400">INVESTOR</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {transactions.map((transaction) => (
                  <TableRow key={transaction.id} className="border-gray-800">
                    <TableCell className="font-medium text-white">{transaction.id}</TableCell>
                    <TableCell className="text-gray-400">{transaction.date}</TableCell>
                    <TableCell className="text-gray-400">{transaction.type}</TableCell>
                    <TableCell className="text-gray-400">{transaction.amount}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-sm ${
                        transaction.status === 'Completed' 
                          ? 'bg-[#7fd8be]/20 text-[#7fd8be]' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {transaction.status}
                      </span>
                    </TableCell>
                    <TableCell className="text-gray-400">{transaction.investor}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}