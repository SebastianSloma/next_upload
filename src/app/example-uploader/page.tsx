'use client';

import { UploadButton } from '../../utils/uploadthing';

export default function ButtonUpload() {
	return (
		<main className='flex flex-col justify-between p-20'>
			<UploadButton
				endpoint='imageUploader'
				onClientUploadComplete={res => {
					// Do something with the response
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
