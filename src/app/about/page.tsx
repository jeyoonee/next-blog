"use client";

import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

const markdown = `
💻 *Driven Frontend Engineer* with 2.5 years of experience in building scalable, user-centric web applications using TypeScript. Specialized in responsive UI/UX and cross-functional collaboration.

📍 **Key Achievements:**

- *Led UI/UX development* for a news app platform with 20K+ monthly users. Boosted user satisfaction by implementing responsive layouts and reducing initial load time by 30%.
- *Collaborated closely* with designers and backend engineers to deliver accessible and responsive interfaces.
- *Adapted swiftly* to production issues and enhanced user-facing features based on direct feedback.

✨ I thrive in opportunities where I can apply my skills in *Next.js* and *React.js* to create impactful, user-centered experiences. I’m especially drawn to roles that encourage innovation and teamwork within dynamic environments.

🌎 With a diverse background of staying in Europe, Thailand, and India, I bring a global perspective to my work—fostering empathy, adaptability, and a multicultural approach to problem-solving.

👋 I love connecting with new people. You can reach me at wpdbs4419@gmail.com. Feel free to explore my work on GitHub or visit my blog for more insights.
`;

export default function About() {
  return (
    <div className="prose max-w-none p-4">
      <Markdown remarkPlugins={[remarkGfm]}>{markdown}</Markdown>
    </div>
  );
}
