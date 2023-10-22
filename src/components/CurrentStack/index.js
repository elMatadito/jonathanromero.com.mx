import { StackChip, StackContainer } from "./CurrentStack.styled";
import { Icon } from '@iconify/react';

const CurrentStack = () => {

  return (
    <div className="card" style={{ textAlign: 'center' }}>
      <h2>My Current Stack</h2>
      <p>Throughout my career, I have gained experience with various technologies. Here is the latest stack that I use on a daily basis.</p>
      <StackContainer>
        <StackChip><Icon icon="wpf:macos" /></StackChip>
        <StackChip><Icon icon="skill-icons:javascript" /></StackChip>
        <StackChip><Icon icon="skill-icons:typescript" /></StackChip>
        <StackChip><Icon icon="skill-icons:nodejs-light" /></StackChip>
        <StackChip><Icon icon="skill-icons:react-light" /></StackChip>
        <StackChip><Icon icon="skill-icons:nextjs-light" /></StackChip>
        <StackChip><Icon icon="skill-icons:flutter-light" /></StackChip>
        <StackChip><Icon icon="skill-icons:postgresql-light" /></StackChip>
        <StackChip><Icon icon="skill-icons:azure-light" /></StackChip>
        <StackChip><Icon icon="skill-icons:cloudflare-light" /></StackChip>
        <StackChip><Icon icon="skill-icons:figma-light" /></StackChip>
      </StackContainer>
      <a className="button primary" href="/resume">View resume <Icon icon="mdi:arrow-right" /></a>
    </div>
  )
};

export default CurrentStack;