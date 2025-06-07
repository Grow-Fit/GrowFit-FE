import Success from "./_components/Success"

interface Props {
  params: {
    result: string // "success"
  }
  searchParams: {
    type: string // "parent" | "child"
  }
}

const Page = ({ params, searchParams }: Props) => {
  if (params.result === "success") {
    return <Success userType={searchParams.type} />
  }
}

export default Page
