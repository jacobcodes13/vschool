import Card from "./Card"
import vacationInfo from "./vacationInfo"

function App() {
  const vacationSpot = vacationInfo.map(item => {
    return (
      <Card
        key={item.place}
        {...item}
      />
    )
  })

  return (
    <div className="vacation--spot">
      {vacationSpot}
    </div>
  );
}

export default App;
