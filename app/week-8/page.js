// "use client";
// import React from "react";
// import { useUserAuth } from "./_utils/auth-context.js";
// import Link from "next/link";

// const Page = () => {
//   const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

//   const handleSignIn = async () => {
//     try {
//       await gitHubSignIn();
//     } catch (error) {
//       console.error("Error signing in with GitHub:", error);
//     }
//   };

//   const handleSignOut = async () => {
//     try {
//       await firebaseSignOut();
//     } catch (error) {
//       console.error("Error signing out:", error);
//     }
//   };

//   return (
//     <div
//       style={{
//         minHeight: "100vh",
//         backgroundColor: "",
//         color: "white",
//         textAlign: "center",
//         padding: "60px",
//       }}
//     >
//       <h1 style={{ fontSize: "3rem", fontWeight: "bold" }}>
//         SHOPPING LIST APP
//       </h1>
//       {user ? (
//         <>
//           <p>
//             Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})
//           </p>
//           <button
//             style={{
//               backgroundColor: "white",
//               color: "black",
//               border: "none",
//               padding: "10px 20px",
//               borderRadius: "5px",
//               cursor: "pointer",
//               marginTop: 10,
//             }}
//             onClick={handleSignOut}
//           >
//             Sign Out
//           </button>
//           <Link
//             href="/week-8/shopping-list"
//             className="text-lg hover:underline"
//             style={{
//               backgroundColor: "transparent",
//               border: "none",
//               cursor: "pointer",
//               marginLeft: 10,
//             }}
//           >
//             Continue to your Shopping List
//           </Link>
//         </>
//       ) : (
//         <button
//           style={{
//             backgroundColor: "white",
//             color: "black",
//             border: "none",
//             padding: "10px 20px",
//             borderRadius: "5px",
//             cursor: "pointer",
//           }}
//           onClick={handleSignIn}
//         >
//           Sign In with GitHub
//         </button>
//       )}
//     </div>
//   );
// };

// export default Page;

"use client";
import React from "react";
import { useUserAuth } from "./_utils/auth-context.js";
import Link from "next/link";

const Page = () => {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleSignIn = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("Error signing in with GitHub:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-teal-300 text-center">
      <h1 className="text-4xl font-bold mb-4">SHOPPING LIST APP</h1>
      {user ? (
        <>
          <p className="text-lg mb-4">
            Welcome, {user.displayName || "Guest"} ({user.email || "Unknown"})
          </p>
          <button
            className="bg-white text-black border-none py-2 px-4 rounded cursor-pointer mt-4"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
          <Link
            href="/week-8/shopping-list"
            className="text-lg text-black hover:underline ml-4"
          >
            Continue to your Shopping List
          </Link>
        </>
      ) : (
        <button
          className="bg-white text-black border-none py-2 px-4 rounded cursor-pointer"
          onClick={handleSignIn}
        >
          Sign In with GitHub
        </button>
      )}
    </div>
  );
};

export default Page;
