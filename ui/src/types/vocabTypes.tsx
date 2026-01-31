import type { PostgrestError } from "@supabase/supabase-js";

export interface WordData {
  category: string;
  term: string;
  definition: string;
  knowledgelevel: number;
  id?: string;
  showTerm?: boolean;
  tags?: string[] | string;
}

export type BoolAndError = [boolean, PostgrestError | null];

export type Topic = 'Spanish' | 'Science';

export type CurrentPage = 'Categories' | 'Terms' | 'Update';

export type TableName = 'spanish_vocab' | 'science';