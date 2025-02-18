
import { Brain, Briefcase, Users, Bot } from 'lucide-react';
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

  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 animate-fade-in">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
            Your Interview Success Starts Here
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Ace Your Interviews with
            <span className="gradient-text"> AI-Powered </span>
            Preparation
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
            Comprehensive interview preparation platform combining AI technology 
            with expert resources to help you land your dream job.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Get Started
            </button>
            <button className="px-8 py-3 border border-primary/20 rounded-lg hover:bg-primary/5 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Powerful Features</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Everything you need to prepare for your interviews and advance your career.
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

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glassmorphism p-12 rounded-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Journey?</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of successful candidates who have transformed their interview preparation with PrepGenius.
            </p>
            <button className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
              Start Preparing Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
