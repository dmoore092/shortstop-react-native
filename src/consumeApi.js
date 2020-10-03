import { useEffect, useState } from 'react'
import axios from 'axios'

export default function ConsumeApi(path) {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState({data: []})
    useEffect(() => {
        setLoading(true)
        setError(false)
        axios({
            method: 'GET',
            url: path,
            // params: { path: path }
        }).then(res => {
            // console.log(res.data[0])
            setData(res.data[0])
            setLoading(false)
        }).catch(e => {
            console.log(e)
            setError(true)
        })
    }, [path])
    return { loading, error, data }
}