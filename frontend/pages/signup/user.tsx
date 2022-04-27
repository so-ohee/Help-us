import { FC, useState } from "react";
import Postcode from '@actbase/react-daum-postcode';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';


const User: FC = () => {


  const [open, setOpen] = useState<boolean>(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <>

      <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <Postcode
          style={{ width: 500, height: 500 }}
          jsOptions={{ animation: true, hideMapBtn: true }}
          onSelected={data => {
            alert(JSON.stringify(data));
            setOpen(false);
          }}
        />
      </Dialog>
    </div>
    
    </>
  );
};

export default User;
