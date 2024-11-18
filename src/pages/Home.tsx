import { ArrowRight, Building2, LineChart, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-primary/10 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 font-display">
              Invest in Premium Real Estate
              <br />
              <span className="text-primary">Starting from $100</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              Join thousands of investors building wealth through fractional real estate ownership.
            </p>
            <div className="mt-8">
              <Link
                to="/projects"
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary-dark"
              >
                Browse Properties
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Premium Properties</h3>
              <p className="mt-2 text-gray-600">
                Access high-value real estate investments previously reserved for the wealthy.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <LineChart className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Strong Returns</h3>
              <p className="mt-2 text-gray-600">
                Earn passive income through rental yields and property appreciation.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="w-12 h-12 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">Community Driven</h3>
              <p className="mt-2 text-gray-600">
                Join a community of like-minded investors building wealth together.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}