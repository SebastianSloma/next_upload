'use client';

import { UploadDropzone } from '@/utils/uploadthing';

export default function UploadDnd() {
	return (
		<main className='flex flex-col justify-between p-2'>
			<UploadDropzone
				endpoint='imageUploader'
				onClientUploadComplete={(res: any) => {
					// Do something with the responsee
					console.log('Files: ', res);
					alert('Upload Completed');
				}}
				onUploadError={(error: Error) => {
					// Do something with the error.
					alert(`ERROR! ${error.message}`);
				}}
			/>
		</main>
	);
}
