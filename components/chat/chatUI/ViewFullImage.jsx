import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
};

// onClick Show User Image
export default function ImageModel({ open, setOpen, images }) {
  const handleClose = () => setOpen(false);


  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="!md:w-[60%] w-[90%] !md:h-screen h-[400px]">
          <div className="w-full h-full relative flex ">
            <div className="absolute right-0 top-0 md:block hidden">
              <Button onClick={handleClose} className="text-[rgb(42,99,165)] ">
                <span className="material-symbols-outlined text-[35px]">
                  close
                </span>
              </Button>
            </div>
            <img src={images} alt="" className="w-full h-full  object-cover" />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
