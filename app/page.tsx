import { getSession, getAccessToken } from '@auth0/nextjs-auth0';

export default async function Home() {
  const session = await getSession();

  if (session) {
    return (
      <>
        Easy budget authenticated
      </>
    )
  }

  return (
    <>Unauthenticated</>
  )
}
