
import DestinationDetailsCard from '@/components/Destination/DestinationDetailsCard';
import DestinationDetailsSkeleton from '@/components/Destination/DestinationDetailsSkeleton';
import React, { Suspense } from 'react';

const DestinationDetailsPage = ({params}: {params: Promise<{id:string}>}) => {
    return (
        <div className='mt-20'>
            <Suspense fallback={<DestinationDetailsSkeleton/>}>
                <DestinationDetailsCard params={params}/>
            </Suspense>
        </div>
    );
};

export default DestinationDetailsPage;