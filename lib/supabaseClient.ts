import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.CEB_SUPABASE_URL!;
const supabaseKey = process.env.CEB_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);