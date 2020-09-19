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
            url: 'https://is-proxy.herokuapp.com/',
            params: { path: path }
        }).then(res => {
            setData(res.data)
            setLoading(false)
        }).catch(e => {
            setError(true)
        })
    }, [path])
    return { loading, error, data }
}