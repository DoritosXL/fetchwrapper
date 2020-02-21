const fetchPerson = () => {
  return fetch("https://randomuser.me/api")
    .then(x => x.json())
    .then(x => x.results[0]);
};

const wrapPromise = (promise: Promise<any>) => {
  let status = "pending";
  let result = "";
  let suspender = promise.then(
    r => {
      status = "success";
      result = r;
    },
    e => {
      status = "error";
      result = e;
    }
  );

  return {
    read() {
      if (status === "pending") {
        throw suspender;
      } else if (status === "error") {
        throw result;
      }

      return result;
    },
    Suspense() {
      console.log(`called the Suspsense method`);
      console.log(`minor edit for branch testing`);
    }
  };
};

export const createResource = () => {
  return wrapPromise(fetchPerson());
};
