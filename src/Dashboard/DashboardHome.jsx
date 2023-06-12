import useUserRoll from "../Hook/useUserRoll";

const DashboardHome = () => {
  const { userRoll } = useUserRoll();
  console.log(userRoll);
  return (
    <div>
      <div className="h-64 overflow-hidden ">
        <img src="/banner1.jpg" alt="" className="w-full blur-sm" />
      </div>
      <div className="relative">
        <div className="-mt-28 ml-8 relative z-10">
          <img
            src={userRoll?.photo}
            alt={userRoll.name}
            className="h-60 w-60 rounded-full  border-8 border-base-300 "
          />
        </div>
        <div className="ml-8 mt-4 space-y-2">
          <h1 className="text-4xl font-semibold">Name : {userRoll?.name}</h1>
          <p className="text-2xl font-semibold">Email : {userRoll?.email}</p>
        </div>
      </div>
    </div>
  );
};

export default DashboardHome;
