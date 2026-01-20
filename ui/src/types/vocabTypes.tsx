import type { PostgrestError } from "@supabase/supabase-js";

export interface WordData {
  category: string;
  english: string;
  spanish: string;
  knowledgelevel: number;
  id?: string;
  showSpanish?: boolean;
}

export type BoolAndError = [boolean, PostgrestError | null];

export type Topic = 'Spanish' | 'Science';

export type CurrentPage = 'Categories' | 'Terms' | 'Update';