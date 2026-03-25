import "./App.css";
import TaskDay from "./components/TaskDay";

const data = [
  {
    day: "Понеділок",
    description: "Вот ай хев ту ду ет зіс дей?",
    tasks: ["Купити молоко", "Зробити домашку", "Понити викладачу"],
  },
  {
    day: "Вівторок",
    description: "Пу пу пу",
    tasks: ["Зварити борщика", "Поїсти"],
  },
  {
    day: "Середа",
    description: "Рілі імпортант таскс фор зіс дей",
    tasks: ["Виспатись", "Поїсти", "Попрацювати", "Танці", "Кава з подругою"],
  },
  {
    day: "Четвер",
    description: "Шота нада дєлать",
    tasks: ["Пограти", "Пописати код", "Почитати"],
  },
];
function App() {
  return (
    <>
      <div className="container">
        {data.map((dataObject) => (
          <TaskDay dayObject={dataObject} key={dataObject.day} />
        ))}
      </div>
    </>
  );
}

export default App;
