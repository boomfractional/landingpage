import { Link } from 'react-router-dom';
import { Building2, LineChart, User } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="bg-white dark:bg-dark-paper shadow-sm dark:shadow-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <img src="/logo.svg" alt="Boom Fractional" className="h-8 w-auto" />
            </Link>
            <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
              <Link
                to="/projects"
                className="text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <Building2 className="mr-2 h-4 w-4" />
                Projects
              </Link>
              <Link
                to="/dashboard"
                className="text-gray-900 dark:text-gray-100 inline-flex items-center px-1 pt-1 text-sm font-medium"
              >
                <LineChart className="mr-2 h-4 w-4" />
                Dashboard
              </Link>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-dark">
              <User className="mr-2 h-4 w-4" />
              Sign In
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}