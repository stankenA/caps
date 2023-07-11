import React from 'react';
import CasesCard from '../components/Cases/CasesCard';
import { Fade } from 'react-awesome-reveal';

export default function CasesPage() {
  return (
    <Fade direction="left">
      <section className="cases">
        <CasesCard />
      </section>
    </Fade>
  )
}
