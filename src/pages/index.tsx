import { prisma } from "@/lib/prisma";
import { GetServerSideProps } from "next";

type Props = {
  docCount: number;
};

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const documentCount = await prisma.document.count();

  return {
    props: {
      docCount: documentCount,
    },
  };
};

export default function Home({ docCount }: Props) {
  return (
    <div className="flex justify-center items-center h-full">
      There are {docCount} documents in your database
    </div>
  );
}
