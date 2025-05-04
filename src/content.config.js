import { defineCollection, z } from 'astro:content';
import { supabase } from './lib/supabase';

const countries = defineCollection({
  loader: async () => {

    let { data: countries, error } = await supabase
      .from('Lookup Country')
      .select('*')
      .gt('record_count', 0)
      .order('record_count', { ascending: false })

    if (error) console.log(error)
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

    if (error) console.log(error)
    return states.map((state) => ({ id: state.id, ...state }))
  }
});

const cities = defineCollection({
  loader: async () => {

    let { data: cities, error } = await supabase
      .from('Lookup City')
      .select('*')
      // .gt('record_count', 0)
      .order('record_count', { ascending: false })

    if (error) console.log(error)
    return cities.map((city) => ({ id: city.id, ...city }))
  }
});

const shapes = defineCollection({
  loader: async () => {

    let { data: shapes, error } = await supabase
      .from('Lookup Shape')
      .select('*')
      .order('record_count', { ascending: false })

    if (error) console.log(error)
    return shapes.map((shape) => ({ id: shape.id, ...shape }))
  }
});


export const collections = { 
  countries, 
  states,
  cities,
  shapes
};