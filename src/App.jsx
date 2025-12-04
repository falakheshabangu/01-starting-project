import { CORE_CONCEPTS, EXAMPLES } from './data'
import Header from './components/Header/Header'
import CoreConcept from './components/CoreConcept'
import TabButton from './components/TabButton';
import { useState } from 'react';

function App() {

  const [selectedToptic, setSelectedTopic] = useState()

  const handleClick = (selectedButton)=> {
        
        setSelectedTopic(selectedButton) 


    }

    let tabContent = <p>Please select a topic</p>

    if(selectedToptic){
      tabContent = (
        <div id='tab-content'>
            <h3>{EXAMPLES[selectedToptic].title}</h3>
            <p>{EXAMPLES[selectedToptic].description}</p>
            <pre>
              <code>
                {EXAMPLES[selectedToptic].code}
              </code>
            </pre>
          </div>
      )
    }


  return (
    <div>
      <Header />
      <main>
        <section id='core-concepts'>
          <h2>Core Concepts</h2>
          <ul>
            {CORE_CONCEPTS.map( (conceptItem)=> ( <CoreConcept key={conceptItem.title} {...conceptItem} /> ) )}
          </ul>
        </section>
        <section id='examples'>
          
          <menu>
            <TabButton handleClick={() => handleClick('components')} isSelected={selectedToptic === 'component'}>Component</TabButton>
            <TabButton handleClick={() => handleClick('jsx')} isSelected={selectedToptic === 'jsx'}>JSX</TabButton>
            <TabButton handleClick={() => handleClick('props')} isSelected={selectedToptic === 'props'}>Props</TabButton>
            <TabButton handleClick={() => handleClick('state')} isSelected={selectedToptic === 'state'}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
