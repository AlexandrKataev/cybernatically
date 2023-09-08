import { CompanyList } from '@entities';
import './App.scss';
import { Header } from '@layouts';

function App() {
  return (
    <div className="App">
      <Header />
      <CompanyList />
    </div>
  );
}

export default App;
