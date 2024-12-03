"use client"

import { motion } from 'framer-motion'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Download, Upload, Eye } from 'lucide-react'

const documents = [
  {
    name: "Property Deed - 27 Lillian Dr",
    type: "PDF",
    size: "2.4 MB",
    uploaded: "2024-03-10",
    status: "Verified"
  },
  {
    name: "Investment Agreement",
    type: "PDF",
    size: "1.8 MB",
    uploaded: "2024-03-09",
    status: "Pending"
  },
  {
    name: "Financial Statements 2024",
    type: "XLSX",
    size: "4.2 MB",
    uploaded: "2024-03-08",
    status: "Verified"
  }
]

export default function DocumentsPage() {
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
              Documents
            </h1>
            <Button className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa]">
              <Upload className="w-4 h-4 mr-2" />
              Upload Document
            </Button>
          </div>

          <Card className="bg-[#151819] border-gray-800 p-6">
            <Table>
              <TableHeader>
                <TableRow className="border-gray-800">
                  <TableHead className="text-gray-400">DOCUMENT NAME</TableHead>
                  <TableHead className="text-gray-400">TYPE</TableHead>
                  <TableHead className="text-gray-400">SIZE</TableHead>
                  <TableHead className="text-gray-400">UPLOADED</TableHead>
                  <TableHead className="text-gray-400">STATUS</TableHead>
                  <TableHead className="text-gray-400">ACTIONS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {documents.map((doc) => (
                  <TableRow key={doc.name} className="border-gray-800">
                    <TableCell className="font-medium text-white">{doc.name}</TableCell>
                    <TableCell className="text-gray-400">{doc.type}</TableCell>
                    <TableCell className="text-gray-400">{doc.size}</TableCell>
                    <TableCell className="text-gray-400">{doc.uploaded}</TableCell>
                    <TableCell>
                      <span className={`px-2 py-1 rounded text-sm ${
                        doc.status === 'Verified' 
                          ? 'bg-[#7fd8be]/20 text-[#7fd8be]' 
                          : 'bg-yellow-500/20 text-yellow-500'
                      }`}>
                        {doc.status}
                      </span>
                    </TableCell>
                    <TableCell>
                      <div className="flex gap-2">
                        <Button variant="ghost" size="sm">
                          <Eye className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                      </div>
                    </TableCell>
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