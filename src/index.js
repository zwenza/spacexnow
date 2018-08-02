import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'antd/dist/antd.css';
import Layout from './Layout';

ReactDOM.render(<Layout />, document.getElementById('root'));
registerServiceWorker();
