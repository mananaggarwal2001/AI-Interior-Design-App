import React from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import ReactBeforeSliderComponent from 'react-before-after-slider-component';
import 'react-before-after-slider-component/dist/build.css';
import { Button } from '@/components/ui/button';

const AiOutputDialog = ({ openDialog, closeDialog, originalImage, AiImage }) => {
    const FIRST_IMAGE = {
        imageUrl: originalImage
    };
    const SECOND_IMAGE = {
        imageUrl: AiImage
    };
    return (
        <AlertDialog open={openDialog}>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Finished</AlertDialogTitle>
                    <ReactBeforeSliderComponent
                        firstImage={FIRST_IMAGE}
                        secondImage={SECOND_IMAGE}
                    />
                    <Button onClick={closeDialog}>Close

                    </Button>
                </AlertDialogHeader>

            </AlertDialogContent>
        </AlertDialog>

    )
}

export default AiOutputDialog
