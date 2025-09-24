
import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Footer from './Footer';

export default function Layout({ children }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Consistent Container Wrapper */}
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <Header 
          sidebarOpen={sidebarOpen}
          setSidebarOpen={setSidebarOpen}
          scrolled={scrolled}
        />
        
        <div className="flex mt-4 pt-28">
          <Sidebar isOpen={sidebarOpen} />
          <main className={`flex-1 ${sidebarOpen ? 'ml-64' : 'ml-0'} transition-all duration-300`}>
            {children}
          </main>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}
