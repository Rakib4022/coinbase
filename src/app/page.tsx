
import Nabvar from "./components/Nabvar/Nabvar";
import Banner from "./components/HomeCompo/Banner";
import StartPortfolio from "./components/HomeCompo/StartPortfolio";
import CdBanner from "./components/HomeCompo/CdBanner";
import CoinbaseSection from "./components/HomeCompo/coinbasesection/CoinbaseSection";
import img1 from '../../assets/Retail.webp';
import img2 from '../../assets/Advanced.webp';
import img3 from '../../assets/Wallet.webp';
import img4 from '../../assets/Prime.webp';
import GetStartedSection from "./components/HomeCompo/GetStartedSection";
import Footer from "./components/Footer/Footer";
import TheFreedomSection from "./components/HomeCompo/TheFreedomSection";
import NewCrypto from "./components/HomeCompo/newcCrypto/NewCrypto";
import CryptoExcange from "./components/HomeCompo/cryptoExcange/CryptoExcange";
import CryptoCurency from "./components/HomeCompo/cryptocurency/CryptoCurency";

export default function Home() {
  return (
    <main>
      <Nabvar />
      <Banner />
      <CryptoCurency/>
      <StartPortfolio />
      <CdBanner />
      <div>
        <CoinbaseSection
          img={img1}
          title={'coinbase'}
          heading={'Buy, sell, and store hundreds of cryptocurrencies'}
          subHeading={'From Bitcoin to Dogecoin, we make it easy to buy and sell cryptocurrency. Protect your crypto with best in class cold storage.'}
          btntext={'Sing up now'}
        />
        <CoinbaseSection
          img={img2}
          title={'advanced'}
          heading={'Powerful tools, designed for the advanced trader'}
          subHeading={'Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.'}
          btntext={'Start trading'}
        />
        <CoinbaseSection
          img={img3}
          title={'wallet'}
          heading={'Do more with your crypto with Coinbase Wallet'}
          subHeading={'Store your crypto in your own personal crypto wallet and explore decentralized finance (DeFi), buy and sell NFTs, and more.'}
          btntext={'Learn more'}
        />
        <CoinbaseSection
          img={img4}
          title={'prime'}
          heading={'The financial institution for a digital asset future'}
          subHeading={'Coinbase Prime is the first choice for sophisticated investors and institutions that want to invest in digital assets'}
          btntext={'Learn more'}
        />
      </div>
      <GetStartedSection />
      <CryptoExcange />
      <NewCrypto/>
      <TheFreedomSection />
      <Footer />
    </main>
  );
}

