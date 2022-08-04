import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Camp from "./pages/camp/Camp";
import List from "./pages/list/List";

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
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
            <Route path="/" element={<Home/>}/>
            <Route path="/camps" element={<List/>}/>
            <Route path="/camps/:id" element={<Camp/>}/>
        </Routes> 
        </BrowserRouter>
        </ApolloProvider>
    );
}

export default App;