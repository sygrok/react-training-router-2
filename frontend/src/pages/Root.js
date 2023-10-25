import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

function RootLayout() {
  const navigation = useNavigation(); //This is a router function that allows us to do action in order current state of 'state'. the values that it can get is 'loading', 'idle, 'submitting'

  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
        {/* {navigation.state === "loading" && <p>Loading...</p>} */}
      </main>
    </>
  );
}

export default RootLayout;
