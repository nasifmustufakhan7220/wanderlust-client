import DestinationsApi from '@/components/Destination/DestinationsApi';
import { Suspense } from 'react';

const DestinationsPage = () => {
    return (
        <div className='mt-20'>
            <Suspense fallback={<p>Loading...</p>}>
                <DestinationsApi/>
            </Suspense>
        </div>
    );
};

export default DestinationsPage;