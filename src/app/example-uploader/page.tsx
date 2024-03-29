'use client';

import { UploadButton } from '../../utils/uploadthing';
import { useState } from 'react';
import { OurFileRouter } from '../api/uploadthing/core';
import Link from 'next/link';

export default function ButtonUpload() {
	const [images, setImages] = useState<
		{
			fileUrl: string;
			fileKey: string;
		}[]
	>([]);

	const title = images.length ? (
		<>
			<p>Upload Complete!</p>
			<p className='mt-2'>{images.length} files</p>
		</>
	) : null;

	const imgList = (
		<>
			{title}
			<ul>
				{images.map(image => (
					<li key={image.fileUrl} className='mt-2'>
						{/* <Link href={image.fileUrl} target='_blank'> */}
							{image.fileUrl}
						{/* </Link> */}
					</li>
				))}
			</ul>
		</>
	);

	return (
		<main className='flex flex-col justify-between p-20'>
			<UploadButton
				endpoint='imageUploader'
				onClientUploadComplete={res => {
					if (res) {
						setImages(res);
						const json = JSON.stringify(res);
						console.log(json);
					}

					// Do something with the response
					// console.log('Files: ', res);
					// alert('Upload Completed');
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
			
			{imgList}
		</main>
	);
}
