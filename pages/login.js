import { useAddress, useLogin, Web3Button } from "@thirdweb-dev/react";
import { ConnectWallet } from "@thirdweb-dev/react";
import Cta from "../components/Cta";
import Cta2 from "../components/Cta2";
import styles from "../styles/Home.module.css";
import Connect from "./Connect";



// replace this with your contract address
const contractAddress1 = "0x3789b211C7661a42353DC1096661D373De7cEb40";
const contractAddress2 = "0xaa4f3e974Aa1d49811bE53F462E0ccc8820D489F";
const contractAddress3 = "0xfc7237e92f014A5728de9622B9Fe038d55A0de8D";

export default function Login() {
  const address = useAddress(); // Get the user's address
  const login = useLogin(); // Sign in

  

  return (
    <div className="bg-black">
    <nav className="flex items-center justify-between flex-wrap bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <svg className="fill-current h-8 w-8 mr-2" width="54" height="54" viewBox="0 0 54 54" xmlns="http://www.w3.org/2000/svg"><path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/></svg>
        <span className="font-bold text-7xl tracking-tight ">Tribes </span>
        
      </div>
      
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-sm lg:flex-grow">
       
          {/* <a href="#responsive-header" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-white mr-4 text-2xl font-semibold">
          The gated community APP
          </a> */}
        
        </div>
        <div >
          <a className="flex text-2xl px-4 py-2 leading-none rounded mt-4 lg:mt-0 text-semibold">{address?"Metamask Connected "+"welcome "+address.slice(0,6)+"...":<Connect/>}</a>
          <a href="https://spheron.infura-ipfs.io/ipfs/QmTZ3ENs1SRiw97HqN1FmXhm5ZPz4srczaUXjgVuwNAXub/"><button type="button" className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-xl px-5 py-2.5 text-center mt-5 mr-2 mb-2" >TribesChat</button></a>
        </div>
      </div>
    </nav>
    <Cta2/>
    <div className={styles.container}>
      
     

      
      <hr className={styles.divider} />

      <>
        <div>
        <section className="text-white body-font bg-black">
          <div className="container px-5 py-5 mx-auto">
            <div className="flex flex-wrap">
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <span className="block text-indigo-500 text-4xl py-10 font-poppins font-black">
                    HacktheMountain Tribe
                </span>
                <div className="flex justify-center items-center">

                   <div className="p-1">
                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <a href="#" className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                                <img src="https://gateway.lighthouse.storage/ipfs/QmT4wsEPuUkBThrDHKXiWKCCzQL8Syu9aj5ffGmyUTareA" />
                                            </a>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-transparent p-4 rounded shadow dark:shadow-gray-700">
                                                <a href="#" className="hover:text-primary-600 text-lg transition duration-500 font-medium">
                                                <Web3Button
                                                contractAddress={contractAddress1}
                                                action={(contract) => contract.erc1155.claim(0, 1)}
                                                accentColor="#F213A4"
                                              >
                                                Buy the HacktheMountain-NFT
                                              </Web3Button>
                                              </a>
                                            </div>
                                        </div>
                                    </div>
  
                </div>
                <p className="text-base leading-relaxed mt-2">Hack The Mountains is a community- focused Hybrid Hackathon, designed especially for the needs of the community. Whether you are a beginner or an expert, Hack The Mountains Tribe brings you a perfect chance to showcase your skills and witness a competitive yet inclusive developer community around it.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                
                  
                </a>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  <button
                    className={styles.mainButton}
                    style={{ width: 256 }}
                    onClick={login}
                  >
                    Enter HacktheMountain Tribe
                  </button>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* second divvvv */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <span className="block text-indigo-500 text-4xl py-10 font-poppins font-black">
                    CSE Tribe
                </span>
                <div className="flex justify-center items-center">

                   <div className="p-1">
                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <a href="#" className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                                <img src="https://gateway.lighthouse.storage/ipfs/QmZ9feydXCnwcuc3Nynfs2H621YtF8mgA7eL1GTurwYH1v" />
                                            </a>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-transparent p-4 rounded shadow dark:shadow-gray-700">
                                                <a href="#" className="hover:text-primary-600 text-lg transition duration-500 font-medium">
                                                <Web3Button
                                                  contractAddress={contractAddress2}
                                                  action={(contract) => contract.erc1155.claim(0, 1)}
                                                  accentColor="#F213A4"
                                                >
                                                  Buy the CSE-NFT
                                                </Web3Button>
                                              </a>
                                            </div>
                                        </div>
                                    </div>
  
                </div>
                <p className="text-base leading-relaxed mt-2">CSE Tribe are university based community groups for students interested in Latest developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining CSE Tribe, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                
                  
                </a>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  <button
                    className={styles.mainButton}
                    style={{ width: 256 }}
                    onClick={login}
                  >
                    Enter CSE Tribe
                  </button>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>

              {/* third div */}
              <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <span className="block text-indigo-500 text-4xl py-10 font-poppins font-black">
                    NERD Tribe
                </span>
                <div className="flex justify-center items-center">

                   <div className="p-1">
                            <div className="group relative block overflow-hidden rounded-md transition-all duration-500">
                                            <a href="#" className="lightbox transition-all duration-500 group-hover:scale-105 tobii-zoom" title="">
                                                <img src="https://gateway.lighthouse.storage/ipfs/QmcfrsmLeg6L8X3ZY8ybf1yqdzPhUDdcJFiHBQbxgbLEsS" />
                                            </a>
                                            <div className="absolute -bottom-52 group-hover:bottom-2 right-2 left-2 transition-all duration-500 bg-transparent p-4 rounded shadow dark:shadow-gray-700">
                                                <a href="#" className="hover:text-primary-600 text-lg transition duration-500 font-medium">
                                                <Web3Button
                                                  contractAddress={contractAddress3}
                                                  action={(contract) => contract.erc1155.claim(0, 1)}
                                                  accentColor="#F213A4"
                                                >
                                                  Buy the NERD-NFT
                                                </Web3Button>
                                              </a>
                                            </div>
                                        </div>
                                    </div>
  
                </div>
                <p className="text-base leading-relaxed mt-2">Nerd Tribe is an awesome community that explains how everything works. There is a massive section that covers all you need to know about science including life science, innovation, engineering and nature. There is also a great section with a complete scientific dictionary.</p>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                
                  
                </a>
                <a className="text-indigo-500 inline-flex items-center mt-3">
                  <button
                    className={styles.mainButton}
                    style={{ width: 256 }}
                    onClick={login}
                  >
                    Enter NERD Tribe
                  </button>
                  <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        </div>
      </>
    </div>
    </div>
  );
}