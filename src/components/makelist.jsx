import { useEffect, useState } from "react";
import styled from "styled-components";
function Makelist(){
  const [sortlist,setSortlist] = useState([]);
  const [todos, setTodos] = useState([])
  const [todo, setTodo] = useState({})
  const [editTodo, setEditTodo] = useState({})
  const [isEditMode, setEditMode] = useState([false,])
  const onChangeHandler = (event) => {
    const {name, value} = event.target;
    const newInput = {
      ...todo,
      [name]: value,  
    }
    setTodo(newInput)
  }
  useEffect(() => {
    setSortlist(todos.sort((a, b) => a.title - b.title))
  }, [todos])
  const onChangeEditHandler = (event) => {
    const {name, value} = event.target
    const newInput = {
      ...editTodo,
      [name]: value,
    }
    setEditTodo(newInput)
  }

  const onClickHandler = () => {
   
    setTodos(prev => [...prev, todo])
    setTodo({ title: "", text: ""})
  }
 
  const onEditChangeHook = (id) => {
    const tmp = [...isEditMode]
    tmp[id] = !isEditMode[id]
    setEditMode(tmp)
  }
    
  const onEditButtonHandler = (event) => {
    onEditChangeHook(event.target.id)
  }

  const onEditDoneButtonHandler = (event) => {
    onEditChangeHook(event.currentTarget.id)
    


    let newInput = {
      title: todos[event.currentTarget.id].title,
      text: todos[event.currentTarget.id].text
    }

    if (editTodo.title !== "") {
      newInput.title = editTodo.title
    }
    if (editTodo.text !== "") {
      newInput.text = editTodo.text
    }

    const newTodos = [...todos]
    newTodos[event.currentTarget.id] = newInput
    setTodos(newTodos)


    setEditTodo({
      title: '',
      text: ''
    })
  }

  return (
    <Container>
      <Head>
        <input onChange={onChangeHandler} placeholder="번호or날짜 입력." name="title" value={todo.title} maxlength="8" />
        <Textbox onChange={onChangeHandler} placeholder="할 일" name="text" value={todo.text} />
        <button onClick={onClickHandler}>저장</button>
      </Head>
      <ul style={{width:"60%"}}>
        {todos.map((item, key) =>(
          <Item key={key}>
            {!isEditMode[key]
              ? (
              <>
                <Title><h2>{item.title}</h2></Title>
                <Plan>{item.text}</Plan>
                <button id={key} onClick={onEditButtonHandler}>수정하기</button>
              </>) 
              : (
                <>
                  <Input onChange={onChangeEditHandler} placeholder={"날짜 수정 중."} name="title" value={editTodo.title} maxlength="8"/>
                  <Textbox onChange={onChangeEditHandler} placeholder={"계획 수정 중."} name="text" value={editTodo.text} />
                  <button id={key} onClick={onEditDoneButtonHandler}>수정완료</button>
                </>
              )}
          
          </Item>
        ))}
      </ul>
    </Container>
  )
}

const Textbox = styled.textarea`
  resize: none;
  height: 100px;
  width: 70%;
  height: 80%;
  margin: 10px;
`
const Item = styled.li`
  display: flex;
  text-decoration: none;
  list-style: none;
  width: 100%;
  align-items:center;
  border-bottom: 1px solid gray;
`
const Input = styled.input`
  width: 15%;
  resize: none;
`
const Plan = styled.div`
  width: 75%;
  display: flex;
  margin-left: 20px;
`
const Title = styled.div`
  padding: 0;
  margin: 0;
  border-right: 1px solid black;
  width: 15%;
  text-align: start;
  display: flex;
  justify-content: center;
  resize: none;
`
const Head = styled.div`
  width: 80%;
  border: 2px solid gray;
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 80px;
`
const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 20px;
`
export default Makelist;