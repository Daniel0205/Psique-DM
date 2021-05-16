import './body.css';
import 'antd/dist/antd.css';
import React from 'react';
import '@ant-design/compatible';
import { ApolloProvider } from '@apollo/react-hooks';
import { Layout } from 'antd';
import cubejs from '@cubejs-client/core';
import { CubeProvider } from '@cubejs-client/react';
import client from './graphql/client';
import Header from './components/Header';
import jwt from 'jsonwebtoken';


const API_URL = process.env.REACT_APP_API_URL; 
var CUBEJS_TOKEN = ''


let url = new URL(window.location.href)
if(url.searchParams.get("token")!== null){
  localStorage.setItem("token",url.searchParams.get("token"))
  window.history.replaceState({}, window.location.href, "/" );
}
if(!process.env.REACT_APP_CUBEJS_API_SECRET && !localStorage.token)window.location.replace(process.env.REACT_APP_MAIN_PAGE)

if(process.env.REACT_APP_CUBEJS_API_SECRET)CUBEJS_TOKEN = jwt.sign({user:'default'}, process.env.REACT_APP_CUBEJS_API_SECRET);
else if(localStorage.token)CUBEJS_TOKEN = localStorage.token

const cubejsApi = cubejs(CUBEJS_TOKEN, {
  apiUrl: API_URL ,
});

const AppLayout = ({ children }) => (
  <Layout
    style={{
      height: '100%',
    }}
  >
    <Header />
    <Layout.Content>{children}</Layout.Content>
  </Layout>
);

const App = ({ children }) => (
  <CubeProvider cubejsApi={cubejsApi}>
    <ApolloProvider client={client}>
      <AppLayout>{children}</AppLayout>
    </ApolloProvider>
  </CubeProvider>
);

export default App;
