import Header from "@/components/Header";
import { siteData } from "@/data/DataSite";

import "./globals.css";
import Footer from "@/components/FooterSection";



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header siteData={siteData} />


        {children}


        <Footer/>
    
      </body>
    </html>
  );
}