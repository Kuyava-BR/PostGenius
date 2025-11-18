export interface BrandKit {
  logo: File | null;
  logoUrl: string;
  brandColors: string[];
  businessName: string;
  businessDescription: string;
  platforms: string[];
}

export interface PostGenerationJob {
    objective: string;
    description: string;
    tone: string;
}

export interface GeneratedPost {
  title: string;
  visualPrompt: string;
  imageUrl: string;
  caption: string;
  hashtags: {
    business: string[];
    local: string[];
    niche: string[];
  };
}