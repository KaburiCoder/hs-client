import { useEffect, useState } from "react";

interface UseSearchTextArgs<T> {
  data: T[] | undefined;
  filter: ({ value, searchText }: { value: T; searchText: string }) => unknown;
}

export function useSearchText<T>({ data, filter }: UseSearchTextArgs<T>) {
  const [searchText, setSearchText] = useState<string>("");
  const [searchedData, setSearchedData] = useState<T[] | undefined>(data);

  useEffect(() => {
    if (!data) return setSearchedData(undefined);

    const searchedData = data.filter((value) => filter({ value, searchText }));
    setSearchedData(searchedData);
  }, [data, searchText]);

  return {
    searchedData,
    setSearchText,
  };
}
