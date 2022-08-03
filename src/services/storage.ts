export default class StorageFavorite {
  static getFavorite(): string[] {
    const data = localStorage.getItem('favorite');
    return data ? JSON.parse(data) : []
  }
  static toogleFavorite(id: string): string[] {
    const data = localStorage.getItem('favorite');
    if (data && data.includes(id)) {
      const dataFilter = JSON.parse(data).filter((el: string) => el !== id);
      localStorage.setItem('favorite', JSON.stringify(dataFilter))
      return dataFilter
    } else if (data) {
      const dataFilter = [...JSON.parse(data), id]
      localStorage.setItem('favorite', JSON.stringify(dataFilter))
      return dataFilter
    } else {
      localStorage.setItem('favorite', JSON.stringify([id]))
      return [id]
    }
  }
}