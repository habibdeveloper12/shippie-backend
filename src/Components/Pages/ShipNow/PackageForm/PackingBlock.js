import React from 'react'
import { useFormContext } from 'react-hook-form';
import NeedFragilePacking from './PackingComponent/NeedFragilePacking';
import NeedPacking from './PackingComponent/NeedPacking';
import NoPacking from './PackingComponent/NoPacking';

const PackingBlock = ({ packageId }) => {
    const { watch } = useFormContext();
    const packing = watch(`packages[${packageId}.packing]`);
    return (
        <div className="md:mb-4">
            {packing === "No Need Packing" && <NoPacking />}
            {packing === "Need Packing" && <NeedPacking />}
            {packing === "Need Fragile Packing" && <NeedFragilePacking />}
        </div>
    )
}

export default PackingBlock