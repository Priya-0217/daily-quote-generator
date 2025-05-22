
import { Button } from "@/components/ui/button";
import { Quote } from "@/data/quotes";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { toast } from "sonner";
import { Share, Twitter, Copy } from "lucide-react";

interface ShareButtonProps {
  quote: Quote;
}

const ShareButton = ({ quote }: ShareButtonProps) => {
  const quoteText = `"${quote.text}" - ${quote.author}`;
  
  const shareToTwitter = () => {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quoteText)}`;
    window.open(twitterUrl, "_blank");
    toast.success("Opening Twitter sharing...");
  };

  const shareToWhatsApp = () => {
    const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(quoteText)}`;
    window.open(whatsappUrl, "_blank");
    toast.success("Opening WhatsApp sharing...");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(quoteText)
      .then(() => toast.success("Quote copied to clipboard!"))
      .catch(() => toast.error("Failed to copy quote"));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="rounded-full px-6 font-medium gap-2">
          <Share className="w-4 h-4" />
          Share
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        <DropdownMenuItem onClick={shareToTwitter} className="cursor-pointer gap-2">
          <Twitter className="w-4 h-4" />
          Twitter
        </DropdownMenuItem>
        <DropdownMenuItem onClick={shareToWhatsApp} className="cursor-pointer">
          Share on WhatsApp
        </DropdownMenuItem>
        <DropdownMenuItem onClick={copyToClipboard} className="cursor-pointer gap-2">
          <Copy className="w-4 h-4" />
          Copy to Clipboard
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ShareButton;
