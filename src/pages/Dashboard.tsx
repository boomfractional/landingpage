import { Building2, DollarSign, LineChart, TrendingUp, Wallet } from 'lucide-react';

const MOCK_INVESTMENTS = [
  {
    id: '1',
    property: 'Luxury Beachfront Villa',
    invested: 10000,
    returns: 1250,
    ownership: 0.4,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=800'
  },
  {
    id: '2',
    property: 'Downtown High-Rise',
    invested: 15000,
    returns: 1620,
    ownership: 0.3,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=800'
  }
];

export default function Dashboard() {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold font-display">Your Investment Dashboard</h1>

        {/* Stats Overview */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Invested</p>
                <p className="mt-1 text-2xl font-semibold">$25,000</p>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Wallet className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Returns</p>
                <p className="mt-1 text-2xl font-semibold">$2,870</p>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <TrendingUp className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Properties</p>
                <p className="mt-1 text-2xl font-semibold">2</p>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <Building2 className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">ROI</p>
                <p className="mt-1 text-2xl font-semibold">11.48%</p>
              </div>
              <div className="w-10 h-10 bg-primary/20 rounded-full flex items-center justify-center">
                <LineChart className="h-5 w-5 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Investment List */}
        <div className="mt-12">
          <h2 className="text-xl font-semibold mb-6">Your Properties</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {MOCK_INVESTMENTS.map((investment) => (
              <div key={investment.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="flex">
                  <div className="w-1/3">
                    <img
                      src={investment.image}
                      alt={investment.property}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="w-2/3 p-4">
                    <h3 className="font-semibold">{investment.property}</h3>
                    <div className="mt-2 grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Invested</p>
                        <p className="font-medium flex items-center">
                          <DollarSign className="h-4 w-4" />
                          {investment.invested.toLocaleString()}
                        </p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Returns</p>
                        <p className="font-medium flex items-center text-green-600">
                          <TrendingUp className="h-4 w-4 mr-1" />
                          ${investment.returns.toLocaleString()}
                        </p>
                      </div>
                      <div className="col-span-2">
                        <p className="text-sm text-gray-500">Ownership</p>
                        <p className="font-medium">{investment.ownership}%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}