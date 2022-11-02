import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import HomePage from './Pages/Home';
import SearchCertificate from './Components/Certificate/SearchCertificate/SearchCertificate';
import DetailsCertificate from './Components/Certificate/DetailsCertificate/DetailsCertificate';

function App() {
  let [pageId, setPageId] = useState("home");
  return (
    <div className="App">
      { pageId == "home" &&
        <HomePage 
          onEnterKB={()=> setPageId("searchCertificate")}
        />
      }
      { pageId == "searchCertificate" &&
        <SearchCertificate 
          onCodeCertificateValidated={()=> setPageId("detailCertificate")}
        />
      }
      { pageId == "detailCertificate" &&
        <DetailsCertificate 
        />
      }
    </div>
  );
}

export default App;


/**
 * <GalleryBlock>
 *  <GalleryBlockItem />
 *  <GalleryBlockItem />
 *  <GalleryBlockItem />
 * </GalleryBlock>
 */
