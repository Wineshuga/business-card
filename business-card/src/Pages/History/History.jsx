import GridRecord from "../../Components/GridRecord"
import { data } from "../../data.jsx"
import styles from "./history.module.scss"
import Icon from "../../Assets/Icon.png" 

export default function History() {
    const record = data.map(item =>
        <GridRecord
            name={item.name}
            lenght={item.lenght}
            analysis={item.analysis}
            date={item.date}
        />
    )
    return (
        <div className={styles.history}>
            <h1>Record History</h1>
            <div className={styles.history__nav}>
                <div>
                <select className={styles.select__grid} name="Grid" id="">
                    <option value="Grid"><img src={Icon} alt="" />Grid</option>
                    <option value="List">List</option>
                </select>
                </div>
                <div className={styles.history__nav2}>
                    <select className={styles.select} name="filter" id="">
                        <option value="all records">All records</option>
                    </select>
                    <select className={styles.select} name="date" id="">
                        <option value="date">Date Added</option>
                    </select>
                </div>
            </div>
            <hr />
            <div className={styles.record}>
                {record}
            </div>
        </div>
    )
}