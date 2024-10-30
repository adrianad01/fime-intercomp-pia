import { Navbar } from "../components/Navbar";
// import { PrincipalMenu } from "../components/PrincipalMenu";
import { UserCard } from "../components/UseCard";

export const Home = () => {

    return (
        <>
          <Navbar />
          <div className="bodyy">

            <div className="cards-container">
              <UserCard />
              {/* <PrincipalMenu /> */}
            </div>
          </div>
        </>
      );

};