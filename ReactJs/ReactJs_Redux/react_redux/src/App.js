import './App.css';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store';
import UserData from './Component/UserData';

function App() {
  return (
    <Provider store={store}>
      <UserData />
    </Provider>
  );
}

export default App;
