"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggeedIn = true;
  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/assets/images/logo.svg"
          alt="Prompt Generator"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Generator</p>
      </Link>

      {/* Desktop View */}
      <div className="sm:flex hidden">
        {isUserLoggeedIn ? (
          // left side view of navigation bar
          <div>
            <div className="flex gap-3 md:gap-5">
              {/* create post */}
              <Link href="/create-prompt" className="black_btn">
                Create Post
              </Link>

              {/* sign out button */}
              <button className="outline_btn" type="button" onClick={signOut}>
                Sign Out
              </button>

              {/* profile image */}
              <Link href="/profile">
                <Image
                  src="/assets/images/logo.svg"
                  alt="Profile"
                  width={37}
                  height={37}
                  className="rounded-full"
                />
              </Link>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
