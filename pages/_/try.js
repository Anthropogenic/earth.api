import Image from "next/image";
import Layout from "../../components/layout";
import CodeBlockDemo from "../../components/codeblock";

export default function Try() {
  return (
    <Layout>
      <div className="h-screen">
        <CodeBlockDemo />
      </div>
    </Layout>
  );
}
