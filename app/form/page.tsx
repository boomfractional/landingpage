"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Slider } from '@/components/ui/slider'
import { useToast } from '@/hooks/use-toast'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

export default function WaitlistPage() {
  const [loading, setLoading] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const { toast } = useToast()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    companyName: '',
    projectValue: '',
    projectCount: '',
    investorCount: 50,
    features: {
      investorManagement: false,
      projectManagement: false,
      fractionalInvestment: false,
      paymentProcessing: false,
      reporting: false,
      compliance: false
    }
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        throw new Error('Failed to submit form')
      }
      
      setSubmitted(true)
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll be in touch soon!",
      })
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-[#0b0e0f] flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-md w-full text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Thank You!</h2>
          <p className="text-gray-400 mb-8">
            We've received your submission and will be in touch soon. Get ready to revolutionize your real estate investment journey!
          </p>
          <Button asChild className="bg-[#7fd8be] text-black hover:bg-[#6bc4aa]">
            <Link href="/">Return Home</Link>
          </Button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0b0e0f] py-20 px-4">
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Button 
            asChild
            variant="ghost" 
            className="text-gray-400 hover:text-white mb-8"
          >
            <Link href="/" className="flex items-center gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
          </Button>

          <div className="bg-[#151819] border border-gray-800 rounded-xl p-8">
            <h1 className="text-3xl font-bold text-white mb-2">Join the Waitlist</h1>
            <p className="text-gray-400 mb-8">
              Be among the first to access our revolutionary real estate investment platform.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm text-gray-400">Full Name *</label>
                <Input
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="bg-[#263438] border-gray-700 text-white"
                  placeholder="John Smith"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Email Address *</label>
                <Input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-[#263438] border-gray-700 text-white"
                  placeholder="john@company.com"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Company Name *</label>
                <Input
                  required
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="bg-[#263438] border-gray-700 text-white"
                  placeholder="Company Name"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Total Value of Projects Managed *</label>
                <Select 
                  required
                  value={formData.projectValue}
                  onValueChange={(value) => setFormData({ ...formData, projectValue: value })}
                >
                  <SelectTrigger className="bg-[#263438] border-gray-700 text-white">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="<10M">Less than $10M</SelectItem>
                    <SelectItem value="10M-50M">$10M – $50M</SelectItem>
                    <SelectItem value="50M-100M">$50M – $100M</SelectItem>
                    <SelectItem value="100M+">$100M+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm text-gray-400">Number of Projects Managed *</label>
                <Select 
                  required
                  value={formData.projectCount}
                  onValueChange={(value) => setFormData({ ...formData, projectCount: value })}
                >
                  <SelectTrigger className="bg-[#263438] border-gray-700 text-white">
                    <SelectValue placeholder="Select range" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1-5">1 – 5</SelectItem>
                    <SelectItem value="6-10">6 – 10</SelectItem>
                    <SelectItem value="11-20">11 – 20</SelectItem>
                    <SelectItem value="21+">21+</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-4">
                <label className="text-sm text-gray-400">Number of Investors</label>
                <div className="bg-[#1c1f20] p-6 rounded-lg">
                  <Slider
                    value={[formData.investorCount]}
                    onValueChange={(value) => setFormData({ ...formData, investorCount: value[0] })}
                    min={0}
                    max={1000}
                    step={10}
                    className="my-4"
                  />
                  <p className="text-2xl font-bold text-[#7fd8be]">{formData.investorCount}</p>
                </div>
              </div>

              <div className="space-y-4">
                <label className="text-sm text-gray-400">Key Features You're Interested In</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="investorManagement"
                      checked={formData.features.investorManagement}
                      onCheckedChange={(checked) => 
                        setFormData({ 
                          ...formData, 
                          features: { 
                            ...formData.features, 
                            investorManagement: checked as boolean 
                          } 
                        })
                      }
                    />
                    <label htmlFor="investorManagement" className="text-sm text-gray-400">
                      Investor Management
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="projectManagement"
                      checked={formData.features.projectManagement}
                      onCheckedChange={(checked) => 
                        setFormData({ 
                          ...formData, 
                          features: { 
                            ...formData.features, 
                            projectManagement: checked as boolean 
                          } 
                        })
                      }
                    />
                    <label htmlFor="projectManagement" className="text-sm text-gray-400">
                      Project Management
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="fractionalInvestment"
                      checked={formData.features.fractionalInvestment}
                      onCheckedChange={(checked) => 
                        setFormData({ 
                          ...formData, 
                          features: { 
                            ...formData.features, 
                            fractionalInvestment: checked as boolean 
                          } 
                        })
                      }
                    />
                    <label htmlFor="fractionalInvestment" className="text-sm text-gray-400">
                      Fractional Investment
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="paymentProcessing"
                      checked={formData.features.paymentProcessing}
                      onCheckedChange={(checked) => 
                        setFormData({ 
                          ...formData, 
                          features: { 
                            ...formData.features, 
                            paymentProcessing: checked as boolean 
                          } 
                        })
                      }
                    />
                    <label htmlFor="paymentProcessing" className="text-sm text-gray-400">
                      Payment Processing
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="reporting"
                      checked={formData.features.reporting}
                      onCheckedChange={(checked) => 
                        setFormData({ 
                          ...formData, 
                          features: { 
                            ...formData.features, 
                            reporting: checked as boolean 
                          } 
                        })
                      }
                    />
                    <label htmlFor="reporting" className="text-sm text-gray-400">
                      Reporting & Analytics
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="compliance"
                      checked={formData.features.compliance}
                      onCheckedChange={(checked) => 
                        setFormData({ 
                          ...formData, 
                          features: { 
                            ...formData.features, 
                            compliance: checked as boolean 
                          } 
                        })
                      }
                    />
                    <label htmlFor="compliance" className="text-sm text-gray-400">
                      Compliance & Legal
                    </label>
                  </div>
                </div>
              </div>

              <Button 
                type="submit" 
                className="w-full bg-[#7fd8be] text-black hover:bg-[#6bc4aa] font-semibold"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </Button>

              <p className="text-sm text-gray-400 text-center">
                By joining the waitlist, you'll receive updates about our launch and early access opportunities.
              </p>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
}