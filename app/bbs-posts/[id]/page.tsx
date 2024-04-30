import React from 'react'
import { BBSData } from '@/app/types/types';
import Link from 'next/link';

async function getDetailBBSData(id: number) {
    const response = await fetch(`http://localhost:3000/api/post/${id}`, {
      cache: "no-store",
    });
    
    const bbsDetailDage: BBSData = await response.json();
  
    return bbsDetailDage;
  }

const BBSDeatailPage = async ({params}: {params: {id: number}}) => {
    const bbsDetailData = await getDetailBBSData(params.id);
    const {id, title, content, username} = bbsDetailData;
  return (
    <div className='mx-auto max-w-4xl p-4'>
        <div className='mb-8'>
            <h1 className='text-2xl font-bold'>{title}</h1>
            <p className='text-gray-700'>{username}</p>
        </div>
        <div className='mb-8'>
            <p className='text-gray-900'>{content}</p>
        </div>

        <Link href={"/"} className="text-blue-400">戻る</Link>
    </div>
  )
}

export default BBSDeatailPage