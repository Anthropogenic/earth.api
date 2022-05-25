import Head from "next/head";
import { useRouter } from "next/router";
import Navigation from "../components/navigation";
import Footer from "../components/footer";

export default function Layout({ preview, children }) {
  const { asPath, pathname } = useRouter();
  const PageTitle = asPath.substring(1);

  return (
    <>
      <Head>
        <title>Earth API</title>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon/favicon-16x16.png"
        />
        <link rel="manifest" href="/favicon/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicon/safari-pinned-tab.svg"
          color="#000000"
        />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          name="description"
          content={`Bridges financial (Performance) and non-financial (ESG, Scientific Data) information about inventions, startups, public and private businesses so as to increase the velocity, efficiency and confidence in our ability to foster sufficient investment needed to manage anthropogenic climate change. `}
        />
        <script
          src="https://cdn.usefathom.com/script.js"
          data-site="CYSAYGVG"
          defer
        ></script>
      </Head>
      <div className="bg-[#17253D] text-white">
        <Navigation />
      </div>
      <main className="w-full bg-[#17253D] text-white ">
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">{children}</div>
      </main>

      <Footer />
    </>
  );
}
