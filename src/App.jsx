import HabitList from './components/HabitList';
import './index.css'; // Tailwind CSS가 적용된 파일

function App() {
  return (
    <div className="container mx-auto p-4">
      <HabitList />
    </div>
  );
}

export default App;