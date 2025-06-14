import { supabase } from "./supabase"

export const getCities = async (country, state) => {
  let { data: cities, error } = await supabase
    .from('Lookup City')
    .select('*')
    .eq('state', state)
    .order('record_count', { ascending: false })

  return cities?.map((city) => ({
    title: city.canonical_name,
    url: `/${country}/${state}/${city.id}`,
    count: city.record_count
  }))
}