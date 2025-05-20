import './App.css'
import { useSelector,useDispatch } from 'react-redux'
import { decreement, increement } from './redux/actions';

function App() {
     const count = useSelector((state)=> state.count)
     const dispatch = useDispatch();

  return (

  


    <>
    <p>Venkata</p>
    <span>{count}</span>

    <button onClick= {()=>dispatch(increement)}>INCR</button>
    <button onClick={()=> dispatch(decreement)}>DECREE</button>
  
    </>
  )
}

export default App
