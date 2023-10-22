import Image from "next/image";
import { ErrorContainer } from '@/styles/404.styled';

const Error404 = () => {
  return (
    <ErrorContainer>
      <h1>ERROR 404</h1>
      <Image src="https://media.giphy.com/media/26BGIqWh2R1fi6JDa/giphy.gif" alt="Here should be a GIF" width={500} height={375} priority={true} />
      <p>D&apos;oh! Sorry, I do not have what you are looking for, yet...</p>
      <button>Back to Home</button>
    </ErrorContainer>
  );
};

export default Error404;