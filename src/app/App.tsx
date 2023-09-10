import { CompanyList } from '@entities';
import './App.scss';
import { Header } from '@layouts';
import { PaginationCustom } from '@features';

function App() {
  return (
    <div className="App">
      <Header />
      <CompanyList />
      <PaginationCustom />
    </div>
  );
}

export default App;
