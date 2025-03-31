import { createClient } from "@supabase/supabase-js"

const supabaseURL ="https://iltrrlubnqpzllzbogen.supabase.co"
const supabaseKey="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlsdHJybHVibnFwemxsemJvZ2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzY0OTIwMzYsImV4cCI6MjA1MjA2ODAzNn0.7Ck5ARZpS53gRIMx_aJmA-cNoFIIHDejUbJl3ymnmrM"
const supabase =  createClient(supabaseURL,supabaseKey)    

export default supabase;