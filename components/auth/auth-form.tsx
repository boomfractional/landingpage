"use client"

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useToast } from '@/hooks/use-toast'

export function AuthForm() {
  const [isSignUp, setIsSignUp] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Mock authentication
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      toast({
        title: isSignUp ? "Account created" : "Welcome back!",
        description: isSignUp ? "Please verify your email" : "Successfully signed in"
      })

      router.push('/demo/developer/projects')
      router.refresh()
    } catch (error: any) {
      toast({
        title: "Error",
        description: error.message,
        variant: "destructive"
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-[#263438] border-gray-700 text-white"
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="bg-[#263438] border-gray-700 text-white"
        required
      />
      <Button 
        type="submit" 
        className="w-full bg-[#7fd8be] text-black hover:bg-[#6bc4aa]"
        disabled={loading}
      >
        {loading ? "Loading..." : (isSignUp ? "Sign Up" : "Sign In")}
      </Button>
      <Button
        type="button"
        variant="ghost"
        className="w-full text-white"
        onClick={() => setIsSignUp(!isSignUp)}
      >
        {isSignUp ? "Already have an account? Sign in" : "Need an account? Sign up"}
      </Button>
    </form>
  )
}