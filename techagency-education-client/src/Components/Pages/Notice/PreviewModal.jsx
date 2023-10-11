import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #172554',
    boxShadow: 24,
    p: 4,
    borderRadius: '10px'
};

const PreviewModal = ({open, handleClose, selected}) => {
    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2" style={{fontWeight: '600'}}>
                    {selected?.notice}
                </Typography>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    {selected?.content}
                </Typography>
            </Box>
        </Modal>
    );
};

export default PreviewModal;