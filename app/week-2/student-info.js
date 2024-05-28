import Link from 'next/link';
import React from 'react';

export default function StudentInfo() {
  return (
    <div className="flex bg-red-50 p-4 border border-black-500 rounded-lg max-w-md mx-auto">
            <p>Name: Aryan Ashishkumar Amin</p>
        <div className=''>
            <span>GitHub Repository: </span>
        <Link href = "https://github.com/aryan-finix-amin/cprg306-assignments">https://github.com</Link>
        </div>
    </div>
  )
}
