import DestinationDetailsCard from '@/components/DestinationDetailsCard';
import React, { Suspense } from 'react';

const DestinationDetailsPage = ({params}: {params: Promise<{id:string}>}) => {
    return (
        <div className='mt-20'>
            <Suspense fallback={<p>Loading....</p>}>
                <DestinationDetailsCard params={params}/>
            </Suspense>
        </div>
    );
};

export default DestinationDetailsPage;