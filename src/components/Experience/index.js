import { StackChip, StackContainer } from "./Experience.styled";
import { Icon } from '@iconify/react';

const CurrentStack = () => {

  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h2>My Experience</h2>
      <p style={{ marginTop: '14px' }}>My experience working in multidisciplinary teams has allowed me to gain knowledge in different fields.</p>
      <p style={{ marginBottom: '14px' }}>In progress...</p>
      <a className="button primary" href="/resume">View resume <Icon icon="mdi:arrow-right" /></a>
    </div>
  )
};

export default CurrentStack;