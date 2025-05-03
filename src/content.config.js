import { defineCollection, z } from 'astro:content';
import { supabase } from './lib/supabase';

const countries = defineCollection({
  loader: async () => {

    let { data: countries, error } = await supabase
      .from('Lookup Country')
      .select('*')
      .gt('record_count', 0)
      .order('record_count', { ascending: false })

    return countries.map((country) => ({ id: country.id, ...country }))
  }
});

const states = defineCollection({
  loader: async () => {

    let { data: states, error } = await supabase
      .from('Lookup State')
      .select('*')
      .gt('record_count', 0)
      .order('record_count', { ascending: false })

    return states.map((state) => ({ id: state.id, ...state }))
  }
});

const cities = defineCollection({
  loader: async () => {

    let { data: states, error } = await supabase
      .from('Lookup City')
      .select('*')
      .gt('record_count', 0)
      .order('record_count', { ascending: false })

    return states.map((state) => ({ id: state.id, ...state }))
  }
});

const statesByCountry = defineCollection({
  loader: async () => {

    let { data: entries, error } = await supabase
      .from('states_by_country')
      .select('*')
      .order('country', { ascending: false })

    return entries.map((entry) => ({ id: entry.country, ...entry }))
  }
});

const citiesByState = defineCollection({
  loader: async () => {

    let { data: entries, error } = await supabase
      .from('cities_by_state')
      .select('*')
      .order('state', { ascending: false })

    return entries.map((entry) => ({ id: entry.state, ...entry }))
  }
});

// const recordsByCountry = defineCollection({
//   loader: async () => {

//     let { data: countries, error } = await supabase
//       .from('records_by_country')
//       .select('*')
//       .order('canonical_country', { ascending: false })

//     return countries.map((country) => ({ id: country.canonical_country, ...country }))
//   }
// });

// const recordsByState = defineCollection({
//   loader: async () => {

//     let { data: states, error } = await supabase
//       .from('records_by_state')
//       .select('*')
//       .order('canonical_state', { ascending: false })

//     return states.map((state) => ({ id: state.canonical_state, ...state }))
//   }
// });

// const recordsByCity = defineCollection({
//   loader: async () => {

//     let { data: cities, error } = await supabase
//       .from('records_by_city')
//       .select('*')
//       .order('canonical_city', { ascending: false })

//     return cities.map((city) => ({ id: city.canonical_city, ...city }))
//   }
// });

export const collections = { 
  countries, 
  states,
  cities,
  statesByCountry, 
  citiesByState,
  // recordsByCountry,
  // recordsByState,
  // recordsByCity 
};