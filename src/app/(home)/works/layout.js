import { metadata } from './metadata';

// Set revalidation time (in seconds)
export const revalidate = 60 * 60; // 1 hour

export default function WorksLayout({ children }) {
  return <>{children}</>;
} 