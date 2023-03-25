import Statistics from '../../components/Statistics/Statistics';
import css from './Dashboard.module.css';
const Dashboard = () => {
  return <div className={css.container}>

    <div className={css.dashboard}>
      <Statistics/>
    </div>
  </div>
}

export default Dashboard