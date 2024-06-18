import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-teal-300 text">
      <div className="text-5xl p-4 font-bold">
        CPRG 306: Web Development 2-Assignments
        <ul>
          <li className="hover:text-blue-700 mt-20 text-2xl hover:underline ml-10 font-normal">
            <Link href="/week-2">Week-2 Assignment</Link>
          </li>
          <li className="text-2xl ml-10 hover:text-blue-700 hover:underline font-normal">
            <Link href="/week-3">Week-3 Assignment</Link>
          </li>
          <li className="text-2xl ml-10 hover:text-blue-700 hover:underline font-normal">
            <Link href="/week-4">Week-4 Assignment</Link>
          </li>
          <li className="text-2xl ml-10 hover:text-blue-700 hover:underline font-normal">
            <Link href="/week-5">Week-5 Assignment</Link>
          </li>
          <li className="text-2xl ml-10 hover:text-blue-700 hover:underline font-normal">
            <Link href="/week-6">Week-6 Assignment</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
