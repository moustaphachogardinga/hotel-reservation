import React, { useState } from 'react';
import MainLayout from './layouts/Mainlayout';
import SidebarLayout from './layouts/Sidebarlayout';
import Hero from './components/Hero';
import Features from './components/Features';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'dashboard'>('home');

  if (currentView === 'dashboard') {
    return (
      <SidebarLayout>
        <Dashboard />
      </SidebarLayout>
    );
  }

  return (
    <MainLayout>
      <div className="relative">
        <Hero />
        <Features />
        
        {/* Navigation Demo */}
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={() => setCurrentView('dashboard')}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-blue-700 transition duration-200"
          >
            Voir Dashboard
          </button>
        </div>
      </div>
    </MainLayout>
  );
};

export default App;