import '@src/Options.css';
import { useStorage, withErrorBoundary, withSuspense } from '@extension/shared';
import { exampleThemeStorage } from '@extension/storage';
import { ToggleButton } from '@extension/ui';
import { t } from '@extension/i18n';

const Options = () => {
  const theme = useStorage(exampleThemeStorage);
  // const isLight = theme === 'light';
  const isLight = false;
  const logo = isLight ? 'options/logo_horizontal.svg' : 'options/logo_horizontal_dark.svg';
  const goDoxdotfunSite = () =>
    chrome.tabs.create({ url: 'http://kibu.solutions/doxdotfun' });

  return (
    <div className={`App ${isLight ? 'bg-slate-50 text-gray-900' : 'bg-[#15161b] text-gray-100'}`}>
      <button onClick={goDoxdotfunSite}>
        <img src={chrome.runtime.getURL(logo)} className="App-logo" alt="logo" />
      </button>
      <p>
        Edit <code>pages/options/src/Options.tsx</code>
      </p>
      {/* <ToggleButton onClick={exampleThemeStorage.toggle}>{t('toggleTheme')}</ToggleButton> */}
    </div>
  );
};

export default withErrorBoundary(withSuspense(Options, <div> Loading ... </div>), <div> Error Occur </div>);
