/* eslint-disable react/no-unescaped-entities */
"use client";

import {
  EnvelopeIcon,
  PhoneIcon,
  UserCircleIcon,
  UserPlusIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { FC, useState } from "react";

import FAQAccordions from "@/components/molecules/FaqAccordions/FaqAccordions";
import { Button } from "@/components/shadcn-ui/button";

const LegacySection: FC = () => {
  const [showSignIn, setShowSignIn] = useState<boolean>(false);
  const [showCreate, setShowCreate] = useState<boolean>(false);

  return (
    <div className="mt-6 bg-[#ebf2f1] pb-10 w-full">
      <div className="flex flex-col md:flex-row items-center justify-center w-full px-6 md:px-20 gap-4 py-6 bg-[#ded6bb]">
        <div className="bg-white h-64 w-full max-w-125 rounded-3xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <UserCircleIcon className="w-14 h-14 text-[#bda56e] mb-2" />
            <h2 className="text-xl font-semibold">
              Sign in to continue writing where you left off
            </h2>
          </div>
          <Button
            className="bg-[#a08449] max-w-fit text-white px-4 py-2 rounded"
            variant="gold"
            onClick={() => setShowSignIn(true)}
          >
            Sign In
          </Button>
        </div>
        {/* create acct */}
        <div className="bg-white h-64 w-full max-w-125 rounded-3xl p-6 shadow-md flex flex-col justify-between">
          <div>
            <UserPlusIcon className="w-14 h-14 text-[#bda56e] mb-2" />
            <h2 className="text-xl font-semibold">
              Create an account to stay connected to your loved one's story
            </h2>
          </div>
          <Button
            className="bg-[#a08449] max-w-fit text-white px-4 py-2 rounded"
            variant="gold"
            onClick={() => setShowCreate(true)}
          >
            Create Account
          </Button>
        </div>
      </div>

      {/* help center */}
      <div className="mx-auto max-w-265 p-6">
        <h3 className="text-2xl font-bold mb-2">Legacy Help Center</h3>
        <p className="text-gray-700 mb-4">
          Need additional help? The Legacy Support Team is available Monday through Friday, 7am—7pm
          CT
        </p>

        <div className="flex flex-wrap py-8 gap-6 mb-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#cbddcc] flex items-center justify-center">
              <PhoneIcon className="w-5 h-5 text-[#165C58]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">CALL US</p>
              <p className="font-bold">888-780-2304</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-[#cbddcc] flex items-center justify-center">
              <EnvelopeIcon className="w-5 h-5 text-[#165C58]" />
            </div>
            <div>
              <p className="text-sm font-semibold text-gray-800 uppercase tracking-wide">
                EMAIL US
              </p>
              <p className="font-bold">obitquestions@legacy.com</p>
            </div>
          </div>
        </div>

        <FAQAccordions />
      </div>

      {/* side panels */}
      {showSignIn && (
        <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
          <div className="bg-white w-100 h-full relative p-6 shadow-lg animate-slide-in">
            <Button
              className="absolute top-0 text-sm right-0 mb-4"
              icon={<XMarkIcon className="w-5 h-5" />}
              variant="clear"
              onClick={() => setShowSignIn(false)}
            />
            <UserCircleIcon className="w-14 h-14 text-[#bda56e] mb-2" />
            <h2 className="text-xl font-bold mb-2">Sign In</h2>
            <p className="text-sm mb-4">
              Welcome back. Sign in to continue working on the memories of your loved ones. We're
              here for you any time.
            </p>
            <input className="w-full mb-3 p-2 border rounded" placeholder="Email" />
            <Button className="w-full text-white py-2 mt-10">Sign In</Button>
            <div className="inline-block mt-4">
              <span>Don't have an Account?</span>
              <Button
                className="inline w-fit !p-0 mt-1 ml-1"
                variant="clear"
                onClick={() => {
                  setShowSignIn(false);
                  setShowCreate(true);
                }}
              >
                Create Account
              </Button>
            </div>
          </div>
        </div>
      )}

      {showCreate && (
        <div className="fixed inset-0 bg-black/30 z-50 flex justify-end">
          <div className="bg-white w-100 h-full relative p-6 shadow-lg animate-slide-in">
            <Button
              className="absolute top-0 right-0 text-sm mb-4"
              icon={<XMarkIcon className="w-5 h-5" />}
              variant="clear"
              onClick={() => setShowCreate(false)}
            />
            <UserCircleIcon className="w-14 h-14 text-[#bda56e] mb-2" />
            <h2 className="text-xl font-bold mb-2">Create Account</h2>
            <p className="text-sm mb-4">Save your progress, edit later, and share with others.</p>
            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Your email address"
              type="email"
            />
            <input
              className="w-full mb-3 p-2 border rounded"
              placeholder="Confirm your email address"
              type="email"
            />
            <Button className="text-white py-2 mt-10">Create Account</Button>
            <div className="inline-block mt-4">
              <span>Already have an account?</span>
              <Button
                className="inline w-fit !p-0 mt-1 ml-1"
                variant="clear"
                onClick={() => {
                  setShowCreate(false);
                  setShowSignIn(true);
                }}
              >
                Sign In
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              By clicking "Create Account", you agree to our Terms of Use and Privacy Statement.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default LegacySection;
