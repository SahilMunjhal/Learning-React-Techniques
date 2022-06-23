// import * as React from 'react';
// import Backdrop from '@mui/material/Backdrop';
// import Box from '@mui/material/Box';
// import Modal from '@mui/material/Modal';
// import Fade from '@mui/material/Fade';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import { useSelector , useDispatch } from 'react-redux';
// import css from "./PopUp.module.scss";
// const style = {
//   position: 'absolute',
//   top: '50%',
//   left: '55%',
//   transform: 'translate(-50%, -50%)',
//   width: 400,
//   height:400,
//   bgcolor: 'background.paper',
//   border: '2px solid #000',
//   boxShadow: 33,
//   p: 4,
// };

// export  function PopUpComponent({open , id , HandleClose}) {
//   const [singleBook, setSingleBook] = React.useState({})
  
//   const dispatch =  useDispatch();
//   const {Books} = useSelector((store)=>store.booksArray);
   
//   React.useEffect(()=>{
//         BookFilter(id)
//   },[id])
//   console.log(id)
//      const BookFilter = (id)=>{
//         let book = Books.filter((el)=>el.id==id)
//         console.log(book)
//         const bookobj= Object.assign({}, book);
//         setSingleBook(bookobj[0])
        
//      }
//      const DeleteSingleBook = (id)=>{
//          dispatch(DeleteBookData(id))
//          HandleClose()
//      }
//     console.log(singleBook.name)
 
//   return (
      
//     <div>
      
//       <Modal
//         aria-labelledby="transition-modal-title"
//         aria-describedby="transition-modal-description"
//         open={open}
//         // onClose={handleClose}
//         closeAfterTransition
//         BackdropComponent={Backdrop}
//         BackdropProps={{
//           timeout: 500,
//         }}
//       >
//         <Fade in={open}>
     
//           <Box sx={style}>
                   
                 
//                 <div id={css.popbox}>
//                 <img  src={singleBook.coverPage}  height="250px" width="450px" alt="" />
                
//                 <button onClick={HandleClose}>X</button>
                
//                 </div>
           
//                 <Typography id="transition-modal-title" variant="h6" component="h2">
//                 BookName: {singleBook.name}
//               </Typography>
//               <Typography id="transition-modal-title" variant="h6" component="h2">
//                 AuthorName: {singleBook.authorName}
//               </Typography>
//               <Typography id="transition-modal-title" variant="h6" component="h2">
//                 Price : {singleBook.price}
//               </Typography>
             
//                   <div className={css.updatediv}>
//                       <button>Edit</button>
//                       <button onClick={()=>DeleteSingleBook(singleBook.id)}>Delete</button>
//                   </div>
//           </Box>
    
//         </Fade>
            
//       </Modal>
//     </div>
//   );
// }

import * as React from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
      padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
      padding: theme.spacing(1),
    },
  }));

  
  const BootstrapDialogTitle = (props) => {
    const { children, onClose, ...other } = props;
  
    return (
      <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
        {children}
        {onClose ? (
          <IconButton
            aria-label="close"
            onClick={onClose}
            sx={{
              position: 'absolute',
              right: 8,
              top: 8,
              color: (theme) => theme.palette.grey[500],
            }}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </DialogTitle>
    );
  };
  
  export default function PopUpComponent({value,open,close}) {
    // const [open, setOpen] = React.useState(false);

    // const handleClickOpen = () => {
    //   setOpen(true);
    // };
    
    // const handleClose = () => {
    //   setOpen(false);
    // };
  
    return (
      <div>
        {/* <Button variant="outlined" onClick={handleClickOpen}>
          Open dialog
        </Button> */}
        <BootstrapDialog
          onClose={close}
          aria-labelledby="customized-dialog-title"
          open={value}
        >
          <BootstrapDialogTitle id="customized-dialog-title" onClose={close}>
            Modal title
          </BootstrapDialogTitle>
          <DialogContent dividers>
            <Typography gutterBottom>
              Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
              dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
              consectetur ac, vestibulum at eros.
            </Typography>
            <Typography gutterBottom>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
              Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.
            </Typography>
            <Typography gutterBottom>
              Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus
              magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec
              ullamcorper nulla non metus auctor fringilla.
            </Typography>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={close}>
              Save changes
            </Button>
          </DialogActions>
        </BootstrapDialog>
      </div>
    );
  }