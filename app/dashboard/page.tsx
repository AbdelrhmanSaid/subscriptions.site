import { headers } from 'next/headers';
import { redirect } from 'next/navigation';
import { auth } from '@/auth';

export default async function DashboardPage() {
  const session = await auth.api.getSession({ headers: await headers() });

  // If the user is not logged in, redirect to the sign-in page
  if (!session) redirect('/sign-in');

  // If the user is logged in, show the dashboard
  return <h1>Welcome {session.user.name}</h1>;
}
