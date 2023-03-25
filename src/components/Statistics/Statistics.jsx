import css from './Statistics.module.css'
import StatisticsChart from '../StatisticsChart/StatisticsChart'
import StatisticsChart1 from '../StatisticsChart/StatisticsChart1'
import StatisticsChart2 from '../StatisticsChart/StatisticsChart2'


const Statistics = () => {
    return (
        <div className={`${css.container} theme-container`}>
            <span className={css.title}>Overview Statistics</span>
            <StatisticsChart/>
            <StatisticsChart1/>
            <StatisticsChart2/>
        </div>
    )
}

export default Statistics