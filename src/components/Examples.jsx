import React from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data'
import { useState } from 'react';
import Section from './Section';
import Tabs from './Tabs';



const Examples = () => {

    const [selectedToptic, setSelectedTopic] = useState()

  const onClick = (selectedButton)=> {
        
        setSelectedTopic(selectedButton) 


    }

    const tabButtons = ()=> {

      return(
        <>
            <TabButton onClick={() => onClick('components')} isSelected={selectedToptic === 'components'}>Component</TabButton>
            <TabButton onClick={() => onClick('jsx')} isSelected={selectedToptic === 'jsx'}>JSX</TabButton>
            <TabButton onClick={() => onClick('props')} isSelected={selectedToptic === 'props'}>Props</TabButton>
            <TabButton onClick={() => onClick('state')} isSelected={selectedToptic === 'state'}>State</TabButton>
        </>
      )

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
        <Section title="Examples" id='examples'>
          <Tabs  buttons={ tabButtons() }>
            {tabContent}
          </Tabs>
        </Section>    
    </div>
  )
}

export default Examples
