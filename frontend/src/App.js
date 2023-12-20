import './App.css';
import FileTable from './components/FileTable';
import 'bootstrap/dist/css/bootstrap.min.css';
import useFetch from './hooks/useFetch';

function App() {
  const { data: filesData, isLoading, error } = useFetch('http://localhost:3001/files/data', {});

  return (
    <>
      <h2 className="title">React Test App</h2>
      <FileTable 
        filesData={filesData}
        isLoading={isLoading}
      />
    </>
  );
}

export default App;
