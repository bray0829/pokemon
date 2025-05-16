import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xbdtarmjarhxjcovkllg.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhiZHRhcm1qYXJoeGpjb3ZrbGxnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDc0MTg2MzgsImV4cCI6MjA2Mjk5NDYzOH0.tB0UcSJ_LsDxyHscYYiUoTqpIs_VziE1aZXcEAIQofw';
export const supabase = createClient(supabaseUrl, supabaseKey);