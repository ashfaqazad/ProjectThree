import React from 'react';
import './App.css';
import Props from './Props';
import data from './Data'


const allData = (values) => {
  return (
    <>
      <Props
        key={values.id}
        imgsrc={values.imgsrc}
        title={values.title}
        text={values.text}
        btn={values.btn}
      />


    </>
  )

}
function App() {
  return (
    <>
      <div>
        {data.map(allData)};
      </div>
    </>
  );
}

export default App;
