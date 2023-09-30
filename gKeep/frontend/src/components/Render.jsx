import React, { useEffect, useState } from "react";
import { SketchPicker } from "react-color";

import {
    Card,
    Popover,
    Typography,
    Button,
    CardContent,
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions,
    TextField,
  } from "@mui/material";
import axios from "axios";
import { BASE_URL } from "../config";



export default function Render({note,setNotes}){
    const [isEditing, setIsEditing] = useState(false)
    const [editedText,setEditedText] = useState(note.note)
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    const [color,setColor] = useState(note.bgColor);
    const [isColorDialogOpen,setIsColorDialogOpen] = useState(false);

    const openColorPopover = () => {
        return <Popover
        open={isColorDialogOpen}
        anchorEl={null}
        onClose={closeColorDialog}
        anchorOrigin={{
            vertical: "bottom",
            horizontal: "center",
        }}
        transformOrigin={{
            vertical: "top",
            horizontal: "center",
        }}
        >
        <DialogContent>
            <SketchPicker
            color={color}
            onChange={handleColorChange}
            />
            <Button onClick={closeColorDialog}>Apply</Button>
        </DialogContent>
    </Popover>
    }

    const openColorDialog = (event) => {
        setIsColorDialogOpen(true);
    };
      
      const closeColorDialog = () => {
        setIsColorDialogOpen(false);
    };
    
    const handleColorChange = (newColor) => {
        setColor(newColor.hex);
    }  

    const handleEditClick = () => {
        setIsEditing(true);
        setIsEditDialogOpen(true);
    };
    
    const handleSaveClick = async() => {
        setIsEditing(false);
        setIsEditDialogOpen(false);

        if(note.note != editedText){
            const response = axios.put(`${BASE_URL}/user/note/${note._id}`, {
                note: editedText,
                bgColor : color
            },{                      
                headers : {
                    'authorization' : `Bearer ${localStorage.getItem('token')}`
                }})
            if(response){
                note.note = editedText;
            }
        }
    };

    const handleCancelClick = () => {
        // Cancel editing and revert the text
        setEditedText(note.note);
        setIsEditing(false);
        setIsEditDialogOpen(false);
    };

    const handleDelete = async() => {
        const response = await axios.delete(`${BASE_URL}/user/delete/${note._id}`, {
                        
            headers : {
                'authorization' : `Bearer ${localStorage.getItem('token')}`
            }
        })
        setNotes((notes) =>
        notes.filter((item) => item._id !== note._id)
      );
      setIsEditing(false);
      setIsEditDialogOpen(false);
  
    }

    return <div >
        
             <Card style={{
            margin: 10,
            marginTop : 50,
            maxWidth: 300,
            minHeight: 20,
            padding: 10,
            backgroundColor : `${note.bgColor}90`,
            cursor: "pointer"
            
        }}
        onClick = {handleEditClick}
        >
            <CardContent>
                <Typography
                variant="body1"
                style={{maxWidth : '100%'}}
                >
                    {note.note}
                </Typography>                      
                
            </CardContent>     
        </Card>    
        <Dialog open={isEditDialogOpen} onClose={() => setIsEditDialogOpen(false)} style={{
            backgroundColor : "#00000050",
            }}>
        <DialogTitle style={{ width : 500, 
            backgroundColor : `${note.bgColor}90`
            }}>Edit Note</DialogTitle>
        <DialogContent style={{backgroundColor : `${note.bgColor}90`}}>
          <TextField
            multiline
            fullWidth
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
        </DialogContent>
        <DialogActions style={{backgroundColor : `${note.bgColor}90`}}>
        <div style={{display: "flex" , justifyContent : "right" }}>
                <Button style={{ textTransform : "none"}}
                        onClick={handleDelete}                    
                        >Delete
                        </Button>                        
                 </div>
                 <div style={{display: "flex" ,justifyContent : "right"  }}>
                        <Button style={{ textTransform : "none"}} 
                                onClick={openColorDialog}                                              
                        >Color
                        </Button>
                    </div>
                    {openColorPopover()}
        <div style={{display: "flex" , justifyContent : "right" }}>
                <Button style={{ textTransform : "none"}}
                        onClick={handleCancelClick}                    
                        >Cancel
                        </Button>                        
                 </div>
        <div style={{display: "flex" , justifyContent : "right" }}>
                <Button style={{ textTransform : "none"}}
                        onClick={handleSaveClick}                   
                        >Save
                        </Button>                        
                 </div>
        </DialogActions>
      </Dialog>   
    </div>
   
}