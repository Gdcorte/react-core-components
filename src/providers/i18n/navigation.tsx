import { createNavigation } from 'next-intl/navigation';
import type {} from 'next/dist/client/components/redirect-error';
import type {} from 'next/dist/shared/lib/app-router-context.shared-runtime';
import { routing } from './routing';

// Lightweight wrappers around Next.js' navigation
// APIs that consider the routing configuration
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
