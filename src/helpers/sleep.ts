export const sleep = (millisenconds: number) => {
  return new Promise((resolve) =>
    setTimeout(() => resolve(true), millisenconds)
  );
};