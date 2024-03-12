import { useState } from 'react';

import logo from './AddQuest';

import './App.css';
import AddQuest from './AddQuest';

function App() {
  const[questList, setQuestList] = useState([]);

function addNewQuest(questTitle){
  const quest = questList.slice();

  quest.push({
    title: questTitle,
    done:false
  });

  setQuestList(quests);
  console.log(quests);

}

  return (
    <div className="App h-screen w-screen flex justify-center items-center">
      <div className='card w-[80%] h-[70%] shadow-md rounded-sm transform ease-out duration-500 items-center p-10 gap-5'>
        <h1 className='text-5x1 font-work font-bold w-fit text-center'>Quest to do</h1>
        <AddQuest saveNewQuest={addNewQuest}></AddQuest>
        <p>Lista de quests</p>
          <input type="reset" value="Clear" class="btn btn-success"/>
      </div>
    </div>
  );
}

export default App;
