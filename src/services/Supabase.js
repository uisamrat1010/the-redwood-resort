import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://wjwoezweapqmybyhbtuq.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indqd29lendlYXBxbXlieWhidHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQ1ODg4NzQsImV4cCI6MjA0MDE2NDg3NH0.4rZhgiPXPyRAeSfTPddJmZogSPM6MX5s-I-mpXxFsgg";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
