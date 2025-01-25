import { AuthForm } from '@/components/auth/auth-form'

export default function SignIn() {
  return (
    <div className="min-h-screen bg-[#0b0e0f] flex items-center justify-center">
      <div className="max-w-md w-full mx-4">
        <div className="bg-[#151819] border border-gray-800 rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">
            Sign in to continue
          </h2>
          <AuthForm />
        </div>
      </div>
    </div>
  )
}