export type Project = {
  title: string;
  description: string;
  image: string;
  url?: string;
  github?: string;
  tags?: string[];
};

export const projects: Project[] = [
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
    image:
      "https://pics.craiyon.com/2023-10-14/30d98f9a1a334a78b8f1ed5dbd4327d6.webp",
    description:
      "Adapting the Elo rating system to rank IPL teams based on their performance in the league.",
    url: "ipl-elo",
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
    title: "Harry Potter Interaction Network",
    image:
      "https://raw.githubusercontent.com/nikhil-ravi/Harry-Potter-Network/main/screenshots/network.png",
    description:
      "A network of characters in the Harry Potter series and their interactions with each other.",
    github: "https://github.com/nikhil-ravi/Harry-Potter-Network",
    tags: ["Python", "Neo4j", "Cytoscape.js", "SpaCy", "FastCoref"],
    url: "harry-potter-network",
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
    title: "Chowkabhara",
    image: "https://imgur.com/hkoDtP7.png",
    description: `Chowka Bara, an ancient Indian board game for two or four players, combines full observability with chance elements from special dice rolls and strategic decisions in pawn movements. Our project aims to bring this traditional game to mobile devices, offering an engaging blend of chance and strategy for players to enjoy on the go.`,
    github: "https://github.com/nikhil-ravi/chowkabhara",
    // url: "https://leetscrape.chowkabhara.com/",
    tags: ["Python", "Pygame"],
  },
];