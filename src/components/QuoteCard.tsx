
import React, { useState, useCallback, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
import ShareButton from "./ShareButton";
import { Quote, getRandomQuote } from "@/data/quotes";
import { useIsMobile } from "@/hooks/use-mobile";

const QuoteCard = () => {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [isAnimating, setIsAnimating] = useState(false);
  const [favoriteCount, setFavoriteCount] = useState(0);
  const isMobile = useIsMobile();

  const getNewQuote = useCallback(() => {
    setIsAnimating(true);
    
    // Delay setting the new quote to allow for fade-out animation
    setTimeout(() => {
      setQuote(getRandomQuote());
      setIsAnimating(false);
    }, 500);
  }, []);

  const handleFavorite = () => {
    setFavoriteCount(prev => prev + 1);
  };
  
  return (
    <div className="relative z-10 w-full max-w-md">
      <Card className="border-none shadow-lg overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 to-purple-50 opacity-70"></div>
        <CardContent className="p-6 sm:p-8 relative">
          <div className={`min-h-[200px] flex flex-col items-center justify-center transition-opacity duration-500 ${isAnimating ? 'opacity-0' : 'opacity-100 animate-fade-in'}`}>
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-indigo-100 mb-4">
              <span className="text-3xl text-indigo-600">"</span>
            </div>
            
            <p className="font-serif text-center text-xl sm:text-2xl mb-6 leading-relaxed text-slate-700">
              {quote.text}
            </p>
            
            <p className="text-right w-full text-slate-600 font-medium mb-8 italic">
              — {quote.author}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full justify-center items-center mt-4">
              <Button 
                onClick={getNewQuote} 
                className="rounded-full px-6 w-full sm:w-auto gap-2"
              >
                <RefreshCw className="w-4 h-4" />
                New Quote
              </Button>
              
              <div className="w-full sm:w-auto">
                <ShareButton quote={quote} />
              </div>
            </div>
            
            <div className="mt-4 text-sm text-slate-500">
              <button 
                onClick={handleFavorite}
                className="text-indigo-500 hover:text-indigo-600 transition-colors"
              >
                ♥ Favorite ({favoriteCount})
              </button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default QuoteCard;
