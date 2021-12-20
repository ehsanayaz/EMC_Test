import dynamic from "next/dynamic";

// import ReactMarkdown from "react-markdown";
const ReactMarkdown = dynamic(() => import("react-markdown"), {ssr: false});
const rehypeRaw = dynamic(() => import("rehype-raw"), {ssr: false});
const remarkGfm = dynamic(() => import("remark-gfm"), {ssr: false});

export const RichContent = ({ children, ...props }) => {
  return (
    <ReactMarkdown
      style={{width: "40px"}}
      children={children}
      rehypePlugins={[rehypeRaw]}
      remarkPlugins={[remarkGfm]}
      {...props}
    />
  );
};
