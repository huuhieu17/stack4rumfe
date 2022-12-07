import { FormControl, FormHelperText, FormLabel, Input } from '@vechaiui/react';
import React from 'react'

const SignIn = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center">
      <div className="text-5xl mt-10">😊</div>
      <div className="text-3xl font-bold my-4">Sign in to get started</div>
      <div className="lg:w-7/12 mx-auto w-11/12 text-center">
        Stack4rum is a place where communities can share, discuss, and grow
        together. Sign in below to get in on the conversation.
      </div>
      <div>
        <div className="flex flex-col p-8 space-y-10">
          <div className="space-y-2">
            <div className="w-3/4 h-4 rounded bg-primary-400 animate-pulse"></div>
            <div className="w-full h-4 rounded bg-primary-400 animate-pulse"></div>
            <div className="w-5/6 h-4 rounded bg-primary-400 animate-pulse"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn