import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode, Dispatch, SetStateAction } from "react";
import type { BoardType as DataContextType } from "@/types";

type DataContextValue = {
  data: DataContextType[] | undefined;
  setData: Dispatch<SetStateAction<DataContextType[] | undefined>>;
  selectedBoardIndex: number;
  setSelectedBoardIndex: Dispatch<SetStateAction<number>>;
};

const DataContext = createContext<DataContextValue | undefined>(undefined);

export const DataProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [data, setData] = useState<DataContextType[] | undefined>(undefined);
  const [selectedBoardIndex, setSelectedBoardIndex] = useState(0);

  useEffect(() => {
    const storedData = localStorage.getItem("kanbanData");
    const storedBoardIndex = localStorage.getItem("selectedBoardIndex");

    if (storedData && storedData !== "undefined") {
      setData(JSON.parse(storedData));
    }

    if (storedBoardIndex && storedBoardIndex !== "undefined") {
      setSelectedBoardIndex(JSON.parse(storedBoardIndex));
    } else {
      setSelectedBoardIndex(0);
    }
  }, []);

  useEffect(() => {
    if (data !== undefined) {
      localStorage.setItem("kanbanData", JSON.stringify(data));
      localStorage.setItem(
        "selectedBoardIndex",
        JSON.stringify(selectedBoardIndex),
      );
    }
  }, [data, selectedBoardIndex]);

  return (
    <DataContext.Provider
      value={{ data, setData, selectedBoardIndex, setSelectedBoardIndex }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const useDataContext = () => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error("useDataContext must be used within a DataProvider");
  }
  return context;
};
