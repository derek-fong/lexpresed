const defaultPort = 4000;

export class Environment {
  port: number|string;
  secretMessage: string;
}

export const environment: Environment = {
  port: process.env.PORT || defaultPort,
  secretMessage: process.env.SECRET_MESSAGE
};
