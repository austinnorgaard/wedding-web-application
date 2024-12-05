'use client';

import { useActionState, useState } from 'react';
import { authenticate } from '@/app/lib/actions';
import {
  ExclamationCircleIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function LoginForm() {
  const [errorMessage, formAction, isPending] = useActionState(
    authenticate,
    undefined,
  );

  return (
    <form action={formAction} id="loginForm">
      <label>
        <p>Email Address</p>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Enter your email address"
          required
        />
      </label>
      <label>
        <p>Password</p>
        <input
          id="password"
          type="password"
          name="password"
          placeholder="Enter password"
          required
        />
      </label>
      <div id="buttonArea">
        <button type="submit" aria-disabled={isPending}>Log In</button>
        <Link href="/register" id="registerInstead">Register</Link>
      </div>
      <div className="flex h-8 items-end space-x-1">
        {errorMessage && (
          <>
            <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
            <p className="text-sm text-red-500">{errorMessage}</p>
          </>
        )}
      </div>
    </form>
  );
}
