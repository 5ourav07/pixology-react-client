import { useEffect } from 'react';

const useTitle = (title) => {
    useEffect(() => {
        document.title = `Pixology | ${title}`;
    }, [title]);
};

export default useTitle;