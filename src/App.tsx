import { useState, useEffect } from 'react';
import {
  Calendar,
  Target,
  TrendingUp,
  Users,
  MapPin,
  Zap,
  Award,
  Heart,
  Bike,
  Mountain,
  Wind,
  ChevronRight,
  Play,
  Search,
  Menu,
  X
} from 'lucide-react';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a1628] text-white">
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0a1628]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img
                src="/Gemini_Generated_Image_3n088s3n088s3n08.png"
                alt="FlowNation Logo"
                className="h-10 w-auto"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                FlowNation
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-slate-300 hover:text-white transition-colors">Features</a>
              <a href="#how-it-works" className="text-slate-300 hover:text-white transition-colors">How It Works</a>
              <a href="#community" className="text-slate-300 hover:text-white transition-colors">Community</a>
              <button className="bg-gradient-to-r from-orange-500 to-cyan-500 px-6 py-2.5 rounded-lg font-semibold hover:shadow-lg hover:shadow-orange-500/50 transition-all">
                Get Started
              </button>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="md:hidden bg-[#0f1f3a] border-t border-blue-900/30">
            <div className="px-4 py-4 space-y-3">
              <a href="#features" className="block text-slate-300 hover:text-white py-2">Features</a>
              <a href="#how-it-works" className="block text-slate-300 hover:text-white py-2">How It Works</a>
              <a href="#community" className="block text-slate-300 hover:text-white py-2">Community</a>
              <button className="w-full bg-gradient-to-r from-orange-500 to-cyan-500 px-6 py-2.5 rounded-lg font-semibold">
                Get Started
              </button>
            </div>
          </div>
        )}
      </nav>

      <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-[#0a1628] to-cyan-500/10" />
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/20 rounded-full blur-3xl animate-pulse delay-1000" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center space-x-2 bg-blue-950/50 backdrop-blur-sm px-4 py-2 rounded-full mb-8 border border-blue-800/30">
              <Zap className="w-4 h-4 text-cyan-400" />
              <span className="text-sm text-slate-300">The Endurance Events Hub</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Your Entire Endurance{' '}
              <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-orange-400 bg-clip-text text-transparent">
                Journey
              </span>
              {' '}in One Place
            </h1>

            <p className="text-xl sm:text-2xl text-slate-400 mb-12 leading-relaxed">
              Discover events. Plan your season. Train smarter. Connect with athletes.
              <br />
              <span className="text-slate-500">No more juggling between platforms.</span>
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <button className="group bg-gradient-to-r from-orange-500 to-cyan-500 px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all flex items-center space-x-2">
                <span>Explore Events</span>
                <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="group flex items-center space-x-2 bg-blue-950/50 hover:bg-blue-900/50 px-8 py-4 rounded-xl font-semibold text-lg border border-blue-800/30 transition-all">
                <Play className="w-5 h-5" />
                <span>Watch Demo</span>
              </button>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-8 text-sm text-slate-400">
              <div className="flex items-center space-x-2">
                <Bike className="w-5 h-5 text-cyan-400" />
                <span>Cycling</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mountain className="w-5 h-5 text-cyan-400" />
                <span>Triathlon</span>
              </div>
              <div className="flex items-center space-x-2">
                <Wind className="w-5 h-5 text-blue-400" />
                <span>Running</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              The Endurance Athlete's Dilemma
            </h2>
            <p className="text-xl text-slate-400">
              Your passion shouldn't be scattered across a dozen platforms
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              { title: 'Fragmented Discovery', desc: 'Events hidden across registrars, Facebook groups, and microsites' },
              { title: 'Disconnected Planning', desc: 'Training, nutrition, and gear advice in separate silos' },
              { title: 'Isolated Community', desc: 'Friends on Strava, coaches elsewhere, event chatter scattered' }
            ].map((item, i) => (
              <div key={i} className="bg-blue-950/50 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30">
                <h3 className="text-xl font-semibold mb-3 text-cyan-400">{item.title}</h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-flex items-center space-x-2 text-cyan-400">
              <span className="text-lg font-semibold">FlowNation is the connective tissue</span>
              <Zap className="w-5 h-5 text-orange-400" />
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Everything You Need,{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
                Unified
              </span>
            </h2>
            <p className="text-xl text-slate-400">
              From discovery to the finish line
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Search,
                title: 'Event Discovery',
                desc: 'Browse every gravel grind, crit, century, ultra, and ironman in one searchable hub',
                color: 'cyan'
              },
              {
                icon: Calendar,
                title: 'Season Planning',
                desc: 'Build your race calendar, track qualifications, and never miss registration',
                color: 'cyan'
              },
              {
                icon: TrendingUp,
                title: 'Training Integration',
                desc: 'Sync with Strava, TrainingPeaks, RWGPS—your training data flows here',
                color: 'blue'
              },
              {
                icon: Heart,
                title: 'Nutrition & Fueling',
                desc: 'Race-day fuel plans, product reviews, and expert nutrition guidance',
                color: 'orange'
              },
              {
                icon: Users,
                title: 'Event-Centric Social',
                desc: 'See who\'s racing, form training groups, share beta on courses',
                color: 'cyan'
              },
              {
                icon: Award,
                title: 'Results & Media',
                desc: 'Live tracking, finish times, race photos, and highlight reels all in one feed',
                color: 'blue'
              },
              {
                icon: Target,
                title: 'Coach Directory',
                desc: 'Find certified coaches by discipline, location, and training philosophy',
                color: 'cyan'
              },
              {
                icon: MapPin,
                title: 'Local Shops & Clubs',
                desc: 'Discover bike shops, running stores, and clubs in your area',
                color: 'cyan'
              },
              {
                icon: Zap,
                title: 'Commerce Layer',
                desc: 'Book coaching, buy gear, register for events—seamless transactions',
                color: 'orange'
              }
            ].map((feature, i) => (
              <div
                key={i}
                className="group bg-blue-950/30 backdrop-blur-sm p-8 rounded-2xl border border-blue-800/30 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10"
              >
                <div className={`w-14 h-14 bg-gradient-to-br from-${feature.color}-500/20 to-${feature.color}-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <feature.icon className={`w-7 h-7 text-${feature.color}-400`} />
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-950/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">
              Your Journey, Simplified
            </h2>
            <p className="text-xl text-slate-400">
              Four steps to transform your endurance experience
            </p>
          </div>

          <div className="space-y-12">
            {[
              {
                step: '01',
                title: 'Discover & Plan',
                desc: 'Search events by discipline, distance, terrain, and date. Build your season calendar with smart qualification tracking.',
                icon: Search
              },
              {
                step: '02',
                title: 'Train & Prepare',
                desc: 'Connect your training platforms. Access coach recommendations. Get nutrition and gear advice tailored to your events.',
                icon: TrendingUp
              },
              {
                step: '03',
                title: 'Connect & Share',
                desc: 'Join event-specific communities. See who else is racing. Form training groups. Share course beta and experiences.',
                icon: Users
              },
              {
                step: '04',
                title: 'Race & Relive',
                desc: 'Track live results. View finish photos. Watch highlight videos. Celebrate achievements with your community.',
                icon: Award
              }
            ].map((item, i) => (
              <div key={i} className="flex flex-col md:flex-row items-start gap-8 group">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl font-bold shadow-lg shadow-orange-500/30 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center space-x-3 mb-3">
                    <item.icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-2xl font-semibold">{item.title}</h3>
                  </div>
                  <p className="text-lg text-slate-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="community" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-br from-orange-500/10 via-blue-950/50 to-cyan-500/10 rounded-3xl p-12 border border-blue-800/30">
            <div className="text-center">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Built for the Entire Ecosystem
              </h2>
              <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto">
                Athletes, coaches, clubs, shops, influencers, and organizers—all in one thriving community
              </p>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {[
                  { label: 'Athletes', count: 'All Levels' },
                  { label: 'Coaches', count: 'Certified' },
                  { label: 'Events', count: 'Global' },
                  { label: 'Clubs', count: 'Local & Virtual' },
                  { label: 'Shops', count: 'Trusted Partners' },
                  { label: 'Influencers', count: 'Content Creators' }
                ].map((item, i) => (
                  <div key={i} className="bg-blue-950/50 backdrop-blur-sm p-6 rounded-xl border border-blue-800/30">
                    <div className="text-3xl font-bold text-cyan-400 mb-2">{item.count}</div>
                    <div className="text-slate-300">{item.label}</div>
                  </div>
                ))}
              </div>

              <button className="bg-gradient-to-r from-orange-500 to-cyan-500 px-10 py-4 rounded-xl font-semibold text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all inline-flex items-center space-x-2">
                <span>Join FlowNation</span>
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ready to Transform Your{' '}
            <span className="bg-gradient-to-r from-cyan-400 to-orange-400 bg-clip-text text-transparent">
              Endurance Journey?
            </span>
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Stop juggling platforms. Start flowing.
          </p>
          <button className="bg-gradient-to-r from-orange-500 to-cyan-500 px-12 py-5 rounded-xl font-semibold text-xl hover:shadow-2xl hover:shadow-orange-500/50 transition-all">
            Get Early Access
          </button>
        </div>
      </section>

      <footer className="border-t border-blue-900/30 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <div className="flex items-center space-x-2">
              <img
                src="/Gemini_Generated_Image_3n088s3n088s3n08.png"
                alt="FlowNation Logo"
                className="h-8 w-auto"
              />
              <span className="text-xl font-bold">FlowNation</span>
            </div>
            <div className="flex flex-wrap justify-center gap-8 text-slate-400">
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Blog</a>
              <a href="#" className="hover:text-white transition-colors">Careers</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </div>
            <div className="text-slate-500 text-sm">
              © 2025 FlowNation. All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
