import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseurl = process.env.EXPO_PUBLIC_SUPABASE_URL
const supabasekey = process.env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY

export const supabase = createClient(
    supabaseurl,
    supabasekey,
    {
        auth:{
        storage: AsyncStorage,
        autoRefreshToken: true,
        persistSession: true,
        detectSessionInUrl: false,
        },
    }
)
