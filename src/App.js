import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, BarChart3, Cpu, Cloud, Database, CheckCircle, ArrowRight, Activity, Settings, Eye, HelpCircle, Package, Truck, Users, Shield, Zap, AlertTriangle, DollarSign, Trash2, FileText, Warehouse, GitBranch } from 'lucide-react';
import logo from "./assets/logo1.png";

const DataloftWebsite = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [formData, setFormData] = useState({ email: '', subject: '', message: '' });
  const [selectedService, setSelectedService] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setMobileMenuOpen(false);
    }
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  if (!formData.email || !formData.subject || !formData.message) {
    alert("Please fill all fields.");
    return;
  }

  try {
    const response = await fetch(
      "https://formsubmit.co/ajax/vatsalrana14@gmail.com",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          _subject: `New Demo Request: ${formData.subject}`,
          _template: "table",
        }),
      }
    );

    if (response.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ email: "", subject: "", message: "" });
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (error) {
    console.error(error);
    alert("❌ Network error.");
  }
};

  const services = [
    {
      name: 'Real Time Dashboard',
      icon: <Activity className="w-8 h-8" />,
      description: "OptiFlow's live dashboard provides real-time data on sensor health along the production line. Monitor sensor status, detect issues, and optimize operations for seamless efficiency.",
      color: 'from-blue-600 to-cyan-500'
    },
    {
      name: 'Customize Analytics',
      icon: <Settings className="w-8 h-8" />,
      description: "OptiFlow is a customizable software that meets your business needs effortlessly. No coding required. Customize fields, templates, and reports. Set custom statuses and automate tasks with personalized workflows.",
      color: 'from-purple-600 to-pink-500'
    },
    {
      name: 'Sensor Health Live Display',
      icon: <Eye className="w-8 h-8" />,
      description: "Monitor sensor health in real-time across your entire production line. Get instant alerts and notifications to prevent downtime and maintain optimal performance.",
      color: 'from-green-600 to-emerald-500'
    },
    {
      name: 'Live Support',
      icon: <HelpCircle className="w-8 h-8" />,
      description: "OptiFlow's live support feature provides immediate help in case of any failure in the production line. Get expert assistance when you need it most to minimize disruptions.",
      color: 'from-orange-600 to-red-500'
    },
    {
      name: 'Inventory Management',
      icon: <Package className="w-8 h-8" />,
      description: "Effortlessly handle your inventory online with OptiFlow. Our software supports essential warehouse operations such as receiving, shipments, and stocktakes. Efficiently manage hundreds of thousands of product items.",
      color: 'from-indigo-600 to-blue-500'
    },
    {
      name: 'Order Tracking',
      icon: <Truck className="w-8 h-8" />,
      description: "OptiFlow streamlines product orders effortlessly with automated systems. Manage and track customer orders from multiple channels with ease. Seamlessly sync orders with existing systems.",
      color: 'from-pink-600 to-rose-500'
    },
    {
      name: 'Multiple Access',
      icon: <Users className="w-8 h-8" />,
      description: "Effortlessly manage multiple entities, stores, and warehouses in one OptiFlow account. Grant customized permissions to employees, ensuring secure business growth. Audit log for enhanced transparency.",
      color: 'from-teal-600 to-cyan-500'
    },
    {
      name: 'Quality Control',
      icon: <Shield className="w-8 h-8" />,
      description: "Easily inspect and evaluate your products at critical intervals along the production line. Receive immediate notifications and reports for quick problem resolution.",
      color: 'from-yellow-600 to-amber-500'
    }
  ];

  const features = [
    {
      category: 'Fast & Scaleable',
      items: [
        { name: 'Fault Tolerance', icon: <AlertTriangle className="w-5 h-5" />, description: 'Built-in redundancy and error handling' },
        { name: 'Cost Calculation', icon: <DollarSign className="w-5 h-5" />, description: 'Real-time cost analysis and tracking' },
        { name: 'Scrap Control', icon: <Trash2 className="w-5 h-5" />, description: 'Minimize waste and optimize resources' }
      ]
    },
    {
      category: 'Automation',
      items: [
        { name: 'Automatic Report Generation', icon: <FileText className="w-5 h-5" />, description: 'Scheduled automated reporting' },
        { name: 'Warehouse Management', icon: <Warehouse className="w-5 h-5" />, description: 'Complete warehouse automation' },
        { name: 'Line Management', icon: <GitBranch className="w-5 h-5" />, description: 'Production line optimization' }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      {/* Navigation */}
<nav className={`fixed w-full z-50 transition-all duration-300 ${
  isScrolled
    ? "bg-slate-950/95 backdrop-blur-md shadow-lg"
    : "bg-transparent"
}`}>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center h-24">

      {/* Logo */}
      <div
        className="flex items-center cursor-pointer"
        onClick={() => scrollToSection("home")}
      >
        <img
          src={logo}
          alt="Dataloft Logo"
          className="h-20 w-auto transition-transform duration-300 hover:scale-105"

        />
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex space-x-8">
        {["home", "about", "services", "features", "how-it-works", "demo"].map(
          (item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className={`capitalize transition-colors duration-300 hover:text-cyan-400 ${
                activeSection === item
                  ? "text-cyan-400"
                  : "text-white"
              }`}
            >
              {item.replace("-", " ")}
            </button>
          )
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-white"
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
      </button>
    </div>
  </div>

  {/* Mobile Menu Dropdown */}
  {mobileMenuOpen && (
    <div className="md:hidden bg-slate-900/98 backdrop-blur-md animate-in slide-in-from-top duration-300">
      <div className="px-4 pt-2 pb-6 space-y-3">
        {["home", "about", "services", "features", "how-it-works", "demo"].map(
          (item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item)}
              className="block w-full text-left px-4 py-3 capitalize hover:bg-slate-800 rounded-lg transition-colors duration-200"
            >
              {item.replace("-", " ")}
            </button>
          )
        )}
      </div>
    </div>
  )}
</nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-950 to-cyan-900/20"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ3JpZCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBwYXR0ZXJuVW5pdHM9InVzZXJTcGFjZU9uVXNlIj48cGF0aCBkPSJNIDQwIDAgTCAwIDAgMCA0MCIgZmlsbD0ibm9uZSIgc3Ryb2tlPSJyZ2JhKDU5LDEzMCwyNDYsMC4xKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-30"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
          <div className="animate-in fade-in slide-in-from-bottom duration-1000">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 bg-clip-text text-transparent">
              The Smartest Way to Manage Your Data
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Delivering IT solutions that enable you to work smarter with Optiflow software tailored for your production line
            </p>
            <button 
              onClick={() => scrollToSection('demo')}
              className="group bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50 inline-flex items-center gap-2"
            >
              Request Demo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: 'Our Mission', desc: 'Delivering IT solutions that enable you to work smarter', icon: <BarChart3 className="w-8 h-8" /> },
              { title: 'Our Vision', desc: 'One stop solution for simplified management of geographically distributed Assets', icon: <Cpu className="w-8 h-8" /> },
              { title: 'Technology', desc: 'Maximize efficiency and scalability with our Optiflow software tailored for your production line', icon: <Cloud className="w-8 h-8" /> }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl hover:shadow-cyan-500/20 text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-cyan-400">{item.title}</h3>
                <p className="text-slate-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Our Expertise: Latest Use Cases in Manufacturing
          </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6 max-w-5xl mx-auto">
             {[
              { title: 'Plant Benchmarking', span: 'lg:col-span-2' },
              { title: 'Increasing OEE', span: 'lg:col-span-2' },
              { title: 'Real-time Visibility', span: 'lg:col-span-2' },
              { title: 'Workforce Productivity', span: 'lg:col-span-3' },
              { title: 'Digital Thread', span: 'lg:col-span-3' },
                ].map((item, idx) => (
              <div
              key={idx}
              className={`group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:-translate-y-2 text-center ${item.span}`}
              >
                <h3 className="text-xl font-bold">{item.title}</h3>
                </div>
                ))}
            </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Services
          </h2>
          <p className="text-center text-slate-300 max-w-4xl mx-auto mb-16 text-lg">
            DATALOFT is a revolutionary technology that equips companies with optimal efficiency and productivity. Our product, OptiFlow, is an IoT-based software that automates and streamlines the entire production line of a business.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <div 
                key={idx}
                onClick={() => setSelectedService(service)}
                className="group bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:-translate-y-2 cursor-pointer text-center"
              >
                <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {service.icon}
                </div>
                <h3 className="font-semibold mb-2">{service.name}</h3>
                <p className="text-sm text-cyan-400 group-hover:text-cyan-300">Click for details</p>
              </div>
            ))}
          </div>

          {/* Service Detail Modal */}
          {selectedService && (
            <div 
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-in fade-in duration-300"
              onClick={() => setSelectedService(null)}
            >
              <div 
                className="bg-slate-800 border border-slate-700 rounded-2xl p-8 max-w-2xl w-full animate-in zoom-in duration-300"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-4">
                    <div className={`w-16 h-16 bg-gradient-to-br ${selectedService.color} rounded-full flex items-center justify-center`}>
                      {selectedService.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-cyan-400">{selectedService.name}</h3>
                  </div>
                  <button 
                    onClick={() => setSelectedService(null)}
                    className="text-slate-400 hover:text-white transition-colors"
                  >
                    <X size={24} />
                  </button>
                </div>
                <p className="text-slate-300 text-lg leading-relaxed text-center">{selectedService.description}</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Features
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, idx) => (
              <div 
                key={idx}
                className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300"
              >
                <h3 className="text-2xl font-bold mb-6 text-cyan-400 text-center">{feature.category}</h3>
                <div className="space-y-4">
                  {feature.items.map((item, i) => (
                    <div key={i} className="flex items-start gap-4 p-4 bg-slate-800/50 rounded-lg hover:bg-slate-800 transition-colors">
                      <div className="text-cyan-400 mt-1">{item.icon}</div>
                      <div className="text-center flex-1">
                        <h4 className="font-semibold mb-1">{item.name}</h4>
                        <p className="text-sm text-slate-400">{item.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            How It Works
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { step: 1, title: 'Idealization & Concept Development', desc: 'Brainstorm ideas, define purpose, target market, and key features' },
              { step: 2, title: 'Design & Prototyping', desc: 'Create product specifications, develop prototype, iterate based on feedback' },
              { step: 3, title: 'Software & Hardware Development', desc: 'Develop hardware, software, cloud infrastructure, and user interfaces for IoT solution' },
              { step: 4, title: 'Testing and Quality Assurance', desc: 'Conduct rigorous testing for functionality, performance, and security' },
              { step: 5, title: 'Deployment', desc: 'Develop deployment strategy, integrate with existing systems/platforms' },
              { step: 6, title: 'Maintenance & Support', desc: 'Provide ongoing maintenance, customer support, troubleshooting, and continuous improvement' }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group relative bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 text-center"
              >
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center text-xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <h3 className="text-lg font-bold mb-3 mt-6 text-cyan-400">{item.title}</h3>
                <p className="text-slate-300 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Digital Solutions Ecosystem */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Digital Solutions Ecosystem
          </h2>
          <p className="text-center text-cyan-400 text-xl mb-16">Co-Innovate with Us</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'Data Science & Analytics', icon: <BarChart3 className="w-8 h-8" /> },
              { title: 'IOT', icon: <Cpu className="w-8 h-8" /> },
              { title: 'Data Twin', icon: <Database className="w-8 h-8" /> },
              { title: 'Cloud / Edge Computing', icon: <Cloud className="w-8 h-8" /> }
            ].map((item, idx) => (
              <div 
                key={idx}
                className="group bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500 transition-all duration-300 hover:transform hover:-translate-y-2 text-center"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold">{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Request Demo */}
      <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/50">
        <div className="max-w-3xl mx-auto">
          <div className="bg-gradient-to-br from-slate-800/80 to-slate-900/80 backdrop-blur-sm p-10 rounded-3xl border border-slate-700 shadow-2xl">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Request Demo
            </h2>
            <p className="text-center text-slate-300 mb-8">
              Schedule a product demo with one of our product consultants
            </p>
            <div className="space-y-6">
              <div>
                <input 
                  type="email" 
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <input 
                  type="text" 
                  placeholder="Subject"
                  value={formData.subject}
                  onChange={(e) => setFormData({...formData, subject: e.target.value})}
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-slate-400"
                />
              </div>
              <div>
                <textarea 
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({...formData, message: e.target.value})}
                  className="w-full px-6 py-4 bg-slate-900/50 border border-slate-600 rounded-xl focus:outline-none focus:border-cyan-500 transition-colors duration-300 text-white placeholder-slate-400 resize-none"
                ></textarea>
              </div>
              <button 
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-cyan-500/50"
              >
                Send Message
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-800">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Database className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">DATALOFT</span>
          </div>
          <div className="space-y-2 mb-6">
            <p className="text-slate-400">dataloft.info@gmail.com</p>
            <p className="text-slate-400">Vatsal M. Rana | +91 7066822892</p>
            <p className="text-slate-400">PUNE</p>
          </div>
          <p className="text-slate-500 text-sm">©2024 by DATALOFT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

function App() {
  return <DataloftWebsite />;
}

export default App;