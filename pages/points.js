import { server } from '../config'
import Pt from '../components/Pt'

export default function Points({ customers }) {

    return (
        <div>
            <Pt customers={customers} />
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
