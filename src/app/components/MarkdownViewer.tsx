import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "katex/dist/katex.min.css";

export default function MarkdownViewer({ content }: { content: string }) {
  return (
    <div className="prose lg:prose-lg">
      <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
    </div>
  );
}
