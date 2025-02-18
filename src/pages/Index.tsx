
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
  ArrowRight
} from 'lucide-react';
import Navbar from '../components/Navbar';
import FeatureCard from '../components/FeatureCard';

const Index = () => {
  const features = [
    {
      title: "AI Resume Analyzer",
      description: "Get instant feedback on your resume with our advanced AI analysis system.",
      icon: Bot,
    },
    {
      title: "Mock Interviews",
      description: "Practice with AI and industry experts to improve your interview skills.",
      icon: Video,
    },
    {
      title: "Resource Library",
      description: "Access comprehensive eBooks, videos & practice quizzes.",
      icon: BookOpen,
    },
    {
      title: "Job & Internship Hub",
      description: "Find the perfect opportunities matched to your skills and experience.",
      icon: Building,
    },
    {
      title: "Expert Webinars",
      description: "Learn directly from industry professionals through live sessions.",
      icon: Users,
    },
    {
      title: "Technical Prep",
      description: "Master DSA, system design, and technical concepts.",
      icon: Brain,
    },
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
      title: "Frontend Developer",
      company: "WebSolutions",
      location: "Remote",
      type: "Full-time",
      posted: "1 day ago",
    },
    {
      title: "Product Manager",
      company: "InnovateTech",
      location: "New York, NY",
      type: "Full-time",
      posted: "3 days ago",
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
                Your Success Journey Starts Here
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Ace Your Next Interview with
                <span className="gradient-text block mt-2">Confidence 🚀</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Access AI-powered interview prep, expert insights, and real-world practice to land your dream job.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 transform duration-200 flex items-center gap-2">
                  Get Started Free
                  <ArrowRight className="h-4 w-4" />
                </button>
                <button className="px-8 py-4 border border-primary/20 rounded-lg hover:bg-primary/5 transition-all flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Watch Demo
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

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium">
              <TrendingUp className="h-4 w-4" />
              Why Choose PrepGenius
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
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Interview Coach Section */}
      <section className="py-20 px-4 bg-primary/5">
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
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Find your next career opportunity from our curated job listings.
            </p>
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

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="glassmorphism p-16 rounded-3xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10 -z-10"></div>
            <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Interview Game?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Join thousands of successful candidates who have landed their dream jobs with PrepGenius.
            </p>
            <button className="px-8 py-4 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all hover:scale-105 transform duration-200 flex items-center gap-2 mx-auto">
              Start Your Journey Today
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
