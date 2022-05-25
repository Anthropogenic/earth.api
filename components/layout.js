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
        <title>Earth API ✦ {PageTitle}</title>

        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="msapplication-config"
          content="/favicon/browserconfig.xml"
        />
        <meta name="theme-color" content="#000" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        <meta
          name="description"
          content={`Everything humans do affect the ecosystems around us. And with many of the earth's life support systems at tipping points/changing rapidly, there is a need for greater accessibility and modernization of how we use climate data and what we are building and researching.`}
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
