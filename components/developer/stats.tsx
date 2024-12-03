"use client"

import { Card } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function DeveloperStats() {
  return (
    <Card className="bg-[#151819] border-gray-800 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
        >
          <p className="text-gray-400">Total Investment</p>
          <p className="text-3xl font-bold text-white">$450,000</p>
          <p className="text-sm text-[#7fd8be]">+12% from last month</p>
        </motion.div>
        
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <p className="text-gray-400">Monthly Returns</p>
          <p className="text-3xl font-bold text-[#7fd8be]">$2,745.02</p>
          <p className="text-sm text-[#7fd8be]">+8% from last month</p>
        </motion.div>
        
        <motion.div 
          className="space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-400">Expenses</p>
          <p className="text-3xl font-bold text-white">$2,018.39</p>
          <p className="text-sm text-red-400">+3% from last month</p>
        </motion.div>
      </div>
    </Card>
  )
}