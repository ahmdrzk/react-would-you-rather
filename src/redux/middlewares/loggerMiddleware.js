const loggerMiddleware = (store) => (next) => (action) => {
  console.log("PrevState:", store.getState());
  console.log("ActionDispatched:", action);
  const result = next(action);
  console.log("NextState:", store.getState());
  return result;
};

export default loggerMiddleware;
