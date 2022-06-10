import { server } from '../config'
import PointsResults from '../components/PointsResults'

export default function Points({ customers }) {

    return (
        <div>
            <PointsResults customers={customers} />
        </div>
    )
}

export const getStaticProps = async () => {
    const res = await fetch(`${server}/api/customers`)
    const customers = await res.json()

    return {
        props: {
            customers,
        },
    }
}
