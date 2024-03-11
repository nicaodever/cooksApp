import "react-native-url-polyfill/auto"
import { createClient } from "@supabase/supabase-js"

const supabaseUrl = process.env.EXPO_PUBLIC_SUPABASE_URL ?? ""
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNmeXVmcmpma2Zzemp4cWhham10Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDk3ODA0NTYsImV4cCI6MjAyNTM1NjQ1Nn0.F8qfg_jtxF-5tIIsgSoO0QsqmTa6Dkul4-KvvCxhRVk" ?? ""

export const supabase = createClient(supabaseUrl, supabaseKey)
