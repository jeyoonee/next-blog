import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About me",
  description: "Introduction of career",
};

const markdown = `
💻 *Driven Frontend Engineer* with 2.5 years of experience in building scalable, user-centric web applications using TypeScript. Specialized in responsive UI/UX and cross-functional collaboration.  
<br />

📍 **Key Achievements**
<br />
<br />
- **Led UI/UX development** for a news app platform with 20K+ monthly users. Boosted user satisfaction by implementing responsive layouts and reducing initial load time by 30%.
  <br />
- **Collaborated closely** with designers and backend engineers to deliver accessible and responsive interfaces.
  <br />
- **Adapted swiftly** to production issues and enhanced user-facing features based on direct feedback.
  <br />
  <br />

✨ I thrive in opportunities where I can apply my skills in *Next.js* and *React.js* to create impactful, user-centered experiences. I’m especially drawn to roles that encourage innovation and teamwork within dynamic environments.
  <br />
  <br />
🌎 With a diverse background of staying in Europe, Thailand, and India, I bring a global perspective to my work—fostering empathy, adaptability, and a multicultural approach to problem-solving.
  <br />
  <br />
👋 I love connecting with new people. You can reach me at wpdbs4419@gmail.com. Feel free to explore my work on GitHub or visit my blog for more insights.
`;

export default function About() {
  return (
    <div className="px-10 mb-8">
      <h1 className="text-[24px] font-bold mb-8">About Me</h1>
      <div className="prose max-w-none">
        <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
          {markdown}
        </Markdown>
      </div>
    </div>
  );
}
