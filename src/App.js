import './App.css';
import useFetch from './hooks/useFetch';
import Notes from './Notes';

function App() {
  const { isLoading, isError, data: notes } = useFetch(
    'http://jsonplaceholder.typicode.com/posts'
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>useFetch personalized hook</h1>
      {notes && <Notes data={notes} />}
      {isError && <div>Error fetching data.</div>}
    </div>
  );
}

export default App;