import { useEffect, useState } from "react"
import { Api } from "../services/coinGecoAPI"
import { coinItem, coinInfo } from "../types/coin-type"

function useCoinRes() {
  const [coins, setCoins] = useState<Array<coinInfo>>([])

  useEffect(() => {
    Api.getCoins().then(({ data }) => {
      setCoins(data)
    })
  }, [])
  return { coins }
}

function useCoin(id?: string) {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [coins, setCoins] = useState<coinItem | null>(null)

  const getCoin = async () => {
    try {
      setLoading(true)
      const { data } = await Api.getCoin(id as string)
      setCoins(data)
    } catch (error: any) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (id) {
      getCoin()
    }
  }, [id])

  return { coins, loading, error }
}

export { useCoinRes, useCoin }