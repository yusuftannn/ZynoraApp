import React from 'react'

const ProductDescription = () => {
  return (
    <div className='mt-20'>
      <div className='flex gap-3 mb-4'>
        <button className='btn_dark_rounded !rounded-none !text-xs !py-[6px] w-36'>Description</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Care Guide</button>
        <button className='btn_dark_outline !rounded-none !text-xs !py-[6px] w-36'>Size Guide</button>
      </div>
      <div className='flex flex-col pb-16'>
        <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, quibusdam sequi 
            dolorem deserunt sapiente eaque possimus reiciendis consequatur eveniet ad 
            rerum tenetur praesentium veniam natus corporis id assumenda? Quam quas nemo quo 
            nesciunt illum quasi hic blanditiis rerum excepturi dolores eius cupiditate, 
            quod voluptate quaerat quisquam expedita tempora quae velit ipsum numquam quos 
            ullam eveniet.</p>
            <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Et distinctio, magnam ab ipsa ad suscipit quaerat hic, ipsum nobis quo veniam 
                dicta quibusdam perferendis sint incidunt iste totam.</p>
      </div>
    </div>
  )
}

export default ProductDescription
