import Header from "./components/Header";
import SideMenu from "./components/ٍSideMenu";
import WorkSpace from "./components/WorkSpace";
import { useEffect } from "react";
import { DataProvider } from "./DataContext";

function App() {
  useEffect(() => {}, []);
  return (
    <>
      <DataProvider>
        <div className="font-jakarta flex h-screen flex-col">
          <Header />
          <div className="flex flex-1">
            <SideMenu />
            <WorkSpace />
          </div>
        </div>
      </DataProvider>
    </>
  );
}

export default App;
