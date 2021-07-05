import { MyAction } from "./actions";

const fetchData = () => {
  return { type: MyAction.FETCH };
};
const recieveData = (payload) => {
  return { type: MyAction.RECEIVE, payload: payload };
};

export const asyncDataAction = (URL) => {
  return async function (dispatch) {
    dispatch(fetchData());
    console.log(URL);
    const response = await fetch(URL);
    const result = await response.json();
    dispatch(recieveData(result));
  };
};
