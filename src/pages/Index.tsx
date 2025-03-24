
import { 
  Brain, 
  Briefcase, 
  Users, 
  Bot, 
  Sparkles, 
  GraduationCap, 
  TrendingUp, 
  BookOpen,
  Video,
  Building,
  Play,
  ArrowRight,
  Star,
  Search,
  Mail,
  Github,
  Linkedin,
  Twitter,
  Youtube,
  MessageCircle,
  FileCheck,
  Trophy,
  BookOpenCheck,
  PlayCircle,
  Target
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';
import { Link } from 'react-router-dom';

const Index = () => {
  const features = [
    {
      title: "AI Resume & Cover Letter Generator",
      description: "Generate professional resumes and cover letters with AI assistance.",
      icon: FileCheck,
      link: "/resume"
    },
    {
      title: "AI Mock Interview Feedback",
      description: "Practice interviews with AI and get instant feedback on your performance.",
      icon: Bot,
    },
    {
      title: "Gamified Progress Tracking",
      description: "Track your progress and earn rewards as you improve your skills.",
      icon: Trophy,
    },
    {
      title: "Comprehensive Question Bank",
      description: "Access thousands of real interview questions with detailed answers.",
      icon: BookOpenCheck,
    },
    {
      title: "HD Video Tutorials & Webinars",
      description: "Learn from industry experts through high-quality video content.",
      icon: PlayCircle,
    },
    {
      title: "Industry-Specific Preparation",
      description: "Tailored preparation paths for different industries and roles.",
      icon: Target,
    },
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer at Google",
      content: "PrepGenius helped me land my dream job! The AI mock interviews were incredibly helpful.",
      company: "google",
    },
    {
      name: "Michael Chen",
      role: "Product Manager at Amazon",
      content: "The structured approach and expert guidance made all the difference in my interviews.",
      company: "amazon",
    },
    {
      name: "Emily Rodriguez",
      role: "Data Scientist at Microsoft",
      content: "The AI-powered resume builder and practice sessions were game-changers.",
      company: "microsoft",
    },
  ];

  const stats = [
    { number: "95%", text: "Success Rate" },
    { number: "50K+", text: "Users Hired" },
    { number: "1000+", text: "Company Partners" },
    { number: "24/7", text: "AI Support" },
  ];

  const jobs = [
    {
      title: "Software Engineer",
      company: "TechCorp",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 days ago",
    },
    {
      title: "Product Manager",
      company: "InnovateTech",
      location: "New York, NY",
      type: "Full-time",
      posted: "3 days ago",
    },
    {
      title: "Data Scientist",
      company: "DataCo",
      location: "Remote",
      type: "Full-time",
      posted: "1 day ago",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-primary/5">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 z-0" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-left animate-fade-in">
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
                <Sparkles className="h-4 w-4 animate-pulse" />
                AI-Powered Interview Preparation
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ace Your Interviews with
                <span className="gradient-text block mt-2">AI-Powered Guidance!</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Get access to expert interview questions, AI mock interviews, resume builders, and more.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 transform duration-200 flex items-center gap-2">
                  Start Preparing
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Explore Features
                </button>
              </div>
            </div>
            <div className="relative animate-fade-in animation-delay-200">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden glassmorphism">
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
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              Key Features
            </div>
            <h2 className="text-4xl font-bold mb-4">Everything You Need to Succeed</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive tools and resources to help you prepare for your dream job.
            </p>
          </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              
              <div key={feature.title} 
                   className="animate-fade-in"
                   style={{ animationDelay: `${index * 0.1}s` }}>
                    <Link to={feature.link}>
                <FeatureCard {...feature} />
                </Link>
              </div>
             
            ))}
          </div>
        
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Star className="h-4 w-4" />
              Success Stories
            </div>
            <h2 className="text-4xl font-bold mb-4">From Our Users</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Hear from students who landed their dream jobs using PrepGenius.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name}
                className="glassmorphism p-6 rounded-xl animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <p className="text-lg mb-4">{testimonial.content}</p>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <img 
                      src={`https://logo.clearbit.com/${testimonial.company}.com`}
                      alt={testimonial.company}
                      className="h-8 w-8 object-contain"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Interview Coach Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="glassmorphism p-12 rounded-3xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-4xl font-bold mb-6">
                  Your Personal AI Interview Trainer 🤖
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Get instant feedback on your speech, confidence, and body language! Practice makes perfect with our AI-powered mock interviews.
                </p>
                <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 transform duration-200 flex items-center gap-2">
                  Try AI Mock Interview
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
              <div className="relative h-[400px] rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c" 
                  alt="AI Interview"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job Listings Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <Briefcase className="h-4 w-4" />
              Latest Opportunities
            </div>
            <h2 className="text-4xl font-bold mb-4">Featured Job Openings</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Find your next career opportunity from our curated job listings.
            </p>
            <div className="max-w-xl mx-auto relative mb-12">
              <input 
                type="text" 
                placeholder="Search jobs by title, company, or location..."
                className="w-full px-4 py-3 pl-12 rounded-lg border border-primary/20 bg-white/5 backdrop-blur-sm"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
          </div>
          <div className="grid gap-6">
            {jobs.map((job, index) => (
              <div 
                key={index}
                className="glassmorphism p-6 rounded-xl hover:scale-[1.02] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-4 text-muted-foreground">
                      <span>{job.company}</span>
                      <span>{job.location}</span>
                      <span>{job.type}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-muted-foreground">{job.posted}</span>
                    <button className="px-6 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors">
                      Apply Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glassmorphism p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 -z-10"></div>
            <h2 className="text-4xl font-bold mb-6">Join Our Community</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Get weekly interview tips, job alerts, and expert advice delivered to your inbox.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-primary/20 bg-white/5 backdrop-blur-sm"
              />
              <button className="px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 transform duration-200">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 border-t border-primary/10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">PrepGenius</h3>
              <p className="text-muted-foreground">Your AI-powered interview preparation platform.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Home</a></li>
                <li><a href="#" className="hover:text-primary">Features</a></li>
                <li><a href="#" className="hover:text-primary">Pricing</a></li>
                <li><a href="#" className="hover:text-primary">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">FAQ</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <div className="flex gap-4">
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Twitter className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Youtube className="h-5 w-5" />
                </a>
                <a href="#" className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary/20 transition-colors">
                  <Github className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
          <div className="pt-8 border-t border-primary/10 text-center text-muted-foreground">
            <p>&copy; 2024 PrepGenius. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Chat Button */}
      <button className="fixed bottom-6 right-6 h-14 w-14 rounded-full bg-primary text-white flex items-center justify-center hover:bg-primary/90 transition-colors shadow-lg">
        <MessageCircle className="h-6 w-6" />
      </button>
    </div>
  );
};

export default Index;
