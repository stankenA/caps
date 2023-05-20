import React from 'react';
import { Fade } from 'react-awesome-reveal';
import ServicesMain from './Services/ServicesMain';

export default function Services() {
  return (
    <Fade direction='left'>
      <section className="services">
        <ServicesMain />
      </section>
    </Fade>
  )
}
