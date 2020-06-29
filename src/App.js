import React, { useState } from 'react';
// import './App.css';
import ThemeSelect from './components/ThemeSelect'
import Button from './components/Button'


function App() {
  const [value, setValue] = useState("0");
  const [memory, setMemory] = useState(null);
  const [operator, setOperator] = useState(null);
  const [theme, setTheme] = useState('apple')

  const handleButtonPress = content => () => {
    const num = parseFloat(value)
    if (content === 'AC') {
      setValue('0')
      setMemory(null)
      setOperator(null)
      return;
    }
    if (content === '+/-') {
      setValue((num * -1).toString())
      return;
    }
    if (content === '%') {
      setValue((num/100).toString())
      setMemory(null)
      setOperator(null)
      return;
    }
    if (content === '+') { //Addition Operator
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)))
        } 
        if (operator === '−') {
          setMemory((memory - parseFloat(value)))
        }
        if (operator === '×') {
          setMemory((memory * parseFloat(value)))
        }
        if (operator === '÷') {
          setMemory((memory / parseFloat(value)))
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0')
      setOperator('+')
      return;
    }
    if (content === '−') { //Subtraction Operator
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)))
        } 
        if (operator === '−') {
          setMemory((memory - parseFloat(value)))
        }
        if (operator === '×') {
          setMemory((memory * parseFloat(value)))
        }
        if (operator === '÷') {
          setMemory((memory / parseFloat(value)))
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0')
      setOperator('−')
      return;
    }
    if (content === '×') { // Multiplication Operator
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)))
        } 
        if (operator === '−') {
          setMemory((memory - parseFloat(value)))
        }
        if (operator === '×') {
          setMemory((memory * parseFloat(value)))
        }
        if (operator === '÷') {
          setMemory((memory / parseFloat(value)))
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0')
      setOperator('×')
      return;
    }
    if (content === '÷') { // Division Operator
      if (operator !== null) {
        if (operator === '+') {
          setMemory((memory + parseFloat(value)))
        } 
        if (operator === '−') {
          setMemory((memory - parseFloat(value)))
        }
        if (operator === '×') {
          setMemory((memory * parseFloat(value)))
        }
        if (operator === '÷') {
          setMemory((memory / parseFloat(value)))
        }
      } else {
        setMemory(parseFloat(value))
      }
      setValue('0')
      setOperator('÷')
      return;
    }
    if (content === '=') { // Equals Operator
      if (!operator) return;
      
      if (operator === '+') {
        setValue((memory + parseFloat(value)).toString())
      } 
      if (operator === '−') {
        setValue((memory - parseFloat(value)).toString())
      }
      if (operator === '×') {
        setValue((memory * parseFloat(value)).toString())
      }
      if (operator === '÷') {
        setValue((memory / parseFloat(value)).toString())
      }
      
      setMemory(null)
      setOperator(null)
      return;
    }
    if (content === '.') {
      if (value.includes('.')) return;

      setValue(value + '.')
      return;
    }

    if (value[value.length - 1] === '.') {
      setValue(value + content)
    } else {
      setValue((parseFloat(num + content)).toString())
    }
  }

  const handleThemeChange = theme => () => {
    if (theme === 'apple') {
      setTheme('windows')
    } else if (theme !== 'apple') {
      setTheme('apple')
    }
  }


  return (
    <div className={`App ${theme !== 'apple' ? 'windows' : ''}`}>
      <ThemeSelect theme={theme} onButtonClick={handleThemeChange}></ThemeSelect>
      <div className="Display">{value}</div>
      <div className={`Buttons ${theme !== 'apple' ? 'windows' : ''}`}>
        <Button onButtonClick={handleButtonPress} content="AC" theme={theme} type="function"/>
        <Button onButtonClick={handleButtonPress} content="+/-" theme={theme} type="function"/>
        <Button onButtonClick={handleButtonPress} content="%" theme={theme} type="function"/>
        <Button onButtonClick={handleButtonPress} content="÷" theme={theme} type="operator"/>
        <Button onButtonClick={handleButtonPress} content="7" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="8" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="9" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="×" theme={theme} type="operator"/>
        <Button onButtonClick={handleButtonPress} content="4" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="5" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="6" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="−" theme={theme} type="operator"/>
        <Button onButtonClick={handleButtonPress} content="1" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="2" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="3" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="+" theme={theme} type="operator"/>
        <Button onButtonClick={handleButtonPress} content="0" theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="." theme={theme}/>
        <Button onButtonClick={handleButtonPress} content="=" theme={theme} type="operator"/>
      </div>
    </div>
  );
}

export default App;
