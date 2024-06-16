import { useEffect } from 'react';

function useUpdateTitle({ title }: { title: string }) {
	useEffect(() => {
		document.title = title;
	}, [title]);
	return null;
}

export default useUpdateTitle;
