export interface BlogPost {
  id: string;
  title: string;
  author: string;
  date: string;
  summary: string;
  image: string;
  link: string;
  category?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: "1",
    title: "AI-Driven Customer Experience: Transforming Digital Interactions",
    author: "Marco Rossi",
    date: "2024-01-15",
    summary:
      "Discover how artificial intelligence is revolutionizing customer experiences across digital touchpoints, creating more personalized and engaging interactions.",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&h=600&fit=crop&crop=center",
    link: "/blog/ai-driven-customer-experience",
    category: "AI & Technology",
  },
  {
    id: "2",
    title:
      "Data Analytics in the Age of Privacy: Balancing Insights and Protection",
    author: "Sofia Chen",
    date: "2024-01-10",
    summary:
      "Learn how companies can leverage data analytics while maintaining user privacy and complying with evolving data protection regulations.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop&crop=center",
    link: "/blog/data-analytics-privacy",
    category: "Data & Analytics",
  },
  {
    id: "3",
    title: "The Future of Omnichannel Marketing: Seamless Customer Journeys",
    author: "Alex Thompson",
    date: "2024-01-08",
    summary:
      "Explore strategies for creating unified customer experiences across all digital and physical touchpoints in today's complex marketing landscape.",
    image:
      "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&h=600&fit=crop&crop=center",
    link: "/blog/omnichannel-marketing-future",
    category: "Marketing Strategy",
  },
  {
    id: "4",
    title: "Cloud Migration Strategies for Enterprise Digital Transformation",
    author: "David Rodriguez",
    date: "2024-01-05",
    summary:
      "A comprehensive guide to planning and executing successful cloud migration projects that drive business value and operational efficiency.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop&crop=center",
    link: "/blog/cloud-migration-strategies",
    category: "Cloud & Infrastructure",
  },
  {
    id: "5",
    title: "Sustainable Technology: Building Green Digital Solutions",
    author: "Emma Johansson",
    date: "2024-01-03",
    summary:
      "How technology companies are reducing their environmental impact through sustainable software development and green infrastructure practices.",
    image:
      "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&h=600&fit=crop&crop=center",
    link: "/blog/sustainable-technology",
    category: "Sustainability",
  },
  {
    id: "6",
    title: "Cybersecurity in the Remote Work Era: New Challenges and Solutions",
    author: "Michael Wagner",
    date: "2024-01-01",
    summary:
      "Understanding the evolving cybersecurity landscape and implementing robust security measures for distributed teams and remote operations.",
    image:
      "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=600&fit=crop&crop=center",
    link: "/blog/cybersecurity-remote-work",
    category: "Security",
  },
  {
    id: "7",
    title: "Machine Learning in Business Intelligence: Practical Applications",
    author: "Priya Patel",
    date: "2023-12-28",
    summary:
      "Real-world examples of how machine learning is transforming business intelligence and enabling data-driven decision making across industries.",
    image:
      "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=800&h=600&fit=crop&crop=center",
    link: "/blog/machine-learning-business-intelligence",
    category: "AI & Technology",
  },
  {
    id: "8",
    title: "The Rise of No-Code Development: Democratizing Software Creation",
    author: "Lucas Silva",
    date: "2023-12-25",
    summary:
      "How no-code and low-code platforms are empowering business users to create applications without traditional programming skills.",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&crop=center",
    link: "/blog/no-code-development-rise",
    category: "Development",
  },
];

export const getBlogPosts = (limit?: number): BlogPost[] => {
  return limit ? blogPosts.slice(0, limit) : blogPosts;
};

export const getBlogPost = (id: string): BlogPost | undefined => {
  return blogPosts.find((post) => post.id === id);
};
