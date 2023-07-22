import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Dashboard = () => {
  // const isAdmin = true;
  const { user } = useContext(AuthContext);
  return (
    <section>
     <div className="container">
     <div className="drawer lg:drawer-open bg-[#afe1f1]">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {/* Page content here */}
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
          Open drawer
        </label>
        <Outlet></Outlet>
      </div>
      <div className="drawer-side ">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 h-full text-base-content bg-orange-500">
          {/* Sidebar content here */}

          {
            // isAdmin
            user ? (
              <>
                <li>
                  <Link className="text-2xl">Admin Home</Link>
                </li>
                <li>
                  <Link to="/dashboard/all-users" className="text-2xl">
                    All Users
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/add-services" className="text-2xl">
                    Add Services
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manege-services" className="text-2xl">
                    Manege services
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/add-doctor" className="text-2xl">
                    Add Doctor
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/manege-doctor" className="text-2xl">
                    Manege Doctor
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl" to="/dashboard/my-class"></Link>
                </li>
              </>
            ) : (
              <>
                <li>
                  <Link className="text-2xl" to="/dashboard/my-class">
                    My- appointment
                  </Link>
                </li>
                <li>
                  <Link to="/dashboard/payment" className="text-2xl">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link className="text-2xl">History</Link>
                </li>
              </>
            )
          }
          <div className="divider"></div>
          <li>
            <Link className="text-2xl" to="/">
              {" "}
              Home
            </Link>{" "}
          </li>
          <li>
            <Link className="text-2xl" to="/services">
              {" "}
              Services
            </Link>
          </li>
          <li>
            <Link className="text-2xl" to="/doctor">
              Doctor
            </Link>
          </li>
        </ul>
      </div>
    </div>
     </div>
    </section>
  );
};

export default Dashboard;
