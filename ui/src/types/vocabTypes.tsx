import type { PostgrestError } from "@supabase/supabase-js";

export interface WordData {
  category: string;
  english?: string;
  spanish?: string;
  term?: string;
  definition?: string;
  knowledgelevel: number;
  id?: string;
  showSpanish?: boolean;
  tags?: string[];
}

export type BoolAndError = [boolean, PostgrestError | null];

export type Topic = 'Spanish' | 'Science';

export type CurrentPage = 'Categories' | 'Terms' | 'Update';

export type TableName = 'spanish_vocab' | 'science';