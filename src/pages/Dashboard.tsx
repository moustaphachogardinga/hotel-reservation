import React from 'react';
import { BarChart3 } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

interface Widget {
  title: string;
  value: string;
  change: string;
  color: string;
}

const Dashboard: React.FC = () => {
  const widgets: Widget[] = [
    { title: 'Visiteurs', value: '12,345', change: '+12%', color: 'blue' },
    { title: 'Revenus', value: '€45,678', change: '+8%', color: 'green' },
    { title: 'Commandes', value: '1,234', change: '+15%', color: 'purple' },
    { title: 'Conversions', value: '3.2%', change: '+0.5%', color: 'orange' },
    { title: 'Utilisateurs', value: '8,901', change: '+20%', color: 'red' },
    { title: 'Sessions', value: '23,456', change: '+5%', color: 'indigo' }
  ];

  // Sample data for the performance chart
  const performanceData = [
    { name: 'Jan', visitors: 4000, sales: 2400 },
    { name: 'Feb', visitors: 3000, sales: 1398 },
    { name: 'Mar', visitors: 2000, sales: 9800 },
    { name: 'Apr', visitors: 2780, sales: 3908 },
    { name: 'May', visitors: 1890, sales: 4800 },
    { name: 'Jun', visitors: 2390, sales: 3800 },
    { name: 'Jul', visitors: 3490, sales: 4300 },
  ];

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Tableau de bord</h1>
        <p className="text-gray-600 mt-2">Aperçu de vos performances</p>
      </div>

      {/* Widgets Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {widgets.map((widget, index) => (
          <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">{widget.title}</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">{widget.value}</p>
              </div>
              <div className={`text-sm font-medium ${
                widget.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
              }`}>
                {widget.change}
              </div>
            </div>
            <div className="mt-4">
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className={`bg-${widget.color}-500 h-2 rounded-full`}
                  style={{ width: `${Math.random() * 100}%` }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main Content - Performance Analysis Chart */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Analyse des performances</h2>
        <div className="h-96"> {/* Increased height for better chart visibility */}
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              data={performanceData}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="visitors" stroke="#8884d8" activeDot={{ r: 8 }} name="Visiteurs" />
              <Line type="monotone" dataKey="sales" stroke="#82ca9d" name="Ventes" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;