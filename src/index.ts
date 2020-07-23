const helloWorld = (msg : string = 'Hello World!') => {
  process.stdout.write(msg);
  return msg;
};

helloWorld();

export default helloWorld;
