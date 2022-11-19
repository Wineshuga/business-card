import Grid from "../../Components/Grid"
import { data } from "../../data.jsx"
import styles from "./history.module.scss"
import List from "../../Components/List"
import ListHeader from "../../Components/ListHeader"
import { useState } from "react"
import Filter from "../../Components/Filter"

export default function History(props) {
    const recordGrid = data.map(item =>
        <Grid
            name={item.name}
            lenght={item.lenght}
            analysis={item.analysis}
            date={item.date}
        />
    )

    const recordList = data.map(item =>
        <List
            name={item.name}
            agent={item.agent}
            analysis={item.analysis}
            date={item.date}
            time={item.time}
            lenght={item.lenght}
        />
    )

    const [show, setShow] = useState(true)

    return (
        <div className={styles.history}>
            <Filter onClose={() => setShow(false)} show={show} />
            <div className={styles.record}>
                {recordGrid}
            </div>
            <div className={styles.list__div}>
                <ListHeader />
                {recordList}
            </div>
        </div>
    )
}