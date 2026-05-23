// Single source of truth for core business details
export interface SocialLink {
  name: string;
  href: string;
}

export interface BrandPalette {
  accent: string;
  onAccent: string;
  bg: string;
  ink: string;
  inkMuted: string;
}

export interface BusinessDetails {
  name: string;
  tagline: string;
  email: string;
  phone: string;
  address: string;
  url: string;
  socials: SocialLink[];
  brand: BrandPalette;
}

export const business: BusinessDetails = {
  name: "CHROME BLOOM",
  tagline: "A small studio for AI-native software, polished by hand.",
  email: "studio@chromebloom.palmstreetweb.design",
  phone: "(415) 555-0142",
  address: "201 Linden Street, Studio 5, San Francisco, CA 94102",
  url: "https://chrome-bloom.palmstreetweb.design",
  socials: [
    { name: "Are.na", href: "https://are.na/chrome-bloom" },
    { name: "Read.cv", href: "https://read.cv/teams/chromebloom" },
    { name: "Dribbble", href: "https://dribbble.com/chromebloom" },
  ],
  brand: {
    accent: "#7B3FF2",
    onAccent: "#0A0033",
    bg: "#F4ECFF",
    ink: "#1A0B40",
    inkMuted: "#5B4A85",
  },
};
