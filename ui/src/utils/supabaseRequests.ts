import type { WordData } from '../types/vocabTypes';

export async function fetchData(supabase, databaseName: string) {
  const { data, error } = await supabase
    .from(databaseName)
    .select("*");
  if(data) {
    return data;
  } else if (error) {
    console.warn(error);
  }
  // const { data } = await supabase.from(databaseName).select();
}


export async function updateData(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  supabase: any,
  databaseName: string,
  id: string | number,
  columnName: string,
  newValue: string | number
) {

  const { data, error } = await supabase
    .from(databaseName)
    .update({ [columnName]: newValue })
    .eq("id", id)
    .select()
    .single();
  
  if(data) console.log('updated data: ', data);

  if (error) throw error;

};

export async function addData(
  supabase: any,
  databaseName: string, 
  newWordData: WordData,
) {
  const { data, error } = await supabase
    .from(databaseName)
    .insert(newWordData)
    .select()
    .single();

  if (error) throw error;
  return data as WordData;
}
