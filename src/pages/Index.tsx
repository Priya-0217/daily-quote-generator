
import QuoteCard from "@/components/QuoteCard";

const Index = () => {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-50 z-0"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
      <div className="absolute top-40 right-20 w-64 h-64 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      <div className="absolute -bottom-8 left-40 w-64 h-64 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      
      <div className="container px-4 py-8 flex flex-col items-center justify-center z-10">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-center text-slate-800">
          Daily <span className="text-indigo-600">Wisdom</span>
        </h1>
        <p className="text-slate-600 mb-10 text-center max-w-md">
          Find inspiration for your day with handpicked quotes
        </p>
        
        <QuoteCard />
        
        <footer className="mt-12 text-center text-sm text-slate-500">
          <p>Created with ❤️ as part of my learning journey</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
