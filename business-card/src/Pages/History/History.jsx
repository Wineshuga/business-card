import GridRecord from "../../Components/GridRecord"
import {data} from "../../data.jsx"
import styles from "./history.module.scss"

export default function History () {
    const record = data.map(item => 
        <GridRecord 
            name= {item.name}
            lenght={item.lenght}
            analysis={item.analysis}
            date={item.date}
            />
        )
    return (
        <div className={styles.history}>
            <h1>Record History</h1>
            <div className="history--nav">
                <select name="Grid" id="">
                    <option value="Grid">Grid</option>
                    <option value="List">List</option>
                </select>
                <select name="filter" id="">
                    <option value="all records">All records</option>
                </select>
                <select name="date" id="">
                    <option value="date">Date</option>
                </select>
            </div>
            <div className={styles.record}>
                {record}
            </div>
        </div>
    )
}