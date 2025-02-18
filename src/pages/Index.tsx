
import { Brain, Briefcase, Users, Bot, Sparkles, GraduationCap, TrendingUp } from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';

const Index = () => {
  const features = [
    {
      title: "AI Interview Coach",
      description: "Get real-time feedback on your interview performance with our advanced AI coaching system.",
      icon: Bot,
    },
    {
      title: "Technical Prep",
      description: "Master DSA, system design, and technical concepts with structured learning paths.",
      icon: Brain,
    },
    {
      title: "Job Matching",
      description: "Find the perfect job opportunities matched to your skills and experience.",
      icon: Briefcase,
    },
    {
      title: "Community Support",
      description: "Connect with peers, share experiences, and learn from industry experts.",
      icon: Users,
    },
  ];

  const stats = [
    { number: "95%", text: "Success Rate" },
    { number: "10K+", text: "Active Users" },
    { number: "500+", text: "Companies" },
    { number: "24/7", text: "AI Support" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4" />
                Your Interview Success Starts Here
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ace Your Interviews with
                <span className="gradient-text block mt-2">AI-Powered Preparation</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Comprehensive interview preparation platform combining AI technology 
                with expert resources to help you land your dream job.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors hover:scale-105 transform duration-200">
                  Get Started
                </button>
                <button className="px-8 py-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
                  Learn More
                </button>
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative h-[400px] w-full rounded-2xl overflow-hidden glassmorphism">
                <img 
                  src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b" 
                  alt="Tech Interview"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 p-6 glassmorphism rounded-xl animate-float">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={stat.text}
                className="text-center p-6 glassmorphism animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="text-3xl font-bold mb-2 gradient-text">{stat.number}</div>
                <div className="text-muted-foreground">{stat.text}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              Powerful Features
            </div>
            <h2 className="text-3xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources to help you prepare for your dream job.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <div key={feature.title} 
                   className="animate-fade-in"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <h2 className="text-3xl font-bold mb-8 text-center">How PrepGenius Works</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: "1", title: "Sign Up", description: "Create your account and tell us about your career goals" },
                { step: "2", title: "Practice", description: "Use AI-powered tools to enhance your interview skills" },
                { step: "3", title: "Succeed", description: "Land your dream job with confidence" },
              ].map((item, index) => (
                <div 
                  key={item.step}
                  className="text-center p-6 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <span className="text-xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glassmorphism p-12 rounded-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 -z-10"></div>
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of successful candidates who have transformed their interview preparation with PrepGenius.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 transform duration-200">
              Start Preparing Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
