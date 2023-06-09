import { createClient } from '@supabase/supabase-js'
import { config } from '../utils/config'

const supabaseUrl = config.SUPABASE_URL
const supabaseKey = config.SUPABASE_KEY
export const supabase = createClient(supabaseUrl, supabaseKey)
