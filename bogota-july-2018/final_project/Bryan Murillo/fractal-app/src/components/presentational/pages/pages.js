import React from 'react';
import PageContent from './page-Content';
import './pages.css';

const Pages = ({ match: { params } }) => (
  <section className='page'>
    <PageContent page={params.page || 'HOME'} />
  </section>
)

export default Pages;
