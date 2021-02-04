import classes from "./App.module.css";
import mainLogo from "./assets/SMSBump-Logo.svg";
import penIcon from "./assets/Icons/Top-Menu-Icons/Pen-icon.svg";
import exitIcon from './assets/Icons/Top-Menu-Icons/Exit-icon.svg';
function App() {
  return (
    <div className={classes.primaryNav}>
      <ul>
        <li>
          <img src={mainLogo} alt="default" />
        </li>
        <li className={classes.pen}>
          <img src={penIcon} alt="default" />
          <p>form 1</p>
        </li>
        <li className={classes.draft}>
          <span className={classes.dot}></span>
          <p>Draft</p>
          <span className={classes.dropTick}></span>
        </li>
        <li className={classes.exit}>
          <img src={exitIcon} alt='default'/>
          <p>Exit</p>
        </li>
        <li></li>
      </ul>
    </div>
  );
}

export default App;
