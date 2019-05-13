import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

/* state */
import { Provider } from 'react-redux';
import configureStore from './state/store';

/* styling */
import { ThemeProvider } from 'styled-components';
import theme from './theme';

/* polyfills */
import 'whatwg-fetch';

// ----------
/* Main execution */

// Configure Hot Module Reloading
if (process.env.NODE_ENV !== 'production' && module.hot) {
  module.hot.accept(['./App', './theme'], () => {
    render();
  });
}

// Run the application
render();

// ----------
function render() {
  const App = require('./App').default;

  ReactDOM.render(
    <Provider store={configureStore()}>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider>
    </Provider>,
    document.getElementById('root')
  );
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// import * as serviceWorker from './serviceWorker';
// serviceWorker.unregister()
