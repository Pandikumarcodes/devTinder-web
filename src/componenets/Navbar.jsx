import { useSelector } from "react-redux";

const Navbar = () => {
  const user = useSelector((store) => store.user);

  return (
    <div className="navbar bg-base-100 shadow-md px-6">
      {/* Left */}
      <div className="flex-1">
        <a className="text-2xl font-bold cursor-pointer">DevTinder</a>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        {user && (
          <div className="dropdown dropdown-end">
            {/* Trigger */}
            <div
              tabIndex={0}
              role="button"
              className="flex items-center gap-3 cursor-pointer"
            >
              <p className="hidden sm:block font-medium">
                Welcome, <span className="font-semibold">{user.firstName}</span>
              </p>

              <div className="avatar">
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={user.photoUrl || "/default-avatar.png"}
                    alt="User Avatar"
                  />
                </div>
              </div>
            </div>

            {/* Dropdown */}
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-4 w-52 rounded-box bg-base-100 p-2 shadow-lg"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge badge-primary badge-sm">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <a className="text-error">Logout</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
