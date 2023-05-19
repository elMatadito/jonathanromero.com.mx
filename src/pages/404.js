import Image from "next/image";
import { ErrorContainer } from '@/styles/404.styled';

const Error404 = () => {
  return (
    <ErrorContainer>
      <p>ERROR 404</p>
      <Image src="https://media.giphy.com/media/26BGIqWh2R1fi6JDa/giphy.gif" alt="Aquí iba un GIF" width={500} height={375} />
      <p>Ooops! Parece que aun no tengo lo que buscas...</p>
      <button>Regresar al Home</button>
    </ErrorContainer>
  );
};

export default Error404;