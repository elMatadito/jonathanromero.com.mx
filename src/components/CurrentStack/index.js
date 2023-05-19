import { StackChip, StackContainer } from "./CurrentStack.styled";

const CurrentStack = () => {

  return (
    <>
      <h2>My Current Stack</h2>
      <StackContainer>
        <StackChip>macOS</StackChip>
        <StackChip>Javascript</StackChip>
        <StackChip>ReactJS</StackChip>
        <StackChip>NextJS</StackChip>
        <StackChip>NodeJS</StackChip>
        <StackChip>Flutter</StackChip>
        <StackChip>PostgreSQL</StackChip>
        <StackChip>Hasura</StackChip>
        <StackChip>Azure</StackChip>
        <StackChip>Fastlane</StackChip>
        <StackChip>Figma</StackChip>
      </StackContainer>
      {/* <a href="/skills">View more</a> */}
    </>
  )
};

export default CurrentStack;