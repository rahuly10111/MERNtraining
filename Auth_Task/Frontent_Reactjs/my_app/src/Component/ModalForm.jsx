import React, { useState } from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
import ModalClose from '@mui/joy/ModalClose';

export default function ModalForm() {
    const [open, setOpen] = useState(false);
    return (
        <>

            <div className="container p-4">

                <React.Fragment>
                    <Button variant="solid" color="neutral" onClick={() => setOpen(true)}>
                        Add Data
                    </Button>

                    {/* Modal Body  */}
                    <Modal open={open} onClose={() => setOpen(false)}>
                        <ModalDialog
                            aria-labelledby="nested-modal-title"
                            aria-describedby="nested-modal-description"
                            sx={(theme) => ({
                                [theme.breakpoints.only('xs')]: {
                                    top: 'unset',
                                    bottom: 0,
                                    left: 0,
                                    right: 0,
                                    borderRadius: 0,
                                    transform: 'none',
                                    maxWidth: 'unset',
                                },
                            })}
                        >
                            <ModalClose />
                            <Typography id="nested-modal-title" component="h2">
                                Form deatils !
                            </Typography>

                            {/* Detail Form  */}
                            <form className="row g-2 p-2" id="partform">
                                <div className="mb-3">
                                    <label className="form-label fontcolor">
                                        <b> Name</b>
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        placeholder="name"
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label fontcolor">
                                        <b>Age</b>
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        name="age"
                                        placeholder=" age "
                                    ></input>
                                </div>
                            </form>

                            {/* Footer Button  */}
                            <Box
                                sx={{
                                    mt: 1,
                                    display: 'flex',
                                    gap: 1,
                                    flexDirection: { xs: 'column', sm: 'row-reverse' },
                                }}
                            >
                                <Button
                                    variant="outlined"
                                    color="neutral"
                                    onClick={() => setOpen(false)}
                                >
                                    Cancel
                                </Button>
                                <Button variant="solid" color="neutral" onClick={() => setOpen(false)}>
                                    Save
                                </Button>
                            </Box>
                        </ModalDialog>
                    </Modal>
                </React.Fragment>

            </div>



        </>
    )
}
