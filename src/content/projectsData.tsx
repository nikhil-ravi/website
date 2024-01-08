import TreeMap from "@/components/IndianLanguages/TreeMap";
import Timeline from "@/components/NarutoColors/Timeline";

export type Project = {
  title: string;
  description: string;
  image?: string;
  url?: string;
  github?: string;
  tags?: string[];
  Visual?: React.JSX.Element;
};

export const projects: Project[] = [
  {
    title: "Version Control for my Resume",
    description:
      "Manage your private and public resumes effortlessly with this GitHub repository. Generate privacy-conscious, shareable resumes from a Markdown source using GitHub Actions, Pandoc, and Docker support. Keep your personal details secure while providing an accessible version for wider distribution.",
    // image: "/resume-version-control/resume-version-control.png",
    url: "projects/resume-git",
    github: "https://github.com/nikhil-ravi/resume-public",
    tags: [
      "resume",
      "markdown",
      "github-actions",
      "pandoc",
      "docker",
      "resume-website",
      "resume-version-control",
    ],
  },
  {
    title: "Indian Languages",
    description: `A visualization of the number of speakers of Indian languages, grouped by family. The data is sourced from the 2011 Indian census. The visualization is built using React and Nivo.`,
    Visual: <TreeMap />,
    url: "projects/indian-languages",
    tags: [
      "data-visualization",
      "react",
      "nivo",
      "treemap",
      "indian-languages",
      "census",
      "india",
    ],
  },
  {
    title: "Colors of Naruto",
    description: ` Visual analysis of the color palettes in the Naruto manga covers across 72 volumes. Inspired by impactful data visualization projects, it explores trends and themes using K-means clustering in the CIELAB color space.`,
    Visual: <Timeline calledBy="projectsList" />,
    url: "projects/naruto-colors",
    github: "https://github.com/nikhil-ravi/naruto-colors",
    tags: [
      "data-science",
      "manga",
      "naruto",
      "color-palettes",
      "k-means-clustering",
      "nextjs",
      "nivo-charts",
      "data-visualization",
      "narrative-charts",
      "fair-use",
      "cielab-space",
      "color-analysis",
    ],
  },
  {
    title: "FicRec",
    image:
      "https://pics.craiyon.com/2023-09-13/5701ecbc5b994e84baecf05c021dfdd0.webp",
    description:
      "FicRec is a fanfiction recommendation engine that uses a neural network to embed search queries and fanfiction summaries into a common vector space. Given a search query, FicRec will return a list of fanfictions that are semantically similar to the query.",
    url: "https://ficrec.nikhilravi.com/",
    github: "https://github.com/nikhil-ravi/FicRec",
    tags: [
      "data-science",
      "machine-learning",
      "deep-learning",
      "nextjs",
      "scraping",
      "recommendation-engine",
      "fanfiction",
      "similarity-search",
      "text-embedding",
      "vector-database",
      "huggingface-transformers",
      "pineconedb",
      "transformers.js",
    ],
  },
  {
    title: "Elo Rating for IPL Teams",
    description:
      "Adapting the Elo rating system to rank IPL teams based on their performance in the league.",
    image: "/ipl-elo/ipl-elo.png",
    url: "projects/ipl-elo",
    github: "https://github.com/nikhil-ravi/ipl-elo",
    tags: [
      "Python",
      "Pandas",
      "Elo Rating System",
      "Data Science",
      "Next.js",
      "Nivo Charts",
    ],
  },
  {
    title: "Harry Potter Interaction Network (Work in Progress)",
    image:
      "https://raw.githubusercontent.com/nikhil-ravi/Harry-Potter-Network/main/screenshots/network.png",
    description:
      "A network of characters in the Harry Potter series and their interactions with each other.",
    github: "https://github.com/nikhil-ravi/Harry-Potter-Network",
    tags: ["Python", "Neo4j", "Cytoscape.js", "SpaCy", "FastCoref"],
    url: "projects/harry-potter-network",
  },
  {
    title: "LeetScrape",
    image: "https://imgur.com/jFDz2ou.png",
    description:
      "LeetScrape: Python package for quickly downloading and saving LeetCode problems offline, including topics, difficulty, and code stubs in various languages. Ideal for coding skill enhancement and interview preparation.",
    github: "https://github.com/nikhil-ravi/LeetScrape",
    url: "https://leetscrape.chowkabhara.com/",
    tags: ["Python", "Supabase", "SQLAlchemy", "MKDocs", "Poetry", "Pytest"],
  },
  {
    title: "Chess Insights",
    image: "https://imgur.com/VrDVlVL.png",
    description: `Chess Insights looks at all your games and gives you insights on what it finds in the data! Be it your wins and losses, hanging pieces, accuracy, or even what time of day you win the most, we've got all the data for you right here!`,
    url: "https://chess.chowkabhara.com/",
    github: "https://github.com/nikhil-ravi/ChessInsights-react",
    tags: [
      "React.js",
      "MUI",
      "Nivo Charts",
      "Chess",
      "Insights",
      "Supabase",
      "PostgreSQL",
      "MongoDB",
      "Express",
      "Redux Tookit Query",
      "Data Science",
      "Analytics",
    ],
  },
  {
    title: "Chowkabhara",
    image: "https://imgur.com/hkoDtP7.png",
    description: `Chowka Bara, an ancient Indian board game for two or four players, combines full observability with chance elements from special dice rolls and strategic decisions in pawn movements. Our project aims to bring this traditional game to mobile devices, offering an engaging blend of chance and strategy for players to enjoy on the go.`,
    github: "https://github.com/nikhil-ravi/chowkabhara",
    // url: "https://leetscrape.chowkabhara.com/",
    tags: ["Python", "Pygame"],
  },
];
