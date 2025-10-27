import HabitList from './components/HabitList';
import HabitForm from './components/HabitForm'; // 1. Import
import './index.css';

function App() {
  // 3. (임시) addHabit 함수 정의 (콘솔에만 출력)
  const handleAddHabit = (habitText) => {
    console.log("New habit from form:", habitText);
    // 실제 데이터 추가 로직은 다음 단계에서 구현합니다.
  };

  return (
    <div className="container mx-auto p-4 max-w-lg">
      <HabitForm addHabit={handleAddHabit} /> {/* 2. 추가 및 prop 전달 */}
      <HabitList />
    </div>
  );
}

export default App;