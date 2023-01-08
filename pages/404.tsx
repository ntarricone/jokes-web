import Head from 'next/head'
import Link from 'next/link'
import { Content } from '../components/atoms/content/content'
import { Text } from '../components/atoms/text/text'

export default function NotFound() {
  return (
    <>
      <Head>
        <title>404 - Not Found</title>
      </Head>
      <Content
        minHeight="100vh"
        direction="column"
        align="center"
        justify="center"
        gap="2rem"
      >
        <Text as="h1" size="5rem">
          404
        </Text>
        <Text as="h2" size="2rem">
          Jokes could not be loaded
        </Text>
        <Text>(Please make sure backend is running)</Text>
        <Link href="/">← Back to homepage </Link>
      </Content>
    </>
  )
}
