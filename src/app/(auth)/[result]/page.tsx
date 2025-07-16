import Error from "./_components/Error"
import Success from "./_components/Success"

interface Props {
  params: Promise<{
    result: string // "success"
  }>
  searchParams: Promise<{
    type: string // "parent" | "child"
  }>
}

const Page = async ({ params, searchParams }: Props) => {
  const { result } = await params
  const { type } = await searchParams

  if (result === "success") {
    return <Success userType={type} />
  } else {
    return <Error userType={type} />
  }
}

export default Page
