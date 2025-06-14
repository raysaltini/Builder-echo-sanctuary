import { BlogPost } from "@/lib/blog-data";
import { ArrowRight, Calendar, User } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  className?: string;
}

export const BlogCard = ({ post, className = "" }: BlogCardProps) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <article
      className={`group bg-white rounded-xl border border-jakala-gray-200 overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-jakala-gray-200/50 hover:-translate-y-1 ${className}`}
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
      </div>

      <div className="p-6">
        {post.category && (
          <div className="mb-3">
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-jakala-red/10 text-jakala-red border border-jakala-red/20">
              {post.category}
            </span>
          </div>
        )}

        <h3 className="font-semibold text-xl text-jakala-purple leading-tight mb-3 group-hover:text-jakala-red transition-colors duration-200">
          {post.title}
        </h3>

        <p className="text-jakala-text-dark text-sm leading-relaxed mb-4 line-clamp-2">
          {post.summary}
        </p>

        <div className="flex items-center justify-between text-xs text-jakala-gray-500 mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <User className="w-3 h-3" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center space-x-1">
              <Calendar className="w-3 h-3" />
              <span>{formatDate(post.date)}</span>
            </div>
          </div>
        </div>

        <a
          href={post.link}
          className="inline-flex items-center text-sm font-medium text-jakala-red hover:text-jakala-purple transition-colors duration-200 group"
        >
          Read more
          <ArrowRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
};
