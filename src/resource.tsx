import { Suspense } from "react";
import { read } from "fs";

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
    Suspense() {}
  };
};

export const createResource = () => {
  return wrapPromise(fetchPerson());
};
