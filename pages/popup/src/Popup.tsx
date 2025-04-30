import * as React from 'react';
import '@src/Popup.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { ToggleButton } from '@extension/ui';
import { t } from '@extension/i18n';

import PumpFunDashboard from "../../components/content/dashboard";
import PumpFunCategories from "../../components/content/categories";
import PumpFunAudit from "../../components/content/audit";

import { BiDockRight } from "react-icons/bi";

const Popup = () => {
  const theme = useStorage(exampleThemeStorage);
  // const isLight = theme === 'light';
  const isLight = false;
  const logo = isLight ? 'popup/logo_vertical.svg' : 'popup/logo_vertical_dark.svg';
  const goDoxdotfunSite = () =>
    chrome.tabs.create({ url: 'http://kibu.solutions/doxdotfun' });

  const goToPumpFun = () => {
    chrome.tabs.update({ url: 'https://pump.fun' });
  };

  const handleOpenSidePanel = () => {
    chrome.windows.getCurrent({ populate: true }, (window) => {
      (chrome as any).sidePanel.open({ windowId: window.id });
    });
  };

  const [isPumpFunCoinPage, setIsPumpFunCoinPage] = React.useState(false);
  const [isHomePage, setIsHomePage] = React.useState(false);

  const updatePageState = (url: string) => {
    // Exclude URLs that start with "chrome-extension://" or "chrome://"
    if (url.startsWith('chrome-extension://') || url.startsWith('chrome://')) {
      console.log('Ignoring URL:', url);
      return;
    }

    // Update states only for pump.fun URLs
    setIsPumpFunCoinPage(/https:\/\/pump\.fun\/coin\/.+/.test(url));
    setIsHomePage(/https:\/\/pump\.fun\/board/.test(url));
  };

  React.useEffect(() => {
    const updateActiveTabUrl = () => {
      chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        if (tabs.length > 0) {
          const currentUrl = tabs[0].url || '';
          console.log('Current URL:', currentUrl);
          updatePageState(currentUrl);
        }
      });
    };

    updateActiveTabUrl(); // Initial check

    const handleTabUpdate = (tabId: number, changeInfo: chrome.tabs.TabChangeInfo, tab: chrome.tabs.Tab) => {
      if (changeInfo.url && tab.active) {
        console.log('Tab URL updated:', changeInfo.url);
        updatePageState(changeInfo.url);
      }
    };

    chrome.tabs.onUpdated.addListener(handleTabUpdate);

    return () => {
      chrome.tabs.onUpdated.removeListener(handleTabUpdate);
    };
  }, []);
  
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div
      className={`App bg-[#15161b] items-center justify-center flex`}
      // className={`App ${isPumpFunCoinPage ? '' : isLight ? 'bg-slate-50' : 'bg-[#15161b]'} min-h-[350px] items-center justify-center flex`}
    >
      <header className={`App-header ${isLight ? 'text-gray-900' : 'text-gray-100'}`}>
        {isPumpFunCoinPage ? (
          <button onClick={goDoxdotfunSite}>
            <img src={chrome.runtime.getURL(logo)} className="App-logo-small" alt="logo" />
          </button>
        ) : (
          <>
            <button onClick={goDoxdotfunSite}>
              <img src={chrome.runtime.getURL(logo)} className="App-logo" alt="logo" />
            </button>
          </>
        )}

        {isPumpFunCoinPage ? (
          <div className='w-full pb-4'>
            <PumpFunAudit onCategoryChange={handleCategoryChange} />
          </div>
        ) : isHomePage ? (
          <div className='pb-4'>
            <p className="text-gray-400 text-sm">select or navigate to a token to start the audit process</p>
          </div>
        ) : (
          <div className='pb-4'>
            <button
              className="px-4 py-2 bg-[#86efac] hover:bg-[#34c55e] text-black rounded-lg text-sm font-semibold"
              onClick={goToPumpFun}
            >
              open pump.fun
            </button>
          </div>
        )}

        <button
          className="absolute top-0 right-0 m-2 p-1 bg-[#86efac] hover:bg-[#34c55e] text-black rounded-lg text-sm font-semibold"
          onClick={handleOpenSidePanel}
        >
          <BiDockRight className="w-7 h-7" />
        </button>

        <div className='w-full'>
          <PumpFunCategories selectedCategory={selectedCategory} />
        </div>
        
        <div className='w-full'>
          <PumpFunDashboard liteMode={isPumpFunCoinPage} />
        </div>

      </header>
    </div>
  );
};

export default withErrorBoundary(withSuspense(Popup, <div> Loading ... </div>), <div> Error Occur </div>);