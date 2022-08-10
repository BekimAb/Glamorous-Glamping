import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/home/Home";
import Tent from "./pages/tent/Tent";
import Cabin from "./pages/cabin/Cabin";
import Rv from "./pages/rv/Rv";
// import List from "./pages/list/List";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tents" element={<Tent />} />
          <Route path="/tents/:id" element={<Tent />} />
          <Route path="/cabins" element={<Cabin />} />
          <Route path="/cabins/:id" element={<Cabin />} />
          <Route path="/rvs" element={<Rv />} />
          <Route path="/rvs/:id" element={<Rv />} />
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
