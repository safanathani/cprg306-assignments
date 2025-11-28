"use client";

import Link from "next/link";
import { useUserAuth } from "./_utils/auth-context";

export default function Week10LandingPage() {
  const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

  const handleLogin = async () => {
    try {
      await gitHubSignIn();
    } catch (error) {
      console.error("GitHub login error:", error);
      alert("GitHub login failed. Please try again.");
    }
  };

  const handleLogout = async () => {
    try {
      await firebaseSignOut();
    } catch (error) {
      console.error("Logout error:", error);
      alert("Logout failed. Please try again.");
    }
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black px-4">
      <div className="bg-white rounded-lg shadow-lg px-8 py-10 max-w-md w-full text-center">
        {!user && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-slate-900">
              Week 10 – Login
            </h1>
            <p className="text-slate-700 mb-6">
              Sign in with GitHub to view your shopping list.
            </p>
            <button
              onClick={handleLogin}
              className="w-full px-4 py-2 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition"
            >
              Sign in with GitHub
            </button>
          </>
        )}

        {user && (
          <>
            <h1 className="text-3xl font-bold mb-4 text-slate-900">
              Welcome!
            </h1>
            <p className="text-slate-700 mb-6">
              You are signed in as{" "}
              <span className="font-semibold">
                {user.displayName ?? user.email ?? "GitHub user"}
              </span>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/week-10/shopping-list"
                className="flex-1 px-4 py-2 bg-green-600 text-white font-semibold rounded hover:bg-green-700 transition text-center"
              >
                Go to Shopping List
              </Link>

              <button
                onClick={handleLogout}
                className="flex-1 px-4 py-2 bg-red-600 text-white font-semibold rounded hover:bg-red-700 transition"
              >
                Log out
              </button>
            </div>
          </>
        )}
      </div>
    </main>
  );
}
