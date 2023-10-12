import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

import PreviewModal from './previewModal';
import Button from '@mui/material/Button';



const Notice = () => {
    const notices = useLoaderData();
    const [open, setOpen] = React.useState(false);
    const [selected, setSelected] = useState(null);

    
    const handleOpen = (id) => {
        const filter = notices.find(notice=>notice._id==id)
        setSelected(filter);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    return (
        <div>
            <div className='bg-cyan-300 bg-opacity-30 md:h-96 h-52 flex flex-col justify-center items-center'>
                <h1 className='text-2xl md:text-6xl uppercase font-semibold'>notices</h1>
            </div>
            <div className='max-w-screen-xl md:mx-auto mx-5 my-10'>
                <table className='w-full border-2'>
                    <thead className='border-2'>
                        <tr>
                            <th className='border-2'>Date</th>
                            <th className='border-2'>Notice</th>
                            <th className='border-2'>Preview</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            notices.map(notice => (
                                <tr key={notice._id} className='border-2'>
                                    <td className='border-2 text-center p-1'>{notice.notice_data}</td>
                                    <td className='border-2 px-1'>{notice.notice}</td>
                                    <td className='border-2 text-center'>
                                        <Button onClick={()=>handleOpen(notice._id)}>Preview</Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>

                <PreviewModal 
                    open={open}
                    handleClose={handleClose}
                    selected={selected}
                />
            </div>
        </div>
    );
};

export default Notice;