import { createContext, useContext, useState } from 'react';
const QueryContext = createContext();
export const useQuery = () => useContext(QueryContext);
export const QueryProvider = props => {
  const [query, setQuery] = useState('');
  const contextValue = {
    query,
    setQuery,
  };
  return (
    <QueryContext.Provider value={contextValue}>
      {props.children}
    </QueryContext.Provider>
  );
};
